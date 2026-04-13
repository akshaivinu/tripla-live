'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'scale', label: 'Scale' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'dining', label: 'Dining' },
  { id: 'entertainment', label: 'Play' },
  { id: 'events', label: 'Events' },
  { id: 'commercial', label: 'Join' },
];

export default function SideNav({ isVisible }: { isVisible: boolean }) {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    if (!isVisible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-20% 0px -20% 0px' }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isVisible]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-end group transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-x-0 z-50' : 'opacity-0 translate-x-10 z-0 pointer-events-none'
    }`}>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className="flex items-center gap-4 group/btn"
        >
          <span className={`text-[10px] uppercase tracking-widest outfit transition-all duration-300 opacity-0 group-hover:opacity-100 ${
            active === section.id ? 'text-white opacity-100' : 'text-zinc-500'
          }`}>
            {section.label}
          </span>
          <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
            active === section.id ? 'bg-white scale-[2]' : 'bg-zinc-700'
          }`} />
        </button>
      ))}
    </nav>
  );
}
