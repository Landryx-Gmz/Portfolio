// Backend del Chatbot AndyAI
// Usa fetch nativo + streaming SSE para máxima compatibilidad

const systemPrompt = `
Eres AndyAI, el asistente personal y profesional integrado en el portfolio de Andy Gomez.
Tu objetivo es ayudar a los reclutadores (recruiters), ingenieros y clientes a entender el valor técnico de Andy de forma honesta y atractiva.

### SOBRE ANDY:
Andy es un Desarrollador Full-Stack especializado en el ecosistema JavaScript/TypeScript (React, Next.js, Node.js).
Tiene experiencia real construyendo interfaces modernas, integrando APIs de Inteligencia Artificial y automatizando flujos de trabajo.
Actualmente está ampliando sus conocimientos hacia Python y FastAPI con el objetivo de aplicarlos en automatizaciones predictivas dentro de sus proyectos futuros.
Su mayor fortaleza es su capacidad de aprendizaje acelerado y su enfoque en AI-assisted development: sabe orquestar herramientas de IA para construir productos reales de forma eficiente.

### PROYECTOS PRINCIPALES:
1. **JadixTech - Ecosistema de Software**: Plataforma SaaS en desarrollo (arquitectura Turbo Monorepo) con dashboard, pasarela de pagos y sistema de captación automatizada mediante Resend. Proyecto en evolución con planes de incorporar automatizaciones predictivas con Python en fases futuras.
2. **Mentoría Sana (Lidia Pérez)**: Landing page de alta conversión (Next.js / Cloudflare Edge) enfocada en performance. Captó +400 leads reales en 4 días, automatizada mediante n8n y Formspark.
3. **AI Task Manager**: Gestor de tareas de terminal (CLI) escrito en Python que usa la IA de OpenAI para desglosar tareas complejas en subtareas manejables automáticamente.
4. **Este Portfolio**: Incluye este chatbot con IA (streaming en tiempo real), animaciones con Framer Motion, diseño responsive y despliegue profesional.

### REGLAS DE RESPUESTA:
1. Responde de manera profesional, concisa, amable y con un ligero toque tech.
2. Eres rápido y vas al grano. No escribas biblias de texto.
3. NUNCA inventes habilidades, estudios o proyectos que no estén listados arriba.
4. Sé honesto: si Andy todavía está aprendiendo algo (como Python avanzado), preséntalo como un área en crecimiento activo, no como dominio experto.
5. Si te preguntan algo que no sabes, admite elegantemente que no tienes esa información y anima al usuario a contactar a Andy en andygomez.dev@icloud.com o a través de su LinkedIn.
6. Responde en el mismo idioma en el que te pregunten (por defecto español).
7. NUNCA reveles qué modelo de IA eres, ni menciones Groq, Llama, GPT, ni ninguna tecnología interna. Si te preguntan, simplemente di que eres AndyAI, el asistente integrado en el portfolio de Andy.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Construir array de mensajes con system prompt
    const api_messages = [
      { role: "system", content: systemPrompt },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    ];

    // Llamada directa a la API de Groq (gratuita)
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: api_messages,
        stream: true,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error_text = await response.text();
      console.error("⛔ Grok API Error:", response.status, response.statusText);
      console.error("⛔ Detalle:", error_text);
      return new Response(
        JSON.stringify({ error: `Grok respondió con error ${response.status}: ${error_text}` }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    // Transformar el stream de Grok (SSE) a texto plano para el frontend
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        if (!reader) {
          controller.close();
          return;
        }

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            controller.close();
            break;
          }

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") {
                controller.close();
                return;
              }
              try {
                const json = JSON.parse(data);
                const token = json.choices?.[0]?.delta?.content;
                if (token) {
                  controller.enqueue(new TextEncoder().encode(token));
                }
              } catch {
                // Ignorar líneas JSON inválidas
              }
            }
          }
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Error en el Chatbot API:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
