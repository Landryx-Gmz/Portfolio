"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Terminal, ExternalLink, Github, Mail, Linkedin } from "lucide-react";

import Image from "next/image";

export function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const photoY = useTransform(scrollY, [0, 300], [0, 50]);
  const codeY = useTransform(scrollY, [0, 300], [0, -80]);
  const codeOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const photoScale = useTransform(scrollY, [0, 300], [1.2, 1.05]); // Base scale 1.2 to crop

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>

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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg mt-12 lg:mt-0"
          >
            {/* Foto de Perfil */}
            <motion.div 
              style={{ y: photoY }}
              className="relative w-full h-[320px] lg:h-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] group z-10"
            >
              <motion.div 
                style={{ scale: photoScale }}
                className="w-full h-full origin-center relative left-[-2%] top-[1%]"
              >
                <Image
                  src="/profile_ultimate.png" 
                  alt="Andy Gomez"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-[1.02]"
                />
              </motion.div>
              
              {/* Degradado para dar profundidad inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
            </motion.div>

            {/* Elemento gráfico representativo de código (Separado y flotando) */}
            <motion.div 
              style={{ y: codeY, opacity: codeOpacity }}
              className="relative z-20 mt-6 lg:-mt-16 lg:-ml-12 lg:-mr-4 rounded-2xl overflow-hidden border border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl"
            >
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
                <div className="ml-4 text-xs font-mono text-neutral-400">andy_ai.py</div>
              </div>
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-neutral-300">
                <p><span className="text-purple-400">class</span> <span className="text-cyan-400">Developer</span>:</p>
                <p className="ml-4"><span className="text-purple-400">def</span> <span className="text-cyan-400">__init__</span>(<span className="text-orange-400">self</span>):</p>
                <p className="ml-8"><span className="text-orange-400">self</span>.name = <span className="text-green-400">"Andy Gomez"</span></p>
                <p className="ml-8"><span className="text-orange-400">self</span>.role = <span className="text-green-400">"Full-Stack AI Developer"</span></p>
                <p className="ml-8"><span className="text-orange-400">self</span>.core = [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"Next.js"</span>]</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
