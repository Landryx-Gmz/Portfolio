import { useState } from "react";
import { Award } from "lucide-react";
import { CertificationsDrawer } from "@/components/sections/certifications-drawer";

// Isla pequeña: solo el botón y el panel de certificados llevan JavaScript.
export function CertificationsButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/60 transition-all duration-300 font-medium cursor-pointer"
      >
        <Award className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
        Ver mis certificaciones
      </button>
      <CertificationsDrawer isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
