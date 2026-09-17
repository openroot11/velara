import { site } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * La marca VELARA: una cabeza felina de perfil, dibujada a trazo único.
 * Es una interpretación en SVG del arte original; si tiene el vector del
 * diseñador, reemplace los <path> aquí y en `public/favicon.svg`.
 */
export function VelaraMark({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const weight = size <= 26 ? 5 : size <= 40 ? 4.2 : 3.4;
  return (
    <svg
      width={size}
      height={size * (120 / 130)}
      viewBox="0 0 130 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <path d="M28 116 C20 92 22 58 42 38 C56 24 74 18 88 24 C97 28 103 36 105 45 C106 50 108 54 112 58 C108 62 103 62 98 61" />
      <path d="M98 61 C97 65 95 68 91 70 C86 72 79 71 74 68" />
      <path d="M74 68 C64 80 48 87 30 85" />
      <path d="M76 21 C71 14 71 6 75 4 C82 9 87 17 89 25" />
      <path d="M89 45 C93 43 97 44 99 47" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  /** En superficies oscuras (el encabezado, el pie) use "light". */
  tone?: "light" | "dark";
  /** Oculta el descriptor — para el encabezado condensado. */
  compact?: boolean;
}

export function Logo({ className, tone = "dark", compact = false }: LogoProps) {
  const ink = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/55" : "text-smoke";

  return (
    <span className={cn("flex items-center gap-3 leading-none", ink, className)}>
      <VelaraMark size={compact ? 24 : 30} />
      <span className="flex flex-col">
        <span className="font-display text-[1.05rem] font-normal uppercase tracking-[0.34em] -mr-[0.34em]">
          {site.name}
        </span>
        {!compact && (
          <span className={cn("mt-[0.4rem] text-[0.48rem] font-semibold uppercase tracking-[0.22em] -mr-[0.22em]", sub)}>
            {site.descriptor}
          </span>
        )}
      </span>
    </span>
  );
}
