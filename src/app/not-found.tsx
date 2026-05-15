import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-[var(--color-cyan-dark)] uppercase tracking-widest text-xs font-semibold mb-3">
            Erreur 404
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-bg-dark)] tracking-tight">
            Page introuvable.
          </h1>
          <p className="mt-6 text-[var(--color-text-muted)] leading-relaxed">
            L&apos;URL que vous cherchez n&apos;existe pas ou plus. Ça arrive — un lien obsolète,
            une faute de frappe, une page déplacée.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-md bg-[var(--color-cyan-dark)] text-white font-semibold hover:bg-[var(--color-cyan)] transition-colors"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 rounded-md border border-[var(--color-border)] text-[var(--color-bg-dark)] font-semibold hover:bg-[var(--color-bg-soft)] transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
