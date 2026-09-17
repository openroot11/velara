import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navIndex } from "@/data/navigation";
import { services } from "@/data/services";
import { materials } from "@/data/materials";
import { projects } from "@/data/projects";
import { resources } from "@/data/recursos";

interface Entry {
  label: string;
  to: string;
  section: string;
  description?: string;
}

/** Índice del sitio — todo lo navegable en una sola lista. */
const INDEX: Entry[] = [
  ...navIndex,
  ...services.flatMap((s) =>
    s.applications.map((a) => ({
      label: `${a.title}`,
      to: `/servicios/${s.slug}#${a.id}`,
      section: s.menuLabel,
      description: a.body.slice(0, 90) + "…",
    })),
  ),
  ...materials.map((m) => ({
    label: m.name,
    to: `/materiales/${m.slug}`,
    section: "Materiales",
    description: m.summary,
  })),
  ...projects.map((p) => ({
    label: `${p.subject} — ${p.title}`,
    to: `/proyectos/${p.slug}`,
    section: "Proyectos",
    description: p.teaser,
  })),
  ...resources.map((r) => ({
    label: r.title,
    to: `/recursos/${r.slug}`,
    section: "Recursos",
    description: r.summary,
  })),
];

// Normaliza para buscar sin acentos ni mayúsculas.
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQ("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 60);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const query = norm(q.trim());
    const list = query
      ? INDEX.filter(
          (e) =>
            norm(e.label).includes(query) ||
            norm(e.section).includes(query) ||
            (e.description ? norm(e.description).includes(query) : false),
        )
      : INDEX;
    const groups = new Map<string, Entry[]>();
    list.forEach((e) => {
      const arr = groups.get(e.section) ?? [];
      arr.push(e);
      groups.set(e.section, arr);
    });
    return [...groups.entries()];
  }, [q]);

  const go = (to: string) => {
    onClose();
    navigate(to);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[130] overflow-y-auto bg-ink/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            className="shell min-h-full py-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center justify-between gap-4">
                <span className="overline text-accent-soft">Buscar en el sitio</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-[0.8rem] uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-white"
                >
                  Cerrar (Esc)
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const first = results[0]?.[1][0];
                  if (first) go(first.to);
                }}
              >
                <input
                  ref={inputRef}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Servicios, materiales, proyectos, guías…"
                  className="mt-4 w-full border-b border-white/25 bg-transparent pb-4 font-display text-2xl text-white outline-none placeholder:text-white/35 focus:border-accent-soft sm:text-3xl"
                />
              </form>

              <div className="mt-10 flex flex-col gap-9 pb-16">
                {results.length === 0 && (
                  <p className="text-white/60">Nada coincide con «{q}».</p>
                )}
                {results.map(([section, entries]) => (
                  <div key={section}>
                    <h2 className="overline text-white/45">{section}</h2>
                    <ul className="mt-3 flex flex-col divide-y divide-white/10 border-y border-white/10">
                      {entries.map((e) => (
                        <li key={e.to + e.label}>
                          <button
                            type="button"
                            onClick={() => go(e.to)}
                            className="group flex w-full flex-col gap-0.5 py-3 text-left"
                          >
                            <span className="font-display text-lg text-white transition-colors group-hover:text-accent-soft">
                              {e.label}
                            </span>
                            {e.description && (
                              <span className="text-[0.85rem] leading-snug text-white/55">
                                {e.description}
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
