"use client";

import Image from "next/image";

export default function LuxurySlide() {
  return (
    <section className="h-screen w-full bg-black relative overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/luxury-storefronts.png"
          alt="Luxury storefronts"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 px-6 md:px-16">
        {/* LEFT SIDE */}
        <div className="flex pt-20 md:pt-0 flex-col md:justify-center max-w-xl">
          <h2 className="text-[clamp(2rem,4vw,3rem)] italic leading-tight">
            Where luxury brands drive top-tier U.S. retail performance.
          </h2>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-400">
            Luxury here is not positioning — it’s performance.
          </p>

          {/* HERO METRIC */}
          <div className="mt-12">
            <h3 className="text-[clamp(3.5rem,8vw,5rem)] font-bold text-[var(--gold)]">$850</h3>
            <p className="text-sm uppercase tracking-[0.4em] mt-2">Avg Spend Per Visit</p>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE STACK */}
        <div className="hidden md:flex items-center justify-center relative">
          <div className="relative w-[300px] h-[380px]">
            <Image
              src="/assets/the-avenue.png"
              alt="Luxury avenue storefront"
              fill
              className="object-cover rounded-xl shadow-2xl rotate-[-3deg]"
            />

            <Image
              src="/assets/luxury-avenue.png"
              alt="Luxury shopping corridor"
              fill
              className="object-cover rounded-xl shadow-2xl rotate-[10deg] top-10 left-8"
            />
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="absolute bottom-20 md:bottom-10 w-full flex justify-center gap-12 md:gap-20 py-4 md:py-6">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold">48+</div>
          <div className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest">
            Luxury Brands
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold">#1</div>
          <div className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest">
            Luxury Corridor
          </div>
        </div>
      </div>
    </section>
  );
}
