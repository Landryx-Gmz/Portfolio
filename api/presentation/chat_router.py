"""
Capa de Presentación (Presentation o Delivery).
Controladores/Routers de FastAPI. No contienen lógica de negocio, solo conectan peticiones HTTP a los casos de uso.
"""

from fastapi import APIRouter, Depends
from api.domain.chat_model import ChatRequest, ChatResponse
from api.use_cases.chat_interactor import ChatInteractor
from api.infrastructure.langchain_service import LangChainService

router = APIRouter(prefix="/api")

# --- Inyección de Dependencias --- #
def get_langchain_service() -> LangChainService:
    """Devuelve la instancia concreta del servicio LLM."""
    return LangChainService()

def get_chat_interactor(ai_service: LangChainService = Depends(get_langchain_service)) -> ChatInteractor:
    """Inyecta el servicio al caso de uso y lo devuelve."""
    return ChatInteractor(ai_service=ai_service)
# --------------------------------- #

@router.get("/health")
def health_check():
    """
    Endpoint para comprobar que el backend está vivo y funcionando correctamente.
    """
    return {"status": "ok", "message": "API de AndyAI funcionando correctamente con Clean Architecture."}

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest, interactor: ChatInteractor = Depends(get_chat_interactor)):
    """
    Recibe la solicitud POST de chat desde el frontend y llama al caso de uso.
    """
    return interactor.process_chat(request)
