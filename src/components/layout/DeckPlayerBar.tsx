"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";
import { SECTION_NAV_ITEMS, SectionId } from "@/constants/sections";

const TEASERS: Record<SectionId, string> = {
  hero: "Here's the scale that makes this possible →",
  scale: "Here's who already chose to be here →",
  commercial: "Here's what the luxury tier earns →",
  luxury: "And dining extends every visit →",
  dining: "Entertainment is the ultimate anchor →",
  entertainment: "This is why brands activate here →",
  events: "Choose your level of presence →",
  sponsorship: "Ready to be part of this →",
  contact: "End of presentation",
};

const DeckPlayerBar = memo(function DeckPlayerBar() {
  const { activeIndex, totalSlides } = useDeck();

  const currentItem = SECTION_NAV_ITEMS[activeIndex];
  const nextItem = SECTION_NAV_ITEMS[activeIndex + 1];

  return (
    <div className="fixed bottom-0 left-0 z-[200] w-full pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      <div className="relative flex w-full items-end justify-between px-8 pb-6 pt-12 pointer-events-none">

        {/* Left — current section only, no slide counter */}
        <motion.div
          key={`current-${activeIndex}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none"
        >
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
            {currentItem?.label}
          </p>
        </motion.div>

        {/* Center — progress dots only, no prev/next */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <motion.div
              key={idx}
              className={`h-px rounded-full transition-all duration-500 ${
                idx === activeIndex
                  ? "w-8 bg-[var(--gold)]"
                  : idx < activeIndex
                  ? "w-4 bg-white/40"
                  : "w-4 bg-white/15"
              }`}
            />
          ))}
        </div>

        {/* Right — teaser line only, no next button */}
        <AnimatePresence mode="wait">
          {nextItem && (
            <motion.p
              key={`teaser-${activeIndex}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4 }}
              className="text-[9px] uppercase tracking-[0.2em] text-white/25 pointer-events-none"
            >
              {TEASERS[currentItem.id]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

export default DeckPlayerBar;