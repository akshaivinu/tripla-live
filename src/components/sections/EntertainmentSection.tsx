"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const attractions = [
  {
    title: "Nickelodeon Universe",
    image: "/assets/nickelodeon-universe.png",
  },
  {
    title: "DreamWorks Water Park",
    image: "/assets/dreamworks-waterpark.png",
  },
  {
    title: "Big SNOW",
    image: "/assets/big-snow.png",
  },
];

export default function EntertainmentSlide() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Crossfade */}
      <div className="absolute inset-0">
        {attractions.map((attr, i) => (
          <motion.div
            key={attr.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 6,
              times: [0, 0.2, 0.8, 1],
              delay: i * 15,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="absolute inset-0"
          >
            <Image
              src={attr.image}
              alt={attr.title}
              fill
              className="object-cover scale-[1.04] brightness-[0.75]"
              priority={i === 0}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />

            {/* Attraction Label (IMPORTANT) */}
            <div className="absolute bottom-35 w-full text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Destination Proof</p>
              <h3 className="mt-2 text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase tracking-[0.1em]">
                {attr.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center  text-center px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]"
        >
          Unfair Advantage
        </motion.p>

        {/* HERO METRIC */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-6 text-[clamp(6rem,14vw,12rem)] font-bold tracking-[-0.05em] text-[var(--gold)] leading-none"
        >
          55%
        </motion.h2>

        <p className="text-xs uppercase tracking-[0.4em] text-white/70 mt-2">Of The Property</p>

        {/* Statement */}
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold uppercase tracking-[0.12em] max-w-3xl"
        >
          This is not a mall.
          <br />
          It’s an entertainment platform.
        </motion.h3>

        {/* Supporting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-xs md:text-sm uppercase tracking-[0.3em] text-white/60"
        >
          Attractions that drive tens of millions of visits annually
        </motion.p>

        {/* Bottom Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-25 text-[10px] md:text-xs uppercase tracking-[0.25em] text-zinc-400"
        >
          Drives year-round traffic, repeat visitation, and cross-category spend
        </motion.p>
      </div>
    </section>
  );
}
