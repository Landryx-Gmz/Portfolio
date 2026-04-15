"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Star } from "lucide-react";

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

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Certificaciones & Formación
            </h2>
            <p className="max-w-[700px] mt-4 text-neutral-500 dark:text-neutral-400 md:text-xl">
              Comprometido con el aprendizaje continuo y la validación de conocimientos en el ecosistema de IA y desarrollo.
            </p>
          </motion.div>
        </div>

        {/* Featured Certificate — Bigmaster */}
        {featured_cert && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-black/50 backdrop-blur-xl shadow-[0_0_60px_-10px_rgba(59,130,246,0.4)] p-1">
              {/* Featured badge */}
              <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-1.5 bg-blue-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                <Star className="w-3 h-3 fill-white" />
                Certificación Destacada
              </div>

              <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden">
                {/* Image side */}
                <div className="relative lg:w-2/3 h-[280px] lg:h-[360px] bg-black/60">
                  <Image
                    src={featured_cert.image}
                    alt={featured_cert.title}
                    fill
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  {/* Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 lg:block hidden pointer-events-none"></div>
                </div>

                {/* Info side */}
                <div className="lg:w-1/3 flex flex-col justify-center p-8 lg:pl-4">
                  <div className="inline-flex items-center text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20 mb-4 w-fit">
                    <Award className="w-3 h-3 mr-1.5" />
                    {featured_cert.issuer}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
                    {featured_cert.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Formación intensiva en desarrollo de software aplicando Inteligencia Artificial como herramienta central en el ciclo de vida del desarrollo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Rest of Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest_certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative p-5 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-1"
            >
              {/* Cert image preview */}
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-white/5 border border-white/5">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="inline-flex items-center text-[10px] font-mono text-blue-400/80 bg-blue-400/5 px-2 py-1 rounded border border-blue-400/10 mb-2">
                <Award className="w-2.5 h-2.5 mr-1" />
                {cert.issuer}
              </div>
              <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors leading-snug">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
