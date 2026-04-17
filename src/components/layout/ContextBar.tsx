"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";

const contextMap: Record<string, { label: string; stat: string }> = {
  hero: { label: "Introduction", stat: "Mall of America" },
  scale: { label: "Property Metrics", stat: "5.6M sq ft GLA" },
  commercial: { label: "Retail Ecosystem", stat: "520+ Flagships" },
  luxury: { label: "Luxury & Premium", stat: "#1 Corridor" },
  dining: { label: "Dining concepts", stat: "50+ Restaurants" },
  entertainment: { label: "Attractions", stat: "55% Mix" },
  events: { label: "Event Hosting", stat: "Infinite Capability" },
  contact: { label: "Leasing Inquiry", stat: "Next Chapter" },
};

const ContextBar = memo(function ContextBar() {
  const { activeId } = useDeck();
  const current = contextMap[activeId] || contextMap.hero;

  return (
    <div className="hidden md:block">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeId}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-8 left-8 z-[150] group cursor-default"
      >
        <div className="flex items-center gap-6 glass-dark px-6 py-4 rounded-sm border-white/5 group-hover:border-[var(--gold)]/30 transition-all duration-500">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-1 font-bold">
              Current Chapter
            </span>
            <span className="text-sm font-bold serif italic text-white tracking-[0.05em]">
              {current.label}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-white/10 group-hover:bg-[var(--gold)]/30 transition-colors" />
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-1 font-bold">
              Key Metric
            </span>
            <span className="text-sm font-medium text-zinc-400 font-body group-hover:text-[var(--gold)] transition-colors">{current.stat}</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
    </div>
  );
});

export default ContextBar;
