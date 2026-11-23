import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import { chatRequestSchema } from "@/lib/chat/chat-schema";
import { createChatStream, GroqError } from "@/lib/chat/groq-stream";

interface AppDeps {
  groqApiKey: string | undefined;
  fetchFn?: typeof fetch;
}

// La app no sabe dónde se ejecuta: Astro (Vercel) la monta en src/pages/api.
export function createApp({ groqApiKey, fetchFn }: AppDeps) {
  const app = new Hono().basePath("/api");

  app.use(bodyLimit({ maxSize: 32 * 1024 }));

  app.get("/health", (c) => c.json({ ok: true }));

  app.post("/chat", async (c) => {
    const body: unknown = await c.req.json().catch(() => null);
    const parsed = chatRequestSchema.safeParse(body);
    if (!parsed.success) return c.json({ error: "Petición no válida" }, 400);

    if (!groqApiKey) return c.json({ error: "Chat no configurado" }, 503);

    try {
      const stream = await createChatStream(parsed.data.messages, groqApiKey, fetchFn);
      return new Response(stream, {
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" },
      });
    } catch (error) {
      if (error instanceof GroqError) return c.json({ error: "El asistente no está disponible" }, 502);
      console.error("Error en el chatbot:", error);
      return c.json({ error: "Error interno del servidor" }, 500);
    }
  });

  return app;
}
