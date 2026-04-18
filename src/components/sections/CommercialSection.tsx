"use client";

import { motion } from "framer-motion";

const BRANDS = ["Hermes", "Zara", "Nike", "Primark", "Gentle Monster", "H&M Home"];

export default function CommercialSection() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black font-body">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center blur-[2px] scale-[1.04] opacity-88"
          style={{ backgroundImage: "url('/assets/global-flagship.png')" }}
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/84 via-black/56 to-black/84" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <div className="flex w-full max-w-[960px] -translate-y-8 flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(3.5rem,7vw,6rem)] font-bold outfit uppercase leading-[0.95] tracking-[-0.03em] text-white"
          >
            520+ Brands.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-3 text-[clamp(1.8rem,3vw,2.8rem)] font-light serif italic text-[var(--gold)]"
          >
            Every category. One platform.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 max-w-[620px] text-[15px] leading-7 text-white/70"
          >
            A retail ecosystem built to capture flagship demand, daily traffic, and emerging
            concepts under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-[760px]"
          >
            {BRANDS.map((brand, index) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 1 + index * 0.08 }}
                className="text-[12px] uppercase tracking-[0.26em] text-white/60"
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.65 }}
            className="mt-16 text-[11px] uppercase tracking-[0.24em] text-white/45"
          >
            From global flagships to high-growth concepts.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
