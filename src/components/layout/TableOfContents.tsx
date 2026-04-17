"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";
import { SECTION_NAV_ITEMS } from "@/constants/sections";
import { X } from "lucide-react";

export default function TableOfContents() {
  const { isTOCOpen, setTOCOpen, activeIndex, goToSlide } = useDeck();

  return (
    <AnimatePresence>
      {isTOCOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-12"
        >
          <button
            title="close"
            onClick={() => setTOCOpen(false)}
            className="absolute top-12 right-12 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
          >
            <X size={32} />
          </button>

          <div className="max-w-6xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16 text-center"
            >
              <h2 className="text-sm uppercase tracking-[0.5em] text-[var(--gold)] font-bold mb-4 outfit">
                Presentation Index
              </h2>
              <p className="text-4xl md:text-6xl text-white font-bold outfit uppercase tracking-tighter">
                Explore The Experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SECTION_NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  onClick={() => {
                    goToSlide(SECTION_NAV_ITEMS.findIndex((i) => i.id === item.id)); // Use actual section ID mapping
                    // Since SECTION_NAV_ITEMS might be a subset or different order,
                    // we should find the index in SECTION_IDS
                    setTOCOpen(false);
                  }}
                  className={`group relative aspect-square p-8 rounded-sm border border-white/5 overflow-hidden flex flex-col justify-end text-left transition-all duration-500 hover:border-[var(--gold)]/40 ${
                    activeIndex === index ? "bg-white/5" : "bg-white/2"
                  }`}
                >
                  <span className="absolute top-8 left-8 text-4xl font-bold outfit opacity-10 group-hover:opacity-20 transition-opacity text-white">
                    0{index + 1}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold outfit text-white uppercase tracking-widest mb-1 group-hover:text-[var(--gold)] transition-colors">
                      {item.label}
                    </h3>
                    <div
                      className={`h-0.5 bg-[var(--gold)] transition-all duration-500 ${activeIndex === index ? "w-full" : "w-0 group-hover:w-12"}`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
