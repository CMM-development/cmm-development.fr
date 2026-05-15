import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-[var(--color-text-meta)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <Image
            src="/logo-cmm-icon.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-auto object-contain shrink-0"
          />
          <div>
            <p className="font-bold text-[var(--color-bg-dark)]">
              CMM<span className="text-[var(--color-cyan-dark)]">.</span>Development
            </p>
            <p className="mt-1 text-xs">
              Cédric Muller — Micro-entreprise · SIRET 79519051100027 · APE 6201Z
            </p>
            <p className="mt-1 text-xs">
              Auzouville-sur-Ry (76116) · Télétravail uniquement
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-xs">
          <a href="#about" className="hover:text-[var(--color-cyan-dark)] transition-colors">
            À propos
          </a>
          <a href="#cases" className="hover:text-[var(--color-cyan-dark)] transition-colors">
            Réalisations
          </a>
          <a href="#contact" className="hover:text-[var(--color-cyan-dark)] transition-colors">
            Contact
          </a>
          <a
            href="/mentions-legales"
            className="hover:text-[var(--color-cyan-dark)] transition-colors"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
