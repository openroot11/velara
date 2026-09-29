import { images } from "@/data/images";
import { site } from "@/data/site";
import { BrandStripes } from "@/components/ui/BrandStripes";
import { Cta } from "@/components/ui/Cta";
import { LineReveal } from "@/components/ui/LineReveal";
import { Reveal } from "@/components/ui/Reveal";

const contactLinks = [
  { label: "WhatsApp", value: site.contact.whatsappDisplay, href: site.contact.whatsappHref, external: true },
  { label: "Teléfono", value: site.contact.phoneDisplay, href: site.contact.phoneHref, external: false },
  { label: "Correo", value: site.contact.email, href: site.contact.emailHref, external: false },
];

export default function FinalCta() {
  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-ink text-white">
      <img
        src={images.ctaInterior.src}
        alt={images.ctaInterior.alt}
        style={{ objectPosition: images.ctaInterior.position }}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      <BrandStripes />

      <div className="shell relative w-full py-24">
        <Reveal from="up" distance={14}>
          <span className="overline text-accent-soft">Contacto</span>
        </Reveal>

        <LineReveal
          as="h2"
          lines={["Cuéntenos", "qué hay que cubrir."]}
          className="mt-5 font-display text-display-lg font-bold text-white"
        />

        <Reveal from="up" distance={16} delay={0.1}>
          <p className="mt-6 max-w-md text-pretty text-[1.05rem] leading-relaxed text-white/75">
            Un asiento, una moto, una terraza o una flota entera. Le decimos qué hace falta, cuánto
            tarda y cuánto cuesta.
          </p>
        </Reveal>

        <Reveal from="up" distance={18} delay={0.16}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Cta href="/cotizar" variant="teal">
              Solicitar cotización
            </Cta>
            <Cta href="/contacto" variant="outline-light">
              Ver datos del taller
            </Cta>
          </div>
        </Reveal>

        <Reveal from="up" distance={18} delay={0.24}>
          <div className="mt-14 grid max-w-2xl gap-px overflow-hidden border border-white/15 sm:grid-cols-3">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-2 bg-ink/50 p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-ink/80"
              >
                <span className="text-[0.7rem] uppercase tracking-[0.14em] text-white/50">{c.label}</span>
                <span className="text-[0.92rem] text-white transition-colors group-hover:text-accent-soft">
                  {c.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
