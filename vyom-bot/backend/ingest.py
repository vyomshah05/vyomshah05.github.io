import os
import glob
from typing import List, Dict, Tuple
import hashlib

import chromadb
from chromadb.config import Settings as ChromaSettings
from sentence_transformers import SentenceTransformer

from config import settings

def read_text_file(path: str) -> str:
    """
    Reads text file and returns string content
    """
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        return f.read()
    
def chunk_text(text: str, chunk_size: int = 1200, overlap: int = 200) -> List[str]:
    """
    Simple char-based chunking.
    """
    text = text.strip()
    if not text:
        return []
    chunks = []
    i = 0
    while i < len(text):
        chunk = text[i : i + chunk_size]
        chunks.append(chunk)
        i += max(1, chunk_size - overlap)
    return chunks

def make_id(file_path: str, chunk_index: int, chunk: str) -> str:
    """
    Create a unique ID for a given text using its hash
    """   
    h = hashlib.sha256((file_path + str(chunk_index) + chunk).encode("utf-8")).hexdigest()
    return h

def get_chroma_collection():
    """
    Create chroma database
    """
    client = chromadb.PersistentClient(
        path = settings.chroma_dir,
        settings = ChromaSettings(anonymized_telemetry=False),
    )

    return client.get_or_create_collection(name=settings.collection_name)

def main():
    print("Loading embedding model:", settings.embedding_model)
    embedder = SentenceTransformer(settings.embedding_model)

    collection = get_chroma_collection()

    files = []
    for ext in ("*.md", "*.txt"):
        files.extend(glob.glob(os.path.join("knowledge", ext)))

    if not files:
        raise SystemExit("No .md/.txt files found in knowledge/")

    # Optional: clear and rebuild every time (simple + reliable for small KB)
    print("Clearing existing collection...")
    # chroma doesn't have a single "clear"; easiest is delete + recreate
    client = chromadb.PersistentClient(path=settings.chroma_dir, settings=ChromaSettings(anonymized_telemetry=False))
    try:
        client.delete_collection(settings.collection_name)
    except Exception:
        pass
    collection = client.get_or_create_collection(name=settings.collection_name)

    all_docs: List[str] = []
    all_ids: List[str] = []
    all_metas: List[Dict] = []

    for fp in sorted(files):
        text = read_text_file(fp)
        chunks = chunk_text(text)
        for idx, ch in enumerate(chunks):
            _id = make_id(fp, idx, ch)
            all_ids.append(_id)
            all_docs.append(ch)
            all_metas.append({"source": fp, "chunk": idx})

    print(f"Embedding {len(all_docs)} chunks...")
    embeddings = embedder.encode(all_docs, show_progress_bar=True, convert_to_list=True)

    print("Upserting into Chroma...")
    collection.add(
        ids=all_ids,
        documents=all_docs,
        embeddings=embeddings,
        metadatas=all_metas,
    )

    print("Done.")
    print(f"Indexed files: {len(files)}")
    print(f"Total chunks: {len(all_docs)}")
    print(f"Chroma dir: {settings.chroma_dir}")

if __name__ == "__main__":
    main()