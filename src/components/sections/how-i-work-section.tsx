import { Search, Workflow, ShieldCheck, type LucideIcon } from "lucide-react";

interface Step {
  title: string;
  text: string;
  deliverable: string;
  icon: LucideIcon;
}

const STEPS: Step[] = [
  {
    title: "Analizo el proceso",
    text: "Reviso contigo qué tareas se hacen a mano, cuánto tiempo consumen y dónde se pierden datos o clientes.",
    deliverable: "Mapa del proceso",
    icon: Search,
  },
  {
    title: "Diseño y construyo la automatización",
    text: "Conecto tus herramientas con n8n y APIs, y añado código en TypeScript cuando el flujo lo necesita.",
    deliverable: "Flujo funcionando",
    icon: Workflow,
  },
  {
    title: "La dejo lista para funcionar sola",
    text: "Alertas si algo falla, copias de seguridad de los datos y documentación clara para que sepas qué hace y cómo.",
    deliverable: "Guía y alertas",
    icon: ShieldCheck,
  },
];

// Conector entre dos pasos: horizontal en escritorio y vertical en móvil,
// con un punto que lo recorre como los datos entre nodos de n8n.
function Connector() {
  return (
    <div aria-hidden="true">
      {/* Móvil: vertical, en el hueco bajo la tarjeta */}
      <div className="md:hidden absolute left-1/2 top-full h-10 w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/60 to-cyan-400/60">
        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.7)] motion-safe:animate-flow-y" />
      </div>
      {/* Escritorio: horizontal, en el hueco a la derecha de la tarjeta */}
      <div className="hidden md:block absolute left-full top-14 w-10 h-px bg-gradient-to-r from-blue-500/60 to-cyan-400/60">
        <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.7)] motion-safe:animate-flow-x" />
      </div>
    </div>
  );
}

export function HowIWorkSection() {
  return (
    <section id="how" className="py-24 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Cómo trabajo</h2>
        <ol className="grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === STEPS.length - 1;
            return (
              <li
                key={step.title}
                className="group relative flex flex-col rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-neutral-950/70 backdrop-blur-xl p-8 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.35)]"
              >
                {/* Puertos de entrada y salida, como en un nodo de n8n */}
                {index > 0 && (
                  <span aria-hidden="true" className="hidden md:block absolute -left-1.5 top-14 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-blue-500/70 bg-neutral-50 dark:bg-neutral-950" />
                )}
                {!isLast && (
                  <span aria-hidden="true" className="hidden md:block absolute -right-1.5 top-14 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-cyan-400/70 bg-neutral-50 dark:bg-neutral-950" />
                )}

                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_-4px_rgba(59,130,246,0.6)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">Paso {index + 1}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{step.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">{step.text}</p>

                <p className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-800 dark:text-cyan-300">
                  Entregas: {step.deliverable}
                </p>

                {!isLast && <Connector />}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
