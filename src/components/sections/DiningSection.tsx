"use client";

import { motion } from "framer-motion";

const styles = [
  {
    title: "Fine dining",
    desc: "12 upscale concepts, private dining available",
  },
  {
    title: "Fast casual",
    desc: "28 concepts, 3,200-seat food court",
  },
  {
    title: "Bars & lounges",
    desc: "18 concepts, late-night programming",
  },
];

export default function DiningSection() {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center bg-black px-4 sm:px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/dining-lifestyle.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center z-10 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6 md:mb-12"
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-2 sm:mb-4 block outfit font-bold">
            Dining &amp; Lifestyle
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold serif text-white leading-tight mb-2 sm:mb-4">
            50+ restaurants. Food as destination.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-light tracking-wide">
            From Michelin-recommended chefs to beloved local concepts — dining that draws
            visitors on its own.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {styles.map((style, i) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
              className="p-3 sm:p-6 md:p-8 rounded-sm bg-zinc-900/40 border border-white/5 text-center flex flex-col items-center group hover:bg-zinc-900/60 transition-colors"
            >
              <h3 className="text-xs sm:text-base md:text-xl font-bold outfit text-white uppercase tracking-wider sm:tracking-widest mb-1 sm:mb-3 md:mb-4 group-hover:text-[var(--gold)] transition-colors leading-tight">
                {style.title}
              </h3>
              <p className="text-[8px] sm:text-[10px] text-zinc-500 leading-relaxed max-w-[200px]">
                {style.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
