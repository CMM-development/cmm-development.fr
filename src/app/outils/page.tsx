import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Outils & démos",
  description:
    "Outils interactifs et démonstrations CMM Development : calculateur de ROI d'automatisation et démos d'applications métier sur mesure.",
  alternates: { canonical: "https://cmm-development.fr/outils" },
};

interface ToolCard {
  title: string;
  description: string;
  emoji: string;
  href: string;
  external?: boolean;
  status?: "live" | "soon";
}

// Vitrine unifiée. Outils légers = routes internes ; démos lourdes = liens externes (sous-domaines).
const TOOLS: ToolCard[] = [
  {
    title: "Calculateur de ROI",
    description:
      "Estimez le temps et l'argent qu'une automatisation vous fait gagner, et son délai de rentabilité.",
    emoji: "📊",
    href: "/outils/calculateur-roi",
    status: "live",
  },
];

export default function OutilsPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[var(--color-cyan-dark)] uppercase tracking-widest text-xs font-semibold mb-3">
            Outils &amp; démos
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-bg-dark)] tracking-tight">
            Outils interactifs &amp; démonstrations
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--color-text-muted)] leading-relaxed">
            Des outils concrets pour évaluer le potentiel d&apos;automatisation de votre activité, et
            des démos d&apos;applications métier sur mesure.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {TOOLS.map((tool) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between">
                    <span className="text-3xl" aria-hidden>
                      {tool.emoji}
                    </span>
                    {tool.status === "soon" && (
                      <span className="rounded-full bg-[var(--color-bg-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-meta)]">
                        Bientôt
                      </span>
                    )}
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-[var(--color-bg-dark)]">{tool.title}</h2>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {tool.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-cyan-dark)]">
                    Ouvrir l&apos;outil →
                  </span>
                </>
              );

              const cardClass =
                "group block rounded-2xl border border-[var(--color-border)] bg-white p-6 transition hover:border-[var(--color-cyan-dark)] hover:shadow-[0_12px_40px_-16px_rgba(10,14,39,0.25)]";

              return tool.external ? (
                <a key={tool.href} href={tool.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {inner}
                </a>
              ) : (
                <Link key={tool.href} href={tool.href} className={cardClass}>
                  {inner}
                </Link>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
            <Link href="/" className="text-sm font-medium text-[var(--color-cyan-dark)] hover:underline">
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
