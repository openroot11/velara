import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import Figure from "@/components/ui/Figure";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import {
  materials,
  materialFamilies,
  materialUses,
  materialProperties,
  type MaterialFamily,
} from "@/data/materials";
import { usePageTitle } from "@/lib/hooks";
import { cn } from "@/lib/cn";

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-[0.9rem] text-ink-700">
      <span
        className={cn(
          "grid h-4 w-4 place-items-center border transition-colors",
          checked ? "border-accent-deep bg-accent-deep text-white" : "border-smoke-light",
        )}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path d="M1 5l2.5 2.5L9 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      {label}
    </label>
  );
}

export default function Materiales() {
  usePageTitle("Catálogo de materiales");
  const [params, setParams] = useSearchParams();
  const familyParam = params.get("familia") as MaterialFamily | null;

  const [query, setQuery] = useState("");
  const [uses, setUses] = useState<string[]>([]);
  const [props, setProps] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const setFamily = (slug: MaterialFamily | null) => {
    const next = new URLSearchParams(params);
    if (slug) next.set("familia", slug);
    else next.delete("familia");
    setParams(next, { replace: true });
  };

  const results = useMemo(() => {
    const q = norm(query.trim());
    return materials.filter((m) => {
      if (familyParam && m.family !== familyParam) return false;
      if (uses.length && !uses.every((u) => m.uses.includes(u))) return false;
      if (props.length && !props.every((p) => m.properties.includes(p))) return false;
      if (q && !(norm(m.name).includes(q) || norm(m.summary).includes(q) || norm(m.kind).includes(q)))
        return false;
      return true;
    });
  }, [familyParam, uses, props, query]);

  const anyFilter = Boolean(familyParam || uses.length || props.length || query);
  const clearAll = () => {
    setFamily(null);
    setUses([]);
    setProps([]);
    setQuery("");
  };

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Materiales" }]}
        eyebrow="Catálogo"
        title="Materiales y características"
        standfirst="Los materiales que trabajamos, con su ficha técnica, sus usos y su cuidado. Filtre por familia, por dónde se usa o por cómo se comporta."
      />

      <div className="bg-paper py-section">
        <div className="shell grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
          {/* --- Filtros --- */}
          <div>
            <div className="flex items-center justify-between lg:hidden">
              <button
                type="button"
                onClick={() => setShowFilters((v) => !v)}
                className="btn btn-outline-dark !py-2.5 !text-[0.8rem]"
              >
                {showFilters ? "Ocultar filtros" : "Filtrar"}
              </button>
              {anyFilter && (
                <button onClick={clearAll} className="link-underline text-[0.82rem] text-accent-deep">
                  Quitar todo
                </button>
              )}
            </div>

            <div className={cn("mt-5 flex-col gap-8 lg:flex lg:sticky lg:top-28", showFilters ? "flex" : "hidden lg:flex")}>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nombre"
                className="w-full border-b border-smoke-line bg-transparent pb-2.5 text-[0.95rem] outline-none placeholder:text-smoke focus:border-accent-deep"
              />

              <div>
                <h2 className="overline text-smoke">Familia</h2>
                <div className="mt-3 flex flex-col">
                  <button
                    onClick={() => setFamily(null)}
                    className={cn(
                      "py-1.5 text-left text-[0.9rem] transition-colors",
                      !familyParam ? "font-semibold text-ink" : "text-ink-700 hover:text-ink",
                    )}
                  >
                    Todas
                  </button>
                  {materialFamilies.map((f) => (
                    <button
                      key={f.slug}
                      onClick={() => setFamily(f.slug)}
                      className={cn(
                        "py-1.5 text-left text-[0.9rem] transition-colors",
                        familyParam === f.slug ? "font-semibold text-ink" : "text-ink-700 hover:text-ink",
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="overline text-smoke">Uso</h2>
                <div className="mt-2">
                  {materialUses.map((u) => (
                    <CheckRow key={u} label={u} checked={uses.includes(u)} onChange={() => toggle(uses, setUses, u)} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="overline text-smoke">Propiedad</h2>
                <div className="mt-2">
                  {materialProperties.map((p) => (
                    <CheckRow key={p} label={p} checked={props.includes(p)} onChange={() => toggle(props, setProps, p)} />
                  ))}
                </div>
              </div>

              {anyFilter && (
                <button onClick={clearAll} className="link-underline w-fit text-[0.85rem] text-accent-deep">
                  Quitar todos los filtros
                </button>
              )}
            </div>
          </div>

          {/* --- Resultados --- */}
          <div>
            <p className="mb-6 text-[0.85rem] text-smoke">
              {results.length} {results.length === 1 ? "material" : "materiales"}
              {familyParam && ` · ${materialFamilies.find((f) => f.slug === familyParam)?.label}`}
            </p>

            {results.length === 0 ? (
              <p className="text-smoke-dark">Ningún material coincide con esos filtros.</p>
            ) : (
              <RevealGroup className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3" stagger={0.06}>
                {results.map((m) => (
                  <RevealItem key={m.slug}>
                    <Link
                      to={`/materiales/${m.slug}`}
                      className="group flex h-full flex-col border border-smoke-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-24px_rgba(0,0,0,0.3)]"
                    >
                      <div className="relative aspect-[5/4] overflow-hidden">
                        <Figure
                          image={m.image}
                          className="h-full w-full"
                          imgClassName="transition-transform duration-[1100ms] ease-soft group-hover:scale-105"
                          sizes="(min-width:1280px) 26vw, (min-width:640px) 42vw, 90vw"
                        />
                        <span className="absolute right-0 top-0 bg-accent-deep px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.1em] text-white">
                          {materialFamilies.find((f) => f.slug === m.family)?.label}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 p-5">
                        <h3 className="font-display text-[1.15rem] text-ink transition-colors group-hover:text-accent-deep">
                          {m.name}
                        </h3>
                        <p className="text-[0.8rem] text-smoke">{m.kind}</p>
                        <p className="text-[0.88rem] leading-relaxed text-smoke-dark">{m.summary}</p>
                        <div className="mt-auto flex items-center gap-1.5 pt-3">
                          {m.variants.slice(0, 6).map((v) => (
                            <span
                              key={v.name}
                              title={v.name}
                              className="h-4 w-4 rounded-full border border-smoke-line"
                              style={{ backgroundColor: v.tone }}
                            />
                          ))}
                          <span className="ml-1 text-[0.75rem] text-smoke">{m.variants.length} colores</span>
                        </div>
                      </div>
                    </Link>
                  </RevealItem>
                ))}
              </RevealGroup>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
