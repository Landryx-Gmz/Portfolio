# Portfolio

Portfolio personal de Andy Gomez, "Full-Stack AI Developer".

**Live:** https://andygomezdev.vercel.app

## Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript.
- **Estilos:** Tailwind CSS 4 + `tw-animate-css`.
- **Animaciones:** Framer Motion.
- **Iconos:** Lucide React.
- **IA:** Chatbot con streaming SSE vía API de Groq (`llama-3.3-70b-versatile`).
- **Deploy:** Vercel (route handlers como funciones serverless).

## Secciones

- **Hero:** Presentación, rol ("AI Orchestrator") y foto desplegable sobre bloque de código animado.
- **Skills:** Stack tecnológico con tabs dinámicas y efecto destello.
- **Proyectos:** Grid con parallax y menú expandible "Más proyectos".
- **Certificaciones:** Drawer lateral con certificado destacado + resto.
- **Chatbot:** Asistente flotante con streaming SSE en tiempo real, activable desde el botón "Hablar con mi IA" del Hero.
- **Footer:** Branding, enlaces y redes.

> La sección **Newsletter** existe en `src/components/sections/newsletter.tsx` pero está oculta en `src/app/page.tsx` hasta consolidar la integración Formspark + n8n.

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

## Estructura

```
src/
  app/
    api/chat/route.ts     # Endpoint del chatbot (streaming Groq)
    layout.tsx            # Root layout + ThemeProvider + fondo neural + chatbot
    page.tsx              # Home: ensambla las secciones
    globals.css           # Tailwind + variables de tema
    icon.png              # Favicon
  components/
    chat/chatbot.tsx      # Asistente flotante
    layout/               # header, footer, mode-toggle, neural-background
    sections/             # hero, skills, projects, certifications-drawer, newsletter
    theme-provider.tsx    # Wrapper de next-themes
```

Convenciones: `kebab-case` para archivos, `PascalCase` para componentes, `snake_case` para variables/funciones lógicas. Ver [`AGENTS.md`](AGENTS.md) para detalles.
