import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales et politique de confidentialité du site CMM Development — Cédric Muller, micro-entreprise.",
  alternates: { canonical: "https://cmm-development.fr/mentions-legales" },
  robots: { index: true, follow: false },
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[var(--color-cyan-dark)] uppercase tracking-widest text-xs font-semibold mb-3">
            Informations légales
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-bg-dark)] tracking-tight">
            Mentions légales
          </h1>
          <p className="mt-3 text-sm text-[var(--color-text-meta)]">
            Dernière mise à jour : 15 mai 2026
          </p>

          <div className="mt-12 space-y-10 text-[var(--color-text-muted)] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[var(--color-bg-dark)] mb-3">
                Éditeur du site
              </h2>
              <p>
                Le site <strong>cmm-development.fr</strong> est édité par :
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>
                  <strong>Cédric Muller</strong>, entrepreneur individuel sous le nom commercial
                  CMM Development
                </li>
                <li>Auzouville-sur-Ry (76116), Normandie, France</li>
                <li>
                  Email :{" "}
                  <a
                    href="mailto:contact@cmm-development.fr"
                    className="text-[var(--color-cyan-dark)] hover:underline"
                  >
                    contact@cmm-development.fr
                  </a>
                </li>
                <li>Téléphone : 06 63 73 78 84</li>
                <li>SIRET : 795 190 511 00027</li>
                <li>Code APE : 6201Z — Programmation informatique</li>
                <li>
                  TVA : non applicable, article 293 B du Code général des impôts (franchise en
                  base). Numéro de TVA intracommunautaire : FR08795190511
                </li>
                <li>Directeur de la publication : Cédric Muller</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-bg-dark)] mb-3">
                Hébergement
              </h2>
              <p>Le site est hébergé par :</p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>
                  <strong>Vercel Inc.</strong>
                </li>
                <li>340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                <li>
                  Site :{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-cyan-dark)] hover:underline"
                  >
                    vercel.com
                  </a>
                </li>
              </ul>
              <p className="mt-4">Le nom de domaine est enregistré auprès de :</p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>
                  <strong>OVH SAS</strong>
                </li>
                <li>2 rue Kellermann, 59100 Roubaix, France</li>
                <li>
                  Site :{" "}
                  <a
                    href="https://www.ovhcloud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-cyan-dark)] hover:underline"
                  >
                    ovhcloud.com
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-bg-dark)] mb-3">
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logo, charte
                graphique, code source) est la propriété exclusive de Cédric Muller, sauf mentions
                contraires explicites. Toute reproduction, représentation, modification,
                publication ou adaptation, totale ou partielle, est interdite sans autorisation
                écrite préalable.
              </p>
              <p className="mt-3">
                Les marques, logos et autres signes distinctifs de tiers cités sur ce site (clients,
                technologies, partenaires) restent la propriété de leurs détenteurs respectifs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-bg-dark)] mb-3">
                Données personnelles
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
                rectification, d&apos;effacement, de portabilité et d&apos;opposition concernant
                les données vous concernant.
              </p>
              <p className="mt-3">
                Les seules données collectées sur ce site sont celles que vous fournissez
                volontairement via le formulaire de contact ou par email à l&apos;adresse{" "}
                <a
                  href="mailto:contact@cmm-development.fr"
                  className="text-[var(--color-cyan-dark)] hover:underline"
                >
                  contact@cmm-development.fr
                </a>
                . Elles sont utilisées exclusivement pour répondre à votre demande et ne sont en
                aucun cas cédées à des tiers.
              </p>
              <p className="mt-3">
                Pour exercer vos droits, contactez-nous à l&apos;adresse email ci-dessus.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-bg-dark)] mb-3">
                Cookies et mesure d&apos;audience
              </h2>
              <p>
                Ce site utilise{" "}
                <strong>Vercel Analytics</strong>, un service de mesure d&apos;audience compatible
                avec le RGPD :
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-sm">
                <li>
                  <strong>Aucun cookie</strong> n&apos;est déposé sur votre appareil
                </li>
                <li>
                  <strong>Aucune donnée personnelle</strong> n&apos;est collectée (pas
                  d&apos;adresse IP stockée, pas d&apos;identifiant utilisateur)
                </li>
                <li>
                  Seules des données <strong>agrégées et anonymes</strong> sont mesurées (pages
                  vues, sources de trafic, types d&apos;appareils)
                </li>
              </ul>
              <p className="mt-3">
                Cette configuration ne nécessite pas de bannière de consentement aux cookies au
                titre de la directive ePrivacy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-bg-dark)] mb-3">
                Responsabilité
              </h2>
              <p>
                Cédric Muller s&apos;efforce de fournir des informations exactes et à jour sur ce
                site, mais ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité
                des informations diffusées. L&apos;utilisateur reconnaît utiliser ces informations
                sous sa responsabilité exclusive.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-bg-dark)] mb-3">
                Droit applicable
              </h2>
              <p>
                Le présent site et ses mentions légales sont régis par le droit français. Tout
                litige éventuel relatif à leur utilisation relève de la compétence exclusive des
                tribunaux français.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
            <Link
              href="/"
              className="text-sm font-medium text-[var(--color-cyan-dark)] hover:underline"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
