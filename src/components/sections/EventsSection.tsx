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

      {/* Content Wrapper (SAFE ZONE FOR DECK BAR) */}
      <div className="relative z-10 h-full w-full pb-[120px]">
        {/* Main Layout */}
        <div className="grid h-full grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 md:px-16 gap-10 md:gap-0">
          {/* LEFT SIDE */}
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <motion.h2
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(1.8rem,5vw,4rem)] font-bold uppercase leading-[1.05] tracking-[-0.02em]"
            >
              A Platform For Real-World Activation
            </motion.h2>

            <motion.p
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-md mx-auto md:mx-0"
            >
              Built for launches, takeovers, broadcasts, and large-scale brand moments that convert
              attention into traffic.
            </motion.p>
          </div>

          {/* RIGHT SIDE (HERO METRIC) */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-25 md:mb-0"
            >
              <h3 className="text-[clamp(3.5rem,10vw,7rem)] font-bold tracking-[-0.04em] leading-none">
                50,000+
              </h3>

              <p className="mt-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.28em] md:tracking-[0.35em] text-[var(--gold)]">
                Event Capacity
              </p>
            </motion.div>
          </div>
        </div>

        {/* Brand Proof Strip (NOW SAFE) */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-30 md:bottom-20 w-full flex justify-center px-4 sm:px-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 md:gap-10 max-w-5xl text-center">
            {PROOF_ITEMS.map((item) => (
              <span
                key={item}
                className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-white/60"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
