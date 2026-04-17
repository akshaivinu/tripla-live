"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";
import Hero from "@/components/sections/Hero";
import ScaleSection from "@/components/sections/ScaleSection";
import LuxurySection from "@/components/sections/LuxurySection";
import DiningSection from "@/components/sections/DiningSection";
import EntertainmentSection from "@/components/sections/EntertainmentSection";
import EventsSection from "@/components/sections/EventsSection";
import CommercialSection from "@/components/sections/CommercialSection";
import ContactSection from "@/components/sections/ContactSection";

const SLIDE_COMPONENTS: Record<string, React.FC> = {
  hero: Hero,
  scale: ScaleSection,
  luxury: LuxurySection,
  dining: DiningSection,
  entertainment: EntertainmentSection,
  events: EventsSection,
  commercial: CommercialSection,
  contact: ContactSection,
};

export default function DeckExperience() {
  const { activeId, direction } = useDeck();

  const variants = {
    initial: (dir: number) => ({
      y: dir > 0 ? "100%" : dir < 0 ? "-100%" : 0,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "-100%" : dir < 0 ? "100%" : 0,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={activeId}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {React.createElement(SLIDE_COMPONENTS[activeId] || (() => null))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
