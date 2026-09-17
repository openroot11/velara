import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { processPhases } from "@/data/process";

/** Portada — el proceso, en versión corta. */
export default function Process() {
  return (
    <section className="bg-ink py-section text-white">
      <div className="shell">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          tone="light"
          title="De la idea al taller"
          intro="Seis etapas para cualquier trabajo, sea una silla o una flota. La primera —la consulta— no cuesta nada."
          className="mb-14"
        />

        <RevealGroup className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {processPhases.map((p) => (
            <RevealItem key={p.index} className="border-t border-white/15 pt-5">
              <span className="font-display text-3xl text-accent-soft">{p.index}</span>
              <h3 className="mt-3 font-display text-lg text-white">{p.title}</h3>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-white/45">{p.kicker}</p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-white/65">{p.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal from="up" distance={16}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Cta href="/proceso" variant="outline-light">
              Ver el proceso completo
            </Cta>
            <Cta href="/cotizar" variant="teal">
              Empezar por la consulta
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
