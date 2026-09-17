import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import { SpecList } from "@/components/ui/SpecList";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Figure from "@/components/ui/Figure";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { getMaterial, materials, materialFamilies } from "@/data/materials";
import { usePageTitle } from "@/lib/hooks";

export default function MaterialDetail() {
  const { slug = "" } = useParams();
  const material = getMaterial(slug);
  usePageTitle(material ? material.name : "Material");

  if (!material) return <Navigate to="/404" replace />;

  const familyLabel = materialFamilies.find((f) => f.slug === material.family)?.label ?? "";
  const related = materials.filter((m) => m.family === material.family && m.slug !== material.slug);

  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Materiales", to: "/materiales" },
          { label: familyLabel, to: `/materiales?familia=${material.family}` },
          { label: material.name },
        ]}
        eyebrow={familyLabel}
        title={material.name}
        standfirst={material.summary}
        image={material.image}
      />

      <section className="bg-paper py-section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Izquierda: descripción + variantes */}
          <Reveal from="up" distance={22}>
            <p className="text-[0.8rem] uppercase tracking-[0.12em] text-accent-deep">{material.kind}</p>
            <p className="mt-4 max-w-prose2 text-pretty text-[1.05rem] leading-relaxed text-ink-700">
              {material.description}
            </p>

            <h2 className="mt-10 overline text-smoke">Colores en stock</h2>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {material.variants.map((v) => (
                <li key={v.name} className="flex items-center gap-2 text-[0.9rem] text-ink-700">
                  <span
                    className="h-6 w-6 rounded-full border border-smoke-line"
                    style={{ backgroundColor: v.tone }}
                  />
                  {v.name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.82rem] text-smoke">
              Las muestras de pantalla son orientativas. Le llevamos las muestras físicas antes de cortar.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {material.uses.map((u) => (
                <span key={u} className="border border-smoke-line px-3 py-1.5 text-[0.8rem] text-ink-700">
                  {u}
                </span>
              ))}
              {material.properties.map((p) => (
                <span key={p} className="bg-accent-pale px-3 py-1.5 text-[0.8rem] text-accent-dark">
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Derecha: ficha + acordeones */}
          <Reveal from="up" distance={22} delay={0.08}>
            <h2 className="font-display text-display-sm text-ink">Ficha técnica</h2>
            <span className="rule-under mt-4 block" />
            <SpecList className="mt-6" items={material.specs} />

            <Accordion
              className="mt-10"
              items={[
                { title: "Cuidado y limpieza", content: <p>{material.care}</p>, defaultOpen: true },
                {
                  title: "Usos recomendados",
                  content: (
                    <p>
                      Lo usamos sobre todo en: {material.uses.join(", ").toLowerCase()}. Si su caso no
                      encaja, escríbanos y le decimos si sirve.
                    </p>
                  ),
                },
                {
                  title: "Garantía",
                  content: (
                    <p>
                      El material se entrega con la garantía del fabricante. La confección la
                      respalda la <Link to="/recursos/garantia-del-taller">garantía del taller</Link>.
                    </p>
                  ),
                },
                {
                  title: "Términos y condiciones",
                  content: (
                    <p>
                      Precios y disponibilidad sujetos a existencias. Consulte los{" "}
                      <Link to="/recursos/terminos-y-condiciones">términos y condiciones</Link>.
                    </p>
                  ),
                },
              ]}
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href="/cotizar" variant="solid">
                Pedir muestras
              </Cta>
              <Cta href="/materiales" variant="outline-dark">
                Volver al catálogo
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-smoke-line bg-paper-50 py-section">
          <div className="shell">
            <SectionHeading eyebrow={familyLabel} title="Materiales de la misma familia" className="mb-12" />
            <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {related.map((m) => (
                <RevealItem key={m.slug}>
                  <Link
                    to={`/materiales/${m.slug}`}
                    className="group flex h-full flex-col border border-smoke-line bg-paper transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-[5/4] overflow-hidden">
                      <Figure image={m.image} className="h-full w-full" imgClassName="transition-transform duration-[1100ms] group-hover:scale-105" sizes="30vw" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5 p-5">
                      <h3 className="font-display text-[1.1rem] text-ink transition-colors group-hover:text-accent-deep">
                        {m.name}
                      </h3>
                      <p className="text-[0.85rem] leading-relaxed text-smoke-dark">{m.summary}</p>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}
    </>
  );
}
