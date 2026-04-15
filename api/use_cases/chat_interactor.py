"""
Capa de Casos de Uso (Application o Use Cases).
Orquesta la lógica de negocio, usando los repositorios o servicios externos para cumplir una funcionalidad de la aplicación.
"""

from api.domain.chat_model import ChatRequest, ChatResponse
from api.infrastructure.langchain_service import LangChainService

class ChatInteractor:
    """
    Clase encargada de orquestar el flujo de recibir un mensaje y generar una respuesta.
    Depende de abstracciones o servicios inyectados.
    """

    def __init__(self, ai_service: LangChainService):
        """Inyección de dependencias para el servicio de IA"""
        self.ai_service = ai_service

    def process_chat(self, request: ChatRequest) -> ChatResponse:
        """
        Toma una solicitud (ChatRequest), se la pasa al servicio y devuelve una entidad de respuesta.
        """
        # Se obtiene la respuesta del servicio subyacente
        reply_text = self.ai_service.generate_reply(request.message)

        # Se retorna el modelo de dominio puro
        return ChatResponse(reply=reply_text)
