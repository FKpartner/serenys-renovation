import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#fcfbf8] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#fcfbf8]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="text-base font-bold tracking-tight text-slate-900">
            Serenys Rénovation
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href="/">Accueil</Link>
            <Link href="/services/renovation-appartement">Services</Link>
            <Link href="/renovation">Zones d’intervention</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-[#1f3b4d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#183040]"
          >
            Obtenir un devis
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="inline-flex rounded-full bg-[#e6efe8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#2f5a45]">
            Entreprise générale de rénovation
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Rénovation d’appartement et de maison en Île-de-France
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
            Entreprise de rénovation tous corps d’état. Devis gratuit,
            accompagnement complet, suivi de chantier et travaux garantis 10 ans.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#1f3b4d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#183040]"
            >
              Obtenir un devis gratuit
            </Link>
            <Link
              href="/calculateur-travaux"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
            >
              Calculer mon budget travaux
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-2 text-sm font-medium text-slate-700 sm:grid-cols-2">
            <p className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Devis gratuit</p>
            <p className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Accompagnement complet</p>
            <p className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Intervention en Île-de-France</p>
            <p className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Travaux garantis 10 ans</p>
          </div>
        </div>

        <aside className="rounded-3xl border border-[#dfe5e2] bg-gradient-to-br from-white to-[#f4f1e9] p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f5a45]">
            Votre chantier, structuré
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Une rénovation pensée pour durer</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">Projet sur mesure</li>
            <li className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">Suivi de chantier</li>
            <li className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">Interlocuteur unique</li>
            <li className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">Travaux garantis 10 ans</li>
          </ul>
        </aside>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Une rénovation menée avec méthode et exigence
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-[#f8faf9] p-5">
              <h3 className="font-semibold text-slate-900">Avis clients à intégrer</h3>
              <p className="mt-2 text-sm text-slate-600">
                Nous mettons en avant des retours d’expérience transparents et utiles.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#f8faf9] p-5">
              <h3 className="font-semibold text-slate-900">Suivi de chantier rigoureux</h3>
              <p className="mt-2 text-sm text-slate-600">
                Planning clair, coordination active et points d’avancement réguliers.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#f8faf9] p-5">
              <h3 className="font-semibold text-slate-900">Travaux garantis 10 ans</h3>
              <p className="mt-2 text-sm text-slate-600">
                Vos travaux sont encadrés avec les garanties prévues par la réglementation.
              </p>
            </article>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Avis client à intégrer</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                “Projet de rénovation intérieure bien encadré, échanges fluides et chantier propre.”
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-slate-500">
                Intervention en Île-de-France
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Avis client à intégrer</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                “Accompagnement clair du devis à la livraison, avec un vrai suivi de chantier.”
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-slate-500">
                Projet de rénovation intérieure
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Avis client à intégrer</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                “Interlocuteur unique rassurant, coordination des artisans sérieuse et efficace.”
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-slate-500">
                Intervention en Île-de-France
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Pourquoi choisir Serenys Rénovation ?</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">Suivi de chantier</h3>
            <p className="mt-2 text-sm text-slate-600">Un pilotage continu avec des points réguliers et des priorités claires.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">Interlocuteur unique</h3>
            <p className="mt-2 text-sm text-slate-600">Un contact dédié pour simplifier les décisions et les échanges.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">Coordination des corps de métier</h3>
            <p className="mt-2 text-sm text-slate-600">Organisation des interventions pour garantir cohérence, qualité et délais.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">Travaux garantis 10 ans</h3>
            <p className="mt-2 text-sm text-slate-600">Des garanties solides pour sécuriser votre investissement sur la durée.</p>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f4ec]">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Une rénovation menée étape par étape</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2f5a45]">Étape 1</p>
              <h3 className="mt-2 font-semibold text-slate-900">Échange sur votre projet</h3>
            </article>
            <article className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2f5a45]">Étape 2</p>
              <h3 className="mt-2 font-semibold text-slate-900">Visite et devis</h3>
            </article>
            <article className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2f5a45]">Étape 3</p>
              <h3 className="mt-2 font-semibold text-slate-900">Réalisation des travaux</h3>
            </article>
            <article className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2f5a45]">Étape 4</p>
              <h3 className="mt-2 font-semibold text-slate-900">Livraison du chantier</h3>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Nos prestations</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/services/renovation-appartement" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            Rénovation appartement
          </Link>
          <Link href="/services/renovation-maison" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            Rénovation maison
          </Link>
          <Link href="/services/renovation-salle-de-bain" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            Rénovation salle de bain
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Nos zones d’intervention</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/renovation/saint-cloud" className="rounded-xl border border-slate-200 bg-[#f8faf9] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white">
              Saint-Cloud
            </Link>
            <Link href="/renovation/boulogne-billancourt" className="rounded-xl border border-slate-200 bg-[#f8faf9] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white">
              Boulogne-Billancourt
            </Link>
            <Link href="/renovation/versailles" className="rounded-xl border border-slate-200 bg-[#f8faf9] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white">
              Versailles
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">FAQ</h2>
        <div className="mt-6 space-y-3">
          <details className="rounded-xl border border-slate-200 bg-white p-5" open>
            <summary className="cursor-pointer font-semibold text-slate-900">
              Combien coûte une rénovation d’appartement ?
            </summary>
            <p className="mt-2 text-sm text-slate-600">
              Le budget dépend de la surface, de l’état initial et du niveau de finition. Une visite permet d’établir un devis détaillé.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-slate-900">
              Combien de temps durent les travaux ?
            </summary>
            <p className="mt-2 text-sm text-slate-600">
              La durée varie selon le périmètre du chantier. Un planning prévisionnel est communiqué avant le démarrage.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-slate-900">
              Les travaux sont-ils garantis ?
            </summary>
            <p className="mt-2 text-sm text-slate-600">
              Oui, les travaux concernés sont couverts par la garantie décennale, selon les postes réalisés.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-slate-900">
              Proposez-vous un devis gratuit ?
            </summary>
            <p className="mt-2 text-sm text-slate-600">
              Oui, le premier échange et l’estimation initiale sont gratuits, afin de cadrer votre projet sereinement.
            </p>
          </details>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#1f3b4d] px-6 py-12 text-white">
          <h2 className="text-3xl font-bold">Lancez votre rénovation en toute confiance</h2>
          <p className="mt-3 max-w-2xl text-slate-200">
            Parlons de vos objectifs, de votre budget et du planning idéal pour votre chantier en Île-de-France.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </main>
  );
}
