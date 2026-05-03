"use client";

import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const { goToSlide } = useDeck();

  return (
    <section className="relative h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-10 bg-black overflow-hidden text-white pt-20 pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-50 md:opacity-55"
          src="/assets/hero-video.mp4"
          muted
          loop
          playsInline
          autoPlay
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80" />
      </div>



      {/* Content */}
      <div className="relative z-10 w-full max-w-[960px] flex flex-col items-center text-center pt-20">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ willChange: "opacity" }}
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[var(--gold)]"
        >
          40 Million Visitors Annually
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="
            mt-6 sm:mt-8
            text-[clamp(2rem,7vw,5rem)]
            font-bold uppercase leading-[1.02] tracking-[-0.01em]
          "
        >
          The Most Powerful Retail
          <br />
          & Entertainment Platform
          <br />
          In The U.S.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ willChange: "opacity" }}
          className="
            mt-4 sm:mt-6
            max-w-[90%] sm:max-w-md
            text-[12px] sm:text-sm md:text-base
            text-white/70
          "
        >
          Built to convert traffic into growth for brands and partners.
        </motion.p>

        {/* Micro proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ willChange: "opacity" }}
          className="
            mt-4 sm:mt-6
            text-[10px] sm:text-[11px]
            uppercase tracking-[0.2em]
            text-white/50
          "
        >
          5.6M SQ FT · 520+ TENANTS · EAST RUTHERFORD, NJ
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          onClick={() => goToSlide(1)}
          whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          className="
            group mt-6 sm:mt-8
            inline-flex items-center gap-3
            rounded-full border border-white/30
            px-5 sm:px-6 py-3 sm:py-3
            text-[11px] sm:text-[12px]
            uppercase tracking-[0.12em]
            transition
          "
        >
          <span>Explore The Platform</span>

          <motion.div whileHover={{ x: 4 }}>
            <ChevronRight size={16} className="text-[var(--gold)]" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
