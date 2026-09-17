import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { Tile } from "@/components/ui/Tile";
import { Cta } from "@/components/ui/Cta";
import { services } from "@/data/services";

/** Portada — «Nuestro oficio»: las cuatro puertas del taller. */
export default function Services() {
  return (
    <section className="bg-paper py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Nuestro oficio"
          title="Cuatro oficios, un solo taller"
          intro="Cuero, vinilo y lona cortados a la medida de cada pieza — las mismas manos y el mismo estándar de acabado para un asiento o para una flota entera."
          className="mb-14"
        />

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {services.map((s) => (
            <RevealItem key={s.slug}>
              <Tile
                to={`/servicios/${s.slug}`}
                image={s.image}
                eyebrow={`Servicio ${s.index}`}
                title={s.title}
                text={s.description}
                cta="Ver servicio"
                aspect="aspect-[4/3]"
                className="h-full"
              />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal from="up" distance={18}>
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-md text-pretty text-[0.95rem] leading-relaxed text-smoke-dark">
              ¿No sabe en cuál de los cuatro entra su trabajo? Escríbanos y lo revisamos con usted.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Cta href="/servicios" variant="outline-dark">
                Ver todos los servicios
              </Cta>
              <Cta href="/cotizar" variant="solid">
                Solicitar cotización
              </Cta>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
