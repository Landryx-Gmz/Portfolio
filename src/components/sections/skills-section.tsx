import type { ReactNode } from "react";

// Sección estática. `children` recibe desde index.astro las islas con JavaScript:
// las pestañas de tecnologías y el botón de certificados.
export function SkillsSection({ children }: { children?: ReactNode }) {
  return (
    <section id="skills" className="py-24 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tecnologías</h2>
          <p className="max-w-[700px] mx-auto mt-4 text-neutral-600 dark:text-neutral-400 md:text-xl">
            Agrupadas por lo que resuelvo con cada una.
          </p>
        </div>

        {children && <div className="flex flex-col items-center gap-12">{children}</div>}
      </div>
    </section>
  );
}
