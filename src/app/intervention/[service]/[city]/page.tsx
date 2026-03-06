import Link from "next/link";
import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ service: string; city: string }>;
};

export async function generateStaticParams() {
  return services.flatMap((service) =>
    cities.map((city) => ({
      service: service.slug,
      city: city.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = services.find((item) => item.slug === serviceSlug);
  const city = cities.find((item) => item.slug === citySlug);

  if (!service || !city) {
    return { title: "Page introuvable" };
  }

  return {
    title: `${service.h1} à ${city.name} | Serenys Renovation`,
    description: `${service.h1} à ${city.name} (${city.department}) : accompagnement complet, devis gratuit et suivi de chantier en Île-de-France.`,
  };
}

export default async function InterventionPage({ params }: Props) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = services.find((item) => item.slug === serviceSlug);
  const city = cities.find((item) => item.slug === citySlug);

  if (!service || !city) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Intervention locale
        </p>

        <h1 className="mb-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          {service.h1} à {city.name}
        </h1>

        <p className="mb-2 text-lg text-slate-700">
          Serenys Renovation réalise votre projet de {service.h1.toLowerCase()} à {city.name},
          avec une approche premium, claire et orientée résultats.
        </p>
        <p className="mb-8 text-sm text-slate-500">{city.department}</p>

        <section className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Ce que nous faisons pour vous</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Cadrage du projet, budget, priorités et délais.</li>
            <li>• Gestion complète du chantier et coordination des artisans.</li>
            <li>• Contrôle qualité et livraison soignée.</li>
          </ul>
        </section>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Obtenez votre devis gratuit
          </Link>

          <Link
            href={`/services/${service.slug}`}
            className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
          >
            Voir la page service
          </Link>
        </div>
      </div>
    </main>
  );
}
