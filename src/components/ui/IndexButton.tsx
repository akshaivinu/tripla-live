"use client";

import { useDeck } from "@/components/context/DeckContext";
import { Grid } from "lucide-react";

export default function IndexButton() {
  const { setTOCOpen } = useDeck();

  return (
    <button
      title="View Index"
      onClick={() => setTOCOpen(true)}
      className="fixed bottom-12 left-12 z-[200] p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/5 hover:border-[var(--gold)]/40 transition-all text-white/60 hover:text-[var(--gold)] flex items-center justify-center group"
    >
      <Grid size={20} />
      <span className="absolute left-full ml-4 text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Open Index
      </span>
    </button>
  );
}
