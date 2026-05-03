"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const attractions = [
  {
    title: "Nickelodeon Universe",
    image: "/assets/nickelodeon-universe.png",
    description: "Western Hemisphere’s largest indoor theme park.",
  },
  {
    title: "DreamWorks Water Park",
    image: "/assets/dreamworks-waterpark.png",
    description: "Largest indoor water park in North America.",
  },
  {
    title: "Big SNOW",
    image: "/assets/big-snow.png",
    description: "North America’s first and only indoor ski slope.",
  },
];

export default function EntertainmentSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % attractions.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative h-full w-full overflow-hidden bg-black text-white pt-20 pb-16">
      {/* Background Viewer */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={attractions[activeIndex].title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={attractions[activeIndex].image}
              alt={attractions[activeIndex].title}
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center pt-18 pb-48 px-6 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ willChange: "transform, opacity" }}
          className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]"
        >
          Unfair Advantage
        </motion.p>

        {/* HERO METRIC */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ willChange: "transform, opacity" }}
          className="mt-6 text-[clamp(5rem,12vw,10rem)] font-bold tracking-[-0.05em] text-[var(--gold)] leading-none"
        >
          55%
        </motion.h2>

        <p className="text-xs uppercase tracking-[0.4em] text-white/70 mt-2">Of The Property Portfolio</p>

        {/* Statement */}
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ willChange: "transform, opacity" }}
          className="mt-8 text-[clamp(1.4rem,3vw,2.2rem)] font-bold uppercase tracking-[0.12em] max-w-3xl"
        >
          This is not a mall.
          <br />
          It’s an entertainment platform.
        </motion.h3>

        {/* Interactive Attraction Selectors */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4 px-6 w-full max-w-4xl overflow-x-auto no-scrollbar justify-center">
          {attractions.map((attr, idx) => (
            <motion.button
              key={attr.title}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => setActiveIndex(idx)}
              className={`relative flex-shrink-0 w-48 p-4 rounded-xl text-left transition-all duration-500 border ${
                idx === activeIndex 
                ? "bg-white/10 border-[var(--gold)] shadow-[0_10px_20px_rgba(201,169,110,0.1)]" 
                : "bg-black/40 border-white/10 hover:border-white/30"
              }`}
            >
              <p className={`text-[9px] uppercase tracking-widest mb-1 ${idx === activeIndex ? "text-[var(--gold)]" : "text-white/40"}`}>
                Attraction {idx + 1}
              </p>
              <h4 className="text-[11px] font-bold uppercase text-white truncate">{attr.title}</h4>
              <p className="mt-2 text-[9px] text-white/40 leading-tight line-clamp-2">{attr.description}</p>
              
              {/* Progress Line */}
              {idx === activeIndex && (
                <motion.div 
                  layoutId="activeBar"
                  className="absolute bottom-0 left-0 h-0.5 bg-[var(--gold)] w-full"
                />
              )}
            </motion.button>
          ))}
        </div>


      </div>
    </section>
  );
}
