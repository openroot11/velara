import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import Figure from "@/components/ui/Figure";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { usePageTitle } from "@/lib/hooks";
import { cn } from "@/lib/cn";

export default function Proyectos() {
  usePageTitle("Proyectos");
  const [params, setParams] = useSearchParams();
  const cat = params.get("categoria");

  const filters = [
    { slug: null as string | null, label: "Todos" },
    ...services.map((s) => ({ slug: s.slug as string | null, label: s.menuLabel })),
  ];

  const setCat = (slug: string | null) => {
    const next = new URLSearchParams(params);
    if (slug) next.set("categoria", slug);
    else next.delete("categoria");
    setParams(next, { replace: true });
  };

  const shown = useMemo(
    () => (cat ? projects.filter((p) => p.categorySlug === cat) : projects),
    [cat],
  );

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Proyectos" }]}
        eyebrow="Del taller"
        title="Trabajos que cuentan una historia"
        standfirst="Cada trabajo con su ficha técnica, el proceso paso a paso y las fotos de entrada y de entrega. Sin fecha: los presentamos así para que la galería no envejezca sola."
        image="pageProyectos"
      />

      <section className="bg-paper py-section">
        <div className="shell">
          {/* Filtros */}
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.label}
                onClick={() => setCat(f.slug)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[0.82rem] transition-colors",
                  (cat ?? null) === f.slug
                    ? "border-ink bg-ink text-white"
                    : "border-smoke-line text-ink-700 hover:border-ink",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {shown.map((p) => (
              <RevealItem key={p.slug}>
                <Link
                  to={`/proyectos/${p.slug}`}
                  className="group flex h-full flex-col border border-smoke-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.28)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Figure
                      image={p.cover}
                      className="h-full w-full"
                      imgClassName="transition-transform duration-[1100ms] ease-soft group-hover:scale-105"
                      sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw"
                    />
                    <span className="absolute left-0 top-0 bg-ink/85 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.12em] text-white">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h2 className="font-display text-xl text-ink transition-colors group-hover:text-accent-deep">
                      {p.subject}
                    </h2>
                    <p className="text-[0.8rem] uppercase tracking-[0.1em] text-accent-deep">{p.title}</p>
                    <p className="text-[0.9rem] leading-relaxed text-smoke-dark">{p.teaser}</p>
                    <span className="mt-auto pt-3 text-[0.78rem] text-smoke">{p.location}</span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
