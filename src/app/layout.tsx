import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cmm-development.fr"),
  title: {
    default: "CMM Development — Cédric Muller, développeur fullstack senior",
    template: "%s — CMM Development",
  },
  description:
    "15 ans d'expérience sur applications métier complexes. Construction d'applications sur mesure, reprise technique, intégration IA. Relation directe, méthode de cadrage rigoureuse.",
  authors: [{ name: "Cédric Muller", url: "https://cmm-development.fr" }],
  creator: "Cédric Muller",
  publisher: "CMM Development",
  keywords: [
    "développeur freelance",
    "fullstack",
    ".NET",
    "React",
    "TypeScript",
    "Next.js",
    "applications métier",
    "intégration IA",
    "automatisation",
    "freelance Normandie",
    "freelance France",
    "Rouen",
    "Cédric Muller",
    "CMM Development",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cmm-development.fr",
    siteName: "CMM Development",
    title: "CMM Development — Cédric Muller, développeur fullstack senior",
    description:
      "15 ans d'expérience sur applications métier complexes. Construction d'applications sur mesure, reprise technique, intégration IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMM Development — Cédric Muller",
    description:
      "Développeur fullstack senior. Applications métier sur mesure, intégration IA. 15 ans d'expérience.",
  },
  alternates: {
    canonical: "https://cmm-development.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
