'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-50"
          poster="/assets/hero-poster.png"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          {/* Fallback pattern if video missing */}
          <div className="w-full h-full bg-gradient-to-br from-black via-zinc-900 to-black" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="outfit text-sm uppercase tracking-[0.4em] text-zinc-400 mb-6 block">
            The Global Platform for Brands
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 text-gradient outfit uppercase">
            Experience the <br /> Extraordinary
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Welcome to American Dream. 3 million square feet of world-class retail, 
            cinematic entertainment, and global-scale activations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-zinc-200 transition-all rounded-full min-w-[240px]">
              Explore Opportunities
            </button>
            <button className="px-10 py-4 glass text-white text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-all rounded-full min-w-[240px]">
              The Avenue Luxury
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
