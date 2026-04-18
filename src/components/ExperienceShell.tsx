"use client";

import { useState } from "react";
import { DeckProvider } from "@/components/context/DeckContext";
import DeckExperience from "@/components/DeckExperience";
import DeckPlayerBar from "@/components/layout/DeckPlayerBar";
import Cursor from "@/components/layout/Cursor";
import ContextBar from "@/components/layout/ContextBar";
import LeasingModal from "@/components/ui/LeasingModal";

// Dynamic imports for performance can still be used inside SLIDE_COMPONENTS mapping in DeckExperience if needed,
// for now we use the main layout.

import LandingStage from "./intro/LandingStage";
import CinemaStage from "./intro/CinemaStage";
import { useDeck } from "@/components/context/DeckContext";
import { AnimatePresence } from "framer-motion";

function ExperienceMain() {
  const { hasStarted, introComplete, activeId } = useDeck();
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);
  const isHeroSlide = activeId === "hero";

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden font-body">
      <div className="grain" />
      {/* <Cursor /> */}

      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <LandingStage key="landing" />
        ) : !introComplete ? (
          <CinemaStage key="cinema" />
        ) : (
          <div className="relative w-full h-full flex flex-col">
            {/* TOP CONTENT AREA (slides live here) */}
            <div className="flex-1 relative overflow-hidden">
              {!isHeroSlide && <ContextBar />}
              <DeckExperience />
            </div>

            {/* RESERVED SPACE FOR PLAYER BAR */}
            {!isHeroSlide && (
              <div className="relative">
                <DeckPlayerBar />
              </div>
            )}
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
