import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">
          Serenys Rénovation
        </p>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
          Rénovation d’appartement et de maison en Île-de-France
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
          Entreprise de rénovation tous corps d’état. Devis gratuit,
          accompagnement complet, suivi de chantier et travaux garantis 10 ans.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Obtenir un devis
          </Link>
          <Link
            href="/calculateur-travaux"
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 text-sm font-semibold text-slate-700 md:grid-cols-2 lg:grid-cols-4">
          <p>Devis gratuit</p>
          <p>Accompagnement complet</p>
          <p>Intervention en Île-de-France</p>
          <p>Travaux garantis 10 ans</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Pourquoi choisir Serenys Rénovation ?
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Suivi de chantier</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Un pilotage régulier avec des points d’avancement clairs à chaque
              étape.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Interlocuteur unique</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Un seul contact dédié pour simplifier les échanges du devis à la
              réception.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Coordination des corps de métier
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Nous organisons l’intervention des artisans pour garantir qualité,
              délais et cohérence.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Travaux garantis 10 ans</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Nos chantiers couverts par la décennale vous apportent une vraie
              sérénité.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">FAQ</h2>

        <div className="mt-8 space-y-4">
          <details className="rounded-xl border border-slate-200 bg-white p-5" open>
            <summary className="cursor-pointer text-base font-semibold text-slate-900">
              Combien coûte une rénovation d’appartement ?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Le budget dépend de la surface, de l’état initial et du niveau de
              finition. Nous établissons un devis détaillé après visite.
            </p>
          </details>

          <details className="rounded-xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer text-base font-semibold text-slate-900">
              Combien de temps durent les travaux ?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              La durée varie selon l’ampleur du projet. Un planning prévisionnel
              est communiqué avant le démarrage du chantier.
            </p>
          </details>

          <details className="rounded-xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer text-base font-semibold text-slate-900">
              Les travaux sont-ils garantis ?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Oui, les travaux concernés sont couverts par la garantie décennale,
              avec les mentions précisées dans votre devis.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Parlons de votre projet</h2>
            <p className="mt-3 max-w-2xl text-slate-200">
              Bénéficiez d’un premier échange et d’un devis gratuit pour lancer
              votre rénovation en toute confiance.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Obtenir un devis gratuit
          </Link>
        </div>
      </section>
    </main>
  );
}
