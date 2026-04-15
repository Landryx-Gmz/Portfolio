# Portfolio
Porfolio personal de Andy Gomez, "Full-Stack AI Developer".

## Plan de Desarrollo: Portafolio AI Developer

1. **Configuración del Proyecto Next.js + Tailwind + Python**
   - Next.js con App Router, Tailwind CSS, TypeScript y ESLint.
   - Backend de Python (FastAPI) usando la convención de `api/` de Vercel.

2. **Diseño Base y UI/UX Futurista**
   - Sistema Claro/Oscuro y base para Multi-idioma (ES/EN).
   - Fondo de "Redes Neuronales" animado.

3. **Secciones del Portafolio**
   - **Hero:** Presentación, mentalidad ('AI Orchestrator') y rol.
   - **Skills:** Resumen del stack tecnológico con menús interactivos de selección y destellos mágicos.
   - **Proyectos:** Grid de proyectos con carrusel expansible y recortes parallax.
   - **Newsletter / Comunidad:** Motor de captación asíncrono enganchado a un sistema automatizado de Leads.
   - **Footer:** Redes sociales y branding.

4. **Integración del Backend e IA**
   - Endpoint `api/chat` para procesar mensajes del usuario simulando inteligencia artificial usando Python.
   - Refactorización del Stack Tecnológico, demostrando dominio en Clean Architecture, Monorepos (TurboRepo) y sistemas Automatizados enfocados a UX e infraestructura Cloud Edge.

5. **Chatbot Inteligente en el Frontend**
   - Interfaz flotante de chat que interactúa con la API de Python.

## Desarrollo Local

Para correr este proyecto en local correctamente con el backend de Python:

1. Instalar dependencias del frontend: `npm install`
2. Instalar el CLI de Vercel (si no lo tienes): `npm i -g vercel`
3. Iniciar el servidor local (ejecuta tanto Next.js como la API de Python):
   ```bash
   vercel dev
   ```

Alternativamente, si usas `npm run dev`, el frontend funcionará, pero el endpoint de la API (`/api/chat`) no estará disponible.

## Despliegue

Este proyecto está diseñado para ser desplegado en **Vercel** usando el archivo `vercel.json` configurado en la raíz, que permite usar funciones serverless de Python en la carpeta `api/`.
