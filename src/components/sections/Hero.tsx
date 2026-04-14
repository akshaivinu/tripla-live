"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const heroVideoPoster =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 1'%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000000'/%3E%3Cstop offset='100%25' stop-color='%23333333'/%3E%3C/linearGradient%3E%3Crect width='2' height='1' fill='url(%23g)'/%3E%3C/svg%3E";
const heroVideoSrc = "/assets/hero-video.mp4";

export default function Hero({ onEnter, isStarted }: { onEnter: () => void; isStarted: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldLoadVideo = isStarted;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isStarted) {
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isStarted]);

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 min-h-full min-w-full object-cover"
          src={shouldLoadVideo ? heroVideoSrc : undefined}
          poster={heroVideoPoster}
          muted
          loop
          playsInline
          autoPlay={shouldLoadVideo}
          preload={shouldLoadVideo ? "auto" : "metadata"}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-0 transition-all duration-[2000ms] ${isStarted ? "bg-black/60 md:bg-black/20 md:backdrop-blur-[2px]" : "bg-black/20"}`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {!isStarted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-7xl font-light outfit uppercase tracking-[0.2em] text-white mb-12"
            >
              This isn&rsquo;t a mall.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <button
                onClick={onEnter}
                className="group relative px-12 py-5 overflow-hidden rounded-full bg-white text-black text-sm uppercase tracking-[0.3em] font-bold hover:text-white transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10">Enter Experience</span>
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="outfit text-sm uppercase tracking-[0.4em] text-zinc-400 mb-6 block">
              The Global Platform for Brands
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 text-gradient outfit uppercase">
              It&rsquo;s a <br /> Platform.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              3 million square feet of world-class retail, cinematic entertainment, and global-scale
              activations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-zinc-200 transition-all rounded-full min-w-[240px]">
                Explore Opportunities
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("luxury");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="px-10 py-4 glass text-white text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-all rounded-full min-w-[240px]"
              >
                The Avenue Luxury
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      {isStarted && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      )}
    </section>
  );
}
