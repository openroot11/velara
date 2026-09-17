import { Link } from "react-router-dom";
import Figure from "./Figure";
import { type ImageKey } from "@/data/images";
import { cn } from "@/lib/cn";

function ArrowRight() {
  return (
    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden className="transition-transform duration-300 ease-soft group-hover:translate-x-1">
      <path d="M0 4h16M13 1l3 3-3 3" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

interface TileProps {
  to: string;
  image?: ImageKey;
  eyebrow?: string;
  title: string;
  text?: string;
  cta?: string;
  aspect?: string;
  className?: string;
}

/**
 * Tarjeta reutilizable: imagen arriba, título serif, texto gris y enlace con
 * flecha. Se usa en la portada, en los índices y en «relacionados».
 */
export function Tile({
  to,
  image,
  eyebrow,
  title,
  text,
  cta = "Ver más",
  aspect = "aspect-[4/3]",
  className,
}: TileProps) {
  return (
    <Link
      to={to}
      className={cn(
        "group flex flex-col overflow-hidden border border-smoke-line bg-paper transition-all duration-400 ease-soft hover:-translate-y-1 hover:border-smoke-light hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      {image && (
        <div className={cn("relative w-full overflow-hidden", aspect)}>
          <Figure
            image={image}
            className="h-full w-full"
            imgClassName="transition-transform duration-[1100ms] ease-soft group-hover:scale-[1.05]"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        {eyebrow && <span className="overline text-accent-deep">{eyebrow}</span>}
        <h3 className="font-display text-xl text-ink sm:text-[1.35rem]">{title}</h3>
        {text && <p className="text-pretty text-[0.92rem] leading-relaxed text-smoke-dark">{text}</p>}
        <span className="mt-auto flex items-center gap-3 pt-2 text-[0.8rem] font-semibold text-ink">
          {cta}
          <ArrowRight />
        </span>
      </div>
    </Link>
  );
}
