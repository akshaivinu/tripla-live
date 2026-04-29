import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LeasingModal from "@/components/ui/LeasingModal";

export default function ContactSlide() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/contact-bg.png"
          alt="Luxury contact background"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.12),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]"
        >
          Next Step
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[1.05] tracking-[-0.02em] max-w-3xl"
        >
          Let’s Build What’s Next
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-sm md:text-base text-white/70 max-w-xl"
        >
          For brands and partners ready to turn attention into measurable growth.
        </motion.p>

        {/* Contact (Subtle CTA) */}
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 px-10 py-4 bg-[var(--gold)] text-black font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:scale-105 transition-all shadow-[0_10px_30px_rgba(201,169,110,0.3)]"
        >
          Request Leasing Information
        </motion.button>

        <LeasingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </section>
  );
}
