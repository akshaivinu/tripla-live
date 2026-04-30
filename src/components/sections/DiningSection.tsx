"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DINING_CATEGORIES = [
  { label: "Fine Dining", sub: "High Spend · Extended Stay", icon: "◆" },
  { label: "Fast Casual", sub: "Volume · Repeat Visitation", icon: "◆" },
  { label: "Bars & Lounges", sub: "Night Traffic · Dwell Time", icon: "◆" },
  { label: "Food Halls", sub: "Destination Draw · Social", icon: "◆" },
];

export default function DiningSlide() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-black text-white">

      {/* VIDEO — full bleed, dimmed, sets atmosphere */}
      <div className="absolute inset-0">
        <video
          src="/assets/commercial-ad.mp4"
          className="w-full h-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
          style={{ objectPosition: "center 60%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full grid md:grid-cols-2 items-center px-8 md:px-16 gap-10 pb-24 pt-10">

        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)] mb-5"
          >
            Dining & Lifestyle
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(2rem,4.5vw,4rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em]"
          >
            Dining That
            <br />
            Drives Traffic.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-sm text-white/50 leading-relaxed max-w-sm"
          >
            50+ restaurants across every tier — from Michelin-calibre dining to fast-casual — attract,
            retain, and extend every customer visit.
          </motion.p>

          {/* Hero metric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <p className="text-[clamp(4rem,9vw,7rem)] font-bold text-[var(--gold)] leading-none">50+</p>
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 mt-2">Restaurants & Venues</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-[9px] uppercase tracking-[0.3em] text-[var(--gold)]/50"
          >
            Drives longer stays, higher spend, repeat visitation
          </motion.p>
        </div>

        {/* RIGHT — category cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 gap-3 max-w-sm ml-auto w-full"
        >
          {DINING_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="group flex items-center gap-5 border border-white/8 rounded-lg px-5 py-4 hover:border-[var(--gold)]/40 hover:bg-white/3 transition-all cursor-default"
            >
              <span className="text-[var(--gold)] text-xs opacity-40 group-hover:opacity-100 transition-opacity">{cat.icon}</span>
              <div>
                <p className="text-sm font-medium tracking-wide">{cat.label}</p>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30 mt-0.5">{cat.sub}</p>
              </div>
            </motion.div>
          ))}

          {/* Image stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="relative h-40 mt-2 hidden md:block"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden rotate-[-1deg]">
              <Image src="/assets/dining-1.jpg" alt="Fine dining" fill className="object-cover opacity-70" />
            </div>
            <div className="absolute inset-0 rounded-lg overflow-hidden rotate-[2deg] top-4 left-6">
              <Image src="/assets/dining-2.jpg" alt="Bar lounge" fill className="object-cover opacity-60" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}