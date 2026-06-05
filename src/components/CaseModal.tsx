"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Case, CaseImage } from "@/data/cases";
import BrowserFrame from "./BrowserFrame";
import PhoneFrame from "./PhoneFrame";
import Lightbox from "./Lightbox";

function isMobileShot(img: CaseImage) {
  return img.height > img.width;
}

type Props = {
  case_: Case | null;
  onClose: () => void;
};

export default function CaseModal({ case_, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const isOpen = case_ !== null;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!case_ || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-bg-dark)]/70 backdrop-blur-sm p-4 sm:p-8 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl outline-none my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          aria-label="Fermer la fiche détaillée"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-bg-dark)] hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3L13 13M13 3L3 13" strokeLinecap="round" />
          </svg>
        </button>

        {/* Cover image */}
        {case_.cover && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg-soft)] rounded-t-xl">
            <Image
              src={case_.cover.src}
              alt={case_.cover.alt}
              width={case_.cover.width}
              height={case_.cover.height}
              className="object-cover object-top w-full h-full"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        )}

        <div className="p-7 sm:p-10">
          {/* Header */}
          <p className="text-xs text-[var(--color-text-meta)] uppercase tracking-wider font-medium">
            {case_.context} · {case_.period}
          </p>
          <h2
            id="case-modal-title"
            className="mt-2 text-2xl sm:text-3xl font-bold text-[var(--color-bg-dark)] tracking-tight"
          >
            {case_.title}
          </h2>
          <p className="mt-2 text-[var(--color-text-muted)]">{case_.subtitle}</p>

          {case_.url && (
            <a
              href={case_.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan-dark)] hover:underline"
            >
              Voir le projet en ligne
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}

          {/* Description */}
          <div className="mt-7 border-t border-[var(--color-border)] pt-6">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-meta)] mb-3">
              Contexte
            </h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed">{case_.description}</p>
          </div>

          {/* Réalisations */}
          <div className="mt-7">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-meta)] mb-3">
              Ce qui a été réalisé
            </h3>
            <ul className="space-y-2">
              {case_.realized.map((item) => (
                <li
                  key={item}
                  className="flex items-start text-sm text-[var(--color-text-muted)] leading-relaxed"
                >
                  <span className="text-[var(--color-cyan-dark)] mr-2.5 mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Résultat */}
          {case_.result && (
            <div className="mt-7 bg-[var(--color-bg-soft)] border-l-4 border-[var(--color-cyan)] p-5 rounded-r">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-meta)] mb-2">
                Résultat
              </h3>
              <p className="text-sm text-[var(--color-text-default)] leading-relaxed">
                {case_.result}
              </p>
            </div>
          )}

          {/* Stack */}
          <div className="mt-7">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-meta)] mb-3">
              Stack technique
            </h3>
            <div className="flex flex-wrap gap-2">
              {case_.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-[var(--color-bg-dark)] bg-[var(--color-bg-soft)] border border-[var(--color-border)] px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Recommandation */}
          {case_.recommendation && (
            <div className="mt-7 bg-white border-2 border-[var(--color-cyan)]/30 rounded-lg p-6 relative">
              <span
                aria-hidden
                className="absolute top-2 right-5 text-5xl font-serif text-[var(--color-cyan)]/20 leading-none select-none"
              >
                &ldquo;
              </span>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ background: "var(--color-cyan-dark)" }}
                  aria-hidden
                >
                  {case_.recommendation.author
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[var(--color-bg-dark)]">
                    {case_.recommendation.author}
                  </p>
                  <p className="text-xs text-[var(--color-text-meta)]">
                    {case_.recommendation.role}
                  </p>
                </div>
              </div>
              <blockquote className="text-sm italic text-[var(--color-text-muted)] leading-relaxed">
                {case_.recommendation.quote}
              </blockquote>
              <p className="mt-3 text-xs text-[var(--color-text-meta)]">
                Recommandation Malt — {case_.recommendation.date}
              </p>
            </div>
          )}

          {/* Gallery (en bas — pour ne pas alourdir le haut) */}
          {case_.gallery && case_.gallery.length > 1 && (
            <div className="mt-8">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-meta)] mb-4">
                Captures{" "}
                <span className="ml-2 text-[var(--color-text-meta)]/60 normal-case tracking-normal">
                  · clic pour agrandir
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {case_.gallery.map((img, idx) => {
                  const sharedButtonClasses =
                    "block group cursor-zoom-in transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] focus:ring-offset-2 rounded";
                  return isMobileShot(img) ? (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      aria-label={`Agrandir : ${img.alt}`}
                      className={`${sharedButtonClasses} flex justify-center`}
                    >
                      <PhoneFrame className="max-w-[200px]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          className="w-full h-auto"
                          sizes="200px"
                        />
                      </PhoneFrame>
                    </button>
                  ) : (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      aria-label={`Agrandir : ${img.alt}`}
                      className={sharedButtonClasses}
                    >
                      <BrowserFrame url={case_.url?.replace(/^https?:\/\//, "") || "cmm-development.fr"}>
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-bg-soft)]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            className="object-cover object-top w-full h-full"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      </BrowserFrame>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA fin de modale */}
          <div className="mt-9 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[var(--color-text-muted)]">
              Un projet similaire ?
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center px-5 py-2.5 rounded-md bg-[var(--color-cyan-dark)] text-white text-sm font-semibold hover:bg-[var(--color-cyan)] transition-colors"
            >
              Discutons →
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox pour la gallery */}
      {case_.gallery && case_.gallery.length > 0 && (
        <Lightbox
          images={case_.gallery}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </div>,
    document.body,
  );
}
