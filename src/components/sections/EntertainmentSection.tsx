'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

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
    desc: 'North Americaâ€™s only indoor real-snow ski resort.',
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

function AttractionCard({ attr, i }: { attr: typeof attractions[0]; i: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -100 : 100]);

  const [imgSrc, setImgSrc] = useState(attr.image);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: i * 0.1 }}
      className={`relative overflow-hidden rounded-3xl group ${
        attr.size === 'lg'
          ? 'aspect-[4/3] md:aspect-auto md:col-span-4 md:row-span-2'
          : attr.size === 'md'
          ? 'aspect-video md:aspect-auto md:col-span-2 md:row-span-1'
          : 'aspect-square md:aspect-auto md:col-span-1 md:row-span-1'
      }`}
    >
      <Image 
        src={imgSrc} 
        alt={attr.title} 
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        onError={() => setImgSrc(attr.fallback)}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
      
      <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
        <h3 className={`font-bold outfit uppercase mb-2 ${attr.size === 'lg' ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'}`}>{attr.title}</h3>
        <p className="text-zinc-400 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {attr.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function EntertainmentSection() {
  return (
    <section id="entertainment" className="py-16 md:py-24 px-4 md:px-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit">Immersive Attractions</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold outfit uppercase mb-6">World-Class Entertainment</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-light">
            Defining the &lsquo;Retailtainment&rsquo; model. Over 50% of the property is dedicated to attractions that drive tens of millions of visits annually.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-[300px_200px] gap-4 md:gap-6">
          {attractions.map((attr, i) => (
            <AttractionCard key={attr.id} attr={attr} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

