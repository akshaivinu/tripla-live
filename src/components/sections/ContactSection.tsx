"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="h-full flex items-center justify-center bg-black relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)] blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--gold)] blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-xs mb-6 block outfit font-bold">
            The Next Chapter
          </span>
          <h2 className="text-5xl md:text-8xl font-bold outfit uppercase mb-12 text-white leading-tight">
            Join the <br /> <span className="text-gradient">Legacy</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[var(--gold)]">
              <Mail size={20} />
            </div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
              Leasing
            </span>
            <span className="text-white">leasing@americandream.com</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[var(--gold)]">
              <Phone size={20} />
            </div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
              Direct Line
            </span>
            <span className="text-white">+1 (201) 340-2900</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[var(--gold)]">
              <Globe size={20} />
            </div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
              Global Reach
            </span>
            <span className="text-white">americandream.com</span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 px-12 py-5 bg-white text-black text-sm uppercase tracking-[0.3em] font-bold rounded-full hover:bg-[var(--gold)] hover:text-white transition-all duration-500"
        >
          Request Deck Access
        </motion.button>
      </div>
    </section>
  );
}
