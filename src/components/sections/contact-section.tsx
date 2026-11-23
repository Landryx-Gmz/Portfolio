import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/brand-icons";
import { SITE } from "@/lib/site";

const baseClass = "inline-flex items-center justify-center gap-2 h-12 px-5 rounded-md border transition-colors font-medium";
const linkClass = `${baseClass} border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800`;
const primaryClass = `${baseClass} border-blue-600 bg-blue-600 text-white hover:bg-blue-700`;

export function ContactSection() {
  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Contacto</h2>
        <p className="text-neutral-600 dark:text-neutral-300 md:text-xl mb-10">
          ¿Tienes un proceso que se repite y te quita tiempo? Cuéntamelo.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <a href={`mailto:${SITE.email}`} className={primaryClass}>
            <Mail className="h-5 w-5" aria-hidden="true" />
            {SITE.email}
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a href={SITE.github} target="_blank" rel="noreferrer" className={linkClass}>
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
