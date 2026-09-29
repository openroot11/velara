import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecList } from "@/components/ui/SpecList";
import Figure from "@/components/ui/Figure";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { getAdjacentProject, getProject } from "@/data/projects";
import { images } from "@/data/images";
import { usePageTitle } from "@/lib/hooks";

export default function ProjectDetail() {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  usePageTitle(project ? `${project.subject} — ${project.title}` : "Proyecto");

  if (!project) return <Navigate to="/404" replace />;
  const next = getAdjacentProject(project.slug);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Proyectos", to: "/proyectos" }, { label: project.subject }]}
        eyebrow={`${project.category} · ${project.location}`}
        title={`${project.subject} — ${project.title}`}
        image={project.cover}
      />

      {/* Intro + ficha */}
      <section className="bg-paper py-section">
        <div className="shell grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal from="up" distance={22}>
            <p className="font-display text-display-sm font-bold leading-snug text-ink">
              {project.intro}
            </p>
          </Reveal>
          <Reveal from="up" distance={22} delay={0.08}>
            <h2 className="overline text-smoke">Ficha del trabajo</h2>
            <SpecList className="mt-4" items={project.facts} />
          </Reveal>
        </div>
      </section>

      {/* Proceso */}
      <section className="border-t border-smoke-line bg-paper-50 py-section">
        <div className="shell">
          <SectionHeading eyebrow="El proceso" title="Cómo se hizo" className="mb-14" />
          <div className="flex flex-col gap-16 md:gap-24">
            {project.process.map((step, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={step.index} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                  <Reveal from={flip ? "left" : "right"} distance={40} className={flip ? "md:order-2" : ""}>
                    <div className="aspect-[4/3] overflow-hidden border border-smoke-line">
                      <Figure image={step.image} className="h-full w-full" sizes="(min-width:768px) 45vw, 92vw" />
                    </div>
                  </Reveal>
                  <Reveal from="up" distance={22}>
                    <span className="font-display text-4xl text-accent">{step.index}</span>
                    <h3 className="mt-3 font-display text-2xl text-ink sm:text-[1.6rem]">{step.title}</h3>
                    <p className="mt-3 max-w-md text-pretty text-[0.98rem] leading-relaxed text-smoke-dark">
                      {step.body}
                    </p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-paper py-section">
        <div className="shell">
          <SectionHeading eyebrow="Galería" title="El trabajo terminado" className="mb-12" />
          <RevealGroup className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5" stagger={0.06}>
            {project.gallery.map((g, i) => (
              <RevealItem key={`${g}-${i}`}>
                <div className={`overflow-hidden border border-smoke-line ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Figure image={g} className="h-full w-full" sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw" />
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Siguiente proyecto */}
      <section className="bg-ink text-white">
        <Link to={`/proyectos/${next.slug}`} className="group block">
          <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
            <img
              src={images[next.cover].src}
              alt={images[next.cover].alt}
              className="h-full w-full object-cover opacity-55 transition-all duration-[1200ms] ease-soft group-hover:scale-105 group-hover:opacity-70"
              style={{ objectPosition: images[next.cover].position }}
              loading="lazy"
              draggable={false}
            />
            <div className="absolute inset-0 bg-ink/40" />
            <div className="shell absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="overline text-white/65">Siguiente proyecto</span>
              <span className="mt-4 font-display text-display-md font-bold text-white transition-colors duration-300 group-hover:text-accent-soft">
                {next.subject}
              </span>
              <span className="mt-2 text-[0.85rem] uppercase tracking-[0.12em] text-accent-soft">
                {next.title}
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* CTA */}
      <section className="bg-paper py-section">
        <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-display-sm font-bold text-ink">
            ¿Tiene un trabajo parecido?
          </h2>
          <Cta href={`/cotizar?servicio=${project.categorySlug}`} variant="solid" className="shrink-0">
            Solicitar cotización
          </Cta>
        </div>
      </section>
    </>
  );
}
