"use client";

import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";

export default function LandingStage() {
  const { setHasStarted } = useDeck();

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 scale-[1.2]"
          src="/assets/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center w-full max-w-2xl px-4 sm:px-6"
      >
        <div className="mb-10">
          <span className="text-[var(--gold)] uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block outfit font-bold">
            The World&rsquo;s Premier Destination
          </span>
          <h1 className="text-[clamp(2rem,10vw,5rem)] font-bold outfit uppercase text-white leading-[0.9] tracking-tighter mb-6 md:mb-10">
            American <br /> Dream
          </h1>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setHasStarted(true)}
          className="group relative px-10 md:px-16 py-5 md:py-6 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[var(--gold)] hover:text-white transition-all duration-500 rounded-sm overflow-hidden shadow-2xl"
        >
          <span className="relative z-10">Enter Experience</span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="mt-12 text-white text-[9px] uppercase tracking-widest font-medium"
        >
          Optimized for high-fidelity interactive storytelling
        </motion.p>
      </motion.div>
    </div>
  );
}
