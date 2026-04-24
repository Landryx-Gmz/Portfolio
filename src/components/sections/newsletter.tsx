"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // TODO: Reemplaza YOUR_FORMSPARK_ID con tu Endpoint Real de Formspark
      const response = await fetch("https://submit-form.com/YOUR_FORMSPARK_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          source: "Portfolio Andy - Newsletter"
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden">
      {/* Background Glow Estilo Cyber */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-3xl border border-neutral-200 dark:border-white/5 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl shadow-2xl relative overflow-hidden group">

            {/* Ambient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                Mi Filosofía de Trabajo
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                Programador de la Nueva Escuela
              </h2>

              <div className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg md:text-xl leading-relaxed space-y-5">
                <p>
                  Únete a mi newsletter. Aquí compartiré en abierto todos mis conocimientos, los nuevos aprendizajes que voy adquiriendo y las soluciones arquitectónicas reales que construyo.
                </p>
                <p>
                  No pretendo aparentar ser un experto absoluto; mi mayor valor es mi capacidad de adaptación. Soy un desarrollador nativo de la era de la IA: si el proyecto exige una herramienta que no conozco, estudio el problema, asimilo la tecnología y construyo la solución de forma estable y segura iterando con ella, nos vemos dentro ☺️.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full max-w-md mt-6 relative z-20">
                <div className="relative flex items-center group/input">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    disabled={status === "loading" || status === "success"}
                    className="w-full bg-white/50 dark:bg-black/40 border border-neutral-300 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/20 rounded-full py-4 pl-6 pr-16 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success" || !email}
                    className="absolute right-2 top-2 bottom-2 aspect-square bg-cyan-500 hover:bg-cyan-400 text-black rounded-full flex items-center justify-center transition-all disabled:opacity-50 disabled:hover:bg-cyan-500 group/btn shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]"
                  >
                    {status === "loading" ? (
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : status === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-black" />
                    ) : (
                      <Send className="w-4 h-4 translate-x-[-1px] translate-y-[1px] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-transform" />
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-400 text-sm mt-4 font-medium">
                    ¡Suscrito correctamente! Bienvenido a la red.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-4 font-medium flex items-center justify-center gap-1">
                    <AlertCircle className="w-4 h-4" /> Ocurrió un error. Inténtalo de nuevo.
                  </motion.p>
                )}
              </form>

              <p className="text-neutral-500 text-sm mt-6 font-mono">
                {"//"} Cero humo. Solo aprendizajes reales, honestidad y evolución técnica.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
