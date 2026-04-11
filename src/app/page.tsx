"use client"
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import SideNav from '@/components/SideNav';
import ContextBar from '@/components/ContextBar';
import ScaleSection from '@/components/ScaleSection';
import LuxurySection from '@/components/LuxurySection';
import EntertainmentSection from '@/components/EntertainmentSection';
import DiningSection from '@/components/DiningSection';
import EventsSection from '@/components/EventsSection';
import CommercialSection from '@/components/CommercialSection';
import LeasingModal from '@/components/LeasingModal';

export default function Home() {
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  // Trigger experience on scroll
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
    <main className="relative flex flex-col w-full bg-black">
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
  );
}
