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
  title: "CMM Development — Cédric Muller, développeur fullstack senior",
  description:
    "15 ans d'expérience sur applications métier complexes. Construction d'applications sur mesure, reprise technique, intégration IA. Relation directe, méthode de cadrage rigoureuse.",
  authors: [{ name: "Cédric Muller" }],
  keywords: [
    "développeur freelance",
    "fullstack",
    ".NET",
    "React",
    "TypeScript",
    "applications métier",
    "intégration IA",
    "automatisation",
    "freelance Normandie",
    "freelance France",
  ],
  openGraph: {
    title: "CMM Development — Cédric Muller",
    description:
      "Développeur fullstack senior. Applications métier sur mesure, reprise technique, intégration IA.",
    type: "website",
    locale: "fr_FR",
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
