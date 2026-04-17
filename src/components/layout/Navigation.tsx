"use client";

import { memo } from "react";
import { SECTION_NAV_ITEMS } from "@/constants/sections";
import { useDeck } from "@/components/context/DeckContext";

const Navigation = memo(function Navigation() {
  const { activeId, goToSlide } = useDeck();

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] hidden lg:block">
      <div className="flex items-center gap-2 p-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
        {SECTION_NAV_ITEMS.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
              activeId === item.id
                ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
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
