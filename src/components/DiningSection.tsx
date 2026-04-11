'use client';

import { motion } from 'framer-motion';

export default function DiningSection() {
  return (
    <section id="dining" className="py-32 px-6 md:px-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative order-2 lg:order-1 aspect-video lg:aspect-square rounded-[3rem] overflow-hidden"
        >
          <img 
            src="/assets/dining-lifestyle.png" 
            alt="Dining at American Dream" 
            className="w-full h-full object-cover opacity-70"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12">
            <h3 className="text-3xl font-bold outfit uppercase text-white">Carpaccio</h3>
            <p className="text-zinc-400 text-sm uppercase tracking-widest mt-2">Fine Italian Dining</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2"
        >
          <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit">Culinary Excellence</span>
          <h2 className="text-5xl md:text-7xl font-bold outfit uppercase mb-8 leading-tight text-white">
            Taste the <br/> <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-lg leading-relaxed font-light">
            With over 100 food outlets ranging from world-renowned fine dining to elevated casual concepts, American Dream is a global culinary destination in its own right.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-[1px] bg-zinc-800 group-hover:w-20 transition-all duration-500 bg-white" />
              <span className="text-sm uppercase tracking-[0.3em] text-zinc-300 font-bold">100+ Dining concepts</span>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-[1px] bg-zinc-800 group-hover:w-20 transition-all duration-500 bg-white" />
              <span className="text-sm uppercase tracking-[0.3em] text-zinc-300 font-bold">Fine Dining Row</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
