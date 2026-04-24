"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Rocket, ChevronDown } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "JadixTech - Ecosistema de Software",
    type: "SaaS Platform & AI Automation",
    description: "Desarrollo y diseño de arquitectura base (Turbo Monorepo & DDD) orquestado mediante Inteligencia Artificial. Cuenta con dashboard, pasarela de pagos y captación automatizada combinando Resend y un Chatbot alimentado por Grok.",
    image: "/projects/jadix.png",
    objectPosition: "object-center",
    imageStyle: "object-cover", 
    tags: ["Next.js", "TurboRepo", "DDD", "NextAuth", "Grok API", "Resend", "Prisma"],
    links: {
      live: "https://jadixtech.com/"
    },
    featured: true
  },
  {
    title: "Mentoría Sana - Lidia Pérez",
    type: "High-Conversion Funnel & Automations",
    description: "Rediseño completo enfocado en estética premium y performance para OpenNext / Cloudflare Edge. Sustituyó una web obsoleta, logrando captar +400 leads reales en sus primeros 4 días. Automatizado mediante n8n (Railway) y Formspark.",
    image: "/projects/lidia.png",
    objectPosition: "object-top",
    imageStyle: "object-cover", 
    tags: ["Next.js", "Cloudflare Pages", "n8n", "Formspark", "Railway", "Conversion UI"],
    links: {
      live: "https://lidiaperezperez.com/"
    },
    featured: true
  },
  {
    title: "Jadix Landing Builder",
    type: "Generador de Plantillas UI",
    description: "Motor interno para generar landing pages de alta conversión basadas en React 19 y Tailwind 4. Integra el ecosistema Shadcn UI, Recharts y validaciones con Zod. Un producto preparado para escalar con cobertura Vitest.",
    emoji: "🚀",
    tags: ["React 19", "Tailwind 4", "Shadcn UI", "Vitest", "Zod"],
    links: {
      github: "mailto:led_and@hotmail.es?subject=Solicitud%20de%20acceso%20a%20Jadix%20Landing%20Builder&body=Hola%20Andy%2C%0A%0AMe%20gustar%C3%ADa%20solicitar%20acceso%20al%20repositorio%20privado%20Jadix%20Landing%20Builder.%0A%0AMi%20usuario%20o%20correo%20de%20GitHub%20es%3A%20%5BESCRIBE%20TU%20USUARIO%20O%20EMAIL%20AQUI%5D%0A%0ASaludos.",
      githubPrivate: true
    },
    featured: false
  },
  {
    title: "Clean Architecture Setup",
    type: "Open Source Boilerplate",
    description: "Template base para proyectos robustos aplicando principios SOLID y Clean Architecture para asegurar alta mantenibilidad y bajo acoplamiento.",
    emoji: "🏗️",
    tags: ["TypeScript", "Node.js", "Jest", "SOLID"],
    links: {
      github: "https://github.com/Landryx-Gmz/Clean-Architecture-TypeScript"
    },
    featured: false
  },
  {
    title: "AI Task Manager CLI",
    type: "Intelligent CLI Tool",
    description: "Gestor de tareas por línea de comandos que integra la API de OpenAI (GPT-3.5) para analizar objetivos complejos y desglosarlos automáticamente en subtareas accionables. Incluye persistencia en formato JSON y tests unitarios.",
    emoji: "🧠",
    tags: ["Python", "OpenAI API", "CLI", "Pytest", "JSON"],
    links: {
      github: "https://github.com/Landryx-Gmz/task-manager"
    },
    featured: false
  }
];

interface Project {
  title: string;
  type: string;
  description: string;
  image?: string;
  emoji?: string;
  objectPosition?: string;
  imageStyle?: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
    githubPrivate?: boolean;
  };
  featured: boolean;
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const container_ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container_ref,
    offset: ["start end", "end start"]
  });

  // Efecto Parallax: la imagen se mueve de -10% a 10% de su posición original
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={container_ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ position: "relative" }}
      className={`relative flex flex-col rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-lg transition-all hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] ${project.featured ? 'lg:col-span-2 lg:flex-row' : 'h-full'}`}
    >
      {project.image && (
        <div className={`relative bg-neutral-100 dark:bg-[#020617] overflow-hidden ${project.featured ? 'lg:w-1/2 min-h-[300px] lg:min-h-[400px]' : 'h-64'}`}>
          <a href={project.links.live || project.links.github} target={project.links.github?.startsWith('mailto:') ? '_self' : '_blank'} rel="noreferrer" className="block w-full h-full">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`${project.imageStyle} ${project.objectPosition} opacity-90 hover:opacity-100 transition-opacity duration-500`}
              />
            </motion.div>
          </a>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
      )}

      <div className={`p-8 flex flex-col ${project.featured ? 'lg:w-1/2 justify-center' : 'flex-1'}`}>
        <div className="flex items-center gap-3 mb-3">
          {project.emoji && <span className="text-xl md:text-2xl">{project.emoji}</span>}
          <div className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
            {project.type}
          </div>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">{project.title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono font-medium px-2 py-1 bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md border border-blue-500/20">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-auto">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-bold text-neutral-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
            >
              <ExternalLink className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              Ver Proyecto
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target={project.links.github.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noreferrer"
              className="inline-flex items-center text-sm font-bold text-neutral-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
            >
              <Github className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              {project.links.githubPrivate ? "Solicitar Acceso (Privado)" : "Código Fuente"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [showMore, setShowMore] = useState(false);
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Proyectos Seleccionados
            </h2>
            <p className="max-w-[700px] mt-6 text-neutral-500 dark:text-neutral-400 md:text-xl leading-relaxed">
              Una muestra de soluciones en producción desarrolladas para clientes reales, optimizadas para rendimiento y escalabilidad.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-16 flex flex-col items-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md text-neutral-900 dark:text-white font-medium hover:bg-neutral-100 dark:hover:bg-white/5 transition-all text-sm shadow-sm"
            >
              {showMore ? "Ocultar proyectos" : "Ver más proyectos"}
              <motion.div animate={{ rotate: showMore ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full overflow-hidden mt-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
                    {otherProjects.map((project, index) => (
                      <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
