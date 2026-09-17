import { PageHero } from "@/components/ui/PageHero";
import Figure from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { processPhases } from "@/data/process";
import { type ImageKey } from "@/data/images";
import { usePageTitle } from "@/lib/hooks";

const phaseImages: ImageKey[] = [
  "procDiagnosis",
  "procStrip",
  "procPattern",
  "procCraft",
  "procAssembly",
  "procDetail",
];

export default function Proceso() {
  usePageTitle("El proceso");

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Nosotros", to: "/nosotros" }, { label: "El proceso" }]}
        eyebrow="Cómo trabajamos"
        title="De la idea al taller"
        standfirst="Seis etapas por las que pasa todo trabajo, sea una silla o una flota entera. La primera —la consulta— no cuesta nada y no compromete a nada."
        image="pageProceso"
        band
      />

      <div className="bg-paper">
        {processPhases.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={p.index} className="border-b border-smoke-line py-section last:border-b-0">
              <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal from={flip ? "left" : "right"} distance={40} className={flip ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden border border-smoke-line">
                    <Figure image={phaseImages[i]} className="h-full w-full" sizes="(min-width:1024px) 45vw, 92vw" />
                  </div>
                </Reveal>
                <Reveal from="up" distance={24}>
                  <span className="font-display text-5xl text-accent">{p.index}</span>
                  <h2 className="mt-3 font-display text-display-sm text-ink">{p.title}</h2>
                  <p className="mt-2 text-[0.8rem] uppercase tracking-[0.12em] text-accent-deep">{p.kicker}</p>
                  <p className="mt-4 max-w-prose2 text-pretty text-[1.02rem] leading-relaxed text-smoke-dark">
                    {p.body}
                  </p>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-paper-50 py-section">
        <div className="shell mx-auto max-w-2xl text-center">
          <h2 className="font-display text-display-sm text-ink">Qué recibe al final</h2>
          <span className="rule-under mx-auto mt-4 block" />
          <p className="mt-5 text-pretty text-[1.02rem] leading-relaxed text-smoke-dark">
            La pieza terminada, el registro fotográfico del proceso, las indicaciones para mantener el
            material y el documento de garantía. Todo por escrito.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta href="/cotizar" variant="teal">Empezar por la consulta</Cta>
            <Cta href="/proyectos" variant="outline-dark">Ver trabajos terminados</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
