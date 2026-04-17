"use client";

import { useState } from "react";
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

export default function ExperienceShell() {
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);

  return (
    <DeckProvider>
      <main className="relative w-full h-screen bg-black overflow-hidden font-body">
        <div className="grain" />
        <Cursor />
        <BrandLogo />
        <TopProgressBar />
        <Navigation />
        <SideNav />
        <ContextBar />
        <DeckArrows />
        <SlideCounter />

        <TableOfContents />
        <SoundToggle />
        <IndexButton />

        <DeckExperience />

        <LeasingModal isOpen={isLeasingOpen} onClose={() => setIsLeasingOpen(false)} />
      </main>
    </DeckProvider>
  );
}
