import { type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  /** Etiqueta corta en mayúsculas sobre el título (opcional). */
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  /** `dark` = texto oscuro sobre claro (por defecto). `light` = texto claro sobre tinta. */
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
}

/**
 * Encabezado de sección al estilo de la referencia: título serif y un filete
 * corto en color acento debajo. Centrado por defecto.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
  as = "h2",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const Tag = as;
  const centered = align === "center";
  const muted = tone === "dark" ? "text-smoke-dark" : "text-white/70";
  const heading = tone === "dark" ? "text-ink" : "text-white";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal from="up" distance={14}>
          <span className={cn("overline", tone === "dark" ? "text-accent-deep" : "text-accent-soft")}>
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal from="up" distance={22} delay={0.04}>
        <Tag className={cn("font-display text-display-md", heading, titleClassName)}>
          {title}
        </Tag>
      </Reveal>

      <Reveal from="up" distance={16} delay={0.08}>
        <span className={cn("rule-under", centered && "mx-auto")} />
      </Reveal>

      {intro && (
        <Reveal from="up" distance={16} delay={0.12}>
          <p
            className={cn(
              "max-w-prose2 text-pretty text-base leading-relaxed sm:text-[1.05rem]",
              muted,
              centered && "mx-auto",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
