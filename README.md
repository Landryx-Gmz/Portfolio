# Portfolio
Portfolio personal de Andy Gomez, "Full-Stack AI Developer".

## Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind 4.
- **UI & Animaciones:** Framer Motion, Lucide Icons, `shadcn` base styles.
- **IA:** Chatbot con streaming vía API de Groq (`llama-3.3-70b-versatile`).
- **Formularios / Leads:** Formspark + automatizaciones n8n.
- **Deploy:** Vercel.

## Secciones

- **Hero:** Presentación, rol ("AI Orchestrator") y foto desplegable sobre bloque de código.
- **Skills:** Stack tecnológico con tabs dinámicas y efecto destello.
- **Proyectos:** Grid con parallax y menú expandible "Más proyectos".
- **Certificaciones:** Drawer lateral con certificado destacado + resto.
- **Newsletter:** Captación asíncrona conectada a Formspark.
- **Chatbot:** Asistente flotante con streaming SSE en tiempo real.
- **Footer:** Branding, enlaces y redes.

## Desarrollo Local

1. Instalar dependencias: `npm install`
2. Crear `.env.local` en la raíz con tu clave de Groq:
   ```
   GROQ_API_KEY=gsk_...
   ```
3. Levantar el servidor: `npm run dev`

El endpoint del chatbot vive en [`src/app/api/chat/route.ts`](src/app/api/chat/route.ts).

## Despliegue

Deploy en **Vercel**. No requiere configuración extra: las route handlers de Next.js se despliegan automáticamente como funciones serverless. Recuerda configurar `GROQ_API_KEY` en las variables de entorno del proyecto en Vercel.
