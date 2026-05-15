import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Habille un contenu mobile dans un cadre type iPhone (encoche, bordure arrondie).
 * Utile pour montrer un screenshot d'app mobile avec un rendu plus pro.
 */
export default function PhoneFrame({ children, className = "" }: Props) {
  return (
    <div
      className={`relative inline-block rounded-[36px] bg-[var(--color-bg-dark)] p-2.5 shadow-[0_24px_60px_-20px_rgba(10,14,39,0.4)] ${className}`}
    >
      {/* Encoche */}
      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-[var(--color-bg-dark)] rounded-xl z-10" />
      {/* Écran */}
      <div className="rounded-[28px] overflow-hidden bg-white">{children}</div>
    </div>
  );
}
