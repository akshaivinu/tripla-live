"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function ScaleSlide() {
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const duration = 2000;
    const target = 40;
    const increment = target / (duration / 16);
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

      {/* VIDEO — left half on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 md:right-[45%] overflow-hidden hidden md:block">
          <video
            ref={videoRef}
            src="/assets/walkthrough.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </div>
      )}

      {/* VIDEO — full-screen background on mobile */}
      {isMobile && (
        <div className="absolute inset-0 md:hidden overflow-hidden">
          <video
            src="/assets/walkthrough.mp4"
            className="w-full h-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* CONTENT — right half on desktop */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center md:items-end px-6 md:pr-16 md:pl-0 text-center md:text-right">
        <div className="max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4"
          >
            Platform Scale
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-baseline justify-center md:justify-end gap-1"
          >
            <span className="text-[clamp(5rem,14vw,10rem)] font-bold tracking-[-0.05em] leading-none">
              {count}
            </span>
            <span className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-[var(--gold)]">M</span>
          </motion.div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mt-2">Annual Visitors</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex justify-center md:justify-end gap-10"
          >
            <div className="text-center md:text-right">
              <p className="text-3xl md:text-4xl font-bold">520+</p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-1">Tenants</p>
            </div>
            <div className="w-px h-12 bg-white/10 self-center" />
            <div className="text-center md:text-right">
              <p className="text-3xl md:text-4xl font-bold text-[var(--gold)]">$2B+</p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--gold)]/50 mt-1">Annual Sales</p>
            </div>
            <div className="w-px h-12 bg-white/10 self-center" />
            <div className="text-center md:text-right">
              <p className="text-3xl md:text-4xl font-bold">5.6M</p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-1">Sq Ft</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 text-[10px] uppercase tracking-[0.25em] text-white/30 leading-relaxed"
          >
            Traffic at this scale translates directly into revenue opportunity.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-28 left-6 md:left-8 z-20 hidden md:block"
      >
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
          ↑ Live walkthrough — American Dream, NJ
        </p>
      </motion.div>
    </section>
  );
}