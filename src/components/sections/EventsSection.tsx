"use client";

import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";

export default function EventsSection() {
  const { isMuted } = useDeck();

  return (
    <section className="h-full w-full flex flex-col items-center justify-center bg-black px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/walkthrough.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center z-10 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-2 sm:mb-4 block outfit font-bold">
            Platform Power
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold outfit uppercase text-white leading-tight mb-2 sm:mb-4">
            Where Brands Take Center Stage
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-light tracking-wide mb-6 sm:mb-8">
            From global concert series to exclusive brand takeovers, American Dream provides the
            infrastructure for infinite capability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-12 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold outfit text-white block">50,000+</span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500 font-bold">
              Event Capacity
            </span>
          </div>
          <div className="text-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold outfit text-white block">Infinite</span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500 font-bold">
              Activation Space
            </span>
          </div>
          <div className="text-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold outfit text-white block">Global</span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500 font-bold">
              Broadcast Power
            </span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 sm:mt-8 md:mt-12 px-8 sm:px-10 py-3 sm:py-4 border border-white/20 text-white text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-black transition-colors duration-500 rounded-sm"
        >
          Explore Case Studies
        </motion.button>
      </div>
    </section>
  );
}
