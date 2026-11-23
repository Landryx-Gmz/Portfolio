import type { APIRoute } from "astro";
import { GROQ_API_KEY } from "astro:env/server";
import { createApp } from "@/lib/api/app";

// Única ruta que se ejecuta en el servidor; el resto de la web es estática.
export const prerender = false;

const app = createApp({ groqApiKey: GROQ_API_KEY });

export const ALL: APIRoute = ({ request }) => app.fetch(request);
