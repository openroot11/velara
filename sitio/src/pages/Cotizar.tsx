import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { usePageTitle } from "@/lib/hooks";
import { cn } from "@/lib/cn";

interface FormState {
  nombre: string;
  telefono: string;
  servicio: string;
  sector: string;
  detalle: string;
}

type FieldName = keyof FormState;

const EMPTY: FormState = {
  nombre: "",
  telefono: "",
  servicio: "",
  sector: "",
  detalle: "",
};

/** Móvil o fijo colombiano, tolerando espacios, guiones y un prefijo +57. */
const PHONE_RE = /^(\+?57)?[\s-]?[13]\d{2}[\s-]?\d{3}[\s-]?\d{4}$/;

function validate(v: FormState): Partial<Record<FieldName, string>> {
  const e: Partial<Record<FieldName, string>> = {};
  if (v.nombre.trim().length < 3) e.nombre = "Escriba su nombre completo.";
  if (!PHONE_RE.test(v.telefono.trim()))
    e.telefono = "Escriba un número de 10 dígitos, por ejemplo 300 123 4567.";
  if (!v.servicio) e.servicio = "Escoja el servicio que necesita.";
  if (v.detalle.trim().length < 15)
    e.detalle = "Cuéntenos un poco más para poder cotizarle bien.";
  return e;
}

/**
 * Arma el mensaje de WhatsApp. Nada se envía desde aquí: el botón abre WhatsApp
 * con el texto ya escrito y la persona revisa y decide si lo envía.
 */
function buildMessage(v: FormState): string {
  const servicio =
    services.find((s) => s.slug === v.servicio)?.title ?? v.servicio;
  return [
    `Hola ${site.name}, quiero cotizar un trabajo.`,
    "",
    `*Servicio:* ${servicio}`,
    `*Nombre:* ${v.nombre.trim()}`,
    `*Teléfono:* ${v.telefono.trim()}`,
    v.sector.trim() ? `*Sector:* ${v.sector.trim()}` : null,
    "",
    `*Lo que necesito:*`,
    v.detalle.trim(),
  ]
    .filter((l) => l !== null)
    .join("\n");
}

const labelCls = "overline text-smoke";
const inputCls =
  "w-full border-b border-smoke-line bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-smoke focus:border-accent-deep";
const errorCls = "text-[0.78rem] text-accent-deep";

function Field({
  name,
  label,
  error,
  hint,
  children,
}: {
  name: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className={labelCls}>
        {label}
      </label>
      {children}
      {hint && !error && <span className="text-[0.78rem] text-smoke-dark">{hint}</span>}
      {error && (
        <span id={`${name}-error`} className={errorCls} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default function Cotizar() {
  usePageTitle("Solicitar cotización");
  const [params] = useSearchParams();
  const preselected = params.get("servicio") ?? "";

  const [values, setValues] = useState<FormState>({
    ...EMPTY,
    servicio: services.some((s) => s.slug === preselected) ? preselected : "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const message = useMemo(() => buildMessage(values), [values]);

  const set =
    (name: FieldName) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((v) => ({ ...v, [name]: e.target.value }));
      if (submitted) setErrors(validate({ ...values, [name]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(Object.keys(found)[0]);
      first?.focus();
      return;
    }
    const url = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const err = (n: FieldName) => (submitted ? errors[n] : undefined);
  const aria = (n: FieldName) =>
    err(n) ? { "aria-invalid": true, "aria-describedby": `${n}-error` } : {};

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Solicitar cotización" }]}
        eyebrow="Cotización"
        title="Cuéntenos qué necesita"
        standfirst="Llene el formulario y le llega por WhatsApp con todo lo que necesitamos para darle un precio. Respondemos el mismo día hábil."
        image="pageContacto"
      />

      <section className="bg-paper py-section">
        <div className="shell grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <Reveal from="up" distance={24}>
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-9">
              <Field name="nombre" label="Nombre completo" error={err("nombre")}>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  value={values.nombre}
                  onChange={set("nombre")}
                  placeholder="María Fernanda Gómez"
                  className={inputCls}
                  {...aria("nombre")}
                />
              </Field>

              <Field
                name="telefono"
                label="Teléfono o WhatsApp"
                error={err("telefono")}
                hint="Al que le podamos responder."
              >
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={values.telefono}
                  onChange={set("telefono")}
                  placeholder="300 123 4567"
                  className={inputCls}
                  {...aria("telefono")}
                />
              </Field>

              <Field name="servicio" label="¿Qué servicio necesita?" error={err("servicio")}>
                <select
                  id="servicio"
                  name="servicio"
                  value={values.servicio}
                  onChange={set("servicio")}
                  className={cn(inputCls, "appearance-none")}
                  {...aria("servicio")}
                >
                  <option value="">Escoja una opción…</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                name="sector"
                label="Sector o barrio"
                hint="Opcional. Nos sirve para saber si podemos ir a medir."
              >
                <input
                  id="sector"
                  name="sector"
                  type="text"
                  value={values.sector}
                  onChange={set("sector")}
                  placeholder="El Prado, Barranquilla"
                  className={inputCls}
                />
              </Field>

              <Field
                name="detalle"
                label="Cuéntenos el trabajo"
                error={err("detalle")}
                hint="Qué es, en qué estado está y para cuándo lo necesita."
              >
                <textarea
                  id="detalle"
                  name="detalle"
                  rows={5}
                  value={values.detalle}
                  onChange={set("detalle")}
                  placeholder="Necesito tapizar las sillas de una camioneta doble cabina. Están descosidas y el techo se despegó."
                  className={cn(inputCls, "resize-y leading-relaxed")}
                  {...aria("detalle")}
                />
              </Field>

              <div className="mt-2 flex flex-col gap-5">
                <button type="submit" className="btn btn-teal w-full sm:w-auto">
                  <span>Enviar por WhatsApp</span>
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none" aria-hidden>
                    <path d="M0 4h18M15 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>

                <p className="max-w-md text-[0.8rem] leading-relaxed text-smoke-dark">
                  Se abre WhatsApp con el mensaje ya escrito. Usted lo revisa y decide si lo envía.
                  Nada sale de esta página por sí solo.
                </p>

                <button
                  type="button"
                  onClick={copy}
                  className="link-underline w-fit text-[0.78rem] uppercase tracking-[0.1em] text-smoke-dark"
                >
                  {copied ? "Mensaje copiado" : "O copiar el mensaje"}
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal from="up" distance={24} delay={0.1}>
            <aside className="flex flex-col gap-10 lg:sticky lg:top-28">
              <div className="border-t border-smoke-line pt-6">
                <h2 className="overline text-accent-deep">Qué pasa después</h2>
                <ol className="mt-5 flex flex-col gap-4 text-[0.95rem] leading-relaxed text-smoke-dark">
                  {[
                    "Le respondemos por WhatsApp el mismo día hábil.",
                    "Si hace falta, vamos a medir sin costo.",
                    "Le pasamos el precio en firme y el tiempo de entrega.",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="font-display text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-smoke-line pt-6">
                <h2 className="overline text-accent-deep">Prefiere hablar</h2>
                <ul className="mt-5 flex flex-col gap-2.5 text-[0.95rem] text-ink">
                  <li>
                    <a
                      href={site.contact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      WhatsApp {site.contact.whatsappDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={site.contact.phoneHref} className="link-underline">
                      {site.contact.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={site.contact.emailHref} className="link-underline">
                      {site.contact.email}
                    </a>
                  </li>
                </ul>
                <p className="mt-5 text-[0.8rem] leading-relaxed text-smoke-dark">{site.hours}</p>
              </div>

              <div className="border-t border-smoke-line pt-6">
                <h2 className="overline text-accent-deep">El taller</h2>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-smoke-dark">
                  {site.location.line1}
                  <br />
                  {site.location.line2}
                </p>
                <a
                  href={site.location.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-4 inline-block text-[0.78rem] uppercase tracking-[0.1em] text-accent-deep"
                >
                  Ver en el mapa
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
