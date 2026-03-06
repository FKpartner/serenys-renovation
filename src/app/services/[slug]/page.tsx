import Link from "next/link";
import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Page introuvable" };
  }

  return {
    title: `${service.h1} | Serenys Rénovation`,
    description: service.metaDescription,
  };
}

function getFaq(h1: string) {
  return [
    {
      question: `Combien coûte ${h1.toLowerCase()} ?`,
      answer:
        "Le budget dépend de la surface, de l’état initial et du niveau de finition. Nous proposons une première fourchette puis un devis détaillé après visite.",
    },
    {
      question: "Combien de temps durent les travaux ?",
      answer:
        "La durée dépend de l’ampleur du projet et des lots techniques. Un planning prévisionnel vous est communiqué avant le démarrage.",
    },
    {
      question: "Faut-il quitter son logement pendant les travaux ?",
      answer:
        "Cela dépend du niveau d’intervention. Pour une rénovation lourde, un logement temporaire peut être plus confortable.",
    },
    {
      question: "Intervenez-vous en copropriété ?",
      answer:
        "Oui, nous intervenons régulièrement en copropriété en respectant les contraintes d’accès et d’horaires.",
    },
    {
      question: "Les travaux sont-ils garantis ?",
      answer:
        "Oui, les travaux couverts par la réglementation bénéficient d’une garantie décennale. Les détails sont précisés au devis.",
    },
  ];
}

const budgetRanges = [
  { label: "Rafraîchissement", value: "à partir de 400 €/m²" },
  { label: "Rénovation complète", value: "environ 800 à 1 300 €/m²" },
  { label: "Rénovation lourde", value: "à partir de 1 300 €/m²" },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const linkedCities = cities.slice(0, 6);
  const linkedGuides = guides.slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    provider: {
      "@type": "LocalBusiness",
      name: "Serenys Renovation",
    },
    areaServed: ["Île-de-France", "Hauts-de-Seine", "Yvelines"],
    description: service.intro,
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Services Serenys
        </p>

        <h1 className="mb-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
          {service.h1}
        </h1>

        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-700">
          {service.intro}
        </p>

        <section className="mb-10 rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Notre méthode pour un chantier maîtrisé
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Étude complète du besoin, du style et du budget.</li>
            <li>• Planning clair et coordination des corps de métier.</li>
            <li>• Contrôle qualité jusqu’aux finitions.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
            Interventions locales pour ce service
          </h2>
          <p className="mb-6 text-slate-600">
            Accédez à nos pages SEO locales pour {service.h1.toLowerCase()}.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/intervention/${service.slug}/${city.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-emerald-700 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.h1} à {city.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{city.department}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
