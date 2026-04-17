"use client";

import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";

export default function Hero() {
  const { goToSlide, isMuted } = useDeck();

  return (
    <section className="h-full w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative bg-black overflow-hidden">
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
      <div className="relative z-10 w-full max-w-5xl py-16 md:py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-4 md:mb-6 block outfit font-black">
            The East Coast&rsquo;s Premier Destination
          </span>
          <h1 className="text-[clamp(1.8rem,8vw,5rem)] font-bold outfit uppercase leading-[0.9] text-white tracking-tighter mb-4 md:mb-8">
            40 Million <br /> People Come to <br />{" "}
            <span className="text-[var(--gold)]">Experience More</span>
          </h1>

          <p className="text-[clamp(9px,2vw,13px)] text-zinc-400 font-medium tracking-[0.15em] uppercase mb-8 md:mb-12">
            5.6M sq ft &middot; 520+ stores &middot; East Rutherford, NJ
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
            <button
              onClick={() => goToSlide(2)}
              className="w-full sm:w-auto px-8 py-4 bg-[var(--gold)] text-black text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-all duration-500 rounded-sm"
            >
              Explore Leasing
            </button>
            <button
              onClick={() => goToSlide(6)}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-black transition-all duration-500 rounded-sm"
            >
              Book a Venue
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
