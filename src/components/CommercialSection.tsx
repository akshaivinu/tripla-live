'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const paths = [
  {
    title: 'Retail Leasing',
    desc: 'Secure your place among global flagships and luxury icons.',
    cta: 'Inquire Now',
    color: 'from-white/10 to-white/5'
  },
  {
    title: 'Partnerships',
    desc: 'Connect with a massive, high-intent audience year-round.',
    cta: 'Partner With Us',
    color: 'from-zinc-800/10 to-zinc-900/5'
  },
  {
    title: 'Event Hosting',
    desc: 'Book one of our world-class venues for your next activation.',
    cta: 'Book Venue',
    color: 'from-white/10 to-white/5'
  }
];

export default function CommercialSection() {
  return (
    <section id="commercial" className="py-32 px-6 md:px-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit">The Next Chapter</span>
          <h2 className="text-4xl md:text-6xl font-bold outfit uppercase mb-6">Build Your Legacy <br/> <span className="text-zinc-500 italic">With Us</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] glass border border-white/5 flex flex-col justify-between group hover:border-white/20 transition-all h-[500px] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6 block font-bold">Opportunity Type</span>
                <h3 className="text-3xl font-bold outfit uppercase text-white mb-6 leading-tight">{path.title}</h3>
                <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">{path.desc}</p>
                
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="h-[1px] w-12 bg-white/20 mb-4" />
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Platform Insight</p>
                  <p className="text-sm text-white font-medium">{i === 0 ? '98% Luxury Retention' : i === 1 ? '40M+ Multi-Channel Reach' : 'Flexible Venue Agnostic Site'}</p>
                </div>
              </div>
              
              <button className="flex items-center justify-between w-full p-6 bg-white rounded-2xl text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all">
                <span>{i === 0 ? 'Request Private Briefing' : i === 1 ? 'Explore Partnership' : 'Check Availability'}</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-500 text-xs uppercase tracking-[0.5em] mb-4">Contact Our Commercial Team</p>
          <p className="text-white text-xl md:text-2xl font-light outfit">leasing@americandream.com | +1 833 263 7326</p>
        </motion.div>
      </div>
      
      {/* Footer Branding */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center opacity-20 user-select-none pointer-events-none">
        <span className="outfit text-[12vw] font-bold uppercase tracking-tighter text-zinc-800 leading-none">
          American Dream
        </span>
      </div>
    </section>
  );
}
