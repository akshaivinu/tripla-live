"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScaleSlide() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/american-dream-interior.jpg"
          alt="Large scale retail interior"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">

        {/* Top Label */}
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.4em] text-white/50"
        >
          Platform Scale
        </motion.p>

        {/* HERO METRIC */}
        <motion.h2
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-[clamp(5rem,14vw,12rem)] font-bold tracking-[-0.05em] leading-none"
        >
          40M
        </motion.h2>

        <p className="text-xs uppercase tracking-[0.4em] text-white/70 mt-2">
          Annual Visitors
        </p>

        {/* SIDE METRICS (Responsive Grid instead of absolute) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 w-full max-w-3xl">

          {/* LEFT */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center sm:text-left"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              520+
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mt-1">
              Retail Tenants
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center sm:text-right"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--gold)]">
              $2B+
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/80 mt-1">
              Annual Sales
            </p>
          </motion.div>

        </div>

        {/* Bottom Insight */}
        <motion.p
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-xs md:text-sm text-white/60 max-w-md"
        >
          Traffic at this scale translates directly into revenue opportunity.
        </motion.p>

      </div>
    </section>
  );
}