import { motion, AnimatePresence } from "framer-motion";
import { Award, Star, X, ArrowLeft } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
  featured?: boolean;
}

const CERTIFICATIONS: Certificate[] = [
  {
    id: "bigmaster-ia",
    title: "Máster en Desarrollo de Software con IA",
    issuer: "Bigmaster",
    image: "/certificates/bigmaster-ia.png",
    featured: true,
  },
  {
    id: "programador-sistemas",
    title: "Programador de Sistemas Informáticos",
    issuer: "Formación Oficial",
    image: "/certificates/programador-sistemas.png",
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
];

const featuredCert = CERTIFICATIONS.find((c) => c.featured);
const restCerts = CERTIFICATIONS.filter((c) => !c.featured);

// No hay nada a lo que suscribirse: solo distingue servidor (false) y navegador (true).
const subscribeNoop = () => () => {};

interface CertificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CertificationsDrawer({ isOpen, onClose }: CertificationsDrawerProps) {
  // Cerrar con ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // El panel se dibuja en <body> con un portal para quedar por encima de la
  // cabecera fija y no recortarse dentro de la sección. Solo existe en el navegador.
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);

  // Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certifications-title"
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-2xl flex flex-col overflow-x-hidden bg-neutral-950 border-l border-white/10 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 px-4 sm:px-8 py-5 sm:py-6 border-b border-white/10 flex-shrink-0">
              <div>
                <h2 id="certifications-title" className="text-2xl font-bold text-white">Certificaciones</h2>
                <p className="text-sm text-neutral-400 mt-0.5">Formación y cursos</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden px-4 sm:px-8 py-6 space-y-8">

              {/* Back button — top of scrollable area */}
              <button
                onClick={onClose}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-neutral-400 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm font-medium">Volver</span>
              </button>

              {/* Featured Certificate */}
              {featuredCert && (
                <div className="group relative rounded-2xl overflow-hidden border border-blue-500/30 bg-black/60 shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)]">
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <Star className="w-3 h-3 fill-white" />
                    Certificación Destacada
                  </div>
                  <div className="relative w-full h-44 sm:h-56">
                    <img
                      src={featuredCert.image}
                      alt={featuredCert.title}
                      className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <div className="inline-flex items-center text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20 mb-2">
                      <Award className="w-3 h-3 mr-1" />
                      {featuredCert.issuer}
                    </div>
                    <h3 className="text-xl font-bold text-white">{featuredCert.title}</h3>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {restCerts.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="group min-w-0 p-4 rounded-xl border border-white/5 bg-white/[0.03] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                    >
                      <div className="relative w-full h-24 mb-3 rounded-lg overflow-hidden bg-white/5">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="absolute inset-0 h-full w-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
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

              {/* Back button — bottom of scrollable area */}
              <div className="pt-4 flex justify-center">
                <button
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/60 hover:text-white hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.5)] transition-all duration-300 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>Volver</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
