from pydantic import BaseModel

class Settings(BaseModel):
    """
    Configuration settings for the application.
    """
    # Ollama
    ollama_base_url: str = "http://localhost:11434"
    ollama_model: str = "llama3.1:8b"

    # Embeddings
    embedding_model: str = "sentence-transformers/all-MiniLM-L6-v2"

    # Chroma persistence
    chroma_dir: str = "./chroma_db"
    collection_name: str = "vyom_knowledge"

    # Retrieval
    top_k: int = 6
    max_context_chars: int = 12000

settings = Settings()