"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DevOverlay from "@/components/ui/DevOverlay";

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
    desc: "North America’s only indoor real-snow ski resort.",
    image: "/assets/big-snow.png",
    fallback:
      "https://images.unsplash.com/photo-1551698618-1fed5d9e1ff2?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function EntertainmentSection() {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center bg-zinc-950 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-[10px] mb-4 block outfit font-bold">
            Immersive Attractions
          </span>
          <h2 className="text-4xl md:text-7xl font-bold outfit uppercase text-white leading-tight mb-4">
            World-Class <br /> Entertainment
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-3xl mx-auto font-light tracking-wide">
            Defining the &lsquo;Retailtainment&rsquo; model. Over 50% of the property is dedicated
            to attractions that drive tens of millions of visits annually.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {attractions.map((attr, i) => (
            <motion.div
              key={attr.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
              className="relative aspect-video rounded-sm overflow-hidden group"
            >
              <Image
                src={attr.image}
                alt={attr.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = attr.fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <h3 className="text-lg md:text-xl font-bold outfit text-white uppercase tracking-wider mb-1 md:mb-2">
                  {attr.title}
                </h3>
                <p className="text-[8px] md:text-[10px] text-zinc-400 uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
