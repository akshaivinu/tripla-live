'use client';

import { motion } from 'framer-motion';

const eventHighlights = [
  { title: 'Brand Activations', icon: '✨' },
  { title: 'Global Concerts', icon: '🎤' },
  { title: 'Product Launches', icon: '🚀' },
  { title: 'Celebrity Appearances', icon: '🌟' },
];

export default function EventsSection() {
  return (
    <section id="events" className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/events-platform.png" 
          alt="Events at American Dream" 
          className="w-full h-full object-cover brightness-[0.3]"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit">Global Platform</span>
            <h2 className="text-5xl md:text-7xl font-bold outfit uppercase mb-8 leading-tight text-white">
              Where Brands <br/> <span className="text-gradient">Take Center Stage</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-lg leading-relaxed font-light">
              From global product launches to high-capacity concerts, American Dream provides the infrastructure and the audience to make every event historic.
            </p>
            
            <button className="px-10 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-zinc-200 transition-all rounded-full">
              View Venue Specs
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {eventHighlights.map((highlight, i) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="glass p-10 rounded-3xl border border-white/5 group hover:border-white/20 transition-all"
              >
                <div className="text-4xl mb-6">{highlight.icon}</div>
                <h3 className="text-xl font-bold outfit uppercase text-white mb-2">{highlight.title}</h3>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Infinite Capability</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
