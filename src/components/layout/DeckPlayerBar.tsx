"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";
import { SECTION_NAV_ITEMS } from "@/constants/sections";

const DeckPlayerBar = memo(function DeckPlayerBar() {
  const { activeIndex, totalSlides, next, prev } = useDeck();

  const currentItem = SECTION_NAV_ITEMS[activeIndex];
  const prevItem = SECTION_NAV_ITEMS[activeIndex - 1];
  const nextItem = SECTION_NAV_ITEMS[activeIndex + 1];

  return (
    <div className="fixed bottom-0 left-0 z-[200] w-full pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

      <div className="relative flex w-full items-end justify-between px-10 pb-8 pt-16 pointer-events-none">
        <motion.div
          key={`current-${activeIndex}`}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none text-left text-white/50"
        >
          <p className="text-[11px] uppercase tracking-[0.12em]">
            Slide {activeIndex + 1} / {totalSlides}
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.12em]">{currentItem?.label}</p>
        </motion.div>

        <div className="hidden md:flex items-center gap-2 pb-1">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <motion.div
              key={idx}
              layoutId={`dot-${idx}`}
              className={`h-px rounded-full transition-all duration-500 ${
                idx === activeIndex ? "w-10 bg-[var(--gold)]" : "w-6 bg-white/20"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-6">
          <AnimatePresence mode="wait">
            {prevItem ? (
              <motion.button
                key={`prev-${activeIndex}`}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                onClick={prev}
                className="pointer-events-auto text-[12px] uppercase tracking-[0.12em] text-white/50 transition-opacity hover:opacity-100 hover:text-white"
              >
                &larr; Prev
              </motion.button>
            ) : (
              <span className="text-[12px] uppercase tracking-[0.12em] text-white/20">Start</span>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {nextItem ? (
              <motion.button
                key={`next-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                onClick={next}
                className="pointer-events-auto text-[12px] uppercase tracking-[0.12em] text-[var(--gold)] transition-opacity hover:opacity-80"
              >
                Next &rarr;
              </motion.button>
            ) : (
              <span className="text-[12px] uppercase tracking-[0.12em] text-[var(--gold)]/50">
                End Of Deck
              </span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

export default DeckPlayerBar;
