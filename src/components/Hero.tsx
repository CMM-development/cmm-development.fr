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
      {/* Motif PCB subtil — cohérence avec le logo */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="pcb" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M10 0 L10 60 L50 60 L50 120 M70 0 L70 30 L110 30 L110 80 L60 80"
              fill="none"
              stroke="#14E5E5"
              strokeWidth="1"
            />
            <circle cx="10" cy="60" r="2.5" fill="#14E5E5" />
            <circle cx="50" cy="60" r="2.5" fill="#14E5E5" />
            <circle cx="70" cy="30" r="2.5" fill="#14E5E5" />
            <circle cx="110" cy="80" r="2.5" fill="#14E5E5" />
            <circle cx="60" cy="80" r="2.5" fill="#14E5E5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pcb)" />
      </svg>
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Disponible pour de nouvelles missions
        </div>
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
