import Link from "next/link";
import { cities } from "@/data/cities";

export default function RenovationPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-700">
          Zones d’intervention
        </p>
        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          Nos secteurs de rénovation en Île-de-France
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-gray-700">
          Serenys Renovation intervient dans plusieurs villes d’Île-de-France
          pour vos projets de rénovation d’appartement et de maison.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/renovation/${city.slug}`}
              className="rounded-xl border border-gray-200 p-6 transition hover:border-green-700 hover:shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">{city.name}</h2>
              <p className="mt-1 text-sm text-gray-500">{city.department}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
