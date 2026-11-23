import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  type: string;
  problem: string;
  work: string[];
  result: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  objectPosition: string;
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
    result: "Más de 400 contactos en los primeros 4 días tras el lanzamiento.",
    image: "/projects/lidia.png",
    imageAlt: "Captura de la web de Mentoría Sana",
    imageWidth: 1024,
    imageHeight: 1024,
    objectPosition: "object-top",
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
    image: "/projects/jadixtech.webp",
    imageAlt: "Portada de JadixTech con un colibrí en 3D",
    imageWidth: 1280,
    imageHeight: 900,
    objectPosition: "object-center",
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
    image: "/projects/dagavision.webp",
    imageAlt: "Portada de DagaVision con un planeta en 3D",
    imageWidth: 1843,
    imageHeight: 847,
    objectPosition: "object-[70%_50%]",
    tags: ["Astro", "React Three Fiber", "Three.js", "TypeScript", "Tailwind CSS"],
    live: "https://dagavision.com/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-lg transition-shadow hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.25)]">
      <div className="relative lg:w-1/2 h-64 lg:h-auto lg:min-h-[380px] bg-neutral-100 dark:bg-[#020617] overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          width={project.imageWidth}
          height={project.imageHeight}
          className={`absolute inset-0 h-full w-full object-cover ${project.objectPosition}`}
        />
      </div>

      <div className="p-8 flex flex-col lg:w-1/2">
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
