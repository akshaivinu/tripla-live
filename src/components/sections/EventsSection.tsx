'use client';

import { motion } from 'framer-motion';

const cases = [
  {
    title: 'Global Concert Series',
    brand: 'Multi-Artist Tour',
    audience: '50,000+ per event',
    impact: 'Live streaming to 5M+',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000'
  },
  {
    title: 'Brand Activations',
    brand: 'Red Bull | Nike',
    audience: '250,000+ weekend reach',
    impact: 'Viral social engagement',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=2000'
  },
  {
    title: 'Luxury Fashion Shows',
    brand: 'The Avenue Houses',
    audience: 'Exclusive HNW Audience',
    impact: 'Global PR coverage',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2000'
  }
];

export default function EventsSection() {
  return (
    <section id="events" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit text-center lg:text-left">Platform Power</span>
            <h2 className="text-5xl md:text-8xl font-bold outfit uppercase mb-8 leading-tight text-white text-center lg:text-left">
              Where Brands <br/> <span className="text-gradient">Take Center Stage</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-32">
          {cases.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: i % 2 === 0 ? 5 : -5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full lg:w-3/5 aspect-video overflow-hidden rounded-3xl relative group shadow-[0_0_40px_rgba(255,255,255,0.05)] transform-gpu perspective-[1000px]"
              >
                <img 
                  src={cs.image} 
                  alt={cs.title} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </motion.div>
              
              <div className="w-full lg:w-2/5 flex flex-col items-start">
                <span className="text-zinc-500 uppercase tracking-widest text-[10px] mb-4 font-bold">{cs.brand}</span>
                <h3 className="text-3xl md:text-4xl font-bold outfit uppercase text-white mb-8">{cs.title}</h3>
                
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 w-full">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-2">Audience</span>
                    <span className="text-sm text-white font-medium">{cs.audience}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-2">Impact</span>
                    <span className="text-sm text-white font-medium">{cs.impact}</span>
                  </div>
                </div>

                <button className="mt-12 group flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white font-bold">
                  <span>Explore Case Study</span>
                  <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
