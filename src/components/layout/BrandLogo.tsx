"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useDeck } from "@/components/context/DeckContext";

export default function BrandLogo() {
  const { goToSlide } = useDeck();

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      onClick={() => goToSlide(0)}
      className="fixed top-8 left-8 z-[200] flex items-center gap-4 group"
    >
      <div className="relative w-12 h-12 rounded-full overflow-hidden glass border-white/10 group-hover:border-[var(--gold)]/50 transition-colors duration-500">
        <Image
          src="/assets/logo.png"
          alt="American Dream Logo"
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="flex flex-col items-start">
        <span className="text-white font-bold outfit uppercase tracking-[0.3em] text-[10px]">
          American Dream
        </span>
        <span className="text-[var(--gold)] font-medium text-[8px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
          Sales Platform
        </span>
      </div>
    </motion.button>
  );
}
