"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Terminal, Github, Mail, Linkedin, ChevronUp, ChevronDown, User } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [photo_visible, set_photo_visible] = useState(false);
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

          {/* Left column — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 animate-pulse"></span>
                Disponible para nuevos proyectos
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                Hola, soy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                  Andy Gomez
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-neutral-600 dark:text-neutral-400 font-mono">
                &gt; Full-Stack Developer & AI Orchestrator_
              </h2>
              <p className="max-w-[550px] text-neutral-600 dark:text-neutral-300 md:text-lg leading-relaxed">
                Construyo plataformas web robustas bajo estándares de Clean Architecture. Integro automatizaciones e IA para transformar arquitecturas complejas en negocios escalables.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Ver Proyectos
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#chat"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors font-medium backdrop-blur-sm"
              >
                <Terminal className="mr-2 h-4 w-4 text-blue-500" />
                Hablar con mi IA
              </a>
            </div>

            <div className="flex items-center gap-6 text-neutral-500 dark:text-neutral-400">
              <a href="https://github.com/Landryx-Gmz" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/andy-gomez" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:andy.backend.dev@gmail.com" className="hover:text-blue-500 transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right column — Code block + toggleable photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg mt-12 lg:mt-0 flex flex-col gap-0"
          >
            {/* Photo — slides in above the code block */}
            <AnimatePresence>
              {photo_visible && (
                <motion.div
                  key="photo"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 320, opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", damping: 28, stiffness: 200 }}
                  className="relative w-full overflow-hidden rounded-t-3xl border border-b-0 border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)]"
                >
                  <Image
                    src="/profile_ultimate.png"
                    alt="Andy Gomez"
                    fill
                    className="object-cover"
                  />
                  {/* Degradado inferior para fundir con el bloque de código */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Code block */}
            <div
              className={`relative z-20 rounded-2xl overflow-hidden border border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl ${photo_visible ? "rounded-t-none border-t-0" : ""}`}
            >
              {/* Title bar — clickable */}
              <button
                onClick={() => set_photo_visible((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
                title={photo_visible ? "Ocultar foto" : "Ver al desarrollador"}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">andy_gomez.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 group-hover:text-cyan-400 transition-colors">
                  <User className="w-3 h-3" />
                  {photo_visible ? (
                    <><ChevronUp className="w-3 h-3" /> ocultar</>
                  ) : (
                    <><ChevronDown className="w-3 h-3" /> ver desarrollador</>
                  )}
                </div>
              </button>

              {/* Code content - Tech Refactored */}
              <div className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed text-neutral-300 overflow-x-auto">
                <p><span className="text-purple-400">import</span> {"{"} <span className="text-cyan-300">Architect</span>, <span className="text-cyan-300">Builder</span> {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">"@domain/core"</span>;</p>
                <br />
                <p><span className="text-purple-400">export class</span> <span className="text-yellow-300">AndyGomez</span> <span className="text-purple-400">implements</span> <span className="text-cyan-300">Architect</span> {"{"}</p>
                <p className="ml-4"><span className="text-purple-400">readonly</span> <span className="text-cyan-400">role</span> = <span className="text-green-400">"Full-Stack AI Developer"</span>;</p>
                <p className="ml-4"><span className="text-purple-400">private</span> <span className="text-cyan-400">stack</span> = {"{"}</p>
                <p className="ml-8">frontend: [<span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"Tailwind"</span>],</p>
                <p className="ml-8">backend:  [<span className="text-green-400">"Clean Arch"</span>, <span className="text-green-400">"TurboRepo"</span>],</p>
                <p className="ml-8">ai_auto:  [<span className="text-green-400">"n8n"</span>, <span className="text-green-400">"Grok API"</span>, <span className="text-green-400">"Vercel AI"</span>]</p>
                <p className="ml-4">{"}"};</p>
                <br />
                <p className="ml-4"><span className="text-blue-400">execute</span>(): <span className="text-cyan-300">ScaleableSystem</span> {"{"}</p>
                <p className="ml-8"><span className="text-purple-400">return</span> <span className="text-blue-400">build</span>(<span className="text-orange-400">this</span>.stack).<span className="text-blue-400">deploy</span>(<span className="text-green-400">"Edge"</span>);</p>
                <p className="ml-4">{"}"}</p>
                <p>{"}"}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
