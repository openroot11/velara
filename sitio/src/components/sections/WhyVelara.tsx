import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const reasons = [
  { title: "A medida", text: "Cada solución se adapta al proyecto, al vehículo o al espacio." },
  { title: "Fabricación", text: "Desarrollamos cada pieza en el taller según su necesidad." },
  { title: "Instalación", text: "Cuando el trabajo lo requiere, lo montamos nosotros." },
  { title: "Atención personalizada", text: "Cada cotización parte de entender su caso." },
];

/** Portada — «¿Por qué VELARA?»: cuatro razones, sin cifras ni promesas no verificadas. */
export default function WhyVelara() {
  return (
    <section className="border-y border-smoke-line bg-paper-50 py-section">
      <div className="shell">
        <SectionHeading eyebrow="Nuestro compromiso" title="¿Por qué VELARA?" className="mb-12" />
        <RevealGroup className="grid gap-px overflow-hidden border border-smoke-line bg-smoke-line sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {reasons.map((r, i) => (
            <RevealItem key={r.title} className="flex flex-col gap-3 bg-paper p-8">
              <span className="font-display text-3xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl text-ink">{r.title}</h3>
              <p className="text-pretty text-[0.92rem] leading-relaxed text-smoke-dark">{r.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
