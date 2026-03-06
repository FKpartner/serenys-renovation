import { notFound } from "next/navigation";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Page introuvable",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-700">
          Services
        </p>

        <h1 className="mb-6 text-4xl font-bold text-gray-900">{service.h1}</h1>

        <p className="mb-8 text-lg text-gray-700">{service.intro}</p>

        <div className="rounded-xl bg-gray-100 p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Pourquoi choisir Serenys Renovation ?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Accompagnement de votre projet de A à Z</li>
            <li>• Intervention en Île-de-France avec focus 92 et 78</li>
            <li>• Approche sérieuse, claire et orientée qualité</li>
          </ul>
        </div>
      </div>
    </main>
  );
}