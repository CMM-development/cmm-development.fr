import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculateurRoi from "@/components/CalculateurRoi";

export const metadata: Metadata = {
  title: "Calculateur de ROI — Automatisation",
  description:
    "Estimez en quelques secondes le retour sur investissement d'une automatisation : temps récupéré, économie annuelle et délai de rentabilité. Calcul instantané, aucune donnée transmise.",
  alternates: { canonical: "https://cmm-development.fr/outils/calculateur-roi" },
};

export default function CalculateurRoiPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[var(--color-cyan-dark)] uppercase tracking-widest text-xs font-semibold mb-3">
            Outils &amp; démos
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-bg-dark)] tracking-tight">
            Calculateur de ROI — Automatisation
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--color-text-muted)] leading-relaxed">
            Combien vous coûte une tâche répétitive aujourd&apos;hui, et en combien de temps une
            automatisation sur mesure se rembourse ? Renseignez vos chiffres, le calcul est instantané.
          </p>

          <div className="mt-10">
            <CalculateurRoi />
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
            <Link href="/outils" className="text-sm font-medium text-[var(--color-cyan-dark)] hover:underline">
              ← Tous les outils &amp; démos
            </Link>
            <a
              href="/#contact"
              className="inline-flex px-4 py-2 rounded-md bg-[var(--color-cyan-dark)] text-white text-sm font-semibold hover:bg-[var(--color-cyan)] transition-colors"
            >
              Discutons de votre cas
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
