import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Rénovation d’appartement et de maison en Île-de-France
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Entreprise de rénovation tous corps d’état. Devis gratuit, accompagnement
            complet, suivi de chantier et travaux garantis 10 ans.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Obtenir un devis gratuit
            </Link>
            <Link
              href="/calculateur-travaux"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-400"
            >
              Calculer mon budget travaux
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto grid max-w-5xl gap-3 rounded-2xl bg-white p-5 ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Devis gratuit",
            "Accompagnement complet",
            "Intervention en Île-de-France",
            "Travaux garantis 10 ans",
          ].map((badge) => (
            <p
              key={badge}
              className="rounded-full bg-slate-100 px-4 py-2 text-center text-sm font-semibold text-slate-700"
            >
              {badge}
            </p>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold md:text-3xl">Pourquoi choisir Serenys Rénovation ?</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 md:grid-cols-2">
            <li>• Interlocuteur unique du devis à la réception.</li>
            <li>• Coordination des corps de métier.</li>
            <li>• Suivi de chantier clair et régulier.</li>
            <li>• Intervention en Île-de-France.</li>
          </ul>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold md:text-3xl">FAQ</h2>
          <div className="mt-6 space-y-4">
            <article>
              <h3 className="font-semibold text-slate-900">Combien coûte une rénovation ?</h3>
              <p className="mt-1 text-slate-700">
                Le budget dépend de la surface, de l’état initial et du niveau de finition.
              </p>
            </article>
            <article>
              <h3 className="font-semibold text-slate-900">Combien de temps durent les travaux ?</h3>
              <p className="mt-1 text-slate-700">
                Selon l’ampleur du projet, les travaux peuvent durer de quelques semaines à plusieurs mois.
              </p>
            </article>
            <article>
              <h3 className="font-semibold text-slate-900">Les travaux sont-ils garantis ?</h3>
              <p className="mt-1 text-slate-700">
                Oui, les travaux couverts par la réglementation bénéficient d’une garantie adaptée.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
