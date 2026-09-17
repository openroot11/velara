import { useEffect, useState } from "react";
import { site } from "@/data/site";

/** Fija el <title> de la página y lo restaura al desmontar. */
export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = `${title} · ${site.name}`;
    return () => {
      document.title = `${site.name} — ${site.descriptor}`;
    };
  }, [title]);
}

/** Matches a media query, SSR-safe-ish, updates on change. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** True when the user prefers reduced motion (or ?nomotion is in the URL). */
export function usePrefersReducedMotion(): boolean {
  const system = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [override, setOverride] = useState(false);
  useEffect(() => {
    setOverride(new URLSearchParams(window.location.search).has("nomotion"));
  }, []);
  return system || override;
}
