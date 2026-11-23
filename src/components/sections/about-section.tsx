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
                Automatizo procesos y construyo webs, también en 3D, para pequeños negocios y profesionales. Me
                gusta entender qué necesita un negocio antes de pensar en la tecnología.
              </p>
              <p>
                Trabajo con n8n y TypeScript, y desarrollo con ayuda de agentes de IA, revisando todo lo que
                generan antes de que llegue a producción. Ahora mismo estoy construyendo el panel de gestión de
                clientes de JadixTech, sobre su propia API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
