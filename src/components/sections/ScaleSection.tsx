'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Total Square Feet', value: '3M+', sub: 'Spanning across 3 million sq. ft.' },
  { label: 'Annual Visitors', value: '40M+', sub: 'Attracting global foot traffic' },
  { label: 'Entertainment Mix', value: '55%', sub: 'Highest ratio in North America' },
  { label: 'Retail Partners', value: '450+', sub: 'Global flagship destinations' },
];

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const stepTime = Math.abs(Math.floor(duration * 1000 / end));
      
      const timer = setInterval(() => {
        start += 1;
        setDisplayValue(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function ScaleSection() {
  return (
    <section id="scale" className="py-20 px-6 md:px-24 bg-zinc-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit">Metrics of Success</span>
          <h2 className="text-4xl md:text-6xl font-bold outfit uppercase mb-6">Unrivaled Scale. <br/> <span className="text-zinc-500">Unmatched Opportunity.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: -5,
                transition: { duration: 0.3 }
              }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden transform-gpu"
              style={{ perspective: 1000 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-5xl font-bold outfit mb-2 text-white group-hover:text-white transition-colors">
                <Counter value={stat.value} />
              </h3>
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors mb-4">{stat.label}</p>
              <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-out">
                <p className="text-xs text-zinc-500 leading-relaxed font-light">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 p-12 glass-dark rounded-3xl border border-white/5 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h4 className="text-2xl font-bold outfit uppercase mb-4">A City Under One Roof</h4>
              <p className="text-zinc-400 leading-relaxed">
                American Dream is more than a mall—it is a global destination. Situated within the Meadowlands Sports Complex, just minutes from Manhattan, we command a regional reach of over 20 million people.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-right">
              <span className="text-4xl font-bold outfit text-white">20M+</span>
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Regional Reach</span>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
