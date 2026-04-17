"use client";

import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";

export default function Hero() {
  const { goToSlide, isMuted } = useDeck();

  return (
    <section className="h-full w-full flex flex-col items-center justify-center text-center px-6 relative bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          className="absolute inset-0 min-h-full min-w-full object-cover opacity-40"
          src="/assets/hero-video.mp4"
          muted={isMuted}
          loop
          playsInline
          autoPlay
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-[10px] mb-6 block outfit font-bold">
            North America&rsquo;s Largest Mall
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold outfit uppercase leading-[0.95] text-white tracking-tighter mb-8 transition-all">
            40 Million <br /> People Come to <br />{" "}
            <span className="text-[var(--gold)]">Experience More</span>
          </h1>

          <p className="text-[10px] md:text-base text-zinc-400 font-medium tracking-[0.2em] uppercase mb-10">
            5.6 million sq ft &middot; 520+ stores &middot; Bloomington, Minnesota
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => goToSlide(2)} // Jump to Retail/Leasing
              className="px-10 py-4 bg-[var(--gold)] text-black text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-all duration-500 rounded-sm min-w-[240px]"
            >
              Explore Leasing
            </button>
            <button
              onClick={() => goToSlide(6)} // Jump to Events
              className="px-10 py-4 border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-black transition-all duration-500 rounded-sm min-w-[240px]"
            >
              Book a Venue
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
