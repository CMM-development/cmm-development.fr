"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import type { CaseImage } from "@/data/cases";

type Props = {
  images: CaseImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export default function Lightbox({ images, activeIndex, onClose, onChange }: Props) {
  const isOpen = activeIndex !== null;
  const current = isOpen ? images[activeIndex] : null;

  const prev = useCallback(() => {
    if (activeIndex === null) return;
    onChange((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onChange]);

  const next = useCallback(() => {
    if (activeIndex === null) return;
    onChange((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onChange]);

  useEffect(() => {
    if (!isOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, prev, next]);

  if (!current || activeIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualisation plein écran"
    >
      {/* Bouton fermer */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Fermer la visualisation"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3L13 13M13 3L3 13" strokeLinecap="round" />
        </svg>
      </button>

      {/* Navigation prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Image précédente"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 3L4 8L10 13" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          width={current.width}
          height={current.height}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded shadow-2xl"
          priority
        />
      </div>

      {/* Navigation next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Image suivante"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 3L12 8L6 13" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Caption + compteur */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white text-xs">
        <p className="bg-black/40 backdrop-blur rounded px-3 py-1.5 inline-block max-w-[80vw]">
          {current.alt}
          {images.length > 1 && (
            <span className="ml-3 opacity-60">
              {activeIndex + 1} / {images.length}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
