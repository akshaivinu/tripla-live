"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROOF_ITEMS = ["Nike", "Samsung", "TikTok", "Formula 1", "LEGO", "Launch Events"];

export default function EventsSlide() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/events-platform.png"
          alt="Large scale brand activation event"
          fill
          priority
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/90" />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 items-center">
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2.5rem,4.5vw,4rem)] font-bold uppercase leading-tight tracking-[-0.02em]"
          >
            A Platform For Real-World Activation
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm md:text-base text-white/70 leading-relaxed max-w-md"
          >
            Built for launches, takeovers, broadcasts, and large-scale brand moments that convert
            attention into traffic.
          </motion.p>
        </div>

        {/* RIGHT SIDE (HERO METRIC) */}
        <div className="flex flex-col items-center md:items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-right"
          >
            <h3 className="text-[clamp(4.5rem,9vw,7rem)] font-bold tracking-[-0.04em]">50,000+</h3>
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.35em] text-[var(--gold)]">
              Event Capacity
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brand Proof Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-18 w-full flex justify-center px-6"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 max-w-5xl">
          {PROOF_ITEMS.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + index * 0.05 }}
              className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
