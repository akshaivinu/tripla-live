"use client";

import { motion } from "framer-motion";

const BRANDS = ["Hermès", "Gucci", "Louis Vuitton", "Saint Laurent", "Balenciaga", "Dior", "Prada", "Tiffany & Co."];

export default function LuxurySlide() {
  return (
    <section className="h-full w-full bg-black relative overflow-hidden text-white">

      {/* VIDEO — right two-thirds, primary visual */}
      <div className="absolute inset-0 md:left-[38%] overflow-hidden">
        <video
          src="/assets/exterior-shot.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Mobile: video full bleed dimmed */}
      <div className="absolute inset-0 md:hidden overflow-hidden">
        <video
          src="/assets/exterior-shot.mp4"
          className="w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT — left panel */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-xl">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)] mb-6"
        >
          The Avenue — Luxury Wing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(2rem,4vw,3.5rem)] font-light italic leading-tight"
        >
          Where luxury brands
          <br />
          drive top-tier U.S.
          <br />
          retail performance.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 text-xs text-white/40 uppercase tracking-[0.25em]"
        >
          Luxury here is not positioning — it&apos;s performance.
        </motion.p>

        {/* Hero metric */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 border-l-2 border-[var(--gold)] pl-6"
        >
          <p className="text-[clamp(3rem,7vw,5rem)] font-bold text-[var(--gold)] leading-none">$850</p>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mt-2">Avg Spend Per Visit</p>
        </motion.div>

        {/* Sub metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex gap-10"
        >
          <div>
            <p className="text-2xl font-bold">48+</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mt-1">Luxury Brands</p>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <p className="text-2xl font-bold">#1</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mt-1">Luxury Corridor</p>
          </div>
        </motion.div>

        {/* Brand name scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
        >
          {BRANDS.map((b) => (
            <span key={b} className="text-[9px] uppercase tracking-[0.2em] text-white/20 hover:text-white/60 transition-colors cursor-default">
              {b}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Video label bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-28 right-8 z-20 hidden md:block text-right"
      >
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
          The Avenue — American Dream →
        </p>
      </motion.div>
    </section>
  );
}