"use client";

import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const { goToSlide } = useDeck();

  return (
    <section className="h-full w-full flex flex-col items-center justify-center text-center px-6 relative bg-black overflow-hidden font-body">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1.08 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <video
          className="absolute inset-0 min-h-full min-w-full object-cover opacity-35 blur-[2px]"
          src="/assets/hero-video.mp4"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          disablePictureInPicture
        />
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85),rgba(0,0,0,0.6)),linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.6))]" /> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="absolute top-8 left-10 z-20 hidden md:flex flex-col items-start text-left text-white/60"
      >
        <p className="text-[11px] uppercase tracking-[0.12em] leading-[18px]">
          American Dream &mdash; Sales Platform
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.12em] leading-[18px]">
          01 &mdash; The Hook
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.12em] leading-[18px]">
          Key Metric: 40M Visitors
        </p>
      </motion.div>

      <div className="relative z-20 w-full max-w-[960px] flex flex-col items-center justify-center -translate-y-6 md:-translate-y-10 pointer-events-auto">
        <div className="flex flex-col items-center pointer-events-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="block text-[12px] uppercase tracking-[0.2em] text-[var(--gold)] font-medium"
          >
            40 Million Visitors Annually
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-[900px] text-[clamp(3rem,6vw,5rem)] font-bold outfit uppercase leading-[0.95] tracking-[-0.01em] text-white"
          >
            The Most Powerful Retail
            <br />
            &amp; Entertainment Platform
            <br />
            In The U.S.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.25 }}
            className="mt-5 max-w-[560px] text-[16px] leading-6 text-white/70"
          >
            Built to convert traffic into growth for brands, partners, and experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.55 }}
            className="mt-6 text-[12px] uppercase tracking-[0.15em] text-white/50"
          >
            5.6M SQ FT &middot; 520+ TENANTS &middot; EAST RUTHERFORD, NJ
          </motion.p>

          <motion.button
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            onClick={() => goToSlide(1)}
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/30 bg-transparent px-7 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-all duration-500 hover:bg-white/8 hover:border-white/50"
          >
            <span>Explore The Platform</span>
            <ChevronRight
              size={16}
              className="text-[var(--gold)] transition-transform duration-500 group-hover:translate-x-0.5"
            />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.2 }}
          className="mt-14 w-full max-w-[960px] px-1 hidden md:flex items-end justify-between text-left"
        >
          <div className="text-white/50">
            <p className="text-[11px] uppercase tracking-[0.12em]">Slide 1 / 8</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.12em]">The Platform</p>
          </div>
          <button
            onClick={() => goToSlide(1)}
            className="text-[12px] uppercase tracking-[0.12em] text-[var(--gold)] transition-opacity hover:opacity-80"
          >
            Next &rarr; The Opportunity
          </button>
        </motion.div>
      </div>
    </section>
  );
}
