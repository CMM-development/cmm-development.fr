const STEPS = [
  {
    n: "1",
    title: "Audit & compréhension",
    description:
      "Étude de l'existant avant tout chiffrage : code, architecture, données, intégrations. Pas de devis à l'aveugle.",
  },
  {
    n: "2",
    title: "Document de prérequis",
    description:
      "Accès nécessaires, sécurité, RGPD, critères de recette, exclusions explicites, risques identifiés. Cadre les responsabilités de chaque partie.",
  },
  {
    n: "3",
    title: "Devis structuré",
    description:
      "Ventilation par lots et phases avec TJM explicite. Description détaillée, livrables par phase, dépendances client.",
  },
  {
    n: "4",
    title: "Livraison itérative",
    description:
      "Itérations avec points de synchronisation réguliers. Du code déployable et testable à chaque étape, pas de tunnel.",
  },
  {
    n: "5",
    title: "Passage de relève",
    description:
      "Code versionné et documenté, doc d'exploitation, formation équipe. Le client opère et fait évoluer sans dépendance.",
  },
];

export default function Method() {
  return (
    <section id="method" className="py-20 md:py-28 bg-[var(--color-bg-dark)] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, var(--color-cyan) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, var(--color-cyan-dark) 0%, transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <p className="text-[var(--color-cyan)] uppercase tracking-widest text-xs font-semibold mb-3">
          Ma méthode
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
          Cinq étapes qui protègent client et prestataire.
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
          Chaque mission suit la même structure. Cette méthode a été validée par retour client
          positif (PharmaScan, Collectivité de Corse) et évite les dérives de périmètre habituelles
          dans les prestations de développement.
        </p>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
          {/* Ligne de connexion (desktop) */}
          <div
            className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--color-cyan)]/30 to-transparent"
            aria-hidden
          />
          {STEPS.map((step) => (
            <li key={step.n} className="relative">
              <div
                className="relative z-10 w-10 h-10 rounded-full bg-[var(--color-cyan-dark)] text-white font-bold flex items-center justify-center text-base mx-auto md:mx-0 shadow-lg shadow-[var(--color-cyan)]/20"
                aria-hidden
              >
                {step.n}
              </div>
              <h3 className="mt-4 font-semibold text-white text-base">{step.title}</h3>
              <p className="mt-1.5 text-sm text-white/65 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
