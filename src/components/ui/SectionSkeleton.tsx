"use client";

export default function SectionSkeleton({ label, rows = 3 }: { label: string; rows?: number }) {
  return (
    <section
      aria-label={`${label} loading`}
      className="min-h-[60vh] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/5 via-black/60 to-black/90 p-6 backdrop-blur-xl"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="h-3 w-32 rounded-full bg-white/10 animate-pulse" />
          <div className="h-3 w-16 rounded-full bg-white/10 animate-pulse" />
        </div>
        <div className="flex flex-col gap-3">
          {Array.from({ length: rows }).map((_, index) => (
            <div key={index} className="h-6 rounded-full bg-white/5 animate-pulse" />
          ))}
        </div>
        <div className="h-16 w-full rounded-[1.5rem] bg-white/5 animate-pulse" />
      </div>
      <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-zinc-500">{label}</p>
    </section>
  );
}
