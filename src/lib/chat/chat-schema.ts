import { z } from "zod";

// Límites para que nadie use el endpoint como proxy gratuito de la IA.
export const chatRequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      }),
    )
    .min(1)
    .max(30),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;
