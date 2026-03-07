import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Rénovation d’appartement et de maison en Île-de-France
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700">
          Entreprise de rénovation tous corps d’état. Devis gratuit, accompagnement complet, suivi de chantier et travaux garantis 10 ans.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white"
          >
            Obtenir un devis gratuit
          </Link>
          <Link
            href="/calculateur-travaux"
            className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800"
          >
            Calculer mon budget travaux
          </Link>
        </div>
      </section>
    </main>
  );
}
