"use client";

import { memo } from "react";
import { SECTION_IDS, SECTION_NAV_ITEMS } from "@/constants/sections";
import { useDeck } from "@/components/context/DeckContext";
import { motion } from "framer-motion";

const SideNav = memo(function SideNav() {
  const { activeIndex, goToSlide } = useDeck();

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center gap-6">
      {/* Vertical Track */}
      <div className="absolute top-0 bottom-0 w-[1px] bg-white/10 left-1/2 -translate-x-1/2" />
      <motion.div
        className="absolute top-0 w-[1px] bg-[var(--gold)]/40 left-1/2 -translate-x-1/2"
        animate={{ height: `${(activeIndex / (SECTION_IDS.length - 1)) * 100}%` }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />

      {SECTION_IDS.map((id, index) => (
        <button
          key={id}
          onClick={() => goToSlide(index)}
          className="group relative flex items-center justify-center"
        >
          {/* Label that appears on hover */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute left-8 text-[9px] uppercase tracking-[0.4em] font-bold text-[var(--gold)] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 serif italic"
          >
            {SECTION_NAV_ITEMS.find((item) => item.id === id)?.label || id}
          </motion.span>

          {/* Dot Indicator */}
          <div className="relative flex items-center justify-center w-6 h-6">
            <motion.div
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
                backgroundColor: activeIndex === index ? "#c9a96e" : "rgba(255,255,255,0.4)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-1 h-1 rounded-full z-10"
            />
            {activeIndex === index && (
              <motion.div
                layoutId="active-ring"
                className="absolute inset-0 border border-[var(--gold)] rounded-full"
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            )}
          </div>
        </button>
      ))}
    </nav>
  );
});

export default SideNav;
