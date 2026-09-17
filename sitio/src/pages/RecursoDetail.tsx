import { type ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Tile } from "@/components/ui/Tile";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { getResource, resources, type Block } from "@/data/recursos";
import { usePageTitle } from "@/lib/hooks";

/** Convierte los bloques de datos en JSX, agrupando las tandas de qa/term. */
function renderBody(blocks: Block[]): ReactNode[] {
  const out: ReactNode[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];

    if (b.type === "qa") {
      const run: { q: string; a: string }[] = [];
      while (i < blocks.length && blocks[i].type === "qa") {
        const q = blocks[i] as Extract<Block, { type: "qa" }>;
        run.push({ q: q.q, a: q.a });
        i++;
      }
      out.push(
        <Accordion
          key={`qa-${i}`}
          className="my-6"
          items={run.map((r) => ({ title: r.q, content: <p>{r.a}</p> }))}
        />,
      );
      continue;
    }

    if (b.type === "term") {
      const run: { term: string; def: string }[] = [];
      while (i < blocks.length && blocks[i].type === "term") {
        const t = blocks[i] as Extract<Block, { type: "term" }>;
        run.push({ term: t.term, def: t.def });
        i++;
      }
      out.push(
        <dl key={`term-${i}`} className="my-6 divide-y divide-smoke-line border-y border-smoke-line">
          {run.map((r) => (
            <div key={r.term} className="py-4">
              <dt className="font-display text-lg text-ink">{r.term}</dt>
              <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-smoke-dark">{r.def}</dd>
            </div>
          ))}
        </dl>,
      );
      continue;
    }

    switch (b.type) {
      case "h2":
        out.push(<h2 key={i}>{b.text}</h2>);
        break;
      case "h3":
        out.push(<h3 key={i}>{b.text}</h3>);
        break;
      case "p":
        out.push(<p key={i}>{b.text}</p>);
        break;
      case "ul":
        out.push(
          <ul key={i}>
            {b.items.map((it, n) => (
              <li key={n}>{it}</li>
            ))}
          </ul>,
        );
        break;
      case "ol":
        out.push(
          <ol key={i}>
            {b.items.map((it, n) => (
              <li key={n}>{it}</li>
            ))}
          </ol>,
        );
        break;
      case "note":
        out.push(
          <p
            key={i}
            className="my-6 border-l-2 border-accent bg-accent-pale/50 px-5 py-4 text-[0.95rem] text-accent-dark"
          >
            {b.text}
          </p>,
        );
        break;
    }
    i++;
  }
  return out;
}

export default function RecursoDetail() {
  const { slug = "" } = useParams();
  const resource = getResource(slug);
  usePageTitle(resource ? resource.title : "Recurso");

  if (!resource) return <Navigate to="/404" replace />;

  const others = resources.filter((r) => r.slug !== resource.slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Recursos", to: "/recursos" }, { label: resource.title }]}
        eyebrow={`${resource.kind} · ${resource.readingTime} de lectura`}
        title={resource.title}
        standfirst={resource.summary}
        image={resource.cover}
      />

      <article className="bg-paper py-section">
        <div className="shell">
          <div className="prose-vel mx-auto max-w-3xl">{renderBody(resource.body)}</div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 border-t border-smoke-line pt-8">
            <Cta href="/cotizar" variant="solid">Solicitar cotización</Cta>
            <Cta href="/recursos" variant="outline-dark">Ver todos los recursos</Cta>
          </div>
        </div>
      </article>

      <section className="border-t border-smoke-line bg-paper-50 py-section">
        <div className="shell">
          <SectionHeading eyebrow="Seguir leyendo" title="Otros recursos" className="mb-12" />
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.08}>
            {others.map((r) => (
              <RevealItem key={r.slug}>
                <Tile
                  to={`/recursos/${r.slug}`}
                  image={r.cover}
                  eyebrow={r.kind}
                  title={r.title}
                  text={r.summary}
                  cta="Leer"
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
