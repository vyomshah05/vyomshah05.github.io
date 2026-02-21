from typing import List, Dict, Any, Tuple
import httpx
import chromadb
from chromadb.config import Settings as ChromaSettings
from sentence_transformers import SentenceTransformer

from config import settings

_embedder = None

def get_embedder() -> SentenceTransformer:
    """
    Sets the embedder to Sentence Transformer
    """
    global _embedder
    if _embedder is None:
        _embedder = SentenceTransformer(settings.embedding_model)
    return _embedder

def get_collection():
    client = chromadb.PersistentClient(
        path=settings.chroma_dir,
        settings=ChromaSettings(anonymized_telemetry=False),
    )
    return client.get_or_create_collection(name=settings.collection_name)

def retrieve_context(query: str, top_k: int | None = None) -> Tuple[str, List[Dict[str, Any]]]:
    if top_k is None:
        top_k = settings.top_k

    embedder = get_embedder()
    q_emb = embedder.encode([query], convert_to_list=True)[0]

    collection = get_collection()
    res = collection.query(
        query_embeddings=[q_emb],
        n_results=top_k,
        include=["documents", "metadatas", "distances"],
    )

    docs = res.get("documents", [[]])[0]
    metas = res.get("metadatas", [[]])[0]
    dists = res.get("distances", [[]])[0]

    items = []
    context_parts = []
    for doc, meta, dist in zip(docs, metas, dists):
        items.append({"meta": meta, "distance": dist})
        context_parts.append(f"[Source: {meta.get('source')} | Chunk: {meta.get('chunk')}]\n{doc}")

    context = "\n\n---\n\n".join(context_parts)
    if len(context) > settings.max_context_chars:
        context = context[: settings.max_context_chars] + "\n\n[Context truncated]\n"

    return context, items

async def ollama_chat(system_prompt: str, user_message: str, context: str, history: List[Dict[str, str]] | None = None) -> str:
    """
    Uses Ollama /api/chat.
    history: list of {"role":"user"/"assistant", "content": "..."}
    """
    if history is None:
        history = []

    messages = []
    messages.append({"role": "system", "content": system_prompt})
    if context.strip():
        messages.append({"role": "system", "content": f"CONTEXT (about Vyom; use as source of truth):\n{context}"})

    # include short history
    messages.extend(history[-10:])
    messages.append({"role": "user", "content": user_message})

    payload = {
        "model": settings.ollama_model,
        "messages": messages,
        "stream": False,
        "options": {
            "temperature": 0.4,
        },
    }

    async with httpx.AsyncClient(timeout=120.0) as client:
        r = await client.post(f"{settings.ollama_base_url}/api/chat", json=payload)
        r.raise_for_status()
        data = r.json()

    return data["message"]["content"]