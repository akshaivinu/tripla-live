'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '@/components/context/SectionObserverProvider';

const contextMap: Record<string, { label: string; stat: string }> = {
  hero: { label: 'Introduction', stat: 'The Platform' },
  scale: { label: 'Metrics of Success', stat: '40M+ Annual Visitors' },
  luxury: { label: 'Retail Opportunities', stat: '450+ Brand Partners' },
  dining: { label: 'Dwell Time', stat: '100+ Dining Concepts' },
  entertainment: { label: 'Differentiation', stat: '55% Entertainment Mix' },
  events: { label: 'Platform Power', stat: 'Infinite Capability' },
  commercial: { label: 'The Next Chapter', stat: 'Join the Legacy' },
};

export default function ContextBar({ isVisible }: { isVisible: boolean }) {
  const activeSection = useActiveSection();
  const current = contextMap[activeSection] ?? contextMap.hero;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
        >
          <div className="glass px-4 py-3 md:px-8 md:py-4 rounded-full border border-white/10 flex items-center justify-between backdrop-blur-xl gap-4">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1 font-medium">Viewing</span>
                <span className="text-sm font-bold outfit uppercase text-white tracking-widest">{current.label}</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1 font-medium">Context</span>
                <span className="text-sm font-medium text-zinc-300">{current.stat}</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-zinc-800" />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">Live Experience</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
