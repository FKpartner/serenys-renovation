import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold">
          Rénovation d’appartement et de maison en Île-de-France
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Entreprise de rénovation tous corps d’état. Devis gratuit,
          accompagnement complet, suivi de chantier et travaux garantis 10 ans.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-slate-900 px-5 py-3 text-white"
          >
            Obtenir un devis gratuit
          </Link>

          <Link
            href="/calculateur-travaux"
            className="rounded-lg border border-slate-300 px-5 py-3"
          >
            Calculer mon budget travaux
          </Link>
        </div>
      </section>
    </main>
  );
}
