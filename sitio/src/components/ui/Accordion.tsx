import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";

export interface AccordionItem {
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

/** Lista de secciones plegables — fichas técnicas, preguntas frecuentes. */
export function Accordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const [open, setOpen] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(items.map((it, i) => [i, Boolean(it.defaultOpen)])),
  );

  return (
    <div className={cn("border-t border-smoke-line", className)}>
      {items.map((it, i) => {
        const isOpen = open[i];
        return (
          <div key={`${it.title}-${i}`} className="border-b border-smoke-line">
            <h3>
              <button
                type="button"
                onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-lg text-ink sm:text-xl">{it.title}</span>
                <span
                  className={cn(
                    "relative grid h-6 w-6 shrink-0 place-items-center text-accent-deep transition-transform duration-300 ease-soft",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden
                >
                  <span className="absolute h-[1.5px] w-4 bg-current" />
                  <span className="absolute h-4 w-[1.5px] bg-current" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-8 text-[0.95rem] leading-relaxed text-smoke-dark">
                    {it.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
