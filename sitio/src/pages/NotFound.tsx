import { Link } from "react-router-dom";
import { mainNav } from "@/data/navigation";
import { usePageTitle } from "@/lib/hooks";

export default function NotFound() {
  usePageTitle("Página no encontrada");

  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center bg-paper px-6 pt-32 text-center">
      <span className="overline text-accent-deep">Error 404</span>
      <h1 className="mt-5 font-display text-display-md text-ink">Esta página no existe</h1>
      <span className="rule-under mx-auto mt-5" />
      <p className="mt-5 max-w-sm text-pretty text-smoke-dark">
        La dirección que busca se movió o nunca estuvo aquí. Estas son las secciones del sitio:
      </p>
      <nav className="mt-8 flex flex-wrap justify-center gap-2">
        {mainNav.map((item) => (
          <Link
            key={item.label}
            to={item.to ?? "/"}
            className="border border-smoke-line px-4 py-2 text-[0.85rem] text-ink-700 transition-colors hover:border-ink hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link to="/" className="btn btn-solid mt-10">
        Volver al inicio
      </Link>
    </section>
  );
}
