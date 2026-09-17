import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { setScrollLocked } from "@/components/system/SmoothScroll";
import { cn } from "@/lib/cn";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { SearchOverlay } from "./SearchOverlay";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      aria-hidden
      className={cn("transition-transform duration-300", open && "rotate-180")}
    >
      <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuIndex, setMenuIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Cierra todo al cambiar de ruta. */
  useEffect(() => {
    setMenuIndex(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    setScrollLocked(mobileOpen || searchOpen);
    return () => setScrollLocked(false);
  }, [mobileOpen, searchOpen]);

  /* Esc cierra el mega-menú. */
  useEffect(() => {
    if (menuIndex === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuIndex(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuIndex]);

  const activeItem = menuIndex !== null ? mainNav[menuIndex] : null;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] bg-ink text-white transition-all duration-300 ease-soft",
          scrolled ? "py-3 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]" : "py-4",
        )}
        onMouseLeave={() => setMenuIndex(null)}
      >
        <div className="shell flex items-center justify-between gap-6">
          <Link to="/" aria-label="VELARA — Inicio" className="shrink-0">
            <Logo tone="light" compact={scrolled} />
          </Link>

          {/* --- Navegación desktop --- */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item, i) => {
              const hasMenu = Boolean(item.columns?.length);
              const isOpen = menuIndex === i;
              return (
                <div key={item.label} onMouseEnter={() => setMenuIndex(hasMenu ? i : null)}>
                  <Link
                    to={item.to ?? "#"}
                    onFocus={() => setMenuIndex(hasMenu ? i : null)}
                    aria-expanded={hasMenu ? isOpen : undefined}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors duration-200",
                      isOpen ? "text-white" : "text-white/75 hover:text-white",
                    )}
                  >
                    {item.label}
                    {hasMenu && <Chevron open={isOpen} />}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* --- Acciones --- */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Buscar"
              onClick={() => setSearchOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M12.5 12.5L16.5 16.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>

            <Link
              to={site.cta.href}
              className="hidden rounded-full bg-white px-5 py-2.5 text-[0.78rem] font-semibold text-ink transition-colors hover:bg-accent-soft hover:text-ink sm:inline-block"
            >
              {site.cta.label}
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="relative grid h-10 w-10 place-items-center lg:hidden"
            >
              <span className="relative block h-3 w-6">
                {[0, 1, 2].map((n) => (
                  <span
                    key={n}
                    className={cn(
                      "absolute left-0 h-[1.6px] w-6 bg-white transition-all duration-300 ease-soft",
                      n === 0 && (mobileOpen ? "top-1.5 rotate-45" : "top-0"),
                      n === 1 && (mobileOpen ? "opacity-0" : "top-1.5"),
                      n === 2 && (mobileOpen ? "top-1.5 -rotate-45" : "top-3"),
                    )}
                  />
                ))}
              </span>
            </button>
          </div>
        </div>

        {/* --- Panel del mega-menú --- */}
        <AnimatePresence>
          {activeItem && Boolean(activeItem.columns?.length) && (
            <MegaMenu item={activeItem} onNavigate={() => setMenuIndex(null)} />
          )}
        </AnimatePresence>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
