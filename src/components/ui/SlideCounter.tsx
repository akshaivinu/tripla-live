"use client";

import { useDeck } from "@/components/context/DeckContext";

export default function SlideCounter() {
  const { activeIndex, totalSlides } = useDeck();

  const current = (activeIndex + 1).toString().padStart(2, "0");
  const total = totalSlides.toString().padStart(2, "0");

  return (
    <div className="fixed bottom-8 right-8 z-[150] pointer-events-none">
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-1">
          Panel
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold outfit text-white leading-none">{current}</span>
          <span className="text-zinc-600 text-sm font-light">/</span>
          <span className="text-zinc-600 text-sm font-medium">{total}</span>
        </div>
      </div>
    </div>
  );
}
