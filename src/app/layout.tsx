import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.serenys-renovation.fr"),
  title: "Entreprise de rénovation en Île-de-France | Serenys Rénovation",
  description:
    "Serenys Rénovation accompagne vos travaux intérieurs en Île-de-France : appartement, maison, cuisine et salle de bain. Devis gratuit et suivi de chantier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
