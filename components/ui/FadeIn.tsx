"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
  style?: React.CSSProperties;
}

export default function FadeIn({ children, delay = 0, duration = 0.6, direction = "up", className = "", once = true, style }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const offsets = { up: { y: 36, x: 0 }, down: { y: -36, x: 0 }, left: { x: 36, y: 0 }, right: { x: -36, y: 0 }, none: { x: 0, y: 0 } };
  const variants: Variants = {
    hidden: { opacity: 0, ...offsets[direction] },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration, delay, ease: "circOut" } },
  };
  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? "visible" : "hidden"} className={className} style={style}>
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.09, once = true, style }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"}
      variants={{ hidden: {}, show: { transition: { staggerChildren: staggerDelay, delayChildren: 0.05 } } }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "circOut" } } }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}
