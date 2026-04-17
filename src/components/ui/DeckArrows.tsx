"use client";

import { memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDeck } from "@/components/context/DeckContext";
import { motion, AnimatePresence } from "framer-motion";

const DeckArrows = memo(function DeckArrows() {
  const { activeIndex, totalSlides, next, prev } = useDeck();

  return (
    <div className="fixed inset-0 pointer-events-none z-[150] flex items-center px-6 md:px-12">
      <div className="flex-1 flex justify-start">
        <AnimatePresence>
          {activeIndex > 0 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={prev}
              className="pointer-events-auto w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/5 bg-white/2 backdrop-blur-xl flex items-center justify-center text-white/30 hover:text-[var(--gold)] hover:border-[var(--gold)]/30 transition-all duration-500 group relative"
            >
              <ChevronLeft
                size={42}
                strokeWidth={1}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <div className="absolute inset-0 rounded-full bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/5 transition-all" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1 flex justify-end">
        <AnimatePresence>
          {activeIndex < totalSlides - 1 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={next}
              className="pointer-events-auto w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/5 bg-white/2 backdrop-blur-xl flex items-center justify-center text-white/30 hover:text-[var(--gold)] hover:border-[var(--gold)]/30 transition-all duration-500 group relative"
            >
              <ChevronRight
                size={42}
                strokeWidth={1}
                className="group-hover:translate-x-1 transition-transform"
              />
              <div className="absolute inset-0 rounded-full bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/5 transition-all" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

export default DeckArrows;
