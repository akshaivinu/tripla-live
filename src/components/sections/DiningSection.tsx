"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DiningSlide() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/dining-lifestyle.png"
          alt="Luxury dining experience"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/90" />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 grid h-full grid-cols-1 md:grid-cols-2 pt-20 md:items-center px-6 md:px-16">
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-[0.08em]"
          >
            Dining That Drives Traffic.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xs md:text-sm uppercase tracking-[0.28em] text-zinc-400"
          >
            Attracts, retains, and extends customer visits
          </motion.p>

          {/* HERO METRIC */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <h3 className="text-[clamp(4rem,8vw,6rem)] font-bold text-[var(--gold)]">50+</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.4em]">Restaurants</p>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE STACK */}
        <div className="hidden md:flex justify-center bottom-20 relative">
          <div className="relative w-[320px] h-[420px]">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ delay: 0.6 }}
              className="absolute w-full h-full rounded-xl overflow-hidden shadow-2xl"
            >
              <Image src="/assets/dining-1.jpg" alt="Fine dining" fill className="object-cover" />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              animate={{ opacity: 1, y: 20, rotate: 4 }}
              transition={{ delay: 0.8 }}
              className="absolute w-full h-full rounded-xl overflow-hidden shadow-2xl top-10 left-10"
            >
              <Image src="/assets/dining-2.jpg" alt="Bar lounge" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Categories */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-50 md:bottom-30 w-full flex justify-center px-6"
      >
        <div className="flex gap-12 md:gap-16 text-center">
          <div>
            <p className="text-lg font-semibold uppercase tracking-widest">Fine Dining</p>
            <p className="text-xs text-zinc-400 uppercase">High Spend</p>
          </div>

          <div>
            <p className="text-lg font-semibold uppercase tracking-widest">Fast Casual</p>
            <p className="text-xs text-zinc-400 uppercase">Volume</p>
          </div>

          <div>
            <p className="text-lg font-semibold uppercase tracking-widest">Bars & Lounges</p>
            <p className="text-xs text-zinc-400 uppercase">Night Traffic</p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Insight */}
      <div className="absolute bottom-35 md:bottom-15 w-full text-center px-5 md:px-0">
        <p className="text-[var(--gold)] text-xs uppercase tracking-[0.3em]">
          Drives longer stays, higher spend, and repeat visitation
        </p>
      </div>
    </section>
  );
}
