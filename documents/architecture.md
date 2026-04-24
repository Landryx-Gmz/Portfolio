# Arquitectura del Proyecto: Portfolio AI Developer

Este documento describe la arquitectura, la estructura de archivos y las convenciones del portfolio de Landryx-Gmz. Sirve como guía de referencia para futuros desarrollos, especialmente útil cuando interactúan agentes de IA.

## 🏗️ Pila Tecnológica (Tech Stack)

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript.
- **Estilos y UI:** Tailwind CSS 4, Framer Motion (animaciones y parallax), estilos base de `shadcn`.
- **Backend:** Route Handlers de Next.js (`src/app/api/**/route.ts`) que se despliegan como funciones serverless en Vercel.
- **IA:** API de Groq (`llama-3.3-70b-versatile`) con streaming SSE para el chatbot.
- **Integraciones externas:** Formspark (captación de leads), n8n (orquestación de automatizaciones).
- **Despliegue y Herramientas:** Vercel, ESLint para calidad de código.

---

## 📂 Estructura del Proyecto

Toda la aplicación vive bajo `/src`, siguiendo las convenciones modernas del App Router.

### Frontend y Backend unificados (`/src`)

- `src/app/`
  - `layout.tsx` — Envoltura principal: inyecta `ThemeProvider`, `Header`, fondo neural y chatbot global.
  - `page.tsx` — Home: ensambla Hero, Skills, Projects, Newsletter y Footer.
  - `globals.css` — Estilos globales y variables Tailwind.
  - `icon.png` — Favicon del sitio.
  - `api/chat/route.ts` — Endpoint serverless del chatbot (streaming SSE vía Groq).

- `src/components/`
  - `/sections/` — Bloques grandes de la home (`hero.tsx`, `projects.tsx`, `skills.tsx`, `newsletter.tsx`, `certifications-drawer.tsx`).
  - `/layout/` — Componentes estructurales (`header.tsx`, `footer.tsx`, `mode-toggle.tsx`, `neural-background.tsx`).
  - `/chat/` — Chatbot flotante con streaming (`chatbot.tsx`).
  - `theme-provider.tsx` — Wrapper de `next-themes`.

---

## 🎨 Convenciones y Reglas del Proyecto (Definidas en AGENTS.md)

### Nomenclatura (Naming Conventions)
1. **Archivos y Carpetas:** Uso obligatorio de `kebab-case` (ej. `mi-componente.tsx`, `certifications-drawer.tsx`). Optimiza URLs y consistencia.
2. **Componentes React:** El nombre de las funciones/clases exportadas debe ser `PascalCase` (ej. `export function HeroSection() {...}`). No usar default export de funciones anónimas.
3. **Lógica JS/TS:** Variables y funciones en `snake_case`.

### Estética y Diseño (AI Developer Aesthetic)
- **Tema Oscuro:** Dark Mode por defecto ("cyber / dark mode").
- **Efectos y Materiales:**
  - **Glassmorphism:** Fondos semi-transparentes (`bg-black/40` o `bg-neutral-900/50`) con `backdrop-blur-xl` y bordes translúcidos (`border-white/10`).
  - **Glow:** Luces radiales de fondo en Cyan, Azul Eléctrico y Violeta para profundidad tecnológica.
  - Nunca colores sólidos planos para tarjetas o fondos de sección.

### Comportamiento del Renderizado
- Server Components por defecto en Next.js para SEO y rendimiento.
- `"use client"` reservado para componentes que requieren interactividad (hooks de React, Framer Motion, etc.).

### Route Handlers
- Los endpoints viven en `src/app/api/**/route.ts` y se ejecutan en el runtime serverless de Vercel.
- Mantener los handlers delgados: validar entrada, delegar y devolver `Response` o streaming.
- Las variables sensibles (p. ej. `GROQ_API_KEY`) se leen de `process.env` y deben configurarse en Vercel.
