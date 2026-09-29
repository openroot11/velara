import { site } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * Isotipo oficial VELARA (identidad visual v1.0). Los archivos viven en
 * `public/brand/`; no se redibuja ni se escribe el logotipo con tipografía.
 */
export function VelaraMark({
  size = 30,
  className,
  tone = "dark",
}: {
  size?: number;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <img
      src={`/brand/isotipo-${tone === "light" ? "negativo" : "positivo"}.svg`}
      width={size * (322.6 / 105)}
      height={size}
      alt=""
      aria-hidden
      className={cn("shrink-0", className)}
    />
  );
}

interface LogoProps {
  className?: string;
  /** En superficies oscuras (el encabezado, el pie) use "light". */
  tone?: "light" | "dark";
  /** Versión reducida para el encabezado condensado. */
  compact?: boolean;
}

export function Logo({ className, tone = "dark", compact = false }: LogoProps) {
  const variant = tone === "light" ? "negativo" : "positivo";
  return (
    <img
      src={`/brand/logo-${variant}.svg`}
      alt={site.name}
      height={compact ? 20 : 26}
      className={cn("block w-auto", compact ? "h-5" : "h-[26px]", className)}
    />
  );
}
