import { SYSTEM_PROMPT } from "@/lib/chat/system-prompt";
import type { ChatRequest } from "@/lib/chat/chat-schema";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

export class GroqError extends Error {
  constructor(public status: number) {
    super(`Groq respondió con error ${status}`);
  }
}

// Pide la respuesta a Groq y devuelve un stream de texto plano con los tokens.
export async function createChatStream(
  messages: ChatRequest["messages"],
  apiKey: string,
  fetchFn: typeof fetch = fetch,
): Promise<ReadableStream<Uint8Array>> {
  const response = await fetchFn(GROQ_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      stream: true,
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok || !response.body) {
    console.error("Error de Groq:", response.status, await response.text().catch(() => ""));
    throw new GroqError(response.status);
  }

  return response.body.pipeThrough(sseToText());
}

// Convierte el SSE de Groq en texto. Guarda un buffer entre trozos porque una
// línea SSE puede llegar partida por la mitad de un JSON.
export function sseToText(): TransformStream<Uint8Array, Uint8Array> {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  return new TransformStream({
    transform(chunk, controller) {
      buffer += decoder.decode(chunk, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data:")) continue;
        const data = trimmed.slice(5).trim();
        if (data === "[DONE]") continue;
        try {
          const token: unknown = JSON.parse(data)?.choices?.[0]?.delta?.content;
          if (typeof token === "string" && token) controller.enqueue(encoder.encode(token));
        } catch {
          // Línea sin JSON válido: se descarta.
        }
      }
    },
  });
}
