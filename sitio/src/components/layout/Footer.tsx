import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { materialFamilies } from "@/data/materials";
import { Cta } from "@/components/ui/Cta";

const taller = [
  { label: "El taller", to: "/nosotros" },
  { label: "El proceso", to: "/proceso" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Recursos", to: "/recursos" },
  { label: "Contacto", to: "/contacto" },
];

function Column({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div className="flex flex-col gap-3.5">
      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/45">{title}</h3>
      <ul className="flex flex-col gap-2.5 text-[0.92rem] text-white/70">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="link-underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative bg-ink-900 text-white">
      {/* --- Franja de llamada a la acción --- */}
      <div className="bg-accent">
        <div className="shell flex flex-col items-start gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-pretty font-display text-2xl font-bold leading-snug text-white sm:text-[1.7rem]">
            Cuéntenos qué hay que cubrir y le pasamos precio el mismo día hábil.
          </p>
          <Cta href={site.cta.href} variant="outline-light" className="shrink-0">
            {site.cta.label}
          </Cta>
        </div>
      </div>

      {/* --- Columnas --- */}
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-20">
        <div className="flex flex-col gap-5">
          <img src="/brand/logo-eslogan-negativo.svg" alt={site.name} className="block h-[42px] w-auto self-start" />
          <p className="max-w-xs text-[0.92rem] leading-relaxed text-white/60">{site.tagline}</p>
          <a
            href={site.location.mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline w-fit text-[0.9rem] text-white/70"
          >
            {site.location.line1}
            <br />
            {site.location.line2}
          </a>
        </div>

        <Column
          title="Servicios"
          links={services.map((s) => ({ label: s.menuLabel, to: `/servicios/${s.slug}` }))}
        />
        <Column
          title="Materiales"
          links={[
            { label: "Ver catálogo", to: "/materiales" },
            ...materialFamilies.map((f) => ({ label: f.label, to: `/materiales?familia=${f.slug}` })),
          ]}
        />
        <Column title="El taller" links={taller} />
      </div>

      {/* --- Boletín --- */}
      <div className="shell border-t border-white/10 py-12">
        <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <h3 className="font-display text-xl text-white">{site.newsletter.title}</h3>
            <p className="mt-2 max-w-md text-[0.9rem] leading-relaxed text-white/60">
              {site.newsletter.blurb}
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const to = site.contact.email;
              window.location.href = `mailto:${to}?subject=${encodeURIComponent(
                "Suscripción al boletín",
              )}&body=${encodeURIComponent(`Quiero recibir el boletín en: ${email}`)}`;
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={site.newsletter.placeholder}
              aria-label="Su correo"
              className="w-full border border-white/20 bg-white/5 px-4 py-3 text-[0.92rem] text-white outline-none transition-colors placeholder:text-white/35 focus:border-accent-soft"
            />
            <button
              type="submit"
              className="btn shrink-0 bg-white text-ink hover:bg-white/90"
            >
              {site.newsletter.action}
            </button>
          </form>
        </div>
      </div>

      {/* --- Barra legal --- */}
      <div className="shell flex flex-col gap-4 border-t border-white/10 py-7 text-[0.78rem] text-white/50 lg:flex-row lg:items-center lg:justify-between">
        <span>
          © {new Date().getFullYear()} {site.legalName}
        </span>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {site.legal.map((l) => (
            <Link key={l.href + l.label} to={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {site.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
