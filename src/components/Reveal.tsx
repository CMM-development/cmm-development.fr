"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

/**
 * Animation de révélation au scroll : opacity + translate.
 * Utilise IntersectionObserver natif (zéro dépendance).
 * Réduit les distractions pour les utilisateurs avec prefers-reduced-motion.
 */
export default function Reveal({ children, delay = 0, as = "div", className = "" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect du preference système (accessibilité)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";
  const style = {
    transitionDelay: visible ? `${delay}ms` : "0ms",
  };
  const classes = `${className} transition-all duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={classes} style={style}>
      {children}
    </Tag>
  );
}
