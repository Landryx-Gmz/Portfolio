"""
Módulo de dominio para la API de Chat.
Contiene las entidades y modelos de datos puros (Pydantic models) que representan la lógica central.
"""

from pydantic import BaseModel

class ChatRequest(BaseModel):
    """
    Representa una petición entrante de chat desde el usuario.
    """
    message: str

class ChatResponse(BaseModel):
    """
    Representa la respuesta saliente generada por el sistema.
    """
    reply: str
