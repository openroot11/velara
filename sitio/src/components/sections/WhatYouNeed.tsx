import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";
import { reportWhatsAppClick } from "@/lib/googleAdsConversion";
import { whatsappUrl } from "@/lib/whatsapp";

const needs = [
  {
    title: "Quiero proteger mi vehículo",
    solution: "Forros a medida",
    message: "Hola, quiero cotizar forros para mi carro.",
    icon: <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z M9 12l2 2 4-4" />,
  },
  {
    title: "Quiero renovar mi vehículo",
    solution: "Tapicería automotriz",
    message: "Hola, estoy interesado en tapicería automotriz.",
    icon: <path d="M6 20v-3m12 3v-3M5 17h14M7 17V9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v8M9 6V4h6v2" />,
  },
  {
    title: "Necesito cubrir un espacio",
    solution: "Carpas y toldos",
    message: "Hola, quiero cotizar una carpa/toldo.",
    icon: <path d="M3 10l9-6 9 6M5 10v10m14-10v10M3 10h18M9 20v-6h6v6" />,
  },
  {
    title: "Tengo un proyecto especial",
    solution: "Fabricación personalizada",
    message: "Hola, tengo un proyecto personalizado y quisiera cotizarlo.",
    icon: <path d="M4 20l4-1 11-11-3-3L5 16l-1 4zM14 7l3 3" />,
  },
];

/** Portada — «¿Qué necesita?»: atajos a WhatsApp con mensaje precargado. */
export default function WhatYouNeed() {
  return (
    <section className="relative overflow-hidden bg-ink py-section text-white">
      <div className="shell">
        <SectionHeading
          eyebrow="Cotice en un minuto"
          title="¿Qué necesita?"
          intro="Elija la opción que más se parece a su caso y escríbanos por WhatsApp con el mensaje listo."
          tone="light"
          className="mb-12"
        />

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {needs.map((n) => (
            <RevealItem key={n.title}>
              <a
                href={whatsappUrl(n.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={reportWhatsAppClick}
                className="group flex h-full flex-col gap-5 border border-white/15 bg-white/[0.03] p-7 transition-all duration-400 ease-soft hover:-translate-y-1 hover:border-accent hover:bg-white/[0.06]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 text-accent-soft"
                  aria-hidden
                >
                  {n.icon}
                </svg>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg leading-snug text-white sm:text-xl">{n.title}</h3>
                  <p className="text-[0.88rem] text-white/60">{n.solution}</p>
                </div>
                <span className="mt-auto flex items-center gap-2 pt-2 text-[0.8rem] font-semibold text-white transition-colors group-hover:text-accent-soft">
                  <WhatsAppIcon className="h-4 w-4" />
                  Cotizar por WhatsApp
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
