import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const items: { label: string; value: string; href?: string }[] = [
  { label: "WhatsApp", value: site.contact.whatsappDisplay, href: site.contact.whatsappHref },
  { label: "Taller", value: `${site.location.line1}, ${site.location.city}`, href: site.location.mapHref },
  { label: "Horario", value: site.hours },
];

/** Portada — franja de contacto rápido entre Proyectos y Proceso. */
export default function QuickContact() {
  return (
    <section className="bg-paper-100">
      <Reveal from="up" distance={16}>
        <div className="shell grid gap-8 py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
          <dl className="grid gap-6 sm:grid-cols-3">
            {items.map((i) => (
              <div key={i.label} className="flex flex-col gap-1.5 border-l-2 border-accent pl-4">
                <dt className="overline text-smoke">{i.label}</dt>
                <dd className="text-pretty text-[0.95rem] font-medium leading-snug text-ink">
                  {i.href ? (
                    <a href={i.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent-deep">
                      {i.value}
                    </a>
                  ) : (
                    i.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div>
            <WhatsAppButton />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
