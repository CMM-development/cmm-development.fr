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
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="CMM Development — Accueil"
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
          className="hidden sm:inline-flex px-4 py-2 rounded-md bg-[var(--color-cyan-dark)] text-white text-sm font-semibold hover:bg-[var(--color-cyan)] transition-colors"
        >
          Discutons
        </a>
      </div>
    </header>
  );
}
