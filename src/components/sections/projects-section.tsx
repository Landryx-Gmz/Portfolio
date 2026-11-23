import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  type: string;
  problem: string;
  work: string[];
  result: string;
  // Captura 16:10 en public/projects/<image>-<ancho>.webp, generada en varios anchos.
  image: string;
  imageWidths: number[];
  imageAlt: string;
  tags: string[];
  live?: string;
}

// Cada caso sigue la plantilla: problema → lo que hice → resultado → tecnologías.
const PROJECTS: Project[] = [
  {
    title: "Mentoría Sana: web y captación automatizada",
    type: "Web + automatización",
    problem:
      "La mentora tenía una web antigua y los contactos que llegaban había que gestionarlos a mano.",
    work: [
      "Rediseño de la web, desplegada en Cloudflare.",
      "Formulario de captación con Formspark.",
      "Automatización con n8n: cada formulario se guarda y avisa sin intervención.",
    ],
    result: "Más de 400 contactos en las primeras semanas tras el lanzamiento.",
    image: "lidia",
    imageWidths: [640, 960, 1024],
    imageAlt: "Captura de la web de Mentoría Sana",
    tags: ["Next.js", "Cloudflare", "n8n", "Formspark"],
    live: "https://lidiaperezperez.com/",
  },
  {
    title: "JadixTech: web en 3D y captación de clientes",
    type: "Web 3D + API",
    problem:
      "La agencia necesitaba una web que no pareciera una plantilla y una forma fiable de recibir solicitudes de diagnóstico, sin spam.",
    work: [
      "Diseño y despliegue de la landing con Astro y una escena 3D a medida (React Three Fiber). En móviles lentos o con mala conexión se muestra una versión sin animación.",
      "API propia en Cloudflare Workers con Hono y Zod: valida el formulario, filtra bots con Turnstile y guarda cada lead en PostgreSQL (Neon) con Drizzle.",
      "Aviso por email con Resend en cada solicitud.",
      "Preparada para crecer: la misma API tendrá las rutas del futuro panel de gestión de clientes.",
    ],
    result: "En producción desde noviembre de 2026, con la web y la API publicadas en el dominio de la agencia.",
    image: "jadixtech",
    imageWidths: [640, 960, 1280, 1440],
    imageAlt: "Captura de la web de JadixTech",
    tags: ["Astro", "React Three Fiber", "TypeScript", "Hono", "Zod", "PostgreSQL", "Cloudflare Workers"],
    live: "https://jadixtech.com/",
  },
  {
    title: "DagaVision: landing en 3D",
    type: "Web 3D",
    problem:
      "Una empresa de videovigilancia, energía solar y software necesitaba presentar sus tres servicios en una sola página y recibir los contactos por WhatsApp, que es como trabaja con sus clientes.",
    work: [
      "Diseño de la página: secciones a pantalla completa, titulares grandes y un solo botón por sección.",
      "Modelado de una escena 3D basada en su logo (un planeta metálico con pistas de circuito y un anillo) que cambia con el scroll.",
      "Cada botón abre WhatsApp con un mensaje ya escrito según el servicio.",
    ],
    result: "Publicada en su dominio: el cliente recibe cada contacto sabiendo ya qué servicio le interesa.",
    image: "dagavision",
    imageWidths: [640, 960, 1280, 1440],
    imageAlt: "Captura de la web de DagaVision",
    tags: ["Astro", "React Three Fiber", "Three.js", "TypeScript", "Tailwind CSS"],
    live: "https://dagavision.com/",
  },
];

// Escritorio: la captura ocupa algo menos de la mitad de la tarjeta. Móvil y tablet: ancho completo.
const IMAGE_SIZES = "(min-width: 1280px) 600px, (min-width: 1024px) 45vw, calc(100vw - 4.5rem)";

// Captura enmarcada como una ventana de navegador sencilla (barra fina con tres círculos).
function ProjectScreenshot({ project }: { project: Project }) {
  const widths = project.imageWidths;
  const largest = widths[widths.length - 1]!;
  const src = (w: number) => `/projects/${project.image}-${w}.webp`;

  return (
    <figure className="group/shot w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 shadow-lg">
      <div className="flex items-center gap-1.5 h-6 sm:h-7 px-3 border-b border-neutral-200 dark:border-white/10" aria-hidden="true">
        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 dark:bg-neutral-950">
        <img
          src={src(largest)}
          srcSet={widths.map((w) => `${src(w)} ${w}w`).join(", ")}
          sizes={IMAGE_SIZES}
          alt={project.imageAlt}
          width={largest}
          height={Math.round(largest / 1.6)}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 ease-out motion-safe:group-hover/shot:scale-[1.02]"
        />
      </div>
    </figure>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col lg:flex-row lg:items-center rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-lg transition-shadow hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.25)]">
      <div className="p-5 pb-0 sm:p-6 sm:pb-0 lg:p-8 lg:pr-0 lg:w-1/2">
        <ProjectScreenshot project={project} />
      </div>

      <div className="p-5 sm:p-6 lg:p-8 flex flex-col lg:w-1/2">
        <p className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
          {project.type}
        </p>
        <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-neutral-900 dark:text-white">{project.title}</h3>

        <dl className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          <div>
            <dt className="font-semibold text-neutral-900 dark:text-white">El problema</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-900 dark:text-white">Lo que hice</dt>
            <dd>
              <ul className="list-disc pl-5 space-y-1">
                {project.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-900 dark:text-white">El resultado</dt>
            <dd>{project.result}</dd>
          </div>
        </dl>

        <ul className="flex flex-wrap gap-2 mb-6" aria-label="Tecnologías">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs font-mono font-medium px-2 py-1 bg-blue-500/5 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-md border border-blue-500/20"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center text-sm font-bold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="mr-2 w-4 h-4" aria-hidden="true" />
            Ver web
            <span className="sr-only"> de {project.title} (se abre en otra pestaña)</span>
          </a>
        )}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Proyectos</h2>
          <p className="max-w-[700px] mx-auto mt-6 text-neutral-600 dark:text-neutral-400 md:text-xl leading-relaxed">
            Qué problema había, qué hice yo y qué pasó después.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
