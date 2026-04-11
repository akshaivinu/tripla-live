'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const retailFormats = [
  {
    id: 'luxury',
    title: 'The Avenue Luxury',
    desc: 'The ultimate collection of global fashion houses.',
    brands: ['Hermès', 'Saks Fifth Avenue', 'Gucci', 'Saint Laurent'],
    image: 'https://images.unsplash.com/photo-1540959733332-e94e270b4d48?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'flagship',
    title: 'Global Flagships',
    desc: 'Large-scale retail destinations for world-leading brands.',
    brands: ['Zara', 'H&M', 'Sephora', 'Vans'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'popup',
    title: 'Pop-Up & Innovation',
    desc: 'Flexible spaces for emerging brands and activations.',
    brands: ['Direct-to-Consumer', 'Art Installations', 'Seasonal'],
    image: 'https://images.unsplash.com/photo-1534452285072-c5cee2f1557d?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function LuxurySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  const [yourBrand, setYourBrand] = useState('');

  return (
    <section ref={containerRef} id="luxury" className="relative h-[400vh] bg-black z-10">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-[10vw] px-[10vw] items-center h-[80vh] min-w-max"
        >
          {/* Intro Slide */}
          <div className="w-[80vw] md:w-[60vw] flex flex-col justify-center">
            <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit">Prestigious Excellence</span>
            <h2 className="text-5xl md:text-8xl font-bold outfit uppercase mb-8 leading-tight text-white">
              Retail <br/>
              <span className="text-gradient">Opportunities</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed font-light">
              From global fashion houses to high-velocity flagships. American Dream is the premier platform for retail innovation.
            </p>
          </div>

          {/* Format Slides */}
          {retailFormats.map((format) => (
            <div key={format.id} className="w-[80vw] md:w-[45vw] h-full relative group overflow-hidden rounded-3xl shrink-0">
              <img 
                src={format.image} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                alt={format.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-4xl font-bold outfit uppercase mb-4">{format.title}</h3>
                <p className="text-zinc-400 font-light mb-6">{format.desc}</p>
                <div className="flex flex-wrap gap-4">
                  {format.brands.map(brand => (
                    <span key={brand} className="text-[10px] uppercase tracking-widest px-3 py-1 border border-white/20 rounded-full text-zinc-300">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* "Your Brand Here" Simulation Slide */}
          <div className="min-w-[80vw] md:min-w-[40vw] aspect-[4/5] glass rounded-3xl border border-white/10 flex flex-col items-center justify-center p-12 text-center group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-zinc-500 uppercase tracking-widest text-[10px] mb-8 block outfit">Leasing Simulation</span>
            
            <div className="w-full max-w-xs relative mb-12">
              <input 
                type="text" 
                value={yourBrand}
                onChange={(e) => setYourBrand(e.target.value)}
                placeholder="ENTER YOUR BRAND"
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-center text-3xl font-bold outfit uppercase tracking-widest focus:border-white transition-colors outline-none placeholder:text-zinc-800"
              />
              <div className="mt-4 text-[10px] text-zinc-600 uppercase tracking-widest">See your brand on The Avenue</div>
            </div>

            <div className={`transition-all duration-1000 ${yourBrand ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <h4 className="text-zinc-400 text-sm font-light mb-8 max-w-[280px] mx-auto">
                Imagine <span className="text-white font-bold">{yourBrand || 'YOUR BRAND'}</span> at the center of a 40M+ annual audience.
              </h4>
              <button className="px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-bold rounded-full hover:bg-zinc-200 transition-all">
                Request a Simulation
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
