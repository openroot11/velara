import { Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecList } from "@/components/ui/SpecList";
import { Tile } from "@/components/ui/Tile";
import Figure from "@/components/ui/Figure";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { getService } from "@/data/services";
import { getProjectsByCategory } from "@/data/projects";
import { usePageTitle } from "@/lib/hooks";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-1 shrink-0 text-accent-deep">
      <path d="M2 8.5l4 4 8-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicioDetail() {
  const { slug = "" } = useParams();
  const service = getService(slug);
  usePageTitle(service ? service.title : "Servicio");

  if (!service) return <Navigate to="/404" replace />;

  const related = getProjectsByCategory(service.slug);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Servicios", to: "/servicios" }, { label: service.menuLabel }]}
        eyebrow={`Servicio ${service.index}`}
        title={service.title}
        standfirst={service.standfirst}
        image={service.heroImage}
        band
      />

      {/* --- Qué incluye + ficha --- */}
      <section className="bg-paper py-section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal from="up" distance={22}>
            <h2 className="font-display text-display-sm text-ink">Qué incluye el trabajo</h2>
            <span className="rule-under mt-4 block" />
            <ul className="mt-6 flex flex-col gap-3.5">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink-700">
                  <Check />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="up" distance={22} delay={0.08}>
            <h2 className="font-display text-display-sm text-ink">Ficha del servicio</h2>
            <span className="rule-under mt-4 block" />
            <SpecList className="mt-6" items={service.facts} />
          </Reveal>
        </div>
      </section>

      {/* --- Aplicaciones (filas alternas) --- */}
      <section className="border-t border-smoke-line bg-paper-50 py-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Aplicaciones"
            title={`Todo lo que resolvemos en ${service.menuLabel.toLowerCase()}`}
            className="mb-14"
          />
          <div className="flex flex-col gap-16 md:gap-24">
            {service.applications.map((a, i) => {
              const flip = i % 2 === 1;
              return (
                <div
                  key={a.id}
                  id={a.id}
                  className="grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14"
                >
                  <Reveal from={flip ? "left" : "right"} distance={40} className={flip ? "md:order-2" : ""}>
                    <div className="aspect-[4/3] overflow-hidden border border-smoke-line">
                      <Figure image={a.image} className="h-full w-full" sizes="(min-width:768px) 45vw, 92vw" />
                    </div>
                  </Reveal>
                  <Reveal from="up" distance={22}>
                    <span className="font-display text-3xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-2xl text-ink sm:text-[1.7rem]">{a.title}</h3>
                    <p className="mt-3 max-w-md text-pretty text-[0.98rem] leading-relaxed text-smoke-dark">
                      {a.body}
                    </p>
                    <Cta href={`/cotizar?servicio=${service.slug}`} variant="outline-dark" className="mt-6">
                      Cotizar
                    </Cta>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Proyectos relacionados --- */}
      {related.length > 0 && (
        <section className="bg-paper py-section">
          <div className="shell">
            <SectionHeading eyebrow="Del taller" title="Trabajos de este servicio" className="mb-12" />
            <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
              {related.map((p) => (
                <RevealItem key={p.slug}>
                  <Tile
                    to={`/proyectos/${p.slug}`}
                    image={p.cover}
                    eyebrow={p.category}
                    title={p.subject}
                    text={p.teaser}
                    cta="Ver el trabajo"
                    className="h-full"
                  />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* --- CTA --- */}
      <section className="bg-ink text-white">
        <div className="shell flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-display-sm font-bold">
            ¿Tiene un trabajo de {service.menuLabel.toLowerCase()}?
          </h2>
          <Cta href={`/cotizar?servicio=${service.slug}`} variant="teal" className="shrink-0">
            Solicitar cotización
          </Cta>
        </div>
      </section>
    </>
  );
}
