"use client";

import { motion } from "framer-motion";

// Pre-compute star data OUTSIDE the component to avoid recalculation on each render
const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: ((i * 137.5) % 100).toFixed(2), // Golden angle distribution — no Math.random
  y: ((i * 73.1) % 100).toFixed(2),
  size: 1 + (i % 3),
  delay: `${(i * 0.15) % 3}s`,
  duration: `${2 + (i % 4)}s`,
}));

export default function CinematicReveal() {
  return (
    <div className="fixed inset-0 z-[700] bg-[#02040a] flex items-center justify-center overflow-hidden">
      {/* Starfield — CSS-only animation. Zero JS timelines. */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{`
              @keyframes twinkle {
                0%, 100% { opacity: 0; }
                50% { opacity: 0.5; }
              }
            `}</style>
          </defs>
          {STARS.map((star) => (
            <circle
              key={star.id}
              cx={`${star.x}%`}
              cy={`${star.y}%`}
              r={star.size}
              fill="white"
              style={{
                animation: `twinkle ${star.duration} ${star.delay} infinite ease-in-out`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Ambient glow — static, no animation = no paint cost */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Globe silhouette — scale from 1→1.05 only (was 0.8→1.2, huge paint area) */}
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.12 }}
        transition={{ duration: 5, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
        className="absolute w-[70vh] h-[70vh] rounded-full bg-zinc-800 blur-[80px] z-20"
      />

      {/* Sweeping Typography */}
      <div className="relative z-30 flex flex-col items-center">
        <div className="overflow-hidden flex items-center" style={{ height: "12vh" }}>
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="text-[clamp(2.5rem,10vw,10rem)] font-bold serif italic text-white tracking-widest leading-none"
          >
            AMERICAN
          </motion.h1>
        </div>
        <div className="overflow-hidden flex items-center" style={{ height: "10vh" }}>
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="text-[clamp(1.5rem,6vw,6rem)] font-bold outfit text-[var(--gold)] tracking-[0.4em] leading-none"
          >
            DREAM
          </motion.h2>
        </div>
      </div>

      {/* Lens Flare — translateX instead of left to keep it on GPU compositor */}
      <motion.div
        initial={{ translateX: "-120vw", opacity: 0 }}
        animate={{ translateX: "220vw", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.8, delay: 1.8, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
        className="absolute top-1/2 -translate-y-1/2 w-[80vw] h-[2vh] bg-white blur-2xl z-40 rotate-[15deg]"
      />

      {/* Initial fade-in from black */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        style={{ willChange: "opacity" }}
        className="absolute inset-0 bg-black z-50 pointer-events-none"
      />
    </div>
  );
}
