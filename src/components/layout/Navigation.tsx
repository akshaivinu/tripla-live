"use client";

import { memo } from "react";
import { SECTION_NAV_ITEMS } from "@/constants/sections";
import { useDeck } from "@/components/context/DeckContext";

const Navigation = memo(function Navigation() {
  const { activeId, goToSlide } = useDeck();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
      <div className="flex items-center gap-1 p-1.5 bg-black/60 backdrop-blur-xl rounded-full border border-white/15 overflow-x-auto no-scrollbar max-w-[92vw] shadow-[0_4px_40px_rgba(0,0,0,0.6)]">
        {SECTION_NAV_ITEMS.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`relative px-4 md:px-5 py-2 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 whitespace-nowrap ${
              activeId === item.id
                ? "bg-[var(--gold)] text-black shadow-[0_0_20px_rgba(201,168,76,0.35)]"
                : "text-zinc-400 hover:text-white hover:bg-white/8"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
});

export default Navigation;