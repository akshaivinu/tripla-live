"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DeckProvider } from "@/components/context/DeckContext";
import DeckExperience from "@/components/DeckExperience";
import TopProgressBar from "@/components/layout/TopProgressBar";
import DeckArrows from "@/components/ui/DeckArrows";
import SlideCounter from "@/components/ui/SlideCounter";
import Navigation from "@/components/layout/Navigation";
import SideNav from "@/components/layout/SideNav";
import Cursor from "@/components/layout/Cursor";
import ContextBar from "@/components/layout/ContextBar";
import LeasingModal from "@/components/ui/LeasingModal";

// Dynamic imports for performance can still be used inside SLIDE_COMPONENTS mapping in DeckExperience if needed,
// for now we use the main layout.

import TableOfContents from "@/components/layout/TableOfContents";
import SoundToggle from "./ui/SoundToggle";
import IndexButton from "./ui/IndexButton";
import BrandLogo from "./layout/BrandLogo";
import LandingStage from "./intro/LandingStage";
import CinemaStage from "./intro/CinemaStage";
import { useDeck } from "@/components/context/DeckContext";
import { AnimatePresence } from "framer-motion";
import { SECTION_NAV_ITEMS } from "@/constants/sections";

function ExperienceMain() {
  const { hasStarted, introComplete, activeId } = useDeck();
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);

  const currentSectionMeta = SECTION_NAV_ITEMS.find((item) => item.id === activeId);
  const showSound = currentSectionMeta?.hasVideo;

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden font-body">
      <div className="grain" />
      <Cursor />

      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <LandingStage key="landing" />
        ) : !introComplete ? (
          <CinemaStage key="cinema" />
        ) : (
          <div className="relative w-full h-full">
            <BrandLogo />
            <TopProgressBar />
            <Navigation />
            <SideNav />
            <ContextBar />
            <DeckArrows />
            <SlideCounter />
            <TableOfContents />
            
            <AnimatePresence>
              {showSound && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="z-50"
                >
                  <SoundToggle />
                </motion.div>
              )}
            </AnimatePresence>

            <IndexButton />
            <DeckExperience />
          </div>
        )}
      </AnimatePresence>

      <LeasingModal isOpen={isLeasingOpen} onClose={() => setIsLeasingOpen(false)} />
    </main>
  );
}

export default function ExperienceShell() {
  return (
    <DeckProvider>
      <ExperienceMain />
    </DeckProvider>
  );
}
