export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-dark)] text-white">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, var(--color-cyan) 0%, transparent 50%), radial-gradient(circle at 80% 70%, var(--color-cyan-dark) 0%, transparent 45%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <p className="text-[var(--color-cyan)] uppercase tracking-widest text-xs font-semibold mb-5">
          Développeur fullstack senior — 15 ans d&apos;expérience
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight max-w-4xl">
          Je construis des applications métier qui tiennent en production.
        </h1>
        <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">
          Du logiciel ERP industriel au SaaS web et mobile en production. Maîtrise complète backend
          / frontend / mobile / data / infrastructure. Méthode de cadrage rigoureuse validée par
          retours clients.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#cases"
            className="inline-flex items-center px-6 py-3 rounded-md bg-[var(--color-cyan-dark)] text-white font-semibold hover:bg-[var(--color-cyan)] transition-colors"
          >
            Voir les réalisations
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
          >
            Discutons de votre projet
          </a>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 max-w-2xl">
          <p className="text-sm text-white/60 italic">
            Évolution actuelle vers l&apos;automatisation de services en entreprise — un axe naturel
            pour un profil fullstack.
          </p>
        </div>
      </div>
    </section>
  );
}
