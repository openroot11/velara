import { PageHero } from "@/components/ui/PageHero";
import { Tile } from "@/components/ui/Tile";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { resources } from "@/data/recursos";
import { usePageTitle } from "@/lib/hooks";

export default function Recursos() {
  usePageTitle("Recursos");

  /* Las guías primero, lo legal al final. */
  const order = ["Guía", "Instructivo", "Preguntas frecuentes", "Glosario", "Galería", "Legal"];
  const sorted = [...resources].sort(
    (a, b) => order.indexOf(a.kind) - order.indexOf(b.kind),
  );

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Recursos" }]}
        eyebrow="Guías y consulta"
        title="Todo lo que conviene saber antes y después del trabajo"
        standfirst="Guías de cuidado, cómo medir para cotizar, respuestas a lo que más nos preguntan y el glosario de los términos que aparecen en las cotizaciones."
      />

      <section className="bg-paper py-section">
        <div className="shell">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {sorted.map((r) => (
              <RevealItem key={r.slug}>
                <Tile
                  to={`/recursos/${r.slug}`}
                  image={r.cover}
                  eyebrow={r.kind}
                  title={r.title}
                  text={r.summary}
                  cta={`Leer · ${r.readingTime}`}
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
