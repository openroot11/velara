import { useRef, useState } from "react";
import Figure from "./Figure";
import { images, type ImageKey } from "@/data/images";
import { cn } from "@/lib/cn";

interface HoverSwapProps {
  /** Foto visible por defecto (el equipo con su forro). */
  image: ImageKey;
  /** Foto que aparece al pasar el mouse o al tocar (el equipo sin forro). */
  hoverImage: ImageKey;
  /** Etiqueta de cada estado: [normal, al pasar el mouse]. */
  labels?: [string, string];
  className?: string;
  sizes?: string;
}

/**
 * Dos fotos superpuestas con fundido cruzado: con el mouse encima (o al tocar
 * en el celular) se ve la segunda. Muestra «con forro / sin forro».
 */
export function HoverSwap({ image, hoverImage, labels = ["Con forro", "Sin forro"], className, sizes }: HoverSwapProps) {
  const [active, setActive] = useState(false);
  // El toque en celular también dispara «mouse encima»: solo el mouse real usa hover.
  const pointer = useRef<string>("");
  const alt = images[hoverImage];

  return (
    <button
      type="button"
      onPointerDown={(e) => (pointer.current = e.pointerType)}
      onPointerEnter={(e) => e.pointerType === "mouse" && setActive(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setActive(false)}
      onClick={() => {
        if (pointer.current !== "mouse") setActive((v) => !v);
        pointer.current = "";
      }}
      aria-pressed={active}
      aria-label={`Ver: ${active ? labels[0] : labels[1]}`}
      className={cn("group relative block h-full w-full cursor-pointer overflow-hidden text-left", className)}
    >
      <Figure image={image} className="h-full w-full" sizes={sizes} />
      <img
        src={alt.src}
        alt={alt.alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        style={{ objectPosition: alt.position ?? "center" }}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-soft",
          active ? "opacity-100" : "opacity-0",
        )}
      />
      <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 bg-ink/80 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white">
        <span className={cn("h-1.5 w-1.5 rounded-full", active ? "bg-white" : "bg-accent")} aria-hidden />
        {active ? labels[1] : labels[0]}
        <span className="font-normal normal-case tracking-normal text-white/60">
          · <span className="hidden md:inline">pase el mouse</span>
          <span className="md:hidden">toque la foto</span>
        </span>
      </span>
    </button>
  );
}
