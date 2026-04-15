"""
Capa de Infraestructura (Infrastructure).
Contiene la implementación concreta para conectarse a servicios externos.
Por ejemplo, aquí se conectará LangChain / OpenAI en el futuro.
"""

class LangChainService:
    """
    Servicio que implementa la conexión real con el LLM.
    Actualmente contiene un mock de respuestas predefinidas.
    """

    def generate_reply(self, message: str) -> str:
        """
        Procesa el mensaje del usuario y retorna una respuesta.
        En una implementación real, esto llamaría a la API de OpenAI vía LangChain.
        """
        user_message = message.lower()

        response_text = "¡Hola! Soy AndyAI. Aún me están entrenando con la experiencia de Andy, pero pronto podré responder todas tus preguntas sobre su código, arquitectura y proyectos."

        if "jadixtech" in user_message:
            response_text = "JadixTech es un SaaS en el que Andy es el colaborador principal. Es una plataforma escalable para desarrollo de software y ecommerce, construida con Python, FastAPI, PostgreSQL y Clean Architecture."
        elif "python" in user_message or "clean architecture" in user_message:
            response_text = "Andy tiene una base sólida en Python y aplica siempre Clean Architecture. Se enfoca en crear sistemas modulares, escalables y seguros por diseño."

        return response_text
