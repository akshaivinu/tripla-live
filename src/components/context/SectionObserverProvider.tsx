"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { SECTION_IDS } from "@/constants/sections";

const defaultSection = SECTION_IDS[0];

const SectionObserverContext = createContext<string>(defaultSection);

interface SectionObserverProviderProps {
  children: ReactNode;
  enabled: boolean;
}

export function SectionObserverProvider({ children, enabled }: SectionObserverProviderProps) {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [enabled]);

  const currentSection = enabled ? activeSection : defaultSection;

  return (
    <SectionObserverContext.Provider value={currentSection}>
      {children}
    </SectionObserverContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(SectionObserverContext);
}
