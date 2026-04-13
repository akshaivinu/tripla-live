"use client";

import { motion } from "framer-motion";
import { SECTION_NAV_ITEMS } from "@/constants/sections";
import { useActiveSection } from "@/components/context/SectionObserverProvider";

export default function SideNav({ isVisible }: { isVisible: boolean }) {
  const activeSection = useActiveSection();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 items-end group transition-all duration-1000 z-[60] ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"
      }`}
    >
      {SECTION_NAV_ITEMS.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className="flex items-center gap-4 group/btn outline-none"
        >
          <span
            className={`text-[10px] uppercase tracking-[0.4em] outfit transition-all duration-500 opacity-0 group-hover/btn:opacity-100 group-hover/btn:-translate-x-2 ${
              activeSection === section.id ? "text-white opacity-80" : "text-zinc-500"
            }`}
          >
            {section.label}
          </span>
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{
                scale: activeSection === section.id ? 1.5 : 1,
                backgroundColor: activeSection === section.id ? "#ffffff" : "#3f3f46",
              }}
              className="w-1.5 h-1.5 rounded-full transition-colors duration-500"
            />
            {activeSection === section.id && (
              <motion.div
                layoutId="nav-glow"
                className="absolute w-4 h-4 rounded-full border border-white/20 blur-[2px]"
              />
            )}
          </div>
        </button>
      ))}
    </nav>
  );
}
