export type CaseImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type CaseRecommendation = {
  author: string;
  role: string;
  quote: string;
  date: string;
};

export type Case = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  context: string;
  tags: string[];
  url?: string;
  highlighted?: boolean;
  cover?: CaseImage;
  gallery?: CaseImage[];
  description: string;
  realized: string[];
  result?: string;
  stack: string[];
  recommendation?: CaseRecommendation;
};

export const CASES: Case[] = [
  {
    slug: "storytelling-ai",
    title: "Storytelling AI",
    subtitle: "Application SaaS de génération de contenu par IA",
    period: "Sept. 2025 – Mars 2026",
    context: "Projet personnel",
    tags: ["SaaS", "IA générative", "Mobile", "from scratch"],
    url: "https://www.storytellingmai.com/",
    highlighted: true,
    cover: {
      src: "/cases/storytelling-ai/04-generation-ia.png",
      width: 1440,
      height: 900,
      alt: "Storytelling AI — page de génération d'histoire par IA",
    },
    gallery: [
      {
        src: "/cases/storytelling-ai/01-landing.png",
        width: 1920,
        height: 3000,
        alt: "Landing publique Storytelling AI",
      },
      {
        src: "/cases/storytelling-ai/02-home-connecte.png",
        width: 1920,
        height: 4000,
        alt: "Accueil en mode connecté",
      },
      {
        src: "/cases/storytelling-ai/03-dashboard.png",
        width: 1440,
        height: 900,
        alt: "Dashboard Mes Histoires",
      },
      {
        src: "/cases/storytelling-ai/04-generation-ia.png",
        width: 1440,
        height: 900,
        alt: "Page de génération d'histoire par IA",
      },
      {
        src: "/cases/storytelling-ai/05-mobile-generation.png",
        width: 390,
        height: 844,
        alt: "Vue mobile responsive",
      },
    ],
    description:
      "Conception et développement from scratch d'une application SaaS de génération de contenu par intelligence artificielle, accessible en web et en mobile. Projet personnel d'expérimentation aboutie en production qui démontre l'intégration concrète des LLM dans une application métier complète, sécurisée et déployée.",
    realized: [
      "Backend .NET 8 / ASP.NET Core, architecture clean, intégration API Claude Anthropic",
      "Frontend web React 19 + TypeScript + Tailwind CSS",
      "Application mobile React Native + Expo, parité fonctionnelle web",
      "TTS multi-providers (Azure Speech + Google TTS)",
      "Base PostgreSQL via Supabase, gestion comptes utilisateurs",
      "Docker, CI/CD, monitoring Sentry",
    ],
    result:
      "Produit complet conçu, développé et déployé en production en 7 mois. Référence concrète pour toute mission impliquant l'intégration d'IA générative dans une application web ou mobile.",
    stack: [
      ".NET 8",
      "C#",
      "ASP.NET Core",
      "Claude API",
      "React 19",
      "TypeScript",
      "React Native",
      "Expo",
      "Supabase",
      "PostgreSQL",
      "Docker",
      "Sentry",
    ],
  },
  {
    slug: "portail-corse",
    title: "Portail statistique régional",
    subtitle: "Reprise technique complète pour la DREAL / Collectivité de Corse",
    period: "Oct. 2024 – Fév. 2025",
    context: "Mission freelance directe",
    tags: ["Reprise technique", ".NET", "PostgreSQL", "Secteur public"],
    highlighted: true,
    cover: {
      src: "/cases/portail-corse/01-accueil.png",
      width: 1920,
      height: 1200,
      alt: "Portail statistique régional Corse — page d'accueil",
    },
    gallery: [
      {
        src: "/cases/portail-corse/01-accueil.png",
        width: 1920,
        height: 1200,
        alt: "Page de présentation du portail",
      },
      {
        src: "/cases/portail-corse/02-recherche.png",
        width: 1920,
        height: 1200,
        alt: "Interface de recherche d'indicateurs",
      },
      {
        src: "/cases/portail-corse/03-connexion.png",
        width: 1920,
        height: 1200,
        alt: "Système d'authentification refondu",
      },
    ],
    description:
      "Reprise technique complète d'un portail statistique régional en production pour la Collectivité de Corse / DREAL. Mission freelance directe, en relation avec Jacques Nicolau, Chef de service. Le système souffrait de problèmes techniques cumulés : pas de versioning, données partiellement migrées, authentification à refondre, ergonomie datée. Objectif : reprendre l'ensemble techniquement et livrer un système stable, sécurisé et exploitable, sans interruption de service.",
    realized: [
      "Versioning Git et gouvernance technique (repository, documentation)",
      "Migration vers PostgreSQL : 65 tables sur 2 bases (référentielle + opérationnelle)",
      "Refonte authentification ASP.NET Identity adaptée PostgreSQL",
      "Système de rôles et droits granulaires avec interface d'administration",
      "Refonte ergonomique : formulaires, graphiques amCharts, i18n, accessibilité",
      "Mise en production et déploiement",
    ],
    result:
      "Livraison en 4 mois dans le périmètre défini. Le portail est en production sur observatoire.dreal-corse.din.developpement-durable.gouv.fr.",
    stack: [
      "C# / .NET",
      "ASP.NET Identity",
      "PostgreSQL",
      "amCharts",
      "SendGrid",
      "Git",
    ],
    recommendation: {
      author: "Jacques Nicolau",
      role: "Chef de service — DREAL de Corse",
      quote:
        "Je tiens à saluer le travail remarquable réalisé par Cédric Muller. Grâce à sa maîtrise du C#, du SQL et du JavaScript, il a su identifier et résoudre des problèmes techniques complexes tout en apportant une réelle valeur ajoutée à l'expérience utilisateur. Un excellent travail, à la fois sur le fond et la forme.",
      date: "14/05/2025",
    },
  },
  {
    slug: "prono-cdm-2026",
    title: "Pronostics Coupe du Monde 2026",
    subtitle: "Application web multi-utilisateurs (~1 500 joueurs) avec classement en temps réel",
    period: "Mai – Juin 2026",
    context: "Mission freelance directe",
    tags: ["Application web", "Temps réel", "Multi-utilisateurs", "from scratch"],
    url: "https://pronosticker.vercel.app",
    cover: {
      src: "/cases/prono-cdm-2026/02-accueil.png",
      width: 1920,
      height: 940,
      alt: "Tableau de bord joueur — Grand Jeu Prono Coupe du Monde 2026",
    },
    gallery: [
      {
        src: "/cases/prono-cdm-2026/01-inscription.png",
        width: 1281,
        height: 874,
        alt: "Page d'inscription — connexion par lien email, sans mot de passe",
      },
      {
        src: "/cases/prono-cdm-2026/02-accueil.png",
        width: 1920,
        height: 940,
        alt: "Tableau de bord joueur et règles de scoring",
      },
      {
        src: "/cases/prono-cdm-2026/03-mes-pronos.png",
        width: 1920,
        height: 922,
        alt: "Saisie des pronostics : podium final et classement des poules",
      },
      {
        src: "/cases/prono-cdm-2026/04-matchs.png",
        width: 1920,
        height: 922,
        alt: "Pronostics des matchs avec verrouillage au coup d'envoi",
      },
    ],
    description:
      "Conception et développement from scratch d'une application web de pronostics pour la Coupe du Monde 2026, destinée à un concours interne d'environ 1 500 joueurs. Mission freelance directe pour iTSC. L'enjeu : une application fiable à monter en charge le temps d'un événement, avec saisie des pronostics, classement automatique sur résultats officiels et back-office d'administration — le tout sur une infrastructure légère, maîtrisée en coût et résiliable à la fin de la compétition.",
    realized: [
      "Application web full-stack from scratch (Next.js + React + TypeScript), déployée sur Vercel",
      "Authentification sans mot de passe par lien magique envoyé par email, pour ~1 500 joueurs (Supabase)",
      "Saisie des pronostics (podium, classement des poules, score de chaque match) avec verrouillage automatique au coup d'envoi",
      "Barème de scoring multi-niveaux et classement calculé en temps réel (logique de scoring en base)",
      "Intégration des résultats officiels via API football-data.org (mise à jour automatique des scores)",
      "Back-office d'administration : gestion des joueurs, des matchs et du classement",
      "Emails transactionnels, nom de domaine dédié, sauvegardes et mise en production aux couleurs du client (iTSC)",
    ],
    result:
      "Application conçue, développée et déployée en production, testée à l'échelle cible d'environ 1 500 joueurs. Infrastructure volontairement légère et résiliable à l'issue de l'événement : coût d'exploitation maîtrisé et refacturé au réel pour le client.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "football-data.org API",
    ],
  },
  {
    slug: "herculepro",
    title: "HerculePro",
    subtitle: "ERP métier pour le secteur de la menuiserie",
    period: "2021 – aujourd'hui",
    context: "Expérience longue · 5+ ans",
    tags: ["ERP", "Java", "Hibernate", "Production"],
    description:
      "Développement et évolution d'un ERP complet pour le secteur de la menuiserie, déployé chez plusieurs centaines de clients. Le produit couvre l'intégralité du cycle commercial : devis à la décimale, facturation, comptabilité, gestion de production, exports comptables normés.",
    realized: [
      "Conception et développement de modules métier (devis, facturation, paye, exports comptables)",
      "Intégrations comptables et exports normés",
      "Maintenance évolutive et refactoring continu sur un produit critique en production",
    ],
    result:
      "5+ ans sur un ERP métier en production = maîtrise des contraintes réelles d'un logiciel de gestion : intégrité des données, exports comptables conformes, multi-clients, montée en charge.",
    stack: ["Java", "Hibernate", "JavaScript", "ExtJS", "REST API", "MySQL"],
  },
  {
    slug: "alternative-conseil",
    title: "Alternative Conseil",
    subtitle: "Logiciel de gestion RH pour le secteur de l'intérim",
    period: "2013 – 2021",
    context: "Expérience longue · 8 ans",
    tags: ["RH", "Intérim", ".NET", "Paye"],
    description:
      "Développement d'un logiciel de gestion complet dédié au secteur de l'intérim, déployé chez plusieurs clients. Couvre la chaîne complète d'une agence d'intérim : gestion intérimaire, suivi commercial, facturation, paye, déclarations sociales.",
    realized: [
      "Modules de gestion intérimaire (missions, contrats, relevés d'heures)",
      "Facturation client et suivi commercial",
      "Paye et déclarations sociales conformes",
      "Évolutions continues sur 8 ans, déploiement chez plusieurs clients",
    ],
    result:
      "8 ans sur un logiciel métier RH/intérim = expertise des domaines réglementés (paye, déclarations sociales, conformité) et de la construction d'un produit dans la durée.",
    stack: [".NET", "C#", "ASP.NET", "SQL Server"],
  },
];
