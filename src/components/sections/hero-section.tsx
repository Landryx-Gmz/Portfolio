import { ChevronRight, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

// Sin estado ni efectos: Astro lo genera como HTML sin JavaScript.
export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Luces de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,100vw)] h-[800px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[min(600px,80vw)] h-[600px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Texto */}
          <div className="flex flex-col justify-center space-y-8 motion-safe:animate-fade-up">
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2" aria-hidden="true"></span>
                Disponible para proyectos de automatización
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-300">
                  {SITE.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
                {SITE.headline}
              </p>
              <p className="max-w-[550px] text-neutral-600 dark:text-neutral-300 md:text-lg leading-relaxed">
                Conecto las herramientas de un negocio para que trabajen solas: formularios que guardan y avisan,
                citas que se gestionan sin intervención y datos que llegan donde tienen que llegar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Ver proyectos
                <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors font-medium backdrop-blur-sm"
              >
                <Mail className="mr-2 h-4 w-4 text-blue-500" aria-hidden="true" />
                Contactar
              </a>
            </div>
          </div>

          {/* Código real: el nodo Code de un flujo de n8n */}
          <div className="relative lg:ml-auto w-full max-w-lg motion-safe:animate-fade-up [animation-delay:200ms]">
            <figure className="rounded-2xl overflow-hidden border border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl">
              <figcaption className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-2" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs font-mono text-neutral-300">n8n · nodo Code · normalizar-lead.js</span>
              </figcaption>
              <pre className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed text-neutral-200 overflow-x-auto">
                <code>
                  <span className="text-neutral-400">{"// Normaliza un lead antes de guardarlo"}</span>{"\n"}
                  <span className="text-purple-300">const</span> lead = $input.<span className="text-blue-300">first</span>().json;{"\n"}
                  <span className="text-purple-300">return</span> [{"{"}{"\n"}
                  {"  "}json: {"{"}{"\n"}
                  {"    "}nombre: lead.nombre.<span className="text-blue-300">trim</span>(),{"\n"}
                  {"    "}email: lead.email.<span className="text-blue-300">toLowerCase</span>(),{"\n"}
                  {"    "}origen: lead.utm_source ?? <span className="text-green-300">'web'</span>,{"\n"}
                  {"    "}recibido: <span className="text-purple-300">new</span> <span className="text-yellow-200">Date</span>().<span className="text-blue-300">toISOString</span>(),{"\n"}
                  {"  "}{"}"},{"\n"}
                  {"}"}];
                </code>
              </pre>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
