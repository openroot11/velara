import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { Tile } from "@/components/ui/Tile";
import { Cta } from "@/components/ui/Cta";
import { projects } from "@/data/projects";

/** Portada — trabajos recientes. */
export default function Projects() {
  const recent = projects.slice(0, 3);

  return (
    <section className="bg-paper py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Trabajos del taller"
          title="Piezas que cuentan una historia"
          intro="Cada trabajo con su ficha técnica, el proceso paso a paso y las fotos de entrada y de entrega."
          className="mb-14"
        />

        <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
          {recent.map((p) => (
            <RevealItem key={p.slug}>
              <Tile
                to={`/proyectos/${p.slug}`}
                image={p.cover}
                eyebrow={p.category}
                title={p.subject}
                text={p.teaser}
                cta="Ver el trabajo"
                aspect="aspect-[4/3]"
                className="h-full"
              />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal from="up" distance={16}>
          <div className="mt-12 flex justify-center">
            <Cta href="/proyectos" variant="outline-dark">
              Ver todos los proyectos
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
