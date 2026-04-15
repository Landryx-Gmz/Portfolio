"use client";

import { motion } from "framer-motion";
import { ChevronRight, Terminal, ExternalLink, Github, Mail, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

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
                &gt; Full-Stack AI Developer_
              </h2>
              <p className="max-w-[600px] text-neutral-600 dark:text-neutral-300 md:text-lg leading-relaxed">
                Diseño sistemas escalables aplicando Clean Architecture y seguridad desde el diseño.
                Uso la IA no solo como producto final, sino como herramienta central en cada fase del desarrollo.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            {/* Elemento gráfico representativo de código/IA en lugar de una foto estática */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-950/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs font-mono text-neutral-500">andy_ai.py</div>
              </div>
              <div className="p-6 font-mono text-sm sm:text-base leading-relaxed text-neutral-800 dark:text-neutral-300">
                <p><span className="text-purple-600 dark:text-purple-400">class</span> <span className="text-blue-600 dark:text-blue-400">Developer</span>:</p>
                <p className="ml-4"><span className="text-purple-600 dark:text-purple-400">def</span> <span className="text-blue-600 dark:text-blue-400">__init__</span>(<span className="text-orange-600 dark:text-orange-400">self</span>):</p>
                <p className="ml-8"><span className="text-orange-600 dark:text-orange-400">self</span>.name = <span className="text-green-600 dark:text-green-400">"Andy Gomez"</span></p>
                <p className="ml-8"><span className="text-orange-600 dark:text-orange-400">self</span>.role = <span className="text-green-600 dark:text-green-400">"Full-Stack AI Developer"</span></p>
                <p className="ml-8"><span className="text-orange-600 dark:text-orange-400">self</span>.core = [<span className="text-green-600 dark:text-green-400">"Python"</span>, <span className="text-green-600 dark:text-green-400">"Next.js"</span>, <span className="text-green-600 dark:text-green-400">"FastAPI"</span>]</p>
                <br/>
                <p className="ml-4"><span className="text-purple-600 dark:text-purple-400">def</span> <span className="text-blue-600 dark:text-blue-400">build_future</span>(<span className="text-orange-600 dark:text-orange-400">self</span>, idea):</p>
                <p className="ml-8">architect = CleanArchitecture()</p>
                <p className="ml-8">ai_model = LangChain(model=<span className="text-green-600 dark:text-green-400">"GPT-4o"</span>)</p>
                <p className="ml-8"><span className="text-purple-600 dark:text-purple-400">return</span> ai_model.orchestrate(architect.design(idea))</p>
                <br/>
                <p className="animate-pulse">_</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
