"use client";

import { motion } from "framer-motion";

export default function LuxurySection() {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center bg-zinc-950 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-[0.2] brightness-[0.4]"
          style={{ backgroundImage: "url('/assets/luxury-storefronts.png')" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center z-10 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-12"
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-[10px] mb-4 block outfit font-bold">
            Luxury & Premium
          </span>
          <h2 className="text-3xl md:text-6xl font-light italic serif text-white leading-tight mb-6">
            &ldquo;The destination that luxury brands choose when <br /> they enter the American
            market&rdquo;
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[var(--gold)]" />
            <span className="text-[var(--gold)] uppercase tracking-[0.2em] text-[8px] font-bold">
              Property Overview, 2024
            </span>
            <div className="w-8 h-[1px] bg-[var(--gold)]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-10 border-t border-white/10 max-w-5xl mx-auto"
        >
          <div className="flex flex-col gap-1">
            <span className="text-4xl md:text-5xl font-bold outfit text-white">48</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
              Luxury Brands
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl md:text-5xl font-bold outfit text-white">$850</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
              Avg Spend / Visit
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl md:text-5xl font-bold outfit text-white">#1</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
              Luxury Corridor, MN
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
