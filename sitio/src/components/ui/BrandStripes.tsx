import { cn } from "@/lib/cn";

/**
 * Franjas de marca a 47,4° (manual VELARA, sistema gráfico). Decorativas:
 * siempre salen del borde de la pieza, nunca flotan.
 */
export function BrandStripes({ className }: { className?: string }) {
  return (
    <img
      src="/brand/VELARA_franjas-de-marca.svg"
      alt=""
      aria-hidden
      draggable={false}
      className={cn(
        "pointer-events-none absolute right-0 top-0 hidden w-[min(34vw,440px)] select-none sm:block",
        className,
      )}
    />
  );
}
