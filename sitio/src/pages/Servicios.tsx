import { Link } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import Figure from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { services } from "@/data/services";
import { usePageTitle } from "@/lib/hooks";

export default function Servicios() {
  usePageTitle("Servicios");

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Servicios" }]}
        eyebrow="Nuestro oficio"
        title="Cinco oficios, un solo taller"
        standfirst="Cuero, vinilo y lona cortados a la medida de cada pieza. El mismo estándar de acabado para un asiento del conductor o para una flota entera."
        image="pageServicios"
        band
      />

      <div className="bg-paper">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className="border-b border-smoke-line py-section last:border-b-0"
            >
              <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal
                  from={flip ? "left" : "right"}
                  distance={40}
                  className={flip ? "lg:order-2" : ""}
                >
                  <div className="relative aspect-[4/3] overflow-hidden border border-smoke-line">
                    <Figure image={s.heroImage} className="h-full w-full" sizes="(min-width:1024px) 45vw, 92vw" />
                    <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      Servicio {s.index}
                    </span>
                  </div>
                </Reveal>

                <Reveal from="up" distance={24}>
                  <h2 className="font-display text-display-sm text-ink">{s.title}</h2>
                  <p className="mt-2 text-[0.8rem] uppercase tracking-[0.12em] text-accent-deep">
                    {s.scope}
                  </p>
                  <p className="mt-4 max-w-prose2 text-pretty text-[1.02rem] leading-relaxed text-smoke-dark">
                    {s.standfirst}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.applications.map((a) => (
                      <li key={a.id}>
                        <Link
                          to={`/servicios/${s.slug}#${a.id}`}
                          className="inline-block border border-smoke-line px-3 py-1.5 text-[0.8rem] text-ink-700 transition-colors hover:border-ink hover:text-ink"
                        >
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Cta href={`/servicios/${s.slug}`} variant="solid">
                      Ver el servicio
                    </Cta>
                    <Cta href={`/cotizar?servicio=${s.slug}`} variant="outline-dark">
                      Cotizar este servicio
                    </Cta>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-accent-deep text-white">
        <div className="shell flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-pretty font-display text-2xl font-light leading-snug">
            ¿No sabe en cuál de los cinco entra su trabajo?
          </p>
          <Cta href="/cotizar" variant="outline-light" className="shrink-0">
            Cuéntenos y lo revisamos
          </Cta>
        </div>
      </section>
    </>
  );
}
