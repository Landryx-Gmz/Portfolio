# Portfolio Development Tasks

Este documento rastrea las tareas de modernización, rediseño y nuevas características para el portfolio de Andy Gomez (Full-Stack AI Developer).

## 🎨 Fase 1: Estética y "Glow Up" Tecnológico
- [x] **Glassmorphism Avanzado**: Cambiar los fondos sólidos de las tarjetas por `bg-black/40 backdrop-blur-xl border-white/10`.
- [x] **Efectos Neón/Glow**: Añadir luces radiales de fondo (cyan y azul) detrás del Hero y otras secciones clave.
- [x] **Tipografía Tech**: Integrar fuentes monospaciadas (Fira Code) para código y sans (Inter) para legibilidad.
- [x] **Micro-interacciones**: Efectos de "hover" magnéticos en las tarjetas de Skills.

## 👤 Fase 2: Personalización y Autoridad
- [x] **Integración de Foto**: Integrada `profile_ultimate.png` con estilo Clean-Tech, recortes precisos y efectos parallax activos.
- [x] **Sección de Certificaciones**: Crear una sección nueva bajo Skills o Projects dedicada a mostrar medallas/certificados de IA o Cloud (AWS, GCP, etc.).

## 🚀 Fase 3: Dinamismo en Proyectos y Stack Técnico
- [x] **Integrar Imágenes Reales**: Reemplazados los placeholders por imágenes reales con estilos de ajuste correctos (`object-cover`, `object-top`).
- [x] **Animaciones Scroll/Parallax**: Implementado efecto Parallax en las imágenes de proyectos y corrección de cálculos de scroll en Framer Motion empleando posiciones relativas.
- [x] **Refactorización de Proyectos**: Subdivisión entre "Proyectos Seleccionados" (mostrados) y "Más proyectos" (ocultos bajo un menú expandible animado). Actualizado el Copywriting para transmitir el impacto real en el negocio (ej. +400 leads).
- [x] **Rediseño del Stack Tecnológico**: Transformación del antiguo grid a un sistema avanzado de Pestañas Dinámicas (Dynamic Tabs) con efectos de Glassmorphism y reorganización estratégica de las tecnologías reales dominadas (TurboRepo, NextAuth, OpenNext, n8n, etc.) con énfasis especial en "Automatización".

## 📧 Fase 4: Newsletter & Comunidad
- [x] **Sección de Suscripción**: Diseñado componente Newsletter con Copywriting de venta enfocado en la mentalidad 'AI-Native Developer' (aprendizaje y resolución), estilos glassmorphism y micro-interacciones (botón asíncrono, validación).
- [x] **Integración de API / Captación**: Conectado el formulario Frontend de forma asíncrona a un Endpoint centralizado (Formspark) preparado para desencadenar el flujo de orquestación de Leads (Notion -> n8n -> Resend).

## 🛠️ Fase 5: Refinamiento, Funcionalidad & Lanzamiento
- [x] **Visibilidad Newsletter**: Garantizar que la sección sea legible y estética en el **Tema Claro**.
- [x] **Navegación Header**: Mapear el botón "Sobre mí" para que funcione como botón de "Inicio".
- [x] **UX Tech Stack**: Alinear automáticamente la ventana entre el botón de la tecnología y su explicación al hacer clic.
- [x] **Jerarquía de Certificados**: Dar prioridad y orden específico a los certificados que aparecen debajo del principal.
- [x] **Mejora Asset Proyectos**: Optimizar la imagen del proyecto de Lidia Pérez para un acabado más profesional.
- [x] **Refactor de Footer**: Rediseñar el pie de página para una estética más corporativa y "senior".
- [x] **Chatbot Funcional**: Implementar la lógica de interacción real del asistente de IA.
- [x] **Identidad Visual**: Crear e integrar el Favicon del sitio.
- [ ] **Configuración Newsletter**: Crear y validar la cuenta de gestión de la newsletter para que sea operativa.
- [x] **Preparación Producción**: Sustituir emails personales por corporativos oficiales en el entorno de despliegue.
