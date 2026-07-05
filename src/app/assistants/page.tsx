import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ASSISTANTS, DOMAINS } from "@/data/assistants";

export const metadata: Metadata = {
  title: "Les assistants — automatisation IA sur mesure",
  description:
    "La flotte d'assistants IA que CMM Development construit pour vous : documents entrants, relances, devis, veille… Déployés en instance dédiée, tracés et souverains. Pas un SaaS partagé.",
  alternates: { canonical: "https://cmm-development.fr/assistants" },
};

const STATUS: Record<string, { label: string; cls: string }> = {
  live: { label: "Livré · pilote", cls: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10" },
  built: { label: "Disponible · démo", cls: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10" },
  build: { label: "Top 3 · en construction", cls: "text-amber-300 border-amber-400/30 bg-amber-400/10" },
  cat: { label: "Catalogue · sur devis", cls: "text-white/60 border-white/15 bg-white/5" },
};

const VALUES = ["Instance dédiée", "Journal d'audit tracé", "Validation humaine", "Souverain · EU"];

function Avatar({ src, alt, size = 72 }: { src: string; alt: string; size?: number }) {
  return (
    <Image
      src={src}
      alt={`Avatar de ${alt}`}
      width={size}
      height={size}
      className="flex-none rounded-full border border-[var(--color-cyan)]/30 object-cover"
      style={{ boxShadow: "0 6px 16px rgba(20,229,229,0.18)" }}
    />
  );
}

export default function AssistantsPage() {
  const flagship = ASSISTANTS.find((a) => a.flagship) ?? ASSISTANTS[0];
  const fleet = ASSISTANTS.filter((a) => !a.flagship);

  return (
    <>
      <Header />
      <main id="main" className="bg-[var(--color-bg-dark)] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, var(--color-cyan) 0%, transparent 50%), radial-gradient(ellipse at 0% 30%, var(--color-cyan-dark) 0%, transparent 50%)",
          }}
          aria-hidden
        />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          {/* Hero */}
          <p className="text-[var(--color-cyan)] uppercase tracking-widest text-xs font-semibold mb-3">
            CMM · Assistants IA
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl text-balance">
            Les assistants que je construis <span className="text-[var(--color-cyan)]">pour vous</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
            Chaque assistant est un collaborateur augmenté, déployé dans <strong className="text-white/90">votre
            instance dédiée</strong> — vos données chez vous, connecté à vos outils. Pas un abonnement à une
            plateforme partagée : <strong className="text-white/90">votre outil, votre intégration</strong>.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {VALUES.map((v) => (
              <li
                key={v}
                className="rounded-full border border-[var(--color-cyan)]/25 bg-[var(--color-cyan)]/5 px-3.5 py-1.5 text-xs text-white/90"
              >
                <span className="text-[var(--color-cyan)]">◆</span> {v}
              </li>
            ))}
          </ul>

          {/* Flagship */}
          <p className="mt-14 mb-4 text-xs uppercase tracking-widest text-white/40 font-semibold">
            Pilote livré — démonstration réelle
          </p>
          <div className="grid lg:grid-cols-2 rounded-2xl border border-white/15 overflow-hidden bg-[var(--color-bg-mid)]">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Avatar src={flagship.avatar} alt={flagship.name} size={76} />
                <div>
                  <h2 className="text-2xl font-bold">{flagship.name}</h2>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--color-cyan)] font-semibold">
                    Assistante · {flagship.role}
                  </p>
                  <span
                    className={`mt-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${STATUS.live.cls}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Livré · pilote en production
                  </span>
                </div>
              </div>
              <p className="mt-5 text-lg text-white/90 font-medium">{flagship.tagline}</p>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                Facture, devis, bon ou courrier : j&apos;extrais les données, je recoupe les montants, et je passe
                la main à un humain sur le moindre doute. Une seconde passe de l&apos;IA relit mon propre travail
                avant validation.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {flagship.chips.map((c) => (
                  <span key={c} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/85">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="rounded-lg bg-[var(--color-cyan)] px-5 py-2.5 text-sm font-bold text-[var(--color-bg-dark)] transition hover:opacity-90"
                >
                  Le construire chez vous
                </Link>
              </div>
            </div>

            <div className="p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/20">
              <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4">
                <span className="text-[var(--color-cyan-dark)]">●</span> Vérification IA — cas réel
              </p>
              <div className="rounded-xl border border-white/10 bg-black/30 overflow-hidden font-mono text-sm">
                <div className="grid grid-cols-[92px_1fr] gap-3 px-4 py-3 border-b border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-white/40">Fournisseur</span>
                  <span>
                    <span className="text-red-400/80 line-through">ENTREPRISE INCONNUE SARL</span>
                    <span className="text-white/40"> → </span>
                    <span className="text-emerald-300 font-semibold">CMM Development</span>
                  </span>
                </div>
                <div className="grid grid-cols-[92px_1fr] gap-3 px-4 py-3 border-b border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-white/40">Total TTC</span>
                  <span>
                    <span className="text-red-400/80 line-through">1 021,99 €</span>
                    <span className="text-white/40"> → </span>
                    <span className="text-emerald-300 font-semibold">921,99 €</span>
                  </span>
                </div>
                <div className="px-4 py-3 bg-[var(--color-cyan)]/5">
                  <div className="grid grid-cols-[92px_1fr] gap-3">
                    <span className="text-[11px] uppercase tracking-wider text-white/40">Confiance</span>
                    <span>
                      <span className="text-red-400/80 line-through">40%</span>
                      <span className="text-white/40"> → </span>
                      <span className="text-emerald-300 font-semibold">97%</span>
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 rounded bg-white/10 overflow-hidden">
                    <div className="h-full w-[97%] rounded bg-gradient-to-r from-[var(--color-cyan-dark)] to-[var(--color-cyan)]" />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-white/55 leading-relaxed">
                La 1ʳᵉ extraction s&apos;était trompée. La <b className="text-[var(--color-cyan)]">2ᵉ passe</b> a relu le
                PDF, corrigé le fournisseur et le TTC (TVA non applicable, art. 293 B CGI → TTC = HT), et tout est{" "}
                <b className="text-[var(--color-cyan)]">tracé au journal d&apos;audit</b>.
              </p>
            </div>
          </div>

          {/* Fleet grouped by domain */}
          <p className="mt-16 mb-2 text-xs uppercase tracking-widest text-white/40 font-semibold">
            La flotte — assemblée sur mesure selon votre métier
          </p>
          {DOMAINS.map((domain) => {
            const items = fleet.filter((a) => a.domain === domain);
            if (items.length === 0) return null;
            return (
              <section key={domain} className="mt-8">
                <h3 className="flex items-center gap-2.5 text-[0.95rem] font-bold text-white/90 mb-3">
                  <span className="h-0.5 w-4 bg-[var(--color-cyan)]" /> {domain}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((a) => {
                    const st = STATUS[a.status];
                    return (
                      <article
                        key={a.id}
                        className="flex flex-col gap-3.5 rounded-2xl border border-white/10 bg-[var(--color-bg-mid)]/60 p-5 transition hover:border-white/25 hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-3.5">
                          <Avatar src={a.avatar} alt={a.name} />
                          <div>
                            <p className="text-lg font-bold leading-tight">{a.name}</p>
                            <p className="mt-0.5 text-[0.62rem] uppercase tracking-wider text-[var(--color-cyan)] font-semibold">
                              {a.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-white/65 leading-relaxed">{a.tagline}</p>
                        <span
                          className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${st.cls}`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" /> {st.label}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {a.chips.map((c) => (
                            <span key={c} className="rounded-md border border-white/10 px-2 py-0.5 text-[0.62rem] text-white/55">
                              {c}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto pt-1">
                          <Link
                            href="/#contact"
                            className={`text-sm font-bold ${a.status === "cat" ? "text-white/60" : "text-[var(--color-cyan)]"} hover:underline`}
                          >
                            {a.status === "cat" ? "Sur devis" : "En parler en RDV"} →
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}

          <p className="mt-14 max-w-3xl text-sm text-white/50 leading-relaxed">
            <b className="text-white/70">Modèle :</b> forfait de mise en place + maintenance, jamais de licence par
            utilisateur. On démarre toujours par un assistant pilote — le plus douloureux — puis on ajoute les
            autres. Les assistants s&apos;assemblent en packs sectoriels (cabinet comptable, artisan/BTP,
            e-commerce, profession réglementée…).
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
