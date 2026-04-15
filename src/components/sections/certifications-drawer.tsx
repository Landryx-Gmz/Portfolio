"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, Star, X } from "lucide-react";
import { useEffect } from "react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
  featured?: boolean;
}

const certifications: Certificate[] = [
  {
    id: "bigmaster-ia",
    title: "Máster en Desarrollo de Software con IA",
    issuer: "Bigmaster",
    image: "/certificates/bigmaster-ia.png",
    featured: true,
  },
  {
    id: "ibm-python",
    title: "Conceptos Básicos de Python",
    issuer: "IBM SkillsBuild",
    image: "/certificates/ibm-python.png",
  },
  {
    id: "ibm-poo-python",
    title: "POO con Python",
    issuer: "IBM SkillsBuild",
    image: "/certificates/ibm-poo-python.png",
  },
  {
    id: "fastapi-udemy",
    title: "FastAPI + MongoDB + Vercel",
    issuer: "Udemy",
    image: "/certificates/fastapi-udemy.png",
  },
  {
    id: "js-mouredev",
    title: "JavaScript desde Cero",
    issuer: "MoureDev Pro",
    image: "/certificates/js-mouredev.png",
  },
  {
    id: "ibm-web",
    title: "Fundamentos de Desarrollo Web",
    issuer: "IBM SkillsBuild",
    image: "/certificates/ibm-web.png",
  },
  {
    id: "ibm-git",
    title: "Git & GitHub",
    issuer: "IBM SkillsBuild",
    image: "/certificates/ibm-git.png",
  },
  {
    id: "programador-sistemas",
    title: "Programador de Sistemas Informáticos",
    issuer: "Formación Oficial",
    image: "/certificates/programador-sistemas.png",
  },
];

const featured_cert = certifications.find((c) => c.featured);
const rest_certs = certifications.filter((c) => !c.featured);

interface CertificationsDrawerProps {
  is_open: boolean;
  on_close: () => void;
}

export function CertificationsDrawer({ is_open, on_close }: CertificationsDrawerProps) {
  // Cerrar con ESC
  useEffect(() => {
    const handle_key = (e: KeyboardEvent) => {
      if (e.key === "Escape") on_close();
    };
    window.addEventListener("keydown", handle_key);
    return () => window.removeEventListener("keydown", handle_key);
  }, [on_close]);

  // Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = is_open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [is_open]);

  return (
    <AnimatePresence>
      {is_open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={on_close}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl flex flex-col bg-neutral-950 border-l border-white/10 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 flex-shrink-0">
              <div>
                <h2 className="text-2xl font-bold text-white">Certificaciones</h2>
                <p className="text-sm text-neutral-400 mt-0.5">Formación y logros validados</p>
              </div>
              <button
                onClick={on_close}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">

              {/* Featured Certificate */}
              {featured_cert && (
                <div className="group relative rounded-2xl overflow-hidden border border-blue-500/30 bg-black/60 shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)]">
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <Star className="w-3 h-3 fill-white" />
                    Certificación Destacada
                  </div>
                  <div className="relative w-full h-56">
                    <Image
                      src={featured_cert.image}
                      alt={featured_cert.title}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <div className="inline-flex items-center text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20 mb-2">
                      <Award className="w-3 h-3 mr-1" />
                      {featured_cert.issuer}
                    </div>
                    <h3 className="text-xl font-bold text-white">{featured_cert.title}</h3>
                    <p className="text-sm text-neutral-400 mt-2">
                      Formación intensiva en desarrollo de software aplicando IA como herramienta central en el ciclo completo de desarrollo.
                    </p>
                  </div>
                </div>
              )}

              {/* Rest of Certificates */}
              <div>
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">
                  Otras certificaciones
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {rest_certs.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="group p-4 rounded-xl border border-white/5 bg-white/[0.03] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                    >
                      <div className="relative w-full h-24 mb-3 rounded-lg overflow-hidden bg-white/5">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="inline-flex items-center text-[10px] font-mono text-blue-400/70 bg-blue-400/5 px-2 py-0.5 rounded border border-blue-400/10 mb-1.5">
                        <Award className="w-2.5 h-2.5 mr-1" />
                        {cert.issuer}
                      </div>
                      <p className="text-xs font-semibold text-white/80 leading-snug">
                        {cert.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
