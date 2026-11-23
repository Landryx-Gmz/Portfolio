// @ts-check
import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// Web estática; solo /api/* se ejecuta en el servidor (función de Vercel).
export default defineConfig({
  site: "https://andygomezdev.vercel.app",
  adapter: vercel(),
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  env: {
    schema: {
      // Opcional para que el build no falle sin clave; la API responde 503 si falta.
      GROQ_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
    },
  },
});
