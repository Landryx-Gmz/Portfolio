"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Rocket } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "JadixTech",
    type: "SaaS Platform - En Desarrollo",
    description: "Plataforma SaaS escalable para desarrollo de software, ecommerce y landing pages. Actúo como colaborador principal diseñando la arquitectura base.",
    image: "/projects/jadix.jpg", // Necesitaremos placeholders
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "Docker", "Clean Architecture"],
    links: {
      live: "https://jadixtech.com/"
    },
    featured: true
  },
  {
    title: "Mentoria Sana - Lidia Pérez",
    type: "Landing Page & Funnel",
    description: "Desarrollo de landing pages optimizadas para conversión y funnels de venta para servicios de mentoría y webinars.",
    image: "/projects/lidia.jpg",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Performance"],
    links: {
      live: "https://lidiaperezperez.com/"
    },
    featured: true
  },
  {
    title: "Clean Architecture Setup",
    type: "Open Source",
    description: "Template base para proyectos robustos aplicando principios SOLID y Clean Architecture para una alta mantenibilidad.",
    image: "/projects/clean.jpg",
    tags: ["TypeScript", "Node.js", "Jest", "SOLID"],
    links: {
      github: "https://github.com/Landryx-Gmz/Clean-Architecture-TypeScript"
    },
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-neutral-100/50 dark:bg-neutral-900/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos Destacados</h2>
            <p className="max-w-[700px] mt-4 text-neutral-500 dark:text-neutral-400 md:text-xl">
              Aplicando tecnología avanzada para resolver problemas reales.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm transition-all hover:shadow-md ${project.featured ? 'lg:col-span-2 lg:flex-row' : ''}`}
            >
              <div className={`relative bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden ${project.featured ? 'lg:w-1/2 min-h-[300px]' : 'h-48'}`}>
                {/* Placeholder para la imagen del proyecto */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Rocket className="w-16 h-16 text-neutral-400 opacity-50" />
                </div>
              </div>

              <div className={`p-6 flex flex-col justify-center ${project.featured ? 'lg:w-1/2' : ''}`}>
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                  {project.type}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Ver Proyecto
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium hover:text-blue-500 transition-colors"
                    >
                      <Github className="mr-2 w-4 h-4" />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
