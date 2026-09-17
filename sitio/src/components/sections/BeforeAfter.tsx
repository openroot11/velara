import { useCallback, useEffect, useRef, useState } from "react";
import { images } from "@/data/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";

/**
 * Dos fotografías genuinamente distintas. Reemplace estas claves por el par
 * real de un trabajo (entrada y entrega) y la sección no necesita otro cambio.
 */
const before = images.transformBefore;
const after = images.transformAfter;

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(58);
  const draggingRef = useRef(false);
  const [value, setValue] = useState(58);
  const [hint, setHint] = useState(true);

  const apply = useCallback((pct: number) => {
    const clamped = Math.max(2, Math.min(98, pct));
    posRef.current = clamped;
    if (beforeRef.current)
      beforeRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
    if (dividerRef.current) dividerRef.current.style.left = `${clamped}%`;
  }, []);

  const setFromClientX = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      apply(pct);
    },
    [apply],
  );

  useEffect(() => {
    apply(posRef.current);
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      setValue(Math.round(posRef.current));
      document.body.style.userSelect = "";
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [apply, setFromClientX]);

  const startDrag = (e: React.PointerEvent) => {
    draggingRef.current = true;
    setHint(false);
    document.body.style.userSelect = "none";
    setFromClientX(e.clientX);
  };

  const onKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      apply(posRef.current - step);
      setValue(Math.round(posRef.current));
      setHint(false);
    } else if (e.key === "ArrowRight") {
      apply(posRef.current + step);
      setValue(Math.round(posRef.current));
      setHint(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-paper-50 py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Antes y después"
          title="Antes y después de pasar por el taller"
          intro="Un desgaste de años, recuperado superficie por superficie. Arrastre el control para comparar."
          className="mb-12"
        />

        <Reveal from="up" distance={30}>
          <div
            ref={containerRef}
            className="group relative aspect-[4/5] w-full touch-pan-y select-none overflow-hidden border border-smoke-line bg-ink-800 sm:aspect-[3/2] lg:aspect-[2/1]"
            onPointerDown={startDrag}
          >
            <img
              src={after.src}
              alt={after.alt}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: after.position }}
              draggable={false}
            />
            <span className="pointer-events-none absolute right-4 top-4 z-20 bg-ink/70 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
              Después
            </span>

            <div
              ref={beforeRef}
              className="absolute inset-0 h-full w-full"
              style={{ clipPath: "inset(0 42% 0 0)" }}
            >
              <img
                src={before.src}
                alt={before.alt}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: before.position }}
                draggable={false}
              />
              <span className="pointer-events-none absolute left-4 top-4 z-20 bg-ink/70 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                Antes
              </span>
            </div>

            <div
              ref={dividerRef}
              className="absolute inset-y-0 z-30 -ml-px w-0.5 bg-white"
              style={{ left: "58%" }}
            >
              <button
                type="button"
                role="slider"
                aria-label="Comparar antes y después"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={value}
                tabIndex={0}
                onKeyDown={onKey}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  startDrag(e);
                }}
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-ink/50 backdrop-blur-md transition-transform duration-300 ease-soft hover:scale-105 focus-visible:scale-105"
              >
                <svg width="24" height="12" viewBox="0 0 26 12" fill="none" aria-hidden>
                  <path d="M9 1L3 6l6 5M17 1l6 5-6 5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {hint && (
              <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center">
                <span className="animate-pulse text-[0.62rem] uppercase tracking-[0.2em] text-white/70">
                  Arrastre para comparar
                </span>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal from="up" distance={16}>
          <div className="mt-10 flex justify-center">
            <Cta href="/cotizar" variant="solid">
              Cotizar mi trabajo
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
