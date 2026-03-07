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
          <Link href="/renovation/versailles" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            Versailles
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">FAQ</h2>
          <div className="mt-6 space-y-3">
            <details className="rounded-xl border border-slate-200 bg-[#fcfcfb] p-5" open>
              <summary className="cursor-pointer font-semibold text-slate-900">
                Combien coûte une rénovation d’appartement ?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Le budget dépend de la surface, de l’état du bien et du niveau de finition. Une visite permet d’établir un devis précis.
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 bg-[#fcfcfb] p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">Combien de temps durent les travaux ?</summary>
              <p className="mt-2 text-sm text-slate-600">
                La durée varie selon l’ampleur du projet. Un planning prévisionnel est défini avant le démarrage du chantier.
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 bg-[#fcfcfb] p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">Les travaux sont-ils garantis ?</summary>
              <p className="mt-2 text-sm text-slate-600">
                Oui, les postes concernés sont couverts par la garantie décennale dans le respect de la réglementation.
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 bg-[#fcfcfb] p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">Intervenez-vous en copropriété ?</summary>
              <p className="mt-2 text-sm text-slate-600">
                Oui, nous intervenons en copropriété en respectant les contraintes d’accès, d’horaires et de coordination.
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 bg-[#fcfcfb] p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">Proposez-vous un devis gratuit ?</summary>
              <p className="mt-2 text-sm text-slate-600">
                Oui, le premier échange et l’évaluation initiale sont gratuits et sans engagement.
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 bg-[#fcfcfb] p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">Intervenez-vous en Île-de-France ?</summary>
              <p className="mt-2 text-sm text-slate-600">
                Oui, nous intervenons sur les principaux secteurs d’Île-de-France selon la nature du chantier.
              </p>
            </details>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#f4f2eb]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-slate-700">Services principaux</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/services/renovation-appartement" className="hover:underline">Rénovation appartement</Link></li>
              <li><Link href="/services/renovation-maison" className="hover:underline">Rénovation maison</Link></li>
              <li><Link href="/services/renovation-salle-de-bain" className="hover:underline">Rénovation salle de bain</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-slate-700">Villes principales</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/renovation/saint-cloud" className="hover:underline">Saint-Cloud</Link></li>
              <li><Link href="/renovation/boulogne-billancourt" className="hover:underline">Boulogne-Billancourt</Link></li>
              <li><Link href="/renovation/versailles" className="hover:underline">Versailles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-slate-700">Combinaisons populaires</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/intervention/renovation-appartement/saint-cloud" className="hover:underline">
                  Rénovation appartement Saint-Cloud
                </Link>
              </li>
              <li>
                <Link href="/intervention/renovation-salle-de-bain/boulogne-billancourt" className="hover:underline">
                  Rénovation salle de bain Boulogne-Billancourt
                </Link>
              </li>
              <li>
                <Link href="/intervention/renovation-maison/versailles" className="hover:underline">
                  Rénovation maison Versailles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <section className="px-4 pb-16 pt-10 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#23465a] px-6 py-10 text-white sm:px-8">
          <h2 className="text-3xl font-bold">Un projet de rénovation ? Parlons-en sereinement</h2>
          <p className="mt-3 max-w-2xl text-slate-200">
            Bénéficiez d’un accompagnement complet avec un interlocuteur unique, du devis à la livraison.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Demander un devis gratuit
            </Link>
            {/* TODO: Remplacer le numéro WhatsApp placeholder par le vrai numéro business */}
            <a
              href="https://wa.me/33000000000"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Échanger sur mon projet
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
