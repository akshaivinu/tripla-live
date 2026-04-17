"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";

const TopProgressBar = memo(function TopProgressBar() {
  const { activeIndex, totalSlides } = useDeck();
  const progress = ((activeIndex + 1) / totalSlides) * 100;

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[200]">
      <motion.div
        className="h-full bg-linear-to-r from-[var(--gold)] via-[#f3e2ba] to-[var(--gold)] shadow-[0_0_20px_rgba(201,169,110,1),0_0_5px_rgba(201,169,110,0.5)] relative overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent w-full h-full"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
});

export default TopProgressBar;
