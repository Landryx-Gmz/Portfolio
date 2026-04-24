"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Terminal } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "¡Hola! Soy AndyAI, el asistente virtual de este portfolio. ¿Qué te gustaría saber sobre la experiencia, proyectos o habilidades de Andy?",
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
    };

    // Añadir mensaje del usuario y limpiar input
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Preparar historial para la API (sin el mensaje de bienvenida estático)
    const api_messages = [...messages.filter((m) => m.id !== "welcome"), userMessage].map(
      (m) => ({ role: m.role, content: m.content })
    );

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: api_messages }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      // Leer el stream de texto plano token a token
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      const assistantId = (Date.now() + 1).toString();
      // Crear mensaje vacío del asistente para ir rellenando
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const token = decoder.decode(value, { stream: true });
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: m.content + token } : m
            )
          );
        }
      }
    } catch (error) {
      console.error("Error en chat:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: "assistant",
          content:
            "⚠️ Ha ocurrido un error de conexión. Por favor, intenta de nuevo en unos segundos.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        id="chat"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center z-50 transition-opacity ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Ventana de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
            className="fixed bottom-6 right-6 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header del Chat */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AndyAI</h3>
                  <p className="text-xs text-green-500 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>{" "}
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-tr-sm"
                        : "bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-tl-sm border border-neutral-200 dark:border-neutral-800"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-neutral-100 dark:bg-neutral-900 text-neutral-500 p-3 rounded-2xl rounded-tl-sm border border-neutral-200 dark:border-neutral-800 flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Pregunta algo..."
                  className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 p-2 bg-blue-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-neutral-400 font-mono">
                  v1.0 · AndyAI Engine
                </span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
