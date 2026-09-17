import { Link } from "react-router-dom";
import { Fragment } from "react";
import { cn } from "@/lib/cn";

export interface Crumb {
  label: string;
  to?: string;
}

/**
 * Migas de pan — "Inicio / Servicios / Tapizado automotriz".
 * El último elemento se muestra sin enlace.
 */
export function Breadcrumbs({
  items,
  tone = "dark",
  className,
}: {
  items: Crumb[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const base = tone === "dark" ? "text-smoke" : "text-white/65";
  const strong = tone === "dark" ? "text-ink" : "text-white";
  const sep = tone === "dark" ? "text-smoke-light" : "text-white/35";

  const trail: Crumb[] = [{ label: "Inicio", to: "/" }, ...items];

  return (
    <nav aria-label="Ruta" className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.78rem]", base, className)}>
      {trail.map((c, i) => {
        const last = i === trail.length - 1;
        return (
          <Fragment key={`${c.label}-${i}`}>
            {c.to && !last ? (
              <Link to={c.to} className="link-underline transition-colors hover:text-current">
                {c.label}
              </Link>
            ) : (
              <span className={cn(last && strong, last && "font-medium")}>{c.label}</span>
            )}
            {!last && <span className={sep} aria-hidden>/</span>}
          </Fragment>
        );
      })}
    </nav>
  );
}
