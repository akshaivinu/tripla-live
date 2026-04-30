"use client";

import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";
import { User, Rocket, Calendar } from "lucide-react";

const PERSONAS = [
  {
    id: "tenant",
    label: "Retail Tenant",
    description: "Looking for flagship opportunities and high-traffic retail spaces.",
    icon: User,
    targetIndex: 2, // Commercial
  },
  {
    id: "sponsor",
    label: "Sponsor / Brand Partner",
    description: "Interested in high-impact brand activations and partnerships.",
    icon: Rocket,
    targetIndex: 7, // Events
  },
  {
    id: "organiser",
    label: "Event Organiser",
    description: "Planning large-scale events at world-class venues.",
    icon: Calendar,
    targetIndex: 6, // Events
  },
];

export default function PersonaStage() {
  const { setPersonaSelected, goToSlide } = useDeck();

  const handleSelect = (index: number) => {
    setPersonaSelected(true);
    goToSlide(index);
  };

  return (
    <div className="fixed inset-0 z-[600] bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-tight text-white mb-4">
            Who are you?
          </h2>
          <p className="text-white/50 uppercase tracking-[0.3em] text-xs">
            Tailoring the experience for your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERSONAS.map((persona, idx) => (
            <motion.button
              key={persona.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              onClick={() => handleSelect(persona.targetIndex)}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[var(--gold)]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-[var(--gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-white/[0.05] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--gold)]/10 transition-all duration-500">
                <persona.icon size={28} className="text-white group-hover:text-[var(--gold)] transition-colors duration-500" />
              </div>

              <h3 className="relative z-10 text-lg font-bold text-white mb-3 group-hover:text-[var(--gold)] transition-colors">
                {persona.label}
              </h3>
              
              <p className="relative z-10 text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                {persona.description}
              </p>

              {/* Bottom Line Decoration */}
              <div className="absolute bottom-0 left-0 h-1 bg-[var(--gold)] w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
