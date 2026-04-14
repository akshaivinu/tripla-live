"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const cases = [
  {
    title: "Global Concert Series",
    brand: "Multi-Artist Tour",
    audience: "50,000+ per event",
    impact: "Live streaming to 5M+",
    video: "https://videos.pexels.com/video-files/2795405/2795405-uhd_2560_1440_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Brand Activations",
    brand: "Red Bull | Nike",
    audience: "250,000+ weekend reach",
    impact: "Viral social engagement",
    video: "https://videos.pexels.com/video-files/3843987/3843987-uhd_2560_1440_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Luxury Fashion Shows",
    brand: "The Avenue Houses",
    audience: "Exclusive HNW Audience",
    impact: "Global PR coverage",
    video: "https://videos.pexels.com/video-files/3774478/3774478-uhd_2560_1440_24fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2000",
  },
];

function VideoCard({ cs, i }: { cs: (typeof cases)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const inView = useInView(ref, { margin: "-30% 0px -30% 0px", amount: 0.35 });
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);

  useEffect(() => {
    if (!inView || shouldRenderVideo) return;

    let frameId: number | null = null;

    if (typeof window !== "undefined") {
      frameId = window.requestAnimationFrame(() => setShouldRenderVideo(true));
    }

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [inView, shouldRenderVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldRenderVideo) return;

    if (inView) {
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [inView, shouldRenderVideo]);

  const y = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -100 : 100]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 md:gap-12 items-center`}
    >
      <motion.div className="w-full lg:w-3/5 aspect-video overflow-hidden rounded-3xl relative group shadow-[0_0_60px_rgba(255,255,255,0.05)] transform-gpu perspective-[1000px]">
        <motion.div style={{ y }} className="absolute inset-0">
          {shouldRenderVideo ? (
            <motion.video
              ref={videoRef}
              src={cs.video}
              poster={cs.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover scale-110 grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
            />
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${cs.poster})` }}
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-700 pointer-events-none" />
        <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-[10px] uppercase tracking-widest text-white/70">
          0{i + 1} / Activation
        </div>
      </motion.div>

      <div className="w-full lg:w-2/5 flex flex-col items-start">
        <span className="text-zinc-500 uppercase tracking-widest text-[10px] mb-4 font-bold">
          {cs.brand}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold outfit uppercase text-white mb-8 leading-tight">
          {cs.title}
        </h3>

        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 w-full">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-2">
              Audience
            </span>
            <span className="text-sm text-white font-medium">{cs.audience}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-2">
              Impact
            </span>
            <span className="text-sm text-white font-medium">{cs.impact}</span>
          </div>
        </div>

        <button className="mt-12 group flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white font-bold">
          <span>Explore Case Study</span>
          <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 transition-all duration-300" />
        </button>
      </div>
    </motion.div>
  );
}

export default function EventsSection() {
  return (
    <section id="events" className="relative py-16 md:py-32 bg-black overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-[0.04] pointer-events-none"
        src="https://videos.pexels.com/video-files/2795405/2795405-uhd_2560_1440_25fps.mp4"
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit text-center lg:text-left">
              Platform Power
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-bold outfit uppercase mb-8 leading-tight text-white text-center lg:text-left">
              Where Brands <br /> <span className="text-gradient">Take Center Stage</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-16 md:gap-32">
          {cases.map((cs, i) => (
            <VideoCard key={cs.title} cs={cs} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
