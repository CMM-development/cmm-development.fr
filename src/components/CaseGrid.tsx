import Image from "next/image";

type Case = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  context: string;
  tags: string[];
  url?: string;
  highlighted?: boolean;
  image?: { src: string; width: number; height: number; alt: string };
};

const CASES: Case[] = [
  {
    slug: "storytelling-ai",
    title: "Storytelling AI",
    subtitle: "Application SaaS de génération de contenu par IA",
    period: "Sept. 2025 – Mars 2026",
    context: "Projet personnel",
    tags: ["SaaS", "IA générative", "Mobile", "from scratch"],
    url: "https://www.storytellingmai.com/",
    highlighted: true,
    image: {
      src: "/cases/storytelling-ai/04-generation-ia.png",
      width: 1440,
      height: 900,
      alt: "Storytelling AI — page de génération d'histoire par IA",
    },
  },
  {
    slug: "portail-corse",
    title: "Portail statistique régional",
    subtitle: "Reprise technique complète pour la DREAL / Collectivité de Corse",
    period: "Oct. 2024 – Fév. 2025",
    context: "Mission freelance directe",
    tags: ["Reprise technique", ".NET", "PostgreSQL", "Secteur public"],
    highlighted: true,
    image: {
      src: "/cases/portail-corse/01-accueil.png",
      width: 1920,
      height: 1200,
      alt: "Portail statistique régional Corse — page d'accueil",
    },
  },
  {
    slug: "herculepro",
    title: "HerculePro",
    subtitle: "ERP métier pour le secteur de la menuiserie",
    period: "2021 – aujourd'hui",
    context: "Expérience longue · 5+ ans",
    tags: ["ERP", "Java", "Hibernate", "Production"],
  },
  {
    slug: "alternative-conseil",
    title: "Alternative Conseil",
    subtitle: "Logiciel de gestion RH pour le secteur de l'intérim",
    period: "2013 – 2021",
    context: "Expérience longue · 8 ans",
    tags: ["RH", "Intérim", ".NET", "Paye"],
  },
];

export default function CaseGrid() {
  return (
    <section id="cases" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[var(--color-cyan-dark)] uppercase tracking-widest text-xs font-semibold mb-3">
          Réalisations
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-bg-dark)] tracking-tight max-w-2xl">
          Quatre projets qui résument 15 ans.
        </h2>
        <p className="mt-4 text-[var(--color-text-muted)] max-w-2xl">
          Missions freelance récentes et expériences longues — du dev from scratch au logiciel
          métier en production de longue durée.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map((c) => (
            <article
              key={c.slug}
              className={`group relative overflow-hidden rounded-lg border bg-white transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                c.highlighted
                  ? "border-[var(--color-cyan)]/40"
                  : "border-[var(--color-border)]"
              }`}
            >
              {c.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg-soft)] border-b border-[var(--color-border)]">
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    width={c.image.width}
                    height={c.image.height}
                    className="object-cover object-top w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {c.highlighted && (
                    <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-bold text-white bg-[var(--color-cyan-dark)]/90 backdrop-blur px-2 py-0.5 rounded">
                      Mis en avant
                    </span>
                  )}
                </div>
              )}

              <div className="p-7">
                {!c.image && c.highlighted && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-bold text-[var(--color-cyan-dark)] bg-[var(--color-cyan-soft)] px-2 py-0.5 rounded">
                    Mis en avant
                  </span>
                )}
                <p className="text-xs text-[var(--color-text-meta)] uppercase tracking-wider font-medium">
                  {c.context} · {c.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[var(--color-bg-dark)] group-hover:text-[var(--color-cyan-dark)] transition-colors">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {c.subtitle}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[var(--color-text-meta)] bg-[var(--color-bg-soft)] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {c.url && (
                  <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[var(--color-cyan-dark)] hover:underline"
                    >
                      Voir le projet en ligne →
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-[var(--color-text-meta)] italic">
          TODO V2 : modale au clic avec gallery complète (5 screens Storytelling, 3 screens Corse),
          détails étendus, recommandation client.
        </p>
      </div>
    </section>
  );
}
