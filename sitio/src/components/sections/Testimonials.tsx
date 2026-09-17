import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { usePrefersReducedMotion } from "@/lib/hooks";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const total = testimonials.length;
  const current = testimonials[index];

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + total) % total),
    [total],
  );

  useEffect(() => {
    if (paused || reduced) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % total), 6500);
    return () => window.clearInterval(t);
  }, [paused, reduced, total]);

  return (
    <section
      className="bg-paper py-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="shell-tight flex flex-col items-center text-center">
        <Reveal from="up" distance={14}>
          <span className="overline text-accent-deep">Lo que dicen</span>
        </Reveal>

        <div className="mt-8 min-h-[240px] w-full sm:min-h-[220px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mx-auto max-w-2xl font-display text-display-sm font-light text-ink">
                <span aria-hidden className="text-accent">“</span>
                {current.quote}
                <span aria-hidden className="text-accent">”</span>
              </p>
              <footer className="mt-7 flex items-center justify-center gap-3 text-[0.75rem] uppercase tracking-[0.14em] text-smoke">
                <span className="h-px w-7 bg-accent" />
                <span>{current.client}</span>
                <span>·</span>
                <span>{current.context}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex w-full items-center justify-between border-t border-smoke-line pt-6">
          <span className="text-[0.72rem] uppercase tracking-[0.12em] text-smoke">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Testimonio anterior"
              className="grid h-10 w-10 place-items-center rounded-full border border-smoke-line text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
            >
              <svg width="15" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
                <path d="M6 1L1 6l5 5M1 6h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Siguiente testimonio"
              className="grid h-10 w-10 place-items-center rounded-full border border-smoke-line text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
            >
              <svg width="15" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
                <path d="M10 1l5 5-5 5M15 6H1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <Reveal from="up" distance={16}>
          <div className="mt-10">
            <Cta href="/cotizar" variant="outline-dark">
              Quiero uno así
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
