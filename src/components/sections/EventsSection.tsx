"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const PROOF_ITEMS = ["Nike", "Samsung", "TikTok", "Formula 1", "LEGO", "Launch Events"];

export default function EventsSlide() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setHasInteracted(true);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    setHasInteracted(true);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white pt-20 pb-16">
      {/* FULL-SCREEN VIDEO — primary storytelling medium */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/assets/commercial-ad.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* VIDEO CONTROLS — bottom right */}
      <div className="absolute bottom-28 right-8 z-30 flex items-center gap-3">
        <AnimatePresence>
          {!hasInteracted && (
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              style={{ willChange: "transform, opacity" }}
              className="text-[9px] uppercase tracking-[0.3em] text-white/40"
            >
              Tap to unmute
            </motion.p>
          )}
        </AnimatePresence>
        <button
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>
      </div>

      {/* CONTENT — anchored left, video visible on right */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 pb-32 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ willChange: "transform, opacity" }}
          className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)] mb-4"
        >
          Global Activation Platform
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em] max-w-xl"
        >
          Where Brands
          <br />
          Become
          <br />
          Moments.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ willChange: "opacity" }}
          className="mt-6 text-sm text-white/60 leading-relaxed max-w-sm"
        >
          Launches, takeovers, broadcasts, and large-scale activations that convert attention into
          traffic — at 50,000+ capacity.
        </motion.p>

        {/* Metric row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ willChange: "transform, opacity" }}
          className="mt-10 flex items-center gap-10"
        >
          <div>
            <p className="text-4xl md:text-5xl font-bold">50K+</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-1">Capacity</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <p className="text-4xl md:text-5xl font-bold text-[var(--gold)]">200+</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-1">Events / Year</p>
          </div>
        </motion.div>

        {/* Brand proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2"
        >
          {PROOF_ITEMS.map((item) => (
            <span
              key={item}
              className="text-[9px] uppercase tracking-[0.3em] text-white/30"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}