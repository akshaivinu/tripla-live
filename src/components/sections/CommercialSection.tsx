"use client";

import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";

const brands = [
  "Nike",
  "Apple",
  "Zara",
  "Nordstrom",
  "H&M",
  "Lego",
  "Sephora",
  "Microsoft",
  "Levi's",
  "Coach",
  "Uniqlo",
  "+ 509 more",
];

export default function CommercialSection() {
  const { goToSlide, isMuted } = useDeck();

  return (
    <section className="h-full w-full flex flex-col items-center justify-center bg-black px-4 sm:px-6 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-30">
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/commercial-ad.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(201,169,110,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center z-10 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6 md:mb-10"
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-2 sm:mb-4 block outfit font-bold">
            Retail Environment
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold outfit uppercase text-white leading-tight mb-2 sm:mb-4">
            520+ brands. Every category.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-light tracking-wide">
            From global flagships to emerging concepts — the full retail spectrum under one roof.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10"
        >
          {brands.map((brand) => (
            <div
              key={brand}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-md bg-zinc-900/50 border border-white/5 text-zinc-300 text-[9px] sm:text-[10px] md:text-sm font-medium hover:border-[var(--gold)]/30 transition-all cursor-default"
            >
              {brand}
            </div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={() => goToSlide(7)}
          className="px-8 sm:px-12 py-3 sm:py-5 bg-[var(--gold)] text-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-colors duration-500 rounded-sm"
        >
          View Leasing Opportunities
        </motion.button>
      </div>
    </section>
  );
}
