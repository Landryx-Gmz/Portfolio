import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      {/* <Newsletter /> — oculto hasta consolidar la integración de Formspark/n8n */}
      <Footer />
    </>
  );
}
