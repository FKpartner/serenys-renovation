type LocalBusinessJsonLdProps = {
  pageUrl?: string;
};

export function LocalBusinessJsonLd({ pageUrl }: LocalBusinessJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Serenys Renovation",
    url: pageUrl ?? "https://www.serenys-renovation.fr",
    areaServed: ["Hauts-de-Seine", "Yvelines", "Île-de-France"],
    serviceType: [
      "Rénovation d'appartement",
      "Rénovation de maison",
      "Rénovation de cuisine",
      "Rénovation de salle de bain",
    ],
    telephone: "[Téléphone à compléter]",
    email: "[Email à compléter]",
    identifier: "[SIRET à compléter]",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
