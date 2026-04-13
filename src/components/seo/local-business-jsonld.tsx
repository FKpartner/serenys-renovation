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
    telephone: "01 84 80 79 67",
    email: "contact@serenys-renovation.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 avenue des Acacias",
      postalCode: "78700",
      addressLocality: "Conflans-Sainte-Honorine",
      addressCountry: "FR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
