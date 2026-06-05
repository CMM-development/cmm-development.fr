"use client";

import Image from "next/image";
import { useState } from "react";
import { CASES, type Case } from "@/data/cases";
import CaseModal from "./CaseModal";

export default function CaseGrid() {
  const [activeCase, setActiveCase] = useState<Case | null>(null);

  return (
    <section id="cases" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[var(--color-cyan-dark)] uppercase tracking-widest text-xs font-semibold mb-3">
          Réalisations
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-bg-dark)] tracking-tight max-w-2xl">
          Des projets qui résument 15 ans.
        </h2>
        <p className="mt-4 text-[var(--color-text-muted)] max-w-2xl">
          Missions freelance récentes et expériences longues — du dev from scratch au logiciel
          métier en production de longue durée. Clique sur un cas pour voir le détail complet.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActiveCase(c)}
              className={`group relative overflow-hidden rounded-lg border bg-white transition-all hover:shadow-lg hover:-translate-y-0.5 text-left ${
                c.highlighted
                  ? "border-[var(--color-cyan)]/40"
                  : "border-[var(--color-border)]"
              }`}
              aria-label={`Voir le détail du projet ${c.title}`}
            >
              {c.cover && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg-soft)] border-b border-[var(--color-border)]">
                  <Image
                    src={c.cover.src}
                    alt={c.cover.alt}
                    width={c.cover.width}
                    height={c.cover.height}
                    className="object-cover object-top w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {c.highlighted && (
                    <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-bold text-white bg-[var(--color-cyan-dark)]/90 backdrop-blur px-2 py-0.5 rounded">
                      Mis en avant
                    </span>
                  )}
                </div>
              )}

              <div className="p-7 w-full">
                {!c.cover && c.highlighted && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-bold text-[var(--color-cyan-dark)] bg-[var(--color-cyan-soft)] px-2 py-0.5 rounded">
                    Mis en avant
                  </span>
                )}
                <p className="text-xs text-[var(--color-text-meta)] uppercase tracking-wider font-medium">
                  {c.context} · {c.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[var(--color-bg-dark)] group-hover:text-[var(--color-cyan-dark)] transition-colors">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {c.subtitle}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[var(--color-text-meta)] bg-[var(--color-bg-soft)] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--color-border)] text-xs font-medium text-[var(--color-cyan-dark)] flex items-center gap-1">
                  Voir le détail
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <CaseModal case_={activeCase} onClose={() => setActiveCase(null)} />
    </section>
  );
}
