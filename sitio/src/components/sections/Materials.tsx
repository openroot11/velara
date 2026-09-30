import { Link } from "react-router-dom";
import Figure from "@/components/ui/Figure";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { materials, materialFamilies } from "@/data/materials";

const reasons = [
  { title: "A medida", text: "Cada solución se adapta al proyecto." },
  { title: "Fabricación", text: "Desarrollamos cada pieza según su necesidad." },
  { title: "Instalación", text: "Cuando el trabajo lo requiere, lo montamos." },
  { title: "Atención personalizada", text: "Cada cotización parte de entender su caso." },
];

/** Portada — anticipo del catálogo de materiales. */
export default function Materials() {
  const featured = ["cuero-plena-flor", "vinilo-tecnico", "lona-acrilica", "hilo-encerado"]
    .map((slug) => materials.find((m) => m.slug === slug))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <section className="border-y border-smoke-line bg-paper-50 py-section">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal from="up" distance={20}>
          <div className="flex flex-col gap-5">
            <span className="overline text-accent-deep">Catálogo de materiales</span>
            <h2 className="font-display text-display-md text-ink">
              Todo empieza por una elección de material
            </h2>
            <span className="rule-under" />
            <p className="max-w-prose2 text-pretty text-[1.02rem] leading-relaxed text-smoke-dark">
              Tacto, comportamiento, cómo envejece y cómo se limpia. Reunimos los materiales que
              trabajamos con su ficha técnica y sus usos, para que la decisión no sea a ciegas.
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {materialFamilies.map((f) => (
                <li key={f.slug}>
                  <Link
                    to={`/materiales?familia=${f.slug}`}
                    className="inline-block border border-smoke-line bg-paper px-3.5 py-1.5 text-[0.8rem] text-ink-700 transition-colors hover:border-ink hover:text-ink"
                  >
                    {f.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Cta href="/materiales" variant="solid">
                Ver el catálogo completo
              </Cta>
            </div>

            <div className="mt-8 border-t border-smoke-line pt-8">
              <span className="overline text-accent-deep">¿Por qué VELARA?</span>
              <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {reasons.map((r) => (
                  <li key={r.title} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                    <div>
                      <p className="text-[0.95rem] font-semibold text-ink">{r.title}</p>
                      <p className="mt-0.5 text-[0.85rem] leading-relaxed text-smoke-dark">{r.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-4" stagger={0.08}>
          {featured.map((m) => (
            <RevealItem key={m.slug}>
              <Link to={`/materiales/${m.slug}`} className="group block">
                <div className="relative aspect-square overflow-hidden border border-smoke-line">
                  <Figure
                    image={m.image}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-[1100ms] ease-soft group-hover:scale-105"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                  />
                </div>
                <p className="mt-2.5 font-display text-[1.05rem] text-ink transition-colors group-hover:text-accent-deep">
                  {m.name}
                </p>
                <p className="text-[0.8rem] text-smoke">{m.kind}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
