import Link from "next/link";

const guideSlugs = [
  "renovation-appartement-budget",
  "renovation-cuisine-conseils",
  "renovation-salle-de-bain-etapes",
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-700">
          Guides
        </p>
        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          Conseils rénovation Serenys
        </h1>
        <p className="mb-10 text-lg text-gray-700">
          Parcourez nos guides pour préparer votre projet de rénovation.
        </p>

        <div className="space-y-4">
          {guideSlugs.map((slug) => (
            <Link
              key={slug}
              href={`/guides/${slug}`}
              className="block rounded-xl border border-gray-200 p-5 transition hover:border-green-700"
            >
              {slug.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
