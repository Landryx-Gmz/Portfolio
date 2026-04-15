"""
Composition Root (Punto de entrada de FastAPI)
Actúa como punto central de orquestación donde se inicializa la aplicación y se configuran middlewares.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.presentation.chat_router import router

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

# Habilitar CORS para el frontend en desarrollo
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción deberías restringir esto a tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Integrar el Router (Presentación) con los endpoints
app.include_router(router)