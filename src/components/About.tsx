export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <p className="text-[var(--color-cyan-dark)] uppercase tracking-widest text-xs font-semibold mb-3">
            À propos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-bg-dark)] tracking-tight">
            Une méthode, pas des promesses.
          </h2>
        </div>
        <div className="md:col-span-2 text-[var(--color-text-muted)] leading-relaxed space-y-5">
          <p>
            Développeur fullstack senior, 15 ans d&apos;expérience sur des applications métier
            complexes — ERP industriels, SaaS web et mobile en production. Maîtrise complète de la
            chaîne backend / frontend / mobile / data / infrastructure.
          </p>
          <p>
            Chaque mission commence par un <strong>cadrage rigoureux</strong> : audit du contexte,
            document de prérequis, périmètre précis, critères de recette explicites. Cette approche
            protège le client comme le prestataire, et a été validée par les retours clients.
          </p>
          <p>
            J&apos;oriente aujourd&apos;hui cette expérience vers l&apos;automatisation des processus
            et l&apos;intégration d&apos;IA dans les PME : extraction de documents, tâches répétitives
            de back-office, outils métier connectés à l&apos;existant. Pas un produit standard à
            louer — votre outil, conçu sur mesure et intégré à votre façon de travailler.
          </p>
          <p className="border-l-4 border-[var(--color-cyan)] pl-4 italic text-[var(--color-text-default)]">
            Je ne livre pas des rapports. Je livre des systèmes qui fonctionnent.
          </p>
        </div>
      </div>
    </section>
  );
}
