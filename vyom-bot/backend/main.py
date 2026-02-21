from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict, Optional
import os

from rag import retrieve_context, ollama_chat
from config import settings

app = FastAPI(title="Vyom Bot Backend", version="1.0")

def load_persona() -> str:
    with open("persona.txt", "r", encoding="utf-8") as f:
        return f.read().strip()

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[Dict[str, str]]] = None

class ChatResponse(BaseModel):
    response: str
    used_sources: List[Dict]

@app.get("/health")
def health():
    return {"ok": True, "model": settings.ollama_model}

@app.post("/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    persona = load_persona()
    context, items = retrieve_context(req.message, top_k=settings.top_k)
    answer = await ollama_chat(
        system_prompt=persona,
        user_message=req.message,
        context=context,
        history=req.history or [],
    )
    return ChatResponse(response=answer, used_sources=items)

@app.post("/ingest")
def ingest():
    """
    Simple re-ingest trigger. This calls the ingest script via import.
    For small projects, easiest is to run `python ingest.py` manually,
    but this endpoint is handy during development.
    """
    import ingest as ingest_module
    ingest_module.main()
    return {"ok": True, "message": "Re-ingested knowledge base"}