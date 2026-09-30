import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "react-router-dom";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Tile } from "@/components/ui/Tile";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { services } from "@/data/services";

/** Portada — «Nuestro oficio»: las cinco puertas del taller. */
export default function Services() {
  return (
    <section className="bg-paper py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Nuestro oficio"
          title="Cinco oficios, un solo taller"
          intro="Cuero, vinilo y lona cortados a la medida de cada pieza — las mismas manos y el mismo estándar de acabado para un asiento o para una flota entera."
          className="mb-14"
        />

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
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

          {/* Sexta casilla: soluciones especiales, directo a WhatsApp. */}
          <RevealItem>
            <div className="relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden bg-ink p-8 text-white">
              <div className="clip-angle-bl absolute bottom-0 left-0 h-1.5 w-2/3 bg-accent" aria-hidden />
              <div className="flex flex-col gap-4">
                <span className="overline text-accent-soft">¿Algo distinto?</span>
                <h3 className="font-display text-2xl text-white sm:text-[1.6rem]">Soluciones especiales</h3>
                <p className="text-pretty text-[0.95rem] leading-relaxed text-white/70">
                  ¿Su trabajo no encaja en ninguna de estas categorías? Cuéntenos la idea: fabricamos a
                  la medida lo que su vehículo, su negocio o su espacio necesite.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <WhatsAppButton message="Hola, tengo un proyecto personalizado y quisiera cotizarlo." />
                <Link
                  to="/servicios"
                  className="text-[0.8rem] font-semibold text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  Ver todos los servicios
                </Link>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
