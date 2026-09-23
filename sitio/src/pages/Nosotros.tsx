import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Figure from "@/components/ui/Figure";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { site } from "@/data/site";
import { usePageTitle } from "@/lib/hooks";

const principles = [
  {
    title: "Una sola mano por pieza",
    body: "Cada asiento, sillín, forro o carpa lo lleva un mismo artesano de principio a fin. Sin cadena de montaje ni piezas que pasan de mano en mano.",
  },
  {
    title: "Nada universal",
    body: "No adaptamos patrones genéricos. Cada pieza se mide y se traza sobre el objeto real antes de dar el primer corte.",
  },
  {
    title: "Reparar antes que reemplazar",
    body: "Conservamos el material original siempre que su estructura lo permita. La pátina de los años es parte del valor de la pieza.",
  },
];

const historia = [
  { year: "2009", title: "El primer taller", body: "Arrancamos tapizando sillines de moto en un local de 20 m² en el sur de Barranquilla." },
  { year: "2013", title: "Entra el carro", body: "El primer interior completo de camioneta. A partir de ahí, el tapizado automotriz se vuelve la mitad del trabajo." },
  { year: "2016", title: "Carpas y toldos", body: "Un restaurante nos pide cubrir su terraza. Montamos el área de confección de lona y sumamos el cuarto oficio." },
  { year: "2019", title: "Diez años", body: "Nos mudamos al taller actual, con área de patronaje, costura y montaje separadas." },
  { year: "2022", title: "Servicio a talleres", body: "Empezamos a confeccionar para talleres de motos y latonería de la ciudad, con tiempos de mayorista." },
  { year: "2026", title: "Hoy", body: "Cinco oficios, un equipo de artesanos y el mismo estándar de acabado para una silla o para una flota." },
];

export default function Nosotros() {
  usePageTitle("Nosotros");
  const years = new Date().getFullYear() - site.foundedYear;

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Nosotros" }]}
        eyebrow="El taller"
        title="Aquí no se remienda. Se rehace."
        standfirst={`${years} años trabajando el cuero, el vinilo y la lona como materiales de diseño, con criterio, referencia y una obsesión sana por el detalle.`}
        image="pageNosotros"
        band
      />

      {/* Somos VELARA */}
      <section className="bg-paper py-section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal from="up" distance={22}>
            <SectionHeading align="left" eyebrow="Somos VELARA" title="El oficio, el equipo y cómo trabajamos" className="mb-6" />
            <p className="max-w-prose2 text-pretty text-[1.05rem] leading-relaxed text-ink-700">
              VELARA es un taller de cuero y tapicería en Barranquilla. Lo mismo que aplicamos al
              interior de un deportivo lo aplicamos a la carpa de una terraza o a los forros de una
              flota: el material cambia, el estándar no. No somos una fábrica ni un tapicero de
              esquina; somos un taller con oficio, referencias y tiempos que se cumplen.
            </p>
          </Reveal>
          <Reveal from="up" distance={22} delay={0.08}>
            <div className="aspect-[4/5] overflow-hidden border border-smoke-line">
              <Figure image="realEquipoTaller" className="h-full w-full" sizes="(min-width:1024px) 45vw, 92vw" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Por qué VELARA */}
      <section id="por-que" className="scroll-mt-28 border-t border-smoke-line bg-paper-50 py-section">
        <div className="shell">
          <SectionHeading eyebrow="Por qué VELARA" title="Tres cosas que no negociamos" className="mb-14" />
          <RevealGroup className="grid gap-8 md:grid-cols-3" stagger={0.1}>
            {principles.map((p, i) => (
              <RevealItem key={p.title} className="border-t border-smoke-line pt-5">
                <span className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-smoke-dark">{p.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-paper py-section">
        <div className="shell">
          <SectionHeading eyebrow="Hacemos historia" title="De un local de 20 metros a cinco oficios" className="mb-14" />
          <div className="mx-auto max-w-3xl">
            {historia.map((h) => (
              <Reveal key={h.year} from="up" distance={20} className="relative flex gap-6 border-l border-smoke-line pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-paper" />
                <div>
                  <span className="font-display text-2xl text-accent">{h.year}</span>
                  <h3 className="mt-1 font-display text-lg text-ink">{h.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-smoke-dark">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trabaja con nosotros */}
      <section id="empleo" className="scroll-mt-28 bg-ink text-white">
        <div className="shell grid gap-8 py-16 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <span className="overline text-accent-soft">Trabaja con nosotros</span>
            <h2 className="mt-4 font-display text-display-sm font-light">Buscamos manos con oficio</h2>
            <p className="mt-4 max-w-lg text-pretty text-[1rem] leading-relaxed text-white/70">
              Tapiceros, costureros y ayudantes de taller que quieran hacer las cosas bien y aprender
              los cinco oficios. Si es lo suyo, escríbanos con lo que sabe hacer.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Cta href="/contacto" variant="outline-light">
              Enviar mi información
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
