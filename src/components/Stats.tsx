const STATS = [
  {
    value: "15+",
    label: "années d'expérience",
    detail: "Dont 12+ sur applications métier complexes",
  },
  {
    value: "4+",
    label: "projets vitrine",
    detail: "ERP, SaaS, IA, secteur public",
  },
  {
    value: "100%",
    label: "missions livrées dans les délais",
    detail: "Cadrage rigoureux validé par retours clients",
  },
  {
    value: "2",
    label: "recommandations Malt publiques",
    detail: "DREAL Corse · CEO APOLLO",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-[var(--color-border)] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-left">
              <p className="text-4xl md:text-5xl font-extrabold text-[var(--color-bg-dark)] tracking-tight tabular-nums">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-text-default)]">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-meta)] leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
