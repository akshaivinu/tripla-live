"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ChevronRight, Info } from "lucide-react";

const BRANDS = [
  { name: "Hermes", category: "Luxury", sqft: "4,500" },
  { name: "Zara", category: "Fast Fashion", sqft: "22,000" },
  { name: "Nike", category: "Sports", sqft: "18,000" },
  { name: "Primark", category: "Value", sqft: "160,000" },
  { name: "Gentle Monster", category: "Eyewear", sqft: "3,200" },
  { name: "H&M Home", category: "Lifestyle", sqft: "12,000" },
];

const CATEGORIES = [
  { id: "luxury",    label: "Luxury Retail",    conv: 0.001, slots: 2 },
  { id: "apparel",   label: "Premium Apparel",  conv: 0.003, slots: 4 },
  { id: "tech",      label: "Tech & Innovation", conv: 0.002, slots: 1 },
  { id: "lifestyle", label: "Home & Lifestyle",  conv: 0.0025, slots: 3 },
];

export default function CommercialSection() {
  const [showProjector, setShowProjector] = useState(false);
  const [selectedCat, setSelectedCat] = useState(CATEGORIES[0]);
  const [avgTransaction, setAvgTransaction] = useState(150);

  const projectedRevenue = 40000000 * selectedCat.conv * avgTransaction;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black font-body">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center blur-[2px] scale-[1.04] opacity-80"
          style={{ backgroundImage: "url('/assets/global-flagship.png')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/85" />
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <div className="flex w-full max-w-[1100px] flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white"
          >
            520+ Brands.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-[clamp(1.5rem,2.5vw,2.2rem)] font-light italic serif text-[var(--gold)]"
          >
            Every category. One platform.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
            {BRANDS.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="group relative h-32 flex flex-col items-center justify-center bg-white/[0.03] border border-white/5 rounded-xl hover:border-[var(--gold)]/40 hover:bg-white/[0.06] transition-all duration-500 cursor-default overflow-hidden"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold group-hover:text-[var(--gold)] transition-colors">
                  {brand.name}
                </span>
                
                {/* Hover Details */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
                   <p className="text-[9px] uppercase tracking-widest text-[var(--gold)] mb-1">{brand.category}</p>
                   <p className="text-[12px] font-bold text-white">{brand.sqft} SQ FT</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => setShowProjector(true)}
            className="mt-16 flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all group"
          >
            <Calculator size={16} className="text-[var(--gold)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">
              Launch Revenue Projector
            </span>
          </motion.button>
        </div>
      </div>

      {/* REVENUE PROJECTOR PANEL */}
      <AnimatePresence>
        {showProjector && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProjector(false)}
              className="absolute inset-0 z-40 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 z-50 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 p-10 flex flex-col"
            >
              <button 
              title="right"
                onClick={() => setShowProjector(false)}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              <div className="mt-12">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)] mb-2">Interactive Tool</p>
                <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Tenant Projector</h3>
                <p className="mt-4 text-sm text-white/50 leading-relaxed">
                  Calculate your potential annual revenue based on American Dream’s 40M+ annual footfall.
                </p>
              </div>

              <div className="mt-12 space-y-8">
                {/* Category Selection */}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 block">Select Category</label>
                  <div className="grid grid-cols-2 gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCat(cat)}
                        className={`p-3 text-[10px] uppercase tracking-wider rounded-lg border transition-all ${
                          selectedCat.id === cat.id 
                          ? "bg-[var(--gold)]/10 border-[var(--gold)] text-[var(--gold)]" 
                          : "border-white/5 text-white/40 hover:border-white/20"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Avg Transaction */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Avg. Transaction Value</label>
                    <span className="text-[var(--gold)] font-bold text-lg">${avgTransaction}</span>
                  </div>
                  <input 
                  title="content"
                    type="range" 
                    min="20" 
                    max="500" 
                    step="5"
                    value={avgTransaction}
                    onChange={(e) => setAvgTransaction(Number(e.target.value))}
                    className="w-full accent-[var(--gold)] opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Result */}
                <div className="mt-auto pt-10 border-t border-white/5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Projected Annual Revenue</p>
                  <motion.p 
                    key={projectedRevenue}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-white tracking-tight"
                  >
                    ${(projectedRevenue / 1000000).toFixed(1)}M
                  </motion.p>
                  
                  {/* Scarcity Signal */}
                  <div className="mt-8 p-4 bg-[var(--gold)]/5 border border-[var(--gold)]/20 rounded-xl flex items-start gap-3">
                    <Info size={16} className="text-[var(--gold)] mt-0.5" />
                    <div>
                      <p className="text-xs text-white/80 font-medium">
                        Only <span className="text-[var(--gold)]">{selectedCat.slots} anchor slots</span> remain in your category.
                      </p>
                      <p className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Limited availability for 2026/27</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                 {/* Narrative quote removed from UI as per feedback */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
