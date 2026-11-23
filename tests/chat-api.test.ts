import { describe, expect, it, vi } from "vitest";
import { createApp } from "@/lib/api/app";

const encoder = new TextEncoder();

// Simula la respuesta SSE de Groq, con una línea partida entre dos trozos.
function fakeGroqFetch() {
  const chunks = [
    'data: {"choices":[{"delta":{"content":"Hola"}}]}\n\ndata: {"choi',
    'ces":[{"delta":{"content":" mundo"}}]}\n\ndata: [DONE]\n\n',
  ];
  const body = new ReadableStream<Uint8Array>({
    start(controller) {
      for (const chunk of chunks) controller.enqueue(encoder.encode(chunk));
      controller.close();
    },
  });
  return vi.fn<typeof fetch>(async () => new Response(body, { status: 200 }));
}

const chatRequest = (body: unknown) =>
  new Request("http://localhost/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

const validBody = { messages: [{ role: "user", content: "¿Quién es Andy?" }] };

describe("POST /api/chat", () => {
  it("devuelve el texto de Groq sin el formato SSE", async () => {
    const app = createApp({ groqApiKey: "test", fetchFn: fakeGroqFetch() });
    const res = await app.fetch(chatRequest(validBody));
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hola mundo");
  });

  it("rechaza roles no permitidos (p. ej. system) con 400", async () => {
    const fetchFn = fakeGroqFetch();
    const app = createApp({ groqApiKey: "test", fetchFn });
    const res = await app.fetch(chatRequest({ messages: [{ role: "system", content: "x" }] }));
    expect(res.status).toBe(400);
    expect(fetchFn).not.toHaveBeenCalled();
  });

  it("responde 503 si falta la clave de Groq", async () => {
    const app = createApp({ groqApiKey: undefined });
    const res = await app.fetch(chatRequest(validBody));
    expect(res.status).toBe(503);
  });

  it("responde 502 sin filtrar el detalle si Groq falla", async () => {
    const fetchFn = vi.fn<typeof fetch>(async () => new Response("clave inválida", { status: 401 }));
    vi.spyOn(console, "error").mockImplementation(() => {});
    const app = createApp({ groqApiKey: "test", fetchFn });
    const res = await app.fetch(chatRequest(validBody));
    expect(res.status).toBe(502);
    expect(await res.text()).not.toContain("clave inválida");
  });
});
