"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Hero from "@/components/sections/Hero";
import SideNav from "@/components/layout/SideNav";
import ContextBar from "@/components/layout/ContextBar";
import LeasingModal from "@/components/ui/LeasingModal";
import Cursor from "@/components/layout/Cursor";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import { SectionObserverProvider } from "@/components/context/SectionObserverProvider";

const ScaleSection = dynamic(() => import("@/components/sections/ScaleSection"), {
  ssr: false,
  loading: () => <SectionSkeleton label="Scale metrics" rows={4} />,
});
const LuxurySection = dynamic(() => import("@/components/sections/LuxurySection"), {
  ssr: false,
  loading: () => <SectionSkeleton label="Luxury experiences" rows={5} />,
});
const DiningSection = dynamic(() => import("@/components/sections/DiningSection"), {
  ssr: false,
  loading: () => <SectionSkeleton label="Dining concepts" rows={3} />,
});
const EntertainmentSection = dynamic(() => import("@/components/sections/EntertainmentSection"), {
  ssr: false,
  loading: () => <SectionSkeleton label="Entertainment highlights" rows={4} />,
});
const EventsSection = dynamic(() => import("@/components/sections/EventsSection"), {
  ssr: false,
  loading: () => <SectionSkeleton label="Event case studies" rows={5} />,
});
const CommercialSection = dynamic(() => import("@/components/sections/CommercialSection"), {
  ssr: false,
  loading: () => <SectionSkeleton label="Commercial opportunities" rows={3} />,
});

export default function ExperienceShell() {
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isStarted && window.scrollY > 50) {
        setIsStarted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isStarted]);

  return (
    <SectionObserverProvider enabled={isStarted}>
      <main className="relative flex flex-col w-full bg-black">
        <Cursor />
        <SideNav isVisible={isStarted} />
        <ContextBar isVisible={isStarted} />
        <Hero onEnter={() => setIsStarted(true)} isStarted={isStarted} />

        <div
          className={`transition-opacity duration-[1500ms] ${
            isStarted ? "opacity-100 placeholder:opacity-0" : "opacity-0 pointer-events-none"
          }`}
        >
          <ScaleSection />
          <LuxurySection />
          <DiningSection />
          <EntertainmentSection />
          <EventsSection />
          <div id="commercial" onClick={() => setIsLeasingOpen(true)}>
            <CommercialSection />
          </div>
        </div>

        <LeasingModal isOpen={isLeasingOpen} onClose={() => setIsLeasingOpen(false)} />
      </main>
    </SectionObserverProvider>
  );
}
