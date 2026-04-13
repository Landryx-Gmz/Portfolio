"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, ShieldCheck, Database, Server, Layout } from "lucide-react";

const skills = [
  {
    category: "Inteligencia Artificial",
    icon: <BrainCircuit className="w-6 h-6 mb-4 text-blue-500" />,
    items: ["LangChain", "OpenAI API", "Vercel AI SDK", "Prompt Engineering", "Modelos Locales", "Automatización (n8n)"]
  },
  {
    category: "Backend & Arquitectura",
    icon: <Server className="w-6 h-6 mb-4 text-emerald-500" />,
    items: ["Python", "FastAPI", "Flask", "Clean Architecture", "Microservicios", "REST API / OpenAPI"]
  },
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 mb-4 text-cyan-500" />,
    items: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Bases de Datos & DevOps",
    icon: <Database className="w-6 h-6 mb-4 text-purple-500" />,
    items: ["PostgreSQL", "MySQL", "SQLite", "Docker", "CI/CD (GitHub Actions)", "Cloud (GCP)"]
  },
  {
    category: "Calidad & Seguridad",
    icon: <ShieldCheck className="w-6 h-6 mb-4 text-red-500" />,
    items: ["Testing", "OWASP Top 10", "Sentry", "Git", "CodeRabbit"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stack Tecnológico</h2>
            <p className="max-w-[700px] mt-4 text-neutral-500 dark:text-neutral-400 md:text-xl">
              Especializado en la orquestación de IA y el desarrollo Full-Stack bajo estándares de Clean Architecture.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors group"
            >
              {skill.icon}
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
