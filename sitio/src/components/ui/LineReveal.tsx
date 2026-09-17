import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface LineRevealProps {
  /** Each string is rendered on its own overflow-hidden line. */
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
  /** Lower the in-view threshold so above-the-fold headlines fire on paint. */
  immediate?: boolean;
  as?: "h1" | "h2" | "p" | "div";
}

/**
 * Reveals a headline line by line: each line sits in an overflow-hidden mask
 * and rises into place. The mask element (never transformed) carries the
 * in-view trigger, so the observer isn't fooled by the clipped inner text.
 */
export function LineReveal({
  lines,
  className,
  delay = 0,
  stagger = 0.12,
  immediate = false,
  as = "h2",
}: LineRevealProps) {
  const reduced = usePrefersReducedMotion();
  const Tag = as;

  if (reduced) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <Fragment key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </Fragment>
        ))}
      </Tag>
    );
  }

  const inner: Variants = {
    hidden: { y: "115%" },
    visible: (i: number) => ({
      y: "0%",
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
        delay: delay + i * stagger,
      },
    }),
  };

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="block overflow-hidden pb-[0.06em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: immediate ? 0 : 0.5 }}
        >
          <motion.span custom={i} variants={inner} className="block will-change-transform">
            {line}
          </motion.span>
        </motion.span>
      ))}
      <span className="sr-only">{lines.join(" ")}</span>
    </Tag>
  );
}
