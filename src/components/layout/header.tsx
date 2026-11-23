import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { SITE } from "@/lib/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-neutral-200 dark:border-neutral-800 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="text-base sm:text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
          >
            {SITE.name}
          </a>
          <nav aria-label="Principal" className="flex items-center gap-3 sm:gap-6">
            <a href="#projects" className="text-xs sm:text-sm font-medium hover:text-blue-500 transition-colors">
              Proyectos
            </a>
            <a href="#about" className="text-xs sm:text-sm font-medium hover:text-blue-500 transition-colors">
              Sobre mí
            </a>
            <a href="#contact" className="text-xs sm:text-sm font-medium hover:text-blue-500 transition-colors">
              Contacto
            </a>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
