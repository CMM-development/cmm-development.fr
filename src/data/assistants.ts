// Généré depuis assets/avatars/personas.json — flotte d'assistants CMM.
export type AssistantStatus = "live" | "build" | "cat";
export interface Assistant {
  id: string; name: string; role: string; domain: string;
  tagline: string; status: AssistantStatus; chips: string[];
  avatar: string; flagship?: boolean;
}

export const ASSISTANTS: Assistant[] = [
  { id: "margaux", name: "Margaux", role: "Documents entrants", domain: "Finance & compta", tagline: "Je lis, vérifie et classe vos factures — rien ne part en compta sans contrôle.", status: "live", chips: ["Instance dédiée", "Audit", "Validation humaine"], avatar: "/assets/avatars/margaux.jpg", flagship: true },
  { id: "remi", name: "Rémi", role: "Relances impayés", domain: "Finance & compta", tagline: "Je repère les impayés et relance avec le bon ton, au bon moment.", status: "build", chips: ["Ton adapté", "Dashboard", "Audit"], avatar: "/assets/avatars/remi.jpg" },
  { id: "victor", name: "Victor", role: "Configurateur de devis", domain: "Commercial & devis", tagline: "Je transforme vos règles métier en devis justes, en quelques clics.", status: "build", chips: ["Vos tarifs", "PDF calculé", "CRM"], avatar: "/assets/avatars/victor.jpg" },
  { id: "nadia", name: "Nadia", role: "Rapprochement bancaire", domain: "Finance & compta", tagline: "Je rapproche relevés et factures, et je signale les anomalies.", status: "cat", chips: ["Banque (PSD2)", "Pré-affectation"], avatar: "/assets/avatars/nadia.jpg" },
  { id: "thomas", name: "Thomas", role: "Reporting mensuel", domain: "Finance & compta", tagline: "Je compile vos sources en KPI clairs, avec narration et PDF.", status: "cat", chips: ["Sources data", "KPI", "PDF"], avatar: "/assets/avatars/thomas.jpg" },
  { id: "lea", name: "Léa", role: "Qualification des leads", domain: "Commercial & devis", tagline: "Je capte les demandes entrantes, je qualifie et je route au bon commercial.", status: "cat", chips: ["Formulaire", "CRM", "Agenda"], avatar: "/assets/avatars/lea.jpg" },
  { id: "karim", name: "Karim", role: "Prospection (SDR)", domain: "Commercial & devis", tagline: "J'identifie vos cibles et déroule des séquences personnalisées, RGPD-safe.", status: "cat", chips: ["ICP", "Multicanal", "Opt-out"], avatar: "/assets/avatars/karim.jpg" },
  { id: "chloe", name: "Chloé", role: "Suivi commercial", domain: "Commercial & devis", tagline: "Je relance les devis non signés et j'alerte sur les signaux chauds.", status: "cat", chips: ["CRM", "Relances", "Nurturing"], avatar: "/assets/avatars/chloe.jpg" },
  { id: "hugo", name: "Hugo", role: "Tri & réponses emails", domain: "Relation client", tagline: "Je classe vos emails, je route, et je pré-rédige les réponses simples.", status: "cat", chips: ["IMAP/Gmail", "Routage", "Brouillons"], avatar: "/assets/avatars/hugo.jpg" },
  { id: "fatou", name: "Fatou", role: "Onboarding / KYC", domain: "Admin & conformité", tagline: "Je collecte les pièces, je vérifie, je relance — dossier prêt et conforme.", status: "cat", chips: ["Portail", "Vérif IA", "Relances"], avatar: "/assets/avatars/fatou.jpg" },
  { id: "antoine", name: "Antoine", role: "Contrats & échéances", domain: "Admin & conformité", tagline: "Je lis vos contrats, j'extrais les clauses clés et j'alerte sur les échéances.", status: "cat", chips: ["GED", "Clauses", "Alertes"], avatar: "/assets/avatars/antoine.jpg" },
  { id: "sofia", name: "Sofia", role: "Standard vocal", domain: "Accueil & téléphonie", tagline: "Je réponds aux appels, je renseigne et je prends les rendez-vous.", status: "cat", chips: ["Téléphonie", "Agenda", "Transcription"], avatar: "/assets/avatars/sofia.jpg" },
  { id: "maya", name: "Maya", role: "Community Manager", domain: "Marketing", tagline: "Je tiens votre calendrier éditorial, je publie à la charte et je modère.", status: "cat", chips: ["Réseaux", "Calendrier", "Reporting"], avatar: "/assets/avatars/maya.jpg" },
  { id: "lucas", name: "Lucas", role: "Avis & e-réputation", domain: "Marketing", tagline: "Je sollicite les avis, je détecte l'insatisfaction et je propose des réponses.", status: "cat", chips: ["Google Business", "Alertes", "Brouillons"], avatar: "/assets/avatars/lucas.jpg" },
  { id: "ines", name: "Inès", role: "Recrutement", domain: "Ressources humaines", tagline: "Je trie les CV, je pré-qualifie et je planifie les entretiens.", status: "cat", chips: ["ATS", "Tri CV", "Agenda"], avatar: "/assets/avatars/ines.jpg" },
  { id: "marc", name: "Marc", role: "Achats & fournisseurs", domain: "Opérations & terrain", tagline: "Je suis les commandes, je relance les fournisseurs et j'alerte sur les stocks.", status: "cat", chips: ["ERP/stock", "Relances", "Seuils"], avatar: "/assets/avatars/marc.jpg" },
  { id: "yanis", name: "Yanis", role: "Planning & tournées", domain: "Opérations & terrain", tagline: "Je planifie les interventions, j'optimise les tournées, j'envoie les rappels.", status: "cat", chips: ["Agenda", "Itinéraires", "Rappels SMS"], avatar: "/assets/avatars/yanis.jpg" },
  { id: "iris", name: "Iris", role: "Veille & appels d'offres", domain: "Veille & développement", tagline: "Je surveille vos marchés et appels d'offres, l'essentiel chaque matin.", status: "cat", chips: ["Sources ciblées", "Résumé quotidien"], avatar: "/assets/avatars/iris.jpg" },
];

export const DOMAINS: string[] = ["Finance & compta", "Commercial & devis", "Relation client", "Admin & conformité", "Accueil & téléphonie", "Marketing", "Ressources humaines", "Opérations & terrain", "Veille & développement"];
