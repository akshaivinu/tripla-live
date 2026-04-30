"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";

const contextMap: Record<string, { label: string; stat: string }> = {
  hero: { label: "The Hook", stat: "40M Visitors" },
  scale: { label: "The Opportunity", stat: "Scale & Revenue" },
  commercial: { label: "The Ecosystem", stat: "520+ Flagships" },
  luxury: { label: "Value: Luxury", stat: "#1 Corridor" },
  dining: { label: "Value: Dining", stat: "50+ Restaurants" },
  entertainment: { label: "Value: Attractions", stat: "55% Mix" },
  events: { label: "Proof: Events", stat: "Proven Event Platform" },
  sponsorship: { label: "Sponsorship", stat: "Brand Partnerships" },
  contact: { label: "Next Steps", stat: "Leasing & Venue" },
};

const ContextBar = memo(function ContextBar() {
  const { activeId, activeIndex } = useDeck();
  const current = contextMap[activeId] || contextMap.hero;

  return (
    <div className="hidden md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-20 left-10 z-[150] flex flex-col items-start text-left text-white/60"
        >
          <span className="text-[11px] uppercase tracking-[0.12em] leading-[18px]">
            American Dream &mdash; Sales Platform
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.12em] leading-[18px]">
            {String(activeIndex + 1).padStart(2, "0")} &mdash; {current.label}
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.12em] leading-[18px]">
            Key Metric: {current.stat}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ContextBar;
