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

export default function SideNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 items-end group">
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
