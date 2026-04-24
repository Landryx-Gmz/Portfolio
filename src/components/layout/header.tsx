"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  const [is_scrolled, set_is_scrolled] = useState(false);

  useEffect(() => {
    const handle_scroll = () => {
      set_is_scrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handle_scroll);
    return () => window.removeEventListener("scroll", handle_scroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        is_scrolled
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-neutral-200 dark:border-neutral-800 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-mono text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              ANDY_AI_DEV
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Inicio
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Tecnologías
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Proyectos
            </a>
          </nav>
          <div className="flex items-center gap-4">
            {/* Oportunidad futura para Language Toggle */}
            <button className="text-xs font-semibold px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
              ES
            </button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
