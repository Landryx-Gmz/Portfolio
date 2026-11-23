import { useRef, useState, type KeyboardEvent } from "react";
import { Zap, Layout, Server, Rocket, type LucideIcon } from "lucide-react";

interface SkillGroup {
  id: string;
  category: string;
  purpose: string;
  icon: LucideIcon;
  items: string[];
}

const SKILLS: SkillGroup[] = [
  {
    id: "automatizacion",
    category: "Automatización",
    purpose: "Conectar herramientas y hacer que los procesos funcionen solos.",
    icon: Zap,
    items: ["n8n", "APIs REST y webhooks", "Resend"],
  },
  {
    id: "frontend",
    category: "Frontend",
    purpose: "Webs rápidas, accesibles y fáciles de mantener.",
    icon: Layout,
    items: ["TypeScript", "React", "Astro", "Tailwind CSS"],
  },
  {
    id: "backend",
    category: "Backend y datos",
    purpose: "APIs propias, validación de datos y bases de datos.",
    icon: Server,
    items: ["Node.js", "Hono", "Zod", "PostgreSQL", "Drizzle"],
  },
  {
    id: "despliegue",
    category: "Despliegue y calidad",
    purpose: "Publicar con garantías: control de versiones, pruebas y alojamiento.",
    icon: Rocket,
    items: ["Git y GitHub", "Cloudflare", "Vercel", "Docker", "Vitest"],
  },
];

// Pestañas accesibles: se manejan con ratón y con las flechas del teclado.
export function SkillsTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = SKILLS[active]!;

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: SKILLS.length - 1,
    };
    const next = keys[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const index = (next + SKILLS.length) % SKILLS.length;
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  return (
    <div className="w-full max-w-4xl flex flex-col items-center">
      <div
        role="tablist"
        aria-label="Categorías de tecnologías"
        onKeyDown={onKeyDown}
        className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8"
      >
        {SKILLS.map((skill, index) => {
          const selected = index === active;
          const Icon = skill.icon;
          return (
            <button
              key={skill.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`tab-${skill.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${skill.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer ${
                selected
                  ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-800 dark:text-cyan-300 shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]"
                  : "bg-white/50 dark:bg-neutral-950/80 border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-cyan-500/30"
              }`}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {skill.category}
            </button>
          );
        })}
      </div>

      <div
        key={group.id}
        id={`panel-${group.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${group.id}`}
        className="w-full rounded-3xl border border-neutral-200 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl p-8 text-center motion-safe:animate-fade-up"
      >
        <p className="text-neutral-600 dark:text-neutral-300 mb-6">{group.purpose}</p>
        <ul className="flex flex-wrap justify-center gap-3">
          {group.items.map((item) => (
            <li
              key={item}
              className="px-5 py-2.5 rounded-full text-sm font-mono font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
