"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Revenir en haut de la page"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[var(--color-cyan-dark)] hover:bg-[var(--color-cyan)] text-white shadow-lg shadow-[var(--color-bg-dark)]/20 flex items-center justify-center transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 10L8 5L13 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
