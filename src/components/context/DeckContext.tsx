"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { SECTION_IDS, SectionId } from "@/constants/sections";

interface DeckContextType {
  activeIndex: number;
  activeId: SectionId;
  totalSlides: number;
  isMuted: boolean;
  isTOCOpen: boolean;
  hasStarted: boolean;
  introComplete: boolean;
  direction: number; // 1 for forward, -1 for backward
  toggleMute: () => void;
  setTOCOpen: (open: boolean) => void;
  setHasStarted: (started: boolean) => void;
  setIntroComplete: (complete: boolean) => void;
  goToSlide: (index: number) => void;
  next: () => void;
  prev: () => void;
}

const DeckContext = createContext<DeckContextType | undefined>(undefined);

export function DeckProvider({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isTOCOpen, setIsTOCOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const lastScrollTime = useRef(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < SECTION_IDS.length && index !== activeIndex) {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
      }
    },
    [activeIndex]
  );

  const next = useCallback(() => {
    if (activeIndex < SECTION_IDS.length - 1) {
      setDirection(1);
      setActiveIndex((prev) => prev + 1);
    }
  }, [activeIndex]);

  const prev = useCallback(() => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex((prev) => prev - 1);
    }
  }, [activeIndex]);

  const toggleMute = () => setIsMuted((prev) => !prev);
  const setTOCOpen = (open: boolean) => setIsTOCOpen(open);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't navigate if user is typing in the leasing form or something similar
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key.toLowerCase() === "m") {
        toggleMute();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return;

      if (Math.abs(e.deltaY) > 50) {
        if (e.deltaY > 0) {
          next();
        } else {
          prev();
        }
        lastScrollTime.current = now;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current) return;

      const deltaX = e.changedTouches[0].clientX - touchStart.current.x;
      const deltaY = e.changedTouches[0].clientY - touchStart.current.y;

      // Threshold to distinguish between accidental touch and intentional swipe
      if (Math.abs(deltaY) > 50 || Math.abs(deltaX) > 50) {
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
          // Vertical swipe
          if (deltaY < 0) next();
          else prev();
        } else {
          // Horizontal swipe
          if (deltaX < 0) next();
          else prev();
        }
      }
      touchStart.current = null;
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [next, prev]);

  const activeId = SECTION_IDS[activeIndex];

  return (
    <DeckContext.Provider
      value={{
        activeIndex,
        activeId,
        totalSlides: SECTION_IDS.length,
        isMuted,
        isTOCOpen,
        hasStarted,
        introComplete,
        direction,
        toggleMute,
        setTOCOpen,
        setHasStarted,
        setIntroComplete,
        goToSlide,
        next,
        prev,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
}

export function useDeck() {
  const context = useContext(DeckContext);
  if (context === undefined) {
    throw new Error("useDeck must be used within a DeckProvider");
  }
  return context;
}
