'use client';

import { motion } from 'framer-motion';

const brands = ['Hermès', 'Saks Fifth Avenue', 'Gucci', 'Saint Laurent', 'Tiffany & Co.', 'Dolce & Gabbana'];

export default function LuxurySection() {
  return (
    <section id="luxury" className="py-32 px-6 md:px-24 bg-black relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit">Prestigious Excellence</span>
          <h2 className="text-5xl md:text-7xl font-bold outfit uppercase mb-8 leading-tight">
            The Avenue: <br/>
            <span className="text-gradient">A New Standard <br/> for Luxury</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-lg leading-relaxed font-light">
            Curated by legendary designer Jonathan Adler, The Avenue is an unrivaled collection of global fashion houses and fine dining, nestled within a whimsical, art-forward environment.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 border-t border-white/10 pt-12">
            {brands.map((brand, i) => (
              <span key={brand} className="text-xs uppercase tracking-widest text-zinc-500 font-medium hover:text-white transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl group"
        >
          {/* Placeholder for the user provided image */}
          <div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-700">
            <img 
              src="/assets/the-avenue.png" 
              alt="The Avenue at American Dream" 
              className="w-full h-full object-cover opacity-60"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1540959733332-e94e270b4d48?auto=format&fit=crop&q=80&w=1000'; // fallback
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-10 left-10">
            <p className="outfit text-2xl font-bold uppercase tracking-widest text-white">Saks Fifth Avenue</p>
            <p className="text-zinc-400 text-xs uppercase tracking-widest mt-2">Anchor Destination</p>
          </div>

          <div className="absolute top-10 right-10 glass px-6 py-2 rounded-full">
            <span className="text-[10px] text-white uppercase tracking-widest font-bold">Art-Forward Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
