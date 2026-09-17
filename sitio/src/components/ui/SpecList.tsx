import { cn } from "@/lib/cn";

/** Ficha técnica con filas alternas — estilo de la referencia. */
export function SpecList({
  items,
  className,
}: {
  items: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={cn("overflow-hidden border border-smoke-line", className)}>
      {items.map((it, i) => (
        <div
          key={it.label}
          className={cn(
            "flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6",
            i % 2 === 0 ? "bg-paper-50" : "bg-paper",
          )}
        >
          <dt className="text-[0.8rem] uppercase tracking-[0.08em] text-smoke">{it.label}</dt>
          <dd className="text-[0.95rem] text-ink sm:max-w-[62%] sm:text-right">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
