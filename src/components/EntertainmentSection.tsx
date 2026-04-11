'use client';

import { motion } from 'framer-motion';

const attractions = [
  {
    id: 'nickelodeon',
    title: 'Nickelodeon Universe',
    desc: 'The largest indoor theme park in North America.',
    image: '/assets/nickelodeon-universe.png',
    size: 'lg',
    fallback: 'https://images.unsplash.com/photo-1513297845732-05014e5b51d2?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'dreamworks',
    title: 'DreamWorks Water Park',
    desc: 'Record-breaking slides and year-round tropical climate.',
    image: '/assets/dreamworks-waterpark.png',
    size: 'md',
    fallback: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'big-snow',
    title: 'Big SNOW',
    desc: 'North America’s only indoor real-snow ski resort.',
    image: '/assets/big-snow.png',
    size: 'md',
    fallback: 'https://images.unsplash.com/photo-1551698618-1fed5d9e1ff2?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'aquarium',
    title: 'SEA LIFE Aquarium',
    desc: 'Immersive underwater world and interactive tunnels.',
    image: '/assets/aquarium.png',
    size: 'sm',
    fallback: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'rink',
    title: 'The Rink',
    desc: 'NHL-sized ice arena for skating and events.',
    image: '/assets/ice-rink.jpg',
    size: 'sm',
    fallback: 'https://images.unsplash.com/photo-1517177326540-a55d336d376d?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function EntertainmentSection() {
  return (
    <section id="entertainment" className="py-24 px-6 md:px-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit">Immersive Attractions</span>
          <h2 className="text-4xl md:text-6xl font-bold outfit uppercase mb-6">World-Class Entertainment</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-light">
            Defining the 'Retailtainment' model. Over 50% of the property is dedicated to attractions that drive tens of millions of visits annually.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-[800px]">
          {attractions.map((attr, i) => (
            <motion.div
              key={attr.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group ${
                attr.size === 'lg' ? 'md:col-span-4 md:row-span-2' : 
                attr.size === 'md' ? 'md:col-span-2 md:row-span-1' : 'md:col-span-1 md:row-span-1'
              }`}
            >
              <img 
                src={attr.image} 
                alt={attr.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { e.currentTarget.src = attr.fallback; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className={`font-bold outfit uppercase mb-2 ${attr.size === 'lg' ? 'text-4xl' : 'text-xl'}`}>{attr.title}</h3>
                <p className="text-zinc-400 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {attr.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
