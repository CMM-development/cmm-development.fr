type SkillGroup = {
  title: string;
  items: string[];
};

const GROUPS: SkillGroup[] = [
  {
    title: "Backend",
    items: ["C# / .NET 8", "ASP.NET Core Web API", "Java / Hibernate", "REST API"],
  },
  {
    title: "Frontend",
    items: ["React 19", "TypeScript", "Next.js 16", "Tailwind CSS"],
  },
  { title: "Mobile", items: ["React Native", "Expo"] },
  {
    title: "Bases de données",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Supabase"],
  },
  {
    title: "IA & intégrations",
    items: ["API Claude (Anthropic)", "OpenAI", "RAG", "Stripe", "Azure Speech / Google TTS"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "Vercel", "Railway", "Render", "CI/CD", "Sentry"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[var(--color-bg-soft)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[var(--color-cyan-dark)] uppercase tracking-widest text-xs font-semibold mb-3">
          Compétences
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-bg-dark)] tracking-tight max-w-2xl">
          Une stack complète, pas une liste.
        </h2>
        <p className="mt-4 text-[var(--color-text-muted)] max-w-2xl">
          Chaîne backend → frontend → mobile → infra. Ce qui permet de prendre un projet de bout en
          bout, sans dépendre de prestataires multiples.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="bg-white border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-[var(--color-bg-dark)] text-sm uppercase tracking-wider mb-3">
                {group.title}
              </h3>
              <ul className="space-y-1.5 text-sm text-[var(--color-text-muted)]">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-[var(--color-cyan-dark)] mr-2 leading-tight">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
