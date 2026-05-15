type Recommendation = {
  initials: string;
  author: string;
  role: string;
  quote: string;
  date: string;
};

const RECOMMENDATIONS: Recommendation[] = [
  {
    initials: "JN",
    author: "Jacques Nicolau",
    role: "Chef de service — DREAL de Corse",
    quote:
      "Je tiens à saluer le travail remarquable réalisé par Cédric Muller. Grâce à sa maîtrise du C#, du SQL et du JavaScript, il a su identifier et résoudre des problèmes techniques complexes tout en apportant une réelle valeur ajoutée à l'expérience utilisateur. Un excellent travail, à la fois sur le fond et la forme.",
    date: "14/05/2025",
  },
  {
    initials: "GI",
    author: "Gilles Iacones",
    role: "CEO — APOLLO",
    quote:
      "Cédric a joué un rôle clé dans la création et l'évolution de nos outils de développement. C'est un développeur talentueux, rigoureux et impliqué, qui a su apporter des solutions concrètes, fiables et durables. Je le recommande sans la moindre hésitation à toute entreprise cherchant un développeur compétent, fiable et engagé.",
    date: "12/05/2025",
  },
];

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-20 md:py-28 bg-[var(--color-bg-soft)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[var(--color-cyan-dark)] uppercase tracking-widest text-xs font-semibold mb-3">
          Recommandations
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-bg-dark)] tracking-tight max-w-2xl">
          Ce qu&apos;en disent les clients.
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {RECOMMENDATIONS.map((r) => (
            <figure
              key={r.author}
              className="relative bg-white rounded-lg p-7 shadow-sm border border-[var(--color-border)]"
            >
              <span
                aria-hidden
                className="absolute top-3 right-5 text-6xl font-serif text-[var(--color-cyan)]/20 leading-none select-none"
              >
                &ldquo;
              </span>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: "var(--color-cyan-dark)" }}
                  aria-hidden
                >
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[var(--color-bg-dark)]">{r.author}</p>
                  <p className="text-xs text-[var(--color-text-meta)]">{r.role}</p>
                </div>
              </div>
              <blockquote className="text-sm italic text-[var(--color-text-muted)] leading-relaxed">
                {r.quote}
              </blockquote>
              <figcaption className="mt-4 text-xs text-[var(--color-text-meta)] flex items-center gap-2">
                <span>Recommandation Malt — {r.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-sm">
          <a
            href="https://www.malt.fr/profile/cedricmuller"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-cyan-dark)] hover:underline font-medium"
          >
            Voir le profil Malt complet →
          </a>
        </p>
      </div>
    </section>
  );
}
