"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useDeck } from "@/components/context/DeckContext";

const TIERS = [
  {
    id: "presenting",
    name: "Presenting Partner",
    price: "$2M+",
    color: "#C9A84C",
    perks: [
      "Naming rights on flagship activation zone",
      "Year-round branded presence across 5.6M sq ft",
      "Priority booking for 12 brand events annually",
      "Exclusive demographic data packages",
      "40M visitor impressions per year",
    ],
    slots: "1 slot remaining",
  },
  {
    id: "premier",
    name: "Premier Sponsor",
    price: "$500K–$2M",
    color: "#A8A8A8",
    perks: [
      "Dedicated activation zone in high-traffic area",
      "Seasonal campaign integration",
      "6 brand activation events annually",
      "Co-branded content & social reach",
      "Shared audience reporting",
    ],
    slots: "3 slots remaining",
  },
  {
    id: "activation",
    name: "Activation Partner",
    price: "$50K–$500K",
    color: "#6B6B6B",
    perks: [
      "Pop-up activation space (30–90 days)",
      "Event-specific brand placement",
      "Digital screen network access",
      "Foot traffic & dwell time analytics",
    ],
    slots: "Open",
  },
];

const ACTIVATION_EXAMPLES = ["Nike Pop-Up", "Samsung Galaxy Zone", "TikTok Creator House", "Formula 1 Fan Zone", "LEGO World"];

export default function SponsorshipSlide() {
  const [activeTier, setActiveTier] = useState("premier");
  const { goToSlide } = useDeck();
  const active = TIERS.find((t) => t.id === activeTier)!;

  return (
    <section className="relative h-full w-full overflow-hidden bg-black text-white">
      {/* Subtle video atmosphere */}
      <div className="absolute inset-0 opacity-15">
        <video src="/assets/commercial-ad.mp4" className="w-full h-full object-cover" autoPlay muted loop playsInline />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      <div className="relative z-10 h-full flex flex-col px-8 md:px-16 py-10 pb-28">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)] mb-3">Sponsorship & Brand Partnerships</p>
          <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-[-0.02em]">
            Activate Inside
            <br />
            America&apos;s Destination.
          </h2>
          <p className="mt-3 text-sm text-white/40 max-w-lg">
            40 million visitors. One address. Choose your level of presence.
          </p>
        </motion.div>

        {/* Tier selector + detail */}
        <div className="mt-8 flex-1 grid md:grid-cols-[280px_1fr] gap-6">

          {/* Tier tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex md:flex-col gap-3"
          >
            {TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`text-left px-5 py-4 rounded-lg border transition-all ${
                  activeTier === tier.id
                    ? "border-[var(--gold)] bg-white/5"
                    : "border-white/8 hover:border-white/20"
                }`}
              >
                <p className="text-xs font-semibold tracking-wide">{tier.name}</p>
                <p className="text-[10px] text-white/40 mt-0.5 tracking-wider">{tier.price}</p>
              </button>
            ))}
          </motion.div>

          {/* Active tier detail */}
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-white/8 rounded-xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xl md:text-2xl font-bold">{active.name}</p>
                  <p className="text-[var(--gold)] text-2xl md:text-3xl font-bold mt-1">{active.price}</p>
                </div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 border border-white/10 rounded-full px-3 py-1.5">
                  {active.slots}
                </span>
              </div>

              <ul className="space-y-3">
                {active.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-[var(--gold)] mt-0.5 text-xs flex-shrink-0">→</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                {ACTIVATION_EXAMPLES.map((ex) => (
                  <span key={ex} className="text-[8px] uppercase tracking-[0.2em] text-white/20 border border-white/8 rounded px-2 py-1">
                    {ex}
                  </span>
                ))}
              </div>
              <button
                onClick={() => goToSlide(8)}
                className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] border border-[var(--gold)]/30 rounded-full px-5 py-2.5 hover:bg-[var(--gold)]/10 transition-all"
              >
                Start Conversation →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}