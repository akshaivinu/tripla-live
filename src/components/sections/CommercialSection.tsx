"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const paths = [
  {
    title: "Retail Leasing",
    desc: "Secure your place among global flagships and luxury icons.",
    cta: "Inquire Now",
    color: "from-white/10 to-white/5",
  },
  {
    title: "Partnerships",
    desc: "Connect with a massive, high-intent audience year-round.",
    cta: "Partner With Us",
    color: "from-zinc-800/10 to-zinc-900/5",
  },
  {
    title: "Event Hosting",
    desc: "Book one of our world-class venues for your next activation.",
    cta: "Book Venue",
    color: "from-white/10 to-white/5",
  },
];

const CARD_INDICES = paths.map((_, index) => index);

type Throttled<Args extends unknown[]> = ((...args: Args) => void) & {
  cancel: () => void;
};

const createThrottle = <Args extends unknown[]>(fn: (...args: Args) => void, wait: number): Throttled<Args> => {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const invoke = (...args: Args) => fn(...args);

  const throttled = ((...args: Args) => {
    const now = Date.now();
    const remaining = wait - (now - lastCall);

    if (remaining <= 0 || remaining > wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastCall = now;
      invoke(...args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        timeoutId = null;
        invoke(...args);
      }, remaining);
    }
  }) as Throttled<Args>;

  throttled.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return throttled;
};

export default function CommercialSection() {
  const [canHover, setCanHover] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(() => new Set(CARD_INDICES));

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handler = (event: MediaQueryListEvent) => setCanHover(event.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }

    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduceMotion(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      handler();
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }

    mediaQuery.addListener(handler);
    handler();
    return () => mediaQuery.removeListener(handler);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const resizeHandler = createThrottle(() => {
      setIsMobile(window.innerWidth < 1024);
    }, 200);
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      resizeHandler.cancel();
    };
  }, []);

  const shouldAnimateCards = !isMobile && !reduceMotion;
  const activeVisibleCards = shouldAnimateCards ? visibleCards : new Set(CARD_INDICES);

  useEffect(() => {
    if (!shouldAnimateCards) {
      return;
    }

    const frameId = requestAnimationFrame(() => {
      setVisibleCards(new Set());
    });

    cardRefs.current = CARD_INDICES.map((_, index) => cardRefs.current[index] ?? null);

    let observer: IntersectionObserver | null = null;
    const handleIntersect = createThrottle(
      (entries: IntersectionObserverEntry[]) => {
        setVisibleCards((prev) => {
          let changed = false;
          const next = new Set(prev);

          entries.forEach((entry) => {
            const target = entry.target as HTMLDivElement;
            const indexAttr = target.dataset.cardIndex;
            const index = indexAttr ? Number(indexAttr) : -1;

            if (index >= 0 && entry.isIntersecting && !next.has(index)) {
              next.add(index);
              changed = true;
              observer?.unobserve(target);
            }
          });

          return changed ? next : prev;
        });
      },
      140
    );

    observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.35,
    });

    cardRefs.current.forEach((card) => {
      if (card) observer?.observe(card);
    });

    return () => {
      cancelAnimationFrame(frameId);
      observer?.disconnect();
      handleIntersect.cancel();
    };
  }, [shouldAnimateCards]);

  return (
    <section id="commercial" className="py-16 md:py-32 px-6 md:px-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-zinc-500 uppercase tracking-widest text-xs mb-4 block outfit">
            The Next Chapter
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold outfit uppercase mb-6">
            Build Your Legacy <br /> <span className="text-zinc-500 italic">With Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paths.map((path, i) => {
            const inView = activeVisibleCards.has(i);
            const cardMotionProps = shouldAnimateCards
              ? {
                  initial: { opacity: 0, y: 30 },
                  animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
                  transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" as const },
                }
              : {
                  initial: false,
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.2 },
                };

            const hoverProps: Partial<HTMLMotionProps<"div">> = canHover && !isMobile
              ? {
                  whileHover: {
                    y: -15,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  },
                }
              : {};

            return (
              <motion.div
                key={path.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                data-card-index={i}
                {...cardMotionProps}
                {...hoverProps}
                className="p-6 md:p-10 rounded-[2.5rem] glass border border-white/5 flex flex-col justify-between group md:hover:border-white/20 md:hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all min-h-[400px] md:h-[500px] relative overflow-hidden bg-black/40"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4 md:mb-6 block font-bold">
                    Opportunity Type
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold outfit uppercase text-white mb-4 md:mb-6 leading-tight">
                    {path.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-lg font-light leading-relaxed mb-6 md:mb-8">
                    {path.desc}
                  </p>

                  <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-4 md:translate-y-4 md:group-hover:translate-y-0">
                    <div className="h-[1px] w-12 bg-white/20 mb-4" />
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">
                      Platform Insight
                    </p>
                    <p className="text-sm text-white font-medium">
                      {i === 0
                        ? "98% Luxury Retention"
                        : i === 1
                          ? "40M+ Multi-Channel Reach"
                          : "Flexible Venue Agnostic Site"}
                    </p>
                  </div>
                </div>

                <button className="flex items-center justify-between w-full p-6 bg-white rounded-2xl text-black font-bold uppercase tracking-widest text-xs md:hover:bg-zinc-200 transition-all">
                  <span>
                    {i === 0
                      ? "Request Private Briefing"
                      : i === 1
                        ? "Explore Partnership"
                        : "Check Availability"}
                  </span>
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-500 text-xs uppercase tracking-[0.5em] mb-4">
            Contact Our Commercial Team
          </p>
          <p className="text-white text-base md:text-2xl font-light outfit break-all md:break-normal">
            leasing@americandream.com | +1 833 263 7326
          </p>
        </motion.div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center opacity-20 user-select-none pointer-events-none">
        <span className="outfit text-[12vw] font-bold uppercase tracking-tighter text-zinc-800 leading-none">
          American Dream
        </span>
      </div>
    </section>
  );
}
