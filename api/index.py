from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

# Habilitar CORS para el frontend en desarrollo
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción deberías restringir esto a tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "API de AndyAI funcionando correctamente."}

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    # Aquí implementaremos LangChain después.
    # Por ahora, es un mock para el desarrollo del frontend.
    user_message = request.message.lower()

    response_text = "¡Hola! Soy AndyAI. Aún me están entrenando con la experiencia de Andy, pero pronto podré responder todas tus preguntas sobre su código, arquitectura y proyectos."

    if "jadixtech" in user_message:
        response_text = "JadixTech es un SaaS en el que Andy es el colaborador principal. Es una plataforma escalable para desarrollo de software y ecommerce, construida con Python, FastAPI, PostgreSQL y Clean Architecture."
    elif "python" in user_message or "clean architecture" in user_message:
        response_text = "Andy tiene una base sólida en Python y aplica siempre Clean Architecture. Se enfoca en crear sistemas modulares, escalables y seguros por diseño."

    return {"reply": response_text}