import type { ReactNode } from "react";

type Props = {
  url?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Habille un contenu (typiquement <Image>) avec un cadre de navigateur macOS-like.
 * 3 dots, barre URL fictive, ombre douce. Utile pour valoriser un screenshot web.
 */
export default function BrowserFrame({
  url = "cmm-development.fr",
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-lg overflow-hidden bg-white border border-[var(--color-border)] shadow-[0_24px_60px_-20px_rgba(10,14,39,0.25),0_8px_20px_-8px_rgba(10,14,39,0.15)] ${className}`}
    >
      {/* Barre top du navigateur */}
      <div className="h-8 bg-gradient-to-b from-[#f4f6f9] to-[#e2e8f0] border-b border-[var(--color-border)] flex items-center px-3 gap-1.5 relative">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57] shrink-0" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e] shrink-0" />
        <span className="w-3 h-3 rounded-full bg-[#28c840] shrink-0" />
        <div className="absolute left-1/2 -translate-x-1/2 max-w-[60%] truncate bg-white border border-[var(--color-border)] rounded px-3 py-0.5 text-[10px] font-mono text-[var(--color-text-meta)] whitespace-nowrap">
          {url}
        </div>
      </div>
      {/* Contenu */}
      <div className="bg-white">{children}</div>
    </div>
  );
}
