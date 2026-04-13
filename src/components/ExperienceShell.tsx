'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/sections/Hero';
import SideNav from '@/components/layout/SideNav';
import ContextBar from '@/components/layout/ContextBar';
import ScaleSection from '@/components/sections/ScaleSection';
import LuxurySection from '@/components/sections/LuxurySection';
import EntertainmentSection from '@/components/sections/EntertainmentSection';
import DiningSection from '@/components/sections/DiningSection';
import EventsSection from '@/components/sections/EventsSection';
import CommercialSection from '@/components/sections/CommercialSection';
import LeasingModal from '@/components/ui/LeasingModal';
import Cursor from '@/components/layout/Cursor';
import { SectionObserverProvider } from '@/components/context/SectionObserverProvider';

export default function ExperienceShell() {
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isStarted && window.scrollY > 50) {
        setIsStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStarted]);

  return (
    <SectionObserverProvider enabled={isStarted}>
      <main className="relative flex flex-col w-full bg-black">
        <Cursor />
        <SideNav isVisible={isStarted} />
        <ContextBar isVisible={isStarted} />
        <Hero onEnter={() => setIsStarted(true)} isStarted={isStarted} />

        <div className={`transition-opacity duration-[1500ms] ${isStarted ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
