"use client";

import { DeckProvider } from "@/components/context/DeckContext";
import DeckExperience from "@/components/DeckExperience";
import DeckPlayerBar from "@/components/layout/DeckPlayerBar";
import Navigation from "@/components/layout/Navigation";

// Dynamic imports for performance can still be used inside SLIDE_COMPONENTS mapping in DeckExperience if needed,
// for now we use the main layout.

import LandingStage from "./intro/LandingStage";
import CinemaStage from "./intro/CinemaStage";
import PersonaStage from "./intro/PersonaStage";
import { useDeck } from "@/components/context/DeckContext";
import { AnimatePresence } from "framer-motion";

function ExperienceMain() {
  const { hasStarted, introComplete, personaSelected, activeId } = useDeck();
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
        ) : !personaSelected ? (
          <PersonaStage key="persona" />
        ) : (
          <div className="relative w-full h-full flex flex-col">
            {/* TOP CONTENT AREA (slides live here) */}
            <div className="flex-1 relative overflow-hidden">
              <Navigation />
              <DeckExperience />
            </div>

            {/* RESERVED SPACE FOR PLAYER BAR */}
              <div className="relative">
                <DeckPlayerBar />
              </div>
          </div>
        )}
      </AnimatePresence>
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
