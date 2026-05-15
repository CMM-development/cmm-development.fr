"use client";

import { useEffect, useState } from "react";

/**
 * Barre de progression de scroll en haut de page.
 * Fine, cyan, fixed. Donne un repère visuel de la position dans la page.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      const ratio = window.scrollY / scrollable;
      setProgress(Math.min(1, Math.max(0, ratio)));
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 z-50 pointer-events-none"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-r from-[var(--color-cyan-dark)] to-[var(--color-cyan)] transition-[width] duration-100 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
