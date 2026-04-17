"use client";

import { motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
  const { isMuted, toggleMute } = useDeck();

  return (
    <button
      title={isMuted ? "Unmute" : "Mute"}
      onClick={toggleMute}
      className="fixed bottom-12 right-12 z-[200] p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/5 hover:border-[var(--gold)]/40 transition-all text-white/60 hover:text-[var(--gold)] flex items-center justify-center group"
    >
      <motion.div
        initial={false}
        animate={{ scale: [1, 1.2, 1] }}
        key={isMuted ? "muted" : "unmuted"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </motion.div>

      <span className="absolute right-full mr-4 text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {isMuted ? "Sound Off" : "Sound On"}
      </span>
    </button>
  );
}
