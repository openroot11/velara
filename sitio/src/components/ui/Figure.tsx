import { useState } from "react";
import { motion } from "framer-motion";
import { images, srcSetFor, type ImageKey } from "@/data/images";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";

interface FigureProps {
  image: ImageKey;
  className?: string;
  /** Clases extra para el <img>. */
  imgClassName?: string;
  /** Carga con prioridad (imágenes sobre el pliegue). */
  priority?: boolean;
  /** Superficie sobre la que va — sólo afecta el color del esqueleto. */
  tone?: "light" | "dark";
  sizes?: string;
  rounded?: boolean;
}

/**
 * Imagen con carga diferida y una aparición sobria: entra con un ligero
 * fundido y un descanso de escala. Sin cortina ni efectos aparatosos, en
 * línea con la referencia.
 */
export default function Figure({
  image,
  className,
  imgClassName,
  priority = false,
  tone = "light",
  sizes = "100vw",
  rounded = false,
}: FigureProps) {
  const asset = images[image];
  const srcSet = srcSetFor(asset.src);
  const reduced = usePrefersReducedMotion();
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        tone === "dark" ? "bg-ink-800" : "bg-paper-200",
        rounded && "rounded-[3px]",
        className,
      )}
    >
      <motion.img
        src={asset.src}
        srcSet={srcSet}
        alt={asset.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        draggable={false}
        className={cn("h-full w-full object-cover drag-none", imgClassName)}
        style={{ objectPosition: asset.position ?? "center" }}
        initial={reduced ? false : { opacity: 0, scale: 1.04 }}
        animate={
          reduced
            ? undefined
            : { opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.04 }
        }
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-700",
          tone === "dark" ? "bg-ink-800" : "bg-paper-200",
          loaded ? "opacity-0" : "opacity-100",
        )}
      />
    </div>
  );
}
