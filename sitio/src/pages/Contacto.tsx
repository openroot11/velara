import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { site } from "@/data/site";
import { usePageTitle } from "@/lib/hooks";

const methods = [
  { label: "WhatsApp", value: site.contact.whatsappDisplay, href: site.contact.whatsappHref, external: true },
  { label: "Teléfono", value: site.contact.phoneDisplay, href: site.contact.phoneHref, external: false },
  { label: "Correo", value: site.contact.email, href: site.contact.emailHref, external: false },
];

const inputCls =
  "w-full border border-smoke-line bg-paper px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-smoke focus:border-accent-deep";

export default function Contacto() {
  usePageTitle("Contacto");
  const [form, setForm] = useState({ nombre: "", contacto: "", mensaje: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nombre: ${form.nombre}\nContacto: ${form.contacto}\n\n${form.mensaje}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      "Mensaje desde el sitio",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Contacto" }]}
        eyebrow="Hablemos"
        title="Dónde estamos y cómo escribirnos"
        standfirst="Para cotizar un trabajo, use el formulario de cotización: llega por WhatsApp con todo lo que necesitamos. Para lo demás —PQR, empleo, alianzas— escríbanos aquí."
        image="pageContacto"
        band
      />

      <section className="bg-paper py-section">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Info */}
          <Reveal from="up" distance={22}>
            <div className="flex flex-col gap-10">
              <div className="border-t border-smoke-line pt-6">
                <h2 className="overline text-accent-deep">El taller</h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-ink-700">
                  {site.location.line1}
                  <br />
                  {site.location.line2}
                </p>
                <a
                  href={site.location.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-3 inline-block text-[0.8rem] uppercase tracking-[0.1em] text-accent-deep"
                >
                  Ver en el mapa
                </a>
              </div>

              <div className="border-t border-smoke-line pt-6">
                <h2 className="overline text-accent-deep">Horario</h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-ink-700">{site.hours}</p>
              </div>

              <div className="border-t border-smoke-line pt-6">
                <h2 className="overline text-accent-deep">Contacto directo</h2>
                <ul className="mt-4 grid gap-px overflow-hidden border border-smoke-line sm:grid-cols-3">
                  {methods.map((m) => (
                    <li key={m.label}>
                      <a
                        href={m.href}
                        target={m.external ? "_blank" : undefined}
                        rel={m.external ? "noopener noreferrer" : undefined}
                        className="flex h-full flex-col gap-1.5 bg-paper-50 p-4 transition-colors hover:bg-paper-100"
                      >
                        <span className="text-[0.7rem] uppercase tracking-[0.12em] text-smoke">{m.label}</span>
                        <span className="text-[0.9rem] text-ink">{m.value}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel flex flex-col gap-4 p-6">
                <h2 className="font-display text-xl text-ink">¿Es para cotizar un trabajo?</h2>
                <p className="text-[0.92rem] leading-relaxed text-smoke-dark">
                  El formulario de cotización arma el mensaje con todo lo que necesitamos y lo abre en
                  WhatsApp. Es la vía más rápida para un precio.
                </p>
                <Cta href="/cotizar" variant="solid" className="w-fit">
                  Solicitar cotización
                </Cta>
              </div>
            </div>
          </Reveal>

          {/* Formulario general */}
          <Reveal from="up" distance={22} delay={0.08}>
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <h2 className="font-display text-display-sm text-ink">Escríbanos</h2>
              <span className="rule-under block" />
              <input
                required
                value={form.nombre}
                onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                placeholder="Nombre"
                aria-label="Nombre"
                className={inputCls}
              />
              <input
                required
                value={form.contacto}
                onChange={(e) => setForm((f) => ({ ...f, contacto: e.target.value }))}
                placeholder="Correo o teléfono"
                aria-label="Correo o teléfono"
                className={inputCls}
              />
              <textarea
                required
                rows={6}
                value={form.mensaje}
                onChange={(e) => setForm((f) => ({ ...f, mensaje: e.target.value }))}
                placeholder="Su mensaje"
                aria-label="Mensaje"
                className={`${inputCls} resize-y leading-relaxed`}
              />
              <button type="submit" className="btn btn-solid w-full sm:w-fit">
                Enviar mensaje
              </button>
              <p className="text-[0.8rem] leading-relaxed text-smoke-dark">
                Se abre su programa de correo con el mensaje escrito. Nada se envía por sí solo.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-14">
        <div className="shell text-center">
          <p className="text-[0.9rem] text-smoke-dark">
            ¿Buscaba una guía o una respuesta rápida?{" "}
            <Link to="/recursos/preguntas-frecuentes" className="link-underline text-accent-deep">
              Vea las preguntas frecuentes
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
