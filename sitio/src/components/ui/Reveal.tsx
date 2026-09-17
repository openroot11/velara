import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = (from: Direction, d: number) => {
  switch (from) {
    case "up":
      return { y: d };
    case "down":
      return { y: -d };
    case "left":
      return { x: d };
    case "right":
      return { x: -d };
    default:
      return {};
  }
};

const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  from?: Direction;
  delay?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  duration?: number;
}

/** Fade + gentle travel as the element scrolls into view. */
export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  distance = 34,
  once = true,
  amount = 0.3,
  duration = 0.9,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset(from, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: EASE }}
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers <RevealItem> children into view. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  from = "up",
  distance = 28,
  duration = 0.8,
}: {
  children: ReactNode;
  className?: string;
  from?: Direction;
  distance?: number;
  duration?: number;
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  const variants: Variants = {
    hidden: { opacity: 0, ...offset(from, distance) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: EASE },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
