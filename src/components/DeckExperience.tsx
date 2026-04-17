"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { useDeck } from "@/components/context/DeckContext";

const SectionSkeleton = () => (
  <div className="w-full h-full bg-zinc-950 flex items-center justify-center">
    <div className="w-8 h-8 border border-white/20 border-t-[var(--gold)] rounded-full animate-spin" />
  </div>
);

const Hero = dynamic(() => import("@/components/sections/Hero"), { loading: () => <SectionSkeleton />, ssr: false });
const ScaleSection = dynamic(() => import("@/components/sections/ScaleSection"), { loading: () => <SectionSkeleton />, ssr: false });
const LuxurySection = dynamic(() => import("@/components/sections/LuxurySection"), { loading: () => <SectionSkeleton />, ssr: false });
const DiningSection = dynamic(() => import("@/components/sections/DiningSection"), { loading: () => <SectionSkeleton />, ssr: false });
const EntertainmentSection = dynamic(() => import("@/components/sections/EntertainmentSection"), { loading: () => <SectionSkeleton />, ssr: false });
const EventsSection = dynamic(() => import("@/components/sections/EventsSection"), { loading: () => <SectionSkeleton />, ssr: false });
const CommercialSection = dynamic(() => import("@/components/sections/CommercialSection"), { loading: () => <SectionSkeleton />, ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), { loading: () => <SectionSkeleton />, ssr: false });

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
            y: { type: "spring", stiffness: 260, damping: 28 },
            opacity: { duration: 0.5 },
          }}
          style={{ willChange: "transform, opacity" }}
          className="absolute inset-0 w-full h-full"
        >
          {React.createElement(SLIDE_COMPONENTS[activeId] || (() => null))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
