/**
 * JSON-LD structured data pour Google + autres moteurs.
 * Améliore la chance d'obtenir des rich snippets dans les SERP.
 * Schema.org : Person + ProfessionalService.
 */
export default function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://cmm-development.fr/#person",
      name: "Cédric Muller",
      jobTitle: "Développeur fullstack senior",
      description:
        "Développeur fullstack freelance avec 15 ans d'expérience sur applications métier complexes. Spécialisé en .NET, React, TypeScript et intégration IA.",
      url: "https://cmm-development.fr",
      email: "contact@cmm-development.fr",
      telephone: "+33663737884",
      image: "https://cmm-development.fr/logo-cmm-icon.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auzouville-sur-Ry",
        postalCode: "76116",
        addressCountry: "FR",
        addressRegion: "Normandie",
      },
      sameAs: [
        "https://www.linkedin.com/in/cedric-muller-99608726",
        "https://www.malt.fr/profile/cedricmuller",
      ],
      knowsAbout: [
        ".NET",
        "C#",
        "ASP.NET Core",
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "React Native",
        "Java",
        "Hibernate",
        "PostgreSQL",
        "Supabase",
        "Claude API",
        "Anthropic",
        "Intégration IA",
        "Applications métier",
        "ERP",
      ],
      worksFor: {
        "@id": "https://cmm-development.fr/#organization",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://cmm-development.fr/#organization",
      name: "CMM Development",
      legalName: "Cédric Muller — CMM Development",
      url: "https://cmm-development.fr",
      logo: "https://cmm-development.fr/logo-cmm.png",
      image: "https://cmm-development.fr/opengraph-image",
      description:
        "Développement d'applications sur mesure : construction from scratch, reprise technique, intégration IA. Méthode de cadrage rigoureuse.",
      founder: { "@id": "https://cmm-development.fr/#person" },
      foundingDate: "2024-02-27",
      taxID: "FR08795190511",
      vatID: "FR08795190511",
      areaServed: { "@type": "Country", name: "France" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contact@cmm-development.fr",
        telephone: "+33663737884",
        availableLanguage: ["fr-FR"],
        areaServed: "FR",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auzouville-sur-Ry",
        postalCode: "76116",
        addressCountry: "FR",
      },
      priceRange: "€€",
      sameAs: [
        "https://www.linkedin.com/in/cedric-muller-99608726",
        "https://www.malt.fr/profile/cedricmuller",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://cmm-development.fr/#website",
      url: "https://cmm-development.fr",
      name: "CMM Development",
      description:
        "Portfolio de Cédric Muller — développeur fullstack senior freelance, 15 ans d'expérience.",
      publisher: { "@id": "https://cmm-development.fr/#organization" },
      inLanguage: "fr-FR",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
