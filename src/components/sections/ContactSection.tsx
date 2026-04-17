"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center bg-black px-4 sm:px-6 relative overflow-hidden">
      {/* Cinematic Background - Matches other sections' opacity and style */}
      <div className="absolute inset-0 z-0 opacity-40">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          src="/assets/contact-bg.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center z-10 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8 md:mb-12"
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-2 sm:mb-4 block outfit font-bold">
            The Next Chapter
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold outfit uppercase text-white leading-tight tracking-tighter">
            Join the <span className="text-[var(--gold)]">Legacy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-6xl mx-auto w-full">
          {[
            { icon: <Mail size={16} className="sm:w-5 sm:h-5" />, label: "Leasing", value: "leasing@americandream.com" },
            { icon: <Phone size={16} className="sm:w-5 sm:h-5" />, label: "Direct Line", value: "+1 (201) 340-2900" },
            { icon: <Globe size={16} className="sm:w-5 sm:h-5" />, label: "Global Reach", value: "americandream.com" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-zinc-900/50 p-4 sm:p-6 md:p-10 rounded-sm border border-white/5 relative group transition-colors duration-500 hover:bg-zinc-900 flex flex-row sm:flex-col items-center justify-start sm:justify-center text-left sm:text-center w-full"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-[var(--gold)] mr-4 sm:mr-0 sm:mb-6 group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:text-black transition-all duration-500 shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-0.5 sm:mb-2 group-hover:text-[var(--gold)] transition-colors">
                  {item.label}
                </h3>
                <p className="text-white font-medium outfit text-xs sm:text-sm md:text-base truncate w-full">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 sm:mt-10 md:mt-16 w-full px-4 sm:px-0"
        >
          <button
            onClick={() => window.location.href = `mailto:leasing@americandream.com`}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black hover:bg-[var(--gold)] hover:text-white transition-all duration-500 rounded-sm"
          >
            Request Deck Access
          </button>
        </motion.div>
      </div>
    </section>
  );
}
