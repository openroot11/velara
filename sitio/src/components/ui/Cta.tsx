import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { scrollToId } from "@/components/system/SmoothScroll";
import { cn } from "@/lib/cn";

type Variant = "solid" | "teal" | "outline-dark" | "outline-light";

const variantClass: Record<Variant, string> = {
  solid: "btn btn-solid",
  teal: "btn btn-teal",
  "outline-dark": "btn btn-outline-dark",
  "outline-light": "btn btn-outline-light",
};

function Arrow() {
  return (
    <svg width="20" height="8" viewBox="0 0 20 8" fill="none" aria-hidden>
      <path
        d="M0 4h18M15 1l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

interface CtaProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  /** In-page anchor target, e.g. "#contacto". */
  to?: string;
  /** Router link path, e.g. "/proyectos/...". */
  href?: string;
  /** External URL. */
  external?: string;
  onClick?: () => void;
}

export function Cta({
  children,
  variant = "solid",
  className,
  withArrow = true,
  to,
  href,
  external,
  onClick,
}: CtaProps) {
  const cls = cn(variantClass[variant], className);
  const inner = (
    <>
      <span>{children}</span>
      {withArrow && <Arrow />}
    </>
  );

  if (to) {
    return (
      <a
        href={to}
        className={cls}
        onClick={(e) => {
          e.preventDefault();
          scrollToId(to);
          onClick?.();
        }}
      >
        {inner}
      </a>
    );
  }
  if (external) {
    return (
      <a href={external} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  if (href) {
    return (
      <Link to={href} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
