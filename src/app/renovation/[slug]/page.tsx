import { notFound } from "next/navigation";
import { cities } from "@/data/cities";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);

  if (!city) {
    return {
      title: "Page introuvable",
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-700">
          Zones d’intervention
        </p>

        <h1 className="mb-4 text-4xl font-bold text-gray-900">{city.h1}</h1>

        <p className="mb-2 text-lg text-gray-700">{city.intro}</p>
        <p className="mb-8 text-sm text-gray-500">{city.department}</p>

        <div className="rounded-xl bg-gray-100 p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Travaux réalisés dans ce secteur
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Rénovation d’appartement</li>
            <li>• Rénovation de maison</li>
            <li>• Rénovation de salle de bain</li>
            <li>• Rénovation de cuisine</li>
            <li>• Rénovation complète</li>
          </ul>
        </div>
      </div>
    </main>
  );
}