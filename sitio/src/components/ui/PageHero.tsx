import { images, type ImageKey } from "@/data/images";
import { BrandStripes } from "@/components/ui/BrandStripes";
import { Reveal } from "./Reveal";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { cn } from "@/lib/cn";

interface PageHeroProps {
  breadcrumb: Crumb[];
  eyebrow?: string;
  title: string;
  standfirst?: string;
  /** Con imagen: encabezado a sangre. Sin imagen: encabezado claro y centrado. */
  image?: ImageKey;
  /** Franja en color acento bajo la imagen, con el `standfirst` (estilo página de mercado). */
  band?: boolean;
}

/**
 * Encabezado estándar de las páginas internas. Da a todas las «carpetas» del
 * sitio el mismo ritmo: migas de pan, epígrafe, título y bajada.
 */
export function PageHero({ breadcrumb, eyebrow, title, standfirst, image, band = false }: PageHeroProps) {
  /* ---- Variante clara, sin imagen (páginas de texto) ---- */
  if (!image) {
    return (
      <header className="border-b border-smoke-line bg-paper">
        <div className="shell flex flex-col items-center gap-5 pb-14 pt-32 text-center sm:pt-36">
          <Reveal from="up" distance={14}>
            <Breadcrumbs items={breadcrumb} />
          </Reveal>
          {eyebrow && (
            <Reveal from="up" distance={12}>
              <span className="overline text-accent-deep">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal from="up" distance={20} delay={0.05}>
            <h1 className="max-w-3xl font-display text-display-lg text-ink">{title}</h1>
          </Reveal>
          <Reveal from="up" distance={14} delay={0.1}>
            <span className="rule-under mx-auto" />
          </Reveal>
          {standfirst && (
            <Reveal from="up" distance={14} delay={0.14}>
              <p className="max-w-prose2 text-pretty text-base leading-relaxed text-smoke-dark sm:text-[1.05rem]">
                {standfirst}
              </p>
            </Reveal>
          )}
        </div>
      </header>
    );
  }

  const asset = images[image];

  /* ---- Variante a sangre, con imagen ---- */
  return (
    <header>
      <div className="relative flex min-h-[46svh] items-end overflow-hidden bg-ink text-white sm:min-h-[52svh]">
        <img
          src={asset.src}
          alt={asset.alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: asset.position ?? "center" }}
          loading="eager"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />
        <BrandStripes className="w-[min(28vw,360px)] opacity-90" />

        <div className="shell relative w-full pb-12 pt-32 sm:pb-16">
          <Reveal from="up" distance={14}>
            <Breadcrumbs items={breadcrumb} tone="light" />
          </Reveal>
          {eyebrow && (
            <Reveal from="up" distance={12} delay={0.05}>
              <span className="mt-6 block overline text-accent-soft">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal from="up" distance={22} delay={0.1}>
            <h1 className={cn("mt-4 max-w-4xl font-display text-display-lg font-bold text-white")}>
              {title}
            </h1>
          </Reveal>
          {standfirst && !band && (
            <Reveal from="up" distance={16} delay={0.16}>
              <p className="mt-5 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-white/80">
                {standfirst}
              </p>
            </Reveal>
          )}
        </div>
      </div>

      {standfirst && band && (
        <div className="bg-accent-deep text-white">
          <div className="shell py-8 sm:py-10">
            <p className="max-w-3xl text-pretty text-[1.02rem] leading-relaxed text-white/95">
              {standfirst}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
