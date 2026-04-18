"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, FastForward } from "lucide-react";
import CinematicReveal from "./CinematicReveal";

export default function CinemaStage() {
  const { setIntroComplete, isMuted, toggleMute } = useDeck();
  const [progress, setProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Stage 1: Branding Reveal
    const timer = setTimeout(() => {
      setIsRevealing(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Stage 2: Video Playback
    if (!isRevealing && videoRef.current) {
      videoRef.current.play().catch((err) => console.error("Autoplay failed:", err));
    }
  }, [isRevealing]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  return (
    <div className="fixed inset-0 z-[600] bg-black overflow-hidden flex items-center justify-center">
      {/* Branding Reveal Layer */}
      <AnimatePresence>
        {isRevealing && (
          <motion.div
            key="reveal"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-50"
          >
            <CinematicReveal />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Local Video Player */}
      <motion.div
        animate={{ opacity: isRevealing ? 0 : 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-10"
      >
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src="/assets/walkthrough.mp4"
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIntroComplete(true)}
            className="w-full h-full object-cover scale-[1.15] brightness-[0.85] contrast-[1.1]"
          />

          {/* Cinematic Post-Processing Overlay */}
          <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
          <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
        </div>

        {/* Overlay UI */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
            <motion.div className="h-full bg-[var(--gold)]" style={{ width: `${progress}%` }} />
          </div>

          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center pointer-events-auto">
            <button
              onClick={toggleMute}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <button
              onClick={() => setIntroComplete(true)}
              className="flex items-center gap-4 px-8 py-3 rounded-full glass border-white/10 group hover:border-[var(--gold)]/50 transition-all duration-500 overflow-hidden"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white">
                Skip Intro
              </span>
              <FastForward
                size={14}
                className="text-[var(--gold)] group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
