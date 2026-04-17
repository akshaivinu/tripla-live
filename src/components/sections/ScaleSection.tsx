"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useDeck } from "@/components/context/DeckContext";

const stats = [
  { label: "Annual Visitors", value: "40M", sub: "Global foot traffic" },
  { label: "SQ FT GLA", value: "5.6M", sub: "Strategic retail footprint" },
  { label: "Retail Stores", value: "520+", sub: "World-class partners" },
  { label: "Annual Sales", value: "$2B+", sub: "Proven economic engine" },
];

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));

    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function ScaleSection() {
  const { isMuted } = useDeck();

  return (
    <section className="h-full w-full flex flex-col items-center justify-center bg-zinc-950 px-6 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/exterior-shot.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-[10px] mb-4 block outfit font-bold">
            Why This Property
          </span>
          <h2 className="text-4xl md:text-7xl font-bold outfit uppercase text-white leading-tight">
            The numbers that <br /> define the opportunity
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-zinc-900/50 p-6 md:p-10 rounded-sm border border-white/5 relative group"
            >
              <h3 className="text-4xl md:text-6xl font-bold outfit mb-2 md:mb-4 text-white">
                <Counter value={stat.value} />
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover:text-[var(--gold)] transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-zinc-500 text-[10px] uppercase tracking-widest font-medium"
        >
          Located 20 min from MSP Airport &middot; Draws visitors from 150+ countries &middot; Top 5
          most visited sites in the US
        </motion.p>
      </div>
    </section>
  );
}
