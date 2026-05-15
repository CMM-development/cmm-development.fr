export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--color-bg-dark)] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[var(--color-cyan)] uppercase tracking-widest text-xs font-semibold mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Parlons de votre projet.</h2>
        <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Échange de cadrage gratuit (30 à 60 minutes). Sans engagement. Devis structuré avec
          document de prérequis sous 5 jours ouvrés si le projet entre dans mon périmètre.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a
            href="mailto:contact@cmm-development.fr"
            className="group bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg p-6 transition-colors text-left"
          >
            <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Email</p>
            <p className="font-semibold text-white group-hover:text-[var(--color-cyan)] transition-colors break-all">
              contact@cmm-development.fr
            </p>
          </a>
          <a
            href="tel:+33663737884"
            className="group bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg p-6 transition-colors text-left"
          >
            <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Téléphone</p>
            <p className="font-semibold text-white group-hover:text-[var(--color-cyan)] transition-colors">
              06 63 73 78 84
            </p>
          </a>
        </div>

        {/* Téléchargements */}
        <div className="mt-10 pt-8 border-t border-white/10 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-4">
            Documents à télécharger
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href="/cmm-development-dossier.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group inline-flex items-center gap-3 bg-white/5 hover:bg-[var(--color-cyan-dark)] border border-white/15 hover:border-[var(--color-cyan)] rounded-lg px-5 py-3 transition-all text-left"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="shrink-0 text-[var(--color-cyan)] group-hover:text-white"
              >
                <path d="M4 14V16a2 2 0 002 2h8a2 2 0 002-2v-2M10 3v10M6 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-white">Dossier freelance</p>
                <p className="text-xs text-white/50 group-hover:text-white/80">PDF · 12 pages</p>
              </div>
            </a>
            <a
              href="/cv-cedric-muller.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group inline-flex items-center gap-3 bg-white/5 hover:bg-[var(--color-cyan-dark)] border border-white/15 hover:border-[var(--color-cyan)] rounded-lg px-5 py-3 transition-all text-left"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="shrink-0 text-[var(--color-cyan)] group-hover:text-white"
              >
                <path d="M4 14V16a2 2 0 002 2h8a2 2 0 002-2v-2M10 3v10M6 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-white">CV</p>
                <p className="text-xs text-white/50 group-hover:text-white/80">PDF · 1 page</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-sm">
          <a
            href="https://www.linkedin.com/in/cedric-muller-99608726"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[var(--color-cyan)] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-white/20">·</span>
          <a
            href="https://www.malt.fr/profile/cedricmuller"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[var(--color-cyan)] transition-colors"
          >
            Malt
          </a>
        </div>
      </div>
    </section>
  );
}
