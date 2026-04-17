"use client";

import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";

export default function LandingStage() {
  const { setHasStarted } = useDeck();

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Loop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105"
          src="/assets/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-2xl px-6"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block outfit font-bold">
            The World&rsquo;s Premier Destination
          </span>
          <h1 className="text-4xl md:text-7xl font-bold outfit uppercase text-white leading-[0.9] tracking-tighter mb-10">
            American <br /> Dream
          </h1>
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => setHasStarted(true)}
          className="group relative px-16 py-6 bg-white text-black text-xs uppercase tracking-[0.4em] font-black hover:bg-[var(--gold)] hover:text-white transition-all duration-500 rounded-sm overflow-hidden"
        >
          <span className="relative z-10">Enter Experience</span>
          <motion.div 
            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"
          />
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
