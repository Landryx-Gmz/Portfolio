# Arquitectura del Proyecto: Portfolio AI Developer

Este documento describe la arquitectura, la estructura de archivos y las convenciones establecidas para el proyecto del Portfolio de Landryx-Gmz. Sirve como guía de referencia para cualquier desarrollo futuro, especialmente útil cuando interactúan agentes de IA.

## 🏗️ Pila Tecnológica (Tech Stack)

El proyecto está diseñado como una aplicación Full-Stack moderna:

- **Frontend:** Next.js (App Router) + React 19 + TypeScript.
- **Estilos y UI:** Tailwind CSS, Framer Motion (para animaciones complejas y parallax) y componentes base inspirados en Shadcn UI / Base UI.
- **Backend:** Python con FastAPI.
- **Despliegue y Herramientas:** Vercel (servidor de desarrollo concurrente con `concurrently`), ESLint para calidad de código.

---

## 📂 Estructura del Proyecto

El repositorio está dividido lógicamente en dos partes principales: el Frontend (`/src`) y el Backend (`/api`).

### 1. Frontend (`/src`)

Sigue las convenciones modernas del App Router de Next.js, centralizando la lógica visual y de cliente.

- `src/app/`
  - Aquí reside el enrutamiento y la configuración global de la aplicación.
  - `layout.tsx`: Define la envoltura principal de la aplicación, inyectando proveedores como el de temas (Dark Mode).
  - `page.tsx`: Es la página principal (Home) donde se ensamblan todas las secciones.
  - `globals.css`: Estilos globales e inyección de Tailwind.

- `src/components/`
  - Los componentes están altamente modulares y divididos por su propósito:
  - `/sections/`: Contiene los "bloques grandes" de la página principal (ej. `hero.tsx`, `projects.tsx`, `skills.tsx`, `newsletter.tsx`, `certifications-drawer.tsx`).
  - `/layout/`: Componentes estructurales que se repiten (ej. el Header de navegación, Footer).
  - `/ui/`: Componentes atómicos o primitivos reutilizables (Botones, Tarjetas, Inputs).
  - `/chat/`: Componentes específicos para el asistente de Inteligencia Artificial integrado.

- `src/lib/`
  - Utilidades, helpers compartidos y configuración común (ej. función `cn` para Tailwind).

### 2. Backend (`/api`)

El backend está construido en Python y sigue estrictamente un patrón de **Clean Architecture** para asegurar escalabilidad y separación de responsabilidades. No se utilizan endpoints en `/src/app/api` de Next.js; todo el tráfico de la API se redirige aquí.

- `api/index.py`
  - Archivo principal. Levanta el servidor FastAPI, gestiona los CORS y conecta los diferentes routers.
- `api/domain/`
  - **Dominio:** Contiene las entidades principales, modelos de datos (Pydantic) e interfaces. Independiente de cualquier framework.
- `api/use_cases/`
  - **Casos de Uso:** Aquí reside la lógica de negocio. Orquesta la información entre el dominio y la infraestructura.
- `api/infrastructure/`
  - **Infraestructura:** Implementaciones técnicas concretas. Conexiones a bases de datos, APIs de terceros (como OpenAI, Formspark, Notion, n8n), o el sistema de archivos.
- `api/presentation/`
  - **Presentación:** Los endpoints (controladores de FastAPI). Su única función es recibir peticiones HTTP, llamar al caso de uso correspondiente y devolver la respuesta.

---

## 🎨 Convenciones y Reglas del Proyecto (Definidas en AGENTS.md)

Para mantener la coherencia en todo el código base, existen reglas estrictas:

### Nomenclatura (Naming Conventions)
1. **Frontend (Archivos y Carpetas):** Uso obligatorio de `kebab-case` (ej. `mi-componente.tsx`, `certifications-drawer.tsx`). Esto optimiza las URLs y la consistencia.
2. **Frontend (Componentes React):** El nombre de las funciones/clases internas exportadas debe ser `PascalCase` (ej. `export function HeroSection() {...}`). No usar funciones anónimas por defecto.
3. **Lógica JS/TS y Backend Python:** Todo el código backend en Python (archivos, funciones, variables) y la lógica funcional en TypeScript debe utilizar `snake_case`.

### Estética y Diseño (AI Developer Aesthetic)
- **Tema Oscuro:** El proyecto asume un entorno oscuro (Dark Mode) por defecto ("cyber / dark mode").
- **Efectos y Materiales:**
  - Uso intensivo de **Glassmorphism**: Fondos semi-transparentes (`bg-black/40` o `bg-neutral-900/50`) con desenfoque (`backdrop-blur-xl`) y bordes translúcidos (`border-white/10`).
  - **Glow / Iluminación:** Uso de luces radiales de fondo con acentos en Cyan, Azul Eléctrico y Violeta para dar profundidad tecnológica.
  - Nunca utilizar colores sólidos planos para tarjetas o secciones de fondo.

### Comportamiento del Renderizado
- Se prioriza el uso de **Server Components** por defecto en Next.js para mejorar el SEO y el rendimiento.
- El directivo `"use client"` se reserva estricta y únicamente para componentes que requieren interactividad, hooks de React (`useState`, `useEffect`) o animaciones (como Framer Motion).
