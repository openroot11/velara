import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/lib/hooks";

let lenisInstance: Lenis | null = null;

/** Pixels the fixed header occupies; anchored scrolls stop this far short. */
const HEADER_OFFSET = 92;

/** Programmatic scroll used by the header / anchor links. */
export function scrollToId(id: string, smooth = true) {
  const el = document.querySelector(id) as HTMLElement | null;
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  if (lenisInstance) {
    lenisInstance.scrollTo(top, { duration: smooth ? 1.4 : 0, immediate: !smooth });
  } else {
    // Reduced-motion users get an instant jump.
    window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
  }
}

/**
 * Locks/unlocks page scrolling. Lenis drives its own scroll loop, so hiding
 * overflow on <html> alone is not enough - it has to be stopped too.
 */
export function setScrollLocked(locked: boolean) {
  if (lenisInstance) {
    if (locked) lenisInstance.stop();
    else lenisInstance.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

/**
 * Wraps the app with Lenis smooth scrolling. Disabled entirely when the user
 * prefers reduced motion. Resets scroll position on route change.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });
    lenisInstance = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [reduced]);

  // Handle route + hash changes.
  useEffect(() => {
    if (hash) {
      // Land instantly, then re-correct once after late-loading imagery has
      // settled into its reserved space.
      const timers = [
        window.setTimeout(() => scrollToId(hash, false), 50),
        window.setTimeout(() => scrollToId(hash, false), 500),
      ];
      return () => timers.forEach((t) => window.clearTimeout(t));
    }
    if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return <>{children}</>;
}
