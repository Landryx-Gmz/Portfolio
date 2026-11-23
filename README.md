# Portfolio

Portfolio personal de Andy Gomez, "Full-Stack AI Developer".

**Live:** https://andygomezdev.vercel.app

## Stack

- **Web:** Astro 7 + islas de React 19 + TypeScript estricto.
- **Estilos:** Tailwind CSS 4 + `tw-animate-css`. Fuentes con Fontsource.
- **Animaciones:** Framer Motion (dentro de las islas).
- **Iconos:** Lucide React + logos de marca en SVG propio.
- **API:** Hono + Zod en `/api/*` (función serverless de Vercel).
- **IA:** Chatbot con streaming vía API de Groq (`llama-3.3-70b-versatile`).
- **Pruebas:** Vitest. **Deploy:** Vercel (`@astrojs/vercel`).

## Secciones

- **Hero:** Presentación, rol ("AI Integrator") y foto desplegable sobre bloque de código animado.
- **Skills:** Stack tecnológico con tabs dinámicas y efecto destello.
- **Proyectos:** Grid con parallax y menú expandible "Más proyectos".
- **Certificaciones:** Drawer lateral con certificado destacado + resto.
- **Chatbot:** Asistente flotante con streaming SSE en tiempo real, activable desde el botón "Hablar con mi IA" del Hero.
- **Footer:** Branding, enlaces y redes.

> La sección **Newsletter** existe en `src/components/sections/newsletter-section.tsx` pero está oculta en `src/pages/index.astro` hasta consolidar la integración Formspark + n8n.

## Desarrollo local

1. Instalar dependencias: `pnpm install` (Node 24, ver `.node-version`).
2. Crear `.env` en la raíz con `GROQ_API_KEY=...` (sin ella, el chat responde 503).
3. Levantar el servidor: `pnpm dev`.
4. Antes de un PR: `pnpm check-all`.

## Despliegue

Vercel detecta Astro automáticamente. Hay que configurar `GROQ_API_KEY` en las variables de entorno del proyecto en Vercel. Las páginas se sirven como HTML estático y solo `/api/*` se ejecuta como función.

## Estructura

```
src/
  pages/
    index.astro           # Home: ensambla las secciones
    api/[...path].ts      # Monta la API Hono (único código de servidor)
  layouts/base-layout.astro  # SEO, tema, fondo neural, cabecera y chatbot
  components/
    chat/chatbot.tsx      # Asistente flotante
    icons/brand-icons.tsx # Logos de GitHub y LinkedIn
    layout/               # header, footer, mode-toggle, neural-background
    sections/             # hero-section, skills-section, projects-section, certifications-drawer, newsletter-section
  lib/
    api/app.ts            # Rutas Hono: /api/health y /api/chat
    chat/                 # Esquema Zod, prompt y streaming de Groq
  styles/global.css       # Tailwind + variables de tema
tests/                    # Vitest
```

Pendientes en [`docs/TODO.md`](docs/TODO.md). Convenciones en [`AGENTS.md`](AGENTS.md).
