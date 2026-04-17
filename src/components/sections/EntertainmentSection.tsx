"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const attractions = [
  {
    title: "Nickelodeon Universe",
    desc: "The largest indoor theme park in North America.",
    image: "/assets/nickelodeon-universe.png",
    fallback:
      "https://images.unsplash.com/photo-1513297845732-05014e5b51d2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "DreamWorks Water Park",
    desc: "Record-breaking slides and year-round tropical climate.",
    image: "/assets/dreamworks-waterpark.png",
    fallback:
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Big SNOW",
    desc: "North America's only indoor real-snow ski resort.",
    image: "/assets/big-snow.png",
    fallback:
      "https://images.unsplash.com/photo-1551698618-1fed5d9e1ff2?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function EntertainmentSection() {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center bg-zinc-950 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6 md:mb-10 text-center"
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-2 sm:mb-4 block outfit font-bold">
            Immersive Attractions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold outfit uppercase text-white leading-tight mb-2 sm:mb-3">
            World-Class Entertainment
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-light tracking-wide">
            Over 50% of the property is dedicated to attractions that drive tens of millions of visits annually.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6">
          {attractions.map((attr, i) => (
            <motion.div
              key={attr.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
              className="relative aspect-[3/4] sm:aspect-video rounded-sm overflow-hidden group"
            >
              <Image
                src={attr.image}
                alt={attr.title}
                fill
                sizes="(max-width: 768px) 33vw, 25vw"
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = attr.fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6">
                <h3 className="text-[10px] sm:text-sm md:text-xl font-bold outfit text-white uppercase tracking-wider mb-0 sm:mb-1 md:mb-2 leading-tight">
                  {attr.title}
                </h3>
                <p className="text-[7px] sm:text-[8px] md:text-[10px] text-zinc-400 uppercase tracking-widest font-medium hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                  {attr.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
