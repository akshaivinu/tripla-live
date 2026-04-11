'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function LeasingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-10 w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="p-12">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h2 className="text-3xl font-bold outfit uppercase text-white mb-2">Leasing Inquiry</h2>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest">Global Flagship Opportunities</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-500 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all font-light" placeholder="Aiden Sterling" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Corporate Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all font-light" placeholder="aiden@brand.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Brand / Concept Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all font-light" placeholder="Luxury Lifestyle Inc." />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Interest Area</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/20 transition-all font-light appearance-none">
                    <option className="bg-zinc-900">The Avenue Luxury</option>
                    <option className="bg-zinc-900">Retail Flagship</option>
                    <option className="bg-zinc-900">Pop-up / Activation</option>
                    <option className="bg-zinc-900">Food & Beverage</option>
                  </select>
                </div>

                <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-zinc-200 transition-all mt-8">
                  Submit Inquiry
                </button>
              </form>
            </div>
            
            <div className="bg-white/5 p-6 text-center border-t border-white/5">
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Our leasing team typically responds within 24 business hours.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
