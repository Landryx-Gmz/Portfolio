"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-xl overflow-hidden mt-20">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 lg:gap-12">
          
          {/* Col 1: Brand & Status */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-start">
            <div className="font-mono text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              ANDY_AI_DEV
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
              Especializado en la arquitectura de software y la orquestación de Inteligencia Artificial para crear productos escalables y eficientes.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium tracking-wider">SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="flex items-center gap-2 text-sm font-mono font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent uppercase tracking-widest mb-4">
              <span className="text-cyan-400">{'>'}</span> Ecosistema
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group cursor-pointer"><Terminal className="w-3 h-3 group-hover:text-cyan-400" /> Inicio</button></li>
              <li><Link href="#skills" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group"><Terminal className="w-3 h-3 group-hover:text-cyan-400" /> Stack Tecnológico</Link></li>
              <li><Link href="#projects" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group"><Terminal className="w-3 h-3 group-hover:text-cyan-400" /> Proyectos</Link></li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="flex items-center gap-2 text-sm font-mono font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent uppercase tracking-widest mb-4">
              <span className="text-cyan-400">{'>'}</span> Redes & Contacto
            </h4>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/Landryx-Gmz" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-cyan-400 transition-all group">
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/andr%C3%A9s-p-g%C3%B3mez/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-cyan-400 transition-all group">
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:andygomez.dev@icloud.com" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-cyan-400 transition-all group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-white/10 flex justify-center">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            © {new Date().getFullYear()} ANDY_AI_DEV. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
