import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/brand-icons";
import { SITE } from "@/lib/site";

const iconLink =
  "w-10 h-10 flex items-center justify-center rounded-xl bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors";

export function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-xl mt-20">
      <div className="container mx-auto px-4 md:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <div className="flex gap-3">
          <a href={SITE.github} target="_blank" rel="noreferrer" className={iconLink}>
            <Github className="w-4 h-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className={iconLink}>
            <Linkedin className="w-4 h-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${SITE.email}`} className={iconLink}>
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Correo</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
