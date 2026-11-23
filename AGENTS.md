# AGENTS.md

## Stack del proyecto (no cambiar sin preguntar)
Sigue `/mnt/SSD_Disk/Proyectos/STACK.md`, con una excepción: **se publica en Vercel** (es el portfolio personal de Andy, no un proyecto de JadixTech).
- Astro 7 + `@astrojs/react` (islas) + Tailwind CSS 4 (`@tailwindcss/vite`). TypeScript estricto (6.0).
- Animaciones: Framer Motion 12 dentro de las islas de React.
- API: Hono 4 + Zod 4, montada en `src/pages/api/[...path].ts` (única ruta no prerenderizada → función de Vercel con `@astrojs/vercel`).
- Chatbot: API de Groq. Clave en `GROQ_API_KEY` (definida en `astro.config.mjs` con `astro:env`).
- Iconos: Lucide; logos de marcas en `src/components/icons/brand-icons.tsx` (SVG de Simple Icons).
- Fuentes: Fontsource (Inter y Fira Code). Pruebas: Vitest. Paquetes: pnpm.

## Comandos
- `pnpm dev` — servidor local (http://localhost:4321).
- `pnpm check-all` — tipos (`astro check`), ESLint, Vitest y build. Obligatorio antes de cada PR.

## Estructura
- `src/pages/` — páginas `.astro` y endpoint `api/[...path].ts`.
- `src/layouts/` — layout base (SEO, tema, fondo, cabecera y chatbot).
- `src/components/` — componentes React: `layout/`, `sections/`, `chat/`, `icons/`. Se usan como islas desde Astro.
- `src/lib/api/` — app Hono (rutas). `src/lib/chat/` — esquema Zod, prompt y streaming de Groq.
- `src/styles/global.css` — Tailwind y variables de tema.
- `tests/` — pruebas Vitest (sin red: `fetch` falso).
- `docs/` — documentación (`TODO.md`).

## Reglas
- Antes de usar una librería, consultar su documentación actual con Context7.
- No añadir dependencias, rutas API ni secretos sin confirmación.
- Nunca push directo a `main` ni a `develop`: rama → PR a `develop` → PR a `main`.
- Islas: solo lo interactivo lleva `client:*`. Lo que no necesita JS se renderiza sin directiva (como el footer).
- Imports absolutos con `@/`.

## Diseño (AI Developer Aesthetic)
- **Modo oscuro por defecto** (estética "cyber / dark mode"). El tema se guarda en `localStorage.theme`.
- **Glassmorphism y glow:** nada de colores sólidos planos en tarjetas o fondos. Fondos oscuros (`bg-black/40`, `bg-neutral-900/50`) con `backdrop-blur-xl` y bordes `border-white/10`.
- **Colores:** acentos cyan, azul eléctrico y violeta para glow, degradados radiales y resaltados.

## Nombres
- Archivos y carpetas en `kebab-case` (`mi-componente.tsx`).
- Componentes React en `PascalCase` (`export function HeroSection()`). Nunca default export de funciones anónimas.
- Funciones y variables en `camelCase`; tipos en `PascalCase`; constantes de datos en `UPPER_CASE` (STACK.md, sección 19).
- Secciones con sufijo descriptivo: `hero-section.tsx` → `HeroSection`.
