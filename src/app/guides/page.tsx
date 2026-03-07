import Link from "next/link";
import { guides } from "@/data/guides";

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Guides
        </p>

        <h1 className="mb-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
          Guides rénovation Serenys
        </h1>

        <p className="mb-10 max-w-3xl text-lg text-slate-700">
          Découvrez nos conseils pratiques pour mieux préparer votre projet de
          rénovation en Île-de-France.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-700 hover:shadow-md"
            >
              <h2 className="mb-2 text-xl font-bold text-slate-900">{guide.title}</h2>
              <p className="text-slate-600">{guide.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
