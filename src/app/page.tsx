"use client"
import { useState } from 'react';
import Hero from '@/components/Hero';
import SideNav from '@/components/SideNav';
import ScaleSection from '@/components/ScaleSection';
import LuxurySection from '@/components/LuxurySection';
import EntertainmentSection from '@/components/EntertainmentSection';
import DiningSection from '@/components/DiningSection';
import EventsSection from '@/components/EventsSection';
import CommercialSection from '@/components/CommercialSection';
import LeasingModal from '@/components/LeasingModal';

export default function Home() {
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);

  return (
    <main className="relative flex flex-col w-full">
      <SideNav />
      <Hero />
      <ScaleSection />
      <LuxurySection />
      <DiningSection />
      <EntertainmentSection />
      <EventsSection />
      <div id="commercial" onClick={() => setIsLeasingOpen(true)}>
        <CommercialSection />
      </div>
      
      <LeasingModal isOpen={isLeasingOpen} onClose={() => setIsLeasingOpen(false)} />
    </main>
  );
}
