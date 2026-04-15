"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Server, Layout, Award, Zap, Cloud } from "lucide-react";
import { CertificationsDrawer } from "@/components/sections/certifications-drawer";

const skills = [
  {
    category: "Frontend & UI",
    icon: <Layout className="w-6 h-6 mb-4 text-cyan-500" />,
    items: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind 4", "Shadcn UI", "Framer Motion"]
  },
  {
    category: "Arquitectura & Backend",
    icon: <Server className="w-6 h-6 mb-4 text-emerald-500" />,
    items: ["Clean Architecture", "TurboRepo", "DDD", "Prisma & NextAuth", "Python & Flask", "MySQL / PostgreSQL"]
  },
  {
    category: "Automatización",
    icon: <Zap className="w-6 h-6 mb-4 text-yellow-500" />,
    items: ["n8n (Workflows)", "Resend", "Formspark", "Webhooks", "Integración de APIs", "Procesos Background"]
  },
  {
    category: "Inteligencia Artificial",
    icon: <BrainCircuit className="w-6 h-6 mb-4 text-blue-500" />,
    items: ["Vercel AI SDK", "Grok API", "OpenAI", "LangChain", "Prompt Engineering", "Agentes Autónomos"]
  },
  {
    category: "Cloud & Testing",
    icon: <Cloud className="w-6 h-6 mb-4 text-purple-500" />,
    items: ["Cloudflare Edge (OpenNext)", "Railway", "Vitest", "Zod", "Docker", "GitHub Actions"]
  }
];

export function Skills() {
  const [drawer_open, set_drawer_open] = useState(false);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <>
      <section id="skills" className="py-24 relative min-h-[500px]">
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

          {/* Opcion 2: Dynamic Tabs Menu */}
          <div className="flex flex-col items-center">
            {/* Menú de Píldoras */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 max-w-4xl">
              {skills.map((skill, index) => {
                const isActive = activeTab === index;
                // Prevenimos que el margen bottom del icono descuadre la tab
                const skillIcon = <div className={`[&>svg]:mb-0 [&>svg]:w-5 [&>svg]:h-5 transition-all duration-300 ${isActive ? "" : "opacity-80 group-hover:scale-110 group-hover:brightness-125"}`}>{skill.icon}</div>;
                return (
                  <button
                    key={skill.category}
                    onClick={() => setActiveTab(isActive ? null : index)}
                    className={`group relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                      ${isActive 
                        ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]" 
                        : "text-neutral-300 bg-neutral-900/40 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white shadow-sm hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]"
                      } border backdrop-blur-md`}
                  >
                    {skillIcon}
                    {skill.category}
                  </button>
                );
              })}
            </div>

            {/* Zona de Visualización Dinámica de Burbujas - Oculta inicialmente */}
            <AnimatePresence>
              {activeTab !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
                  exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full max-w-3xl relative flex flex-col items-center justify-center p-8 rounded-3xl border border-neutral-200 dark:border-white/5 bg-white/5 dark:bg-[#020617]/50 backdrop-blur-md overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab} // Clave dinámica para desmontar/montar
                      initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-wrap justify-center gap-4"
                    >
                      {skills[activeTab].items.map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className="px-5 py-2.5 rounded-full text-sm font-mono font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.2)] hover:bg-cyan-500/20 hover:scale-105 hover:shadow-[0_0_25px_-2px_rgba(6,182,212,0.4)] transition-all cursor-default"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Botón para abrir el drawer de certificaciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => set_drawer_open(true)}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/60 hover:text-white hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)] transition-all duration-300 font-medium"
            >
              <Award className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver mis Certificaciones
            </button>
          </motion.div>
        </div>
      </section>

      {/* Drawer deslizante */}
      <CertificationsDrawer is_open={drawer_open} on_close={() => set_drawer_open(false)} />
    </>
  );
}
