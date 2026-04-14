"use client";

import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const retailFormats = [
  {
    id: "luxury",
    title: "The Avenue Luxury",
    desc: "The ultimate collection of global fashion houses, where luxury finds its grandest expression in North America.",
    brands: [
      "Hermès",
      "Saks Fifth Avenue",
      "Gucci",
      "Saint Laurent",
      "Dolce & Gabbana",
      "Tiffany & Co.",
    ],
    image: "/assets/luxury-avenue.png",
  },
  {
    id: "flagship",
    title: "Global Flagships",
    desc: "Large-scale retail destinations for world-leading brands to showcase their full creative vision.",
    brands: ["Zara", "H&M", "Sephora", "Vans", "Lululemon", "Apple"],
    image: "/assets/global-flagship.png",
  },
  {
    id: "popup",
    title: "Pop-Up & Innovation",
    desc: "Dynamic, flexible spaces for emerging brands, digital-first labels, and experimental retail activations.",
    brands: ["DTC Brands", "Art Installations", "Limited Drops", "Tech Showcases"],
    image: "/assets/innovation-popup.png",
  },
];
interface Format {
  id: string;
  title: string;
  desc: string;
  brands: string[];
  image: string;
}

function Card({
  format,
  index,
  progress,
}: {
  format: Format;
  index: number;
  progress: MotionValue<number>;
}) {
  // Each card has a specific window of visibility in the 0-1 range
  // Card 0: 0.1 to 0.35
  // Card 1: 0.35 to 0.6
  // Card 2: 0.6 to 0.85
  const start = 0.1 + index * 0.25;
  const end = start + 0.25;

  // Enter phase: 0.1 before start
  const opacity = useTransform(progress, [start - 0.1, start, end - 0.05, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start - 0.1, start, end], [0.85, 1, 1]);
  // Use much smaller Z and rotation for mobile to prevent jitter
  const z = useTransform(progress, [start - 0.1, start, end], [-50, 0, 50]);
  const rotateX = useTransform(progress, [start - 0.1, start, end], [5, 0, -5]);

  // Content animations
  const contentY = useTransform(progress, [start, end], [20, -20]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        z,
        rotateX,
        zIndex: 30 - index,
      }}
      className="absolute inset-0 flex items-center justify-center p-4 md:p-8 lg:p-12 pointer-events-none will-change-transform md:[perspective:1200px] md:[transform-style:preserve-3d]"
    >
      <div className="relative w-full max-w-6xl aspect-[4/5] md:aspect-[16/7] rounded-2xl md:rounded-[2.5rem] overflow-hidden group pointer-events-auto shadow-2xl">
        <Image
          src={format.image}
          className="object-cover transition-all duration-1000"
          style={{ transform: "scale(1.1)" }}
          alt={format.title}
          loading={index === 0 ? "eager" : "lazy"}
          priority={index === 0}
          fill
          sizes="(max-width: 1024px) 100vw, 80vw"
          quality={50}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Floating Accents */}
        <div className="absolute top-8 right-8 flex gap-4">
          <div className="px-4 py-2 glass rounded-full text-[10px] uppercase tracking-widest text-white/70">
            Premium Retail
          </div>
        </div>

        <motion.div
          style={{ y: contentY }}
          className="absolute bottom-10 left-10 right-10 md:bottom-16 md:left-16 md:right-16 z-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-white/30" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold">
              0{index + 1} / Collection
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black outfit uppercase mb-2 sm:mb-6 tracking-tighter text-white leading-none">
            {format.title}
          </h3>

          <p className="text-zinc-300 font-light mb-4 sm:mb-8 max-w-xl text-xs sm:text-sm md:text-xl leading-relaxed">
            {format.desc}
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {format.brands.map((brand: string) => (
              <span
                key={brand}
                className="text-[10px] md:text-xs uppercase tracking-widest px-5 py-2.5 bg-black/40 border border-white/10 rounded-full text-white/90 backdrop-blur-xl hover:bg-white hover:text-black transition-colors duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Static Border */}
        <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none group-border-white/30 transition-colors duration-700" />
      </div>
    </motion.div>
  );
}

function NavDot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const opacity = useTransform(
    progress,
    [
      index * 0.2,
      (index + 0.05) * 0.2,
      (index + 0.1) * 0.2,
      (index + 0.15) * 0.2,
      (index + 0.2) * 0.2,
    ],
    [0.2, 0.4, 1, 0.4, 0.2]
  );
  return (
    <motion.div style={{ opacity, scale: opacity }} className="w-1 h-3 rounded-full bg-white" />
  );
}

export default function LuxurySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll progress for more fluid animations (lowered for slower feel)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.01,
  });

  const [yourBrand, setYourBrand] = useState("");
  const displayBrand = yourBrand || "DESTINY";

  // Intro text transforms
  const introOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const introScale = useTransform(smoothProgress, [0, 0.1], [1, 0.95]);
  const introY = useTransform(smoothProgress, [0, 0.1], [0, -40]);

  // Final card transforms
  const finalOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const finalScale = useTransform(smoothProgress, [0.85, 0.95], [0.95, 1]);
  const finalY = useTransform(smoothProgress, [0.85, 0.95], [40, 0]);

  return (
    <section ref={containerRef} id="luxury" className="relative bg-black z-10 min-h-screen md:h-[100vh]">
      <div className="md:sticky top-0 h-full md:h-[100dvh] w-full flex items-center justify-center overflow-hidden perspective-1000">
        {/* Deep Field Background */}
        <div className="absolute inset-0 bg-[#050505]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <motion.div
            style={{
              opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]),
              scale: useTransform(smoothProgress, [0, 1], [1, 1.2]),
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-zinc-800/10 blur-[180px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-white/5 blur-[150px] rounded-full" />
          </motion.div>
        </div>

        {/* 1. Intro Slide */}
        <motion.div
          style={{ opacity: introOpacity, scale: introScale, y: introY }}
          className="relative z-20 text-center px-6"
        >
          <span className="text-zinc-500 uppercase tracking-[0.8em] text-[10px] mb-8 block outfit font-bold">
            The Avenue & Beyond
          </span>
          <h2 className="text-4xl md:text-8xl lg:text-[10rem] font-black outfit uppercase mb-8 md:mb-12 leading-[0.85] text-white tracking-tighter">
            Curated <br />
            <span className="text-gradient">Commerce</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light italic mt-4">
            &ldquo;Where the world&rsquo;s most iconic brands define the future of physical
            retail.&rdquo;
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
              Scroll to Explore
            </span>
          </motion.div>
        </motion.div>

        {/* 2. 3D Card Stack */}
        <div className="absolute inset-0 pointer-events-none">
          {retailFormats.map((format, i) => (
            <Card key={format.id} format={format} index={i} progress={smoothProgress} />
          ))}
        </div>

        {/* 3. Final Interactive Slide */}
        <motion.div
          style={{ opacity: finalOpacity, scale: finalScale, y: finalY }}
          className="absolute inset-0 flex items-center justify-center p-6 md:p-12 z-30 pointer-events-none"
        >
          <div className="w-full max-w-6xl glass rounded-[2rem] md:rounded-[4rem] border border-white/10 p-6 sm:p-10 md:p-20 overflow-hidden relative group pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none opacity-0 transition-opacity duration-1000" />

            <div className="relative z-10 text-center">
              <span className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] mb-12 block outfit font-bold">
                Interactive Experience
              </span>

              <div className="mb-12">
                <input
                  type="text"
                  name="brand"
                  autoComplete="off"
                  spellCheck={false}
                  value={yourBrand}
                  onChange={(e) => setYourBrand(e.target.value)}
                  placeholder="CHOOSE YOUR LEGACY"
                  className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-6 text-center text-xl sm:text-3xl md:text-6xl lg:text-8xl font-black outfit uppercase tracking-tighter focus:border-white transition-all outline-none placeholder:text-zinc-900"
                />
                <motion.div
                  animate={{ opacity: yourBrand ? 1 : 0.4 }}
                  className="mt-6 text-[10px] text-zinc-500 uppercase tracking-[0.3em]"
                >
                  Enter your brand name to visualize its future
                </motion.div>
              </div>

              <div
                className={`transition-all duration-1000 ${yourBrand ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <p
                  suppressHydrationWarning
                  className="text-lg md:text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                  Visualizing{" "}
                  <span className="text-white font-bold tracking-widest">{displayBrand}</span>{" "}
                  positioned in the heart of the world&rsquo;s most productive retail corridor.
                </p>
                <button className="group relative px-8 py-4 sm:px-16 sm:py-6 md:px-20 md:py-8 bg-white text-black text-[10px] md:text-xs uppercase tracking-[0.5em] font-black rounded-full hover:scale-105 transition-all duration-500">
                  <span className="relative z-10">Request a simulation</span>
                  <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 h-1/3 justify-center z-40">
          {[0, 1, 2, 3, 4].map((i) => (
            <NavDot key={i} index={i} progress={smoothProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
