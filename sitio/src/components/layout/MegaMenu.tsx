import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { NavItem } from "@/data/navigation";

function FeatureRow({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  if (!item.feature?.length) return null;
  return (
    <div className="mt-8 grid gap-x-10 gap-y-5 border-t border-smoke-line pt-7 sm:grid-cols-2">
      {item.feature.map((f) => (
        <Link
          key={f.to + f.label}
          to={f.to}
          onClick={onNavigate}
          className="group flex flex-col gap-1"
        >
          <span className="flex items-center gap-2 font-display text-lg text-ink transition-colors group-hover:text-accent-deep">
            {f.label}
            <svg width="16" height="7" viewBox="0 0 16 7" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M0 3.5h13M11 1l3 2.5L11 6" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </span>
          <span className="text-[0.85rem] leading-snug text-smoke-dark">{f.blurb}</span>
        </Link>
      ))}
    </div>
  );
}

/** Panel del mega-menú (una sección a la vez), a todo el ancho bajo la barra. */
/** Columnas del mega-menú en desktop, según cuántas traiga la sección (evita huecos). */
const LG_COLS: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export function MegaMenu({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const isList = item.layout === "list";
  const lgColsClass = LG_COLS[item.columns?.length ?? 4] ?? "lg:grid-cols-4";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-full border-b border-smoke-line bg-paper text-ink shadow-[0_24px_50px_-30px_rgba(0,0,0,0.35)]"
    >
      <div className="shell py-10">
        {isList ? (
          <div className="max-w-md">
            {item.columns?.[0]?.links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={onNavigate}
                className="group flex flex-col gap-0.5 border-b border-smoke-line py-3.5 last:border-b-0"
              >
                <span className="font-display text-[1.05rem] text-ink transition-colors group-hover:text-accent-deep">
                  {l.label}
                </span>
                {l.description && (
                  <span className="text-[0.85rem] leading-snug text-smoke-dark">{l.description}</span>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className={`grid gap-x-10 gap-y-8 sm:grid-cols-2 ${lgColsClass}`}>
            {item.columns?.map((col) => (
              <div key={col.label} className="flex flex-col gap-3">
                {col.to ? (
                  <Link
                    to={col.to}
                    onClick={onNavigate}
                    className="link-underline w-fit text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-accent-deep"
                  >
                    {col.label}
                  </Link>
                ) : (
                  <span className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-accent-deep">
                    {col.label}
                  </span>
                )}
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        onClick={onNavigate}
                        className="text-[0.92rem] text-ink-700 transition-colors hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <FeatureRow item={item} onNavigate={onNavigate} />
      </div>
    </motion.div>
  );
}
