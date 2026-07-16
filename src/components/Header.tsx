"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/#about", label: "À propos" },
  { href: "/#cases", label: "Réalisations" },
  { href: "/#method", label: "Méthode" },
  { href: "/outils", label: "Outils & démos" },
  { href: "/#recommendations", label: "Recommandations" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="CMM Development — Accueil"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-cmm-icon.png"
            alt=""
            width={212}
            height={298}
            priority
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-bold text-lg text-[var(--color-bg-dark)] tracking-tight hidden sm:inline">
            CMM<span className="text-[var(--color-cyan-dark)]">.</span>Development
          </span>
        </Link>
        <nav className="hidden md:flex gap-7 text-sm font-medium text-[var(--color-text-muted)]">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[var(--color-cyan-dark)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/#contact"
          className="hidden md:inline-flex px-4 py-2 rounded-md bg-[var(--color-cyan-dark)] text-white text-sm font-semibold hover:bg-[var(--color-cyan)] transition-colors"
        >
          Discutons
        </a>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-[var(--color-bg-dark)] hover:text-[var(--color-cyan-dark)] transition-colors"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-[var(--color-border)] bg-white px-6 py-4 flex flex-col gap-1"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-cyan-dark)] transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="mt-3 inline-flex justify-center px-4 py-2.5 rounded-md bg-[var(--color-cyan-dark)] text-white text-sm font-semibold hover:bg-[var(--color-cyan)] transition-colors"
            onClick={() => setOpen(false)}
          >
            Discutons
          </a>
        </nav>
      )}
    </header>
  );
}
