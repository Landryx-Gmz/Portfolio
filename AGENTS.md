<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# REPOSITORY RULES FOR AI AGENTS
All AI agents working in this repository MUST STRICTLY FOLLOW these rules.

## 1. Arquitectura y Estructura (Clean Architecture)
- **Frontend (Next.js App Router):** 
  - Todo el enrutamiento visual y páginas residen en `src/app`.
  - Componentes reutilizables de UI se estructuran en `src/components`, dividiéndose lógicamente (ej. `layout/`, `ui/`, `sections/`).
  - Utilidades, hooks y servicios, de existir, van en `src/lib`, `src/hooks`, y `src/services` respectivamente.
  - Usar siempre Client Components solo cuando sea estrictamente necesario (ej. interactividad, `useState`, `framer-motion`), manteniendo el resto como Server Components para optimizar carga visual y SEO.
- **Backend (API Python):** Cualquier lógica de enrutamiento del backend simulado o real (IA, webhooks, bases de datos) debe estar encapsulada EXCLUSIVAMENTE en el directorio `/api/` usando Python (FastAPI). No crees endpoints `route.ts` de Next.js a menos que el usuario lo solicite expresamente; la convención de este router es usar el proxy inverso del backend `.py`.

## 2. Pautas de Diseño y UI (AI Developer Aesthetic)
- **Modo Oscuro como Predeterminado:** El diseño base asume que predominará una estética "cyber / dark mode".
- **Glassmorphism y Glow:** No usar colores sólidos simples para tarjetas o fondos. Usa fondos oscuros (`bg-black/40` o `bg-neutral-900/50`) con fuertes desenfoques traseros (`backdrop-blur-xl`) y bordes muy sutiles translúcidos (`border-white/10`). 
- **Colores Tecnológicos:** Prefiere paletas basadas en acentos Cyan, Azul Eléctrico y Violeta para efectos de brillo (Glow), degradados radiales y resaltados.

## 3. Convenciones de Nomenclatura (Naming Conventions)
- **Archivos y Carpetas Frontend:** Todas las carpetas y archivos en el frontend (React/Next.js/TypeScript) usarán `kebab-case`. Ejemplo: `mi-componente.tsx`, `mi-layout.tsx`. Esto asegura que las URLs de Next.js funcionen perfectamente para SEO.
- **Definición de Componentes Estrictas:** El *nombre del componente interno* (la función/clase React) usará `PascalCase` (ej. `export function HeroSection() { ... }`). Nunca usar default export de funciones anónimas.
- **Lógica Frontend (Variables/Funciones) y Backend (Python):** Usar `snake_case` para las variables, nombres de funciones lógicas en TypeScript, y para todo el backend en Python (nombres de archivo, endpoints y variables de Python).
