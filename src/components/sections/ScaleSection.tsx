"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScaleSlide() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const target = 40;
    const increment = target / (duration / 16); // 60fps
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-full w-full overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/american-dream-interior.jpg"
          alt="Large scale retail interior"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.4em] text-white/50"
        >
          Platform Scale
        </motion.p>

        {/* HERO METRIC */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-6 flex flex-col items-center"
        >
          <div className="flex items-baseline gap-1">
            <span className="text-[clamp(5rem,14vw,12rem)] font-bold tracking-[-0.05em] leading-none">
              {count}
            </span>
            <span className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight text-[var(--gold)]">M</span>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/70 mt-2">Annual Visitors</p>
        </motion.div>

        {/* SIDE METRICS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-24 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center sm:text-left border-l border-white/10 pl-8"
          >
            <p className="text-4xl md:text-6xl font-bold tracking-tight">520+</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2">Retail Tenants</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center sm:text-right border-r border-white/10 pr-8"
          >
            <p className="text-4xl md:text-6xl font-bold text-[var(--gold)] tracking-tight">$2B+</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/60 mt-2">
              Annual Sales
            </p>
          </motion.div>
        </div>

        {/* Bottom Insight */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/40 max-w-md leading-relaxed"
        >
          Traffic at this scale translates directly into revenue opportunity.
        </motion.p>
      </div>
    </section>
  );
}
