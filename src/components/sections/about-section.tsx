import { SITE } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[280px_1fr] items-center max-w-4xl mx-auto">
          <img
            src="/profile_ultimate.png"
            alt={`Foto de ${SITE.name}`}
            loading="lazy"
            decoding="async"
            width={1024}
            height={1024}
            className="w-56 h-56 md:w-full md:h-auto mx-auto rounded-3xl object-cover border border-white/10 shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Sobre mí</h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 md:text-lg leading-relaxed">
              {/* PENDIENTE: añadir de dónde vengo, en una frase (ver docs/TODO.md). */}
              <p>
                Me dedico a automatizar procesos y construir webs, también en 3D, para cualquier tipo de negocio. Me gusta entender
                lo que necesita un negocio antes de pensar en la tecnología.
              </p>
              <p>
                Automatizo procesos con n8n y TypeScript, creo APIs propias con Hono y bases de datos con
                PostgreSQL, construyo webs con Astro y React, y las publico en Cloudflare. Todo adaptado a lo
                que necesita cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
