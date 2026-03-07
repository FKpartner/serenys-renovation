import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#fcfbf7] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#fcfbf7]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            Serenys Rénovation
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href="/services/renovation-appartement" className="hover:text-slate-900">
              Services
            </Link>
            <Link href="/renovation" className="hover:text-slate-900">
              Villes
            </Link>
            <a href="#equipe" className="hover:text-slate-900">
              Équipe
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#23465a] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#1b394a] sm:px-4 sm:text-sm"
            >
              Devis gratuit
            </Link>
            {/* TODO: Remplacer le numéro WhatsApp placeholder par le vrai numéro business */}
            <a
              href="https://wa.me/33000000000"
              target="_blank"
              rel="noreferrer"
              className="hidden text-xs font-semibold text-[#2f5d45] underline underline-offset-4 hover:text-[#254b39] sm:inline"
            >
              Échanger sur mon projet
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 px-4 py-2 md:hidden">
          <details>
            <summary className="cursor-pointer text-sm font-semibold text-slate-700">Menu</summary>
            <nav className="mt-3 grid gap-2 text-sm">
              <Link href="/services/renovation-appartement" className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
                Services
              </Link>
              <Link href="/renovation" className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
                Villes
              </Link>
              <a href="#equipe" className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
                Équipe
              </a>
              {/* TODO: Remplacer le numéro WhatsApp placeholder par le vrai numéro business */}
              <a
                href="https://wa.me/33000000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-[#e8f0ea] px-3 py-2 font-semibold text-[#2f5d45]"
              >
                Échanger sur mon projet
              </a>
            </nav>
          </details>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="inline-flex rounded-full bg-[#e5efe7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#2f5d45]">
            Entreprise générale de rénovation en Île-de-France
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
              className="rounded-xl bg-[#23465a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b394a]"
            >
              Obtenir un devis gratuit
            </Link>
            <Link
              href="/calculateur-travaux"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
            >
              Calculer mon budget travaux
            </Link>
            {/* TODO: Remplacer le numéro WhatsApp placeholder par le vrai numéro business */}
            <a
              href="https://wa.me/33000000000"
              target="_blank"
              rel="noreferrer"
              className="self-center text-sm font-semibold text-[#2f5d45] underline underline-offset-4 hover:text-[#254b39]"
            >
              Échanger sur mon projet
            </a>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-2 text-sm font-medium text-slate-700 sm:grid-cols-2">
            <p className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Devis gratuit</p>
            <p className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Accompagnement complet</p>
            <p className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Intervention en Île-de-France</p>
            <p className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Travaux garantis 10 ans</p>
          </div>
        </div>

        <aside className="rounded-3xl border border-[#dde4df] bg-gradient-to-br from-white to-[#f3efe5] p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2f5d45]">
            Présentation chantier
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Un accompagnement premium, même sans photo</h2>
          {/* TODO: Remplacer ce placeholder par une vraie photo du fondateur ou d'un chantier */}
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
            Placeholder photo fondateur / chantier
          </div>
          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Projet sur mesure</li>
            <li className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Suivi de chantier</li>
            <li className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Interlocuteur unique</li>
            <li className="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">Travaux garantis 10 ans</li>
          </ul>
        </aside>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Des repères concrets pour vous rassurer</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <article className="rounded-2xl border border-slate-200 bg-[#f9fbfa] p-4">
              <h3 className="font-semibold text-slate-900">20 ans d’expérience BTP</h3>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#f9fbfa] p-4">
              <h3 className="font-semibold text-slate-900">Plus de 2 000 chantiers</h3>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#f9fbfa] p-4">
              <h3 className="font-semibold text-slate-900">Suivi de chantier</h3>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#f9fbfa] p-4">
              <h3 className="font-semibold text-slate-900">Interlocuteur unique</h3>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#f9fbfa] p-4">
              <h3 className="font-semibold text-slate-900">Travaux garantis 10 ans</h3>
            </article>
          </div>
        </div>
      </section>

      <section id="equipe" className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* TODO: Remplacer ce placeholder par une vraie photo de l'équipe/fondateur */}
          <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-[#f8f6f1] text-sm text-slate-500">
            Placeholder photo fondateur
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Une entreprise portée par l’expérience terrain</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Fondateur avec 20 ans d’expérience dans le BTP. Plus de 2 000 chantiers accompagnés,
            avec une approche rigoureuse, humaine et orientée résultat.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Nous avançons avec vous à chaque étape, de la définition du projet jusqu’à la livraison.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-[#23465a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1b394a]">
              Demander un premier échange
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Avis et preuve sociale</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <p className="rounded-xl bg-[#eef4f0] px-4 py-3 text-sm font-semibold text-slate-700">Suivi rigoureux</p>
            <p className="rounded-xl bg-[#eef4f0] px-4 py-3 text-sm font-semibold text-slate-700">Entreprise de rénovation en Île-de-France</p>
            <p className="rounded-xl bg-[#eef4f0] px-4 py-3 text-sm font-semibold text-slate-700">Travaux garantis 10 ans</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Avis client à intégrer</p>
              <p className="mt-3 text-sm text-slate-600">“Projet de rénovation intérieure bien coordonné du début à la fin.”</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-slate-500">Intervention en Île-de-France</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Avis client à intégrer</p>
              <p className="mt-3 text-sm text-slate-600">“Un interlocuteur clair et un suivi de chantier rassurant.”</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-slate-500">Projet de rénovation intérieure</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Avis client à intégrer</p>
              <p className="mt-3 text-sm text-slate-600">“Entreprise sérieuse, échanges fluides et délais bien expliqués.”</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-slate-500">Intervention en Île-de-France</p>
            </article>
          </div>
          {/* TODO: Remplacer ces avis placeholders par de vrais avis clients vérifiés */}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-[#f8f6f1] p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Parlons de votre projet</h2>
          <p className="mt-2 text-slate-600">Remplissez ce formulaire pour recevoir un premier retour rapide.</p>

          {/* TODO: Connecter ce formulaire à un backend (API / CRM) pour traiter les leads */}
          <form className="mt-6 grid gap-4 md:grid-cols-2" action="#" method="post">
            <label className="grid gap-1 text-sm font-medium text-slate-700">
              Nom
              <input name="name" type="text" className="rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="Votre nom" />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700">
              Téléphone
              <input name="phone" type="tel" className="rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="06 00 00 00 00" />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700">
              Email
              <input name="email" type="email" className="rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="vous@email.com" />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700">
              Ville
              <input name="city" type="text" className="rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="Votre ville" />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700 md:col-span-2">
              Type de projet
              <input name="projectType" type="text" className="rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="Appartement, maison, salle de bain..." />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700 md:col-span-2">
              Message
              <textarea name="message" rows={4} className="rounded-lg border border-slate-300 bg-white px-3 py-2" placeholder="Décrivez votre projet" />
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-xl bg-[#23465a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b394a]"
              >
                Recevoir un devis gratuit
              </button>
            </div>
          </form>

          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-600">
            <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Réponse rapide</span>
            <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Devis gratuit</span>
            <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Sans engagement</span>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Estimez votre budget travaux en quelques clics</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Obtenez une première estimation de votre projet avant de lancer une étude détaillée avec notre équipe.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Une première estimation simple avant de demander un devis détaillé.
          </p>
          <Link
            href="/calculateur-travaux"
            className="mt-6 inline-flex rounded-xl bg-[#23465a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1b394a]"
          >
            Accéder au calculateur travaux
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Une rénovation menée étape par étape</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2f5d45]">Étape 1</p>
            <h3 className="mt-2 font-semibold text-slate-900">Échange sur votre projet</h3>
          </article>
          <article className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2f5d45]">Étape 2</p>
            <h3 className="mt-2 font-semibold text-slate-900">Visite et devis</h3>
          </article>
          <article className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2f5d45]">Étape 3</p>
            <h3 className="mt-2 font-semibold text-slate-900">Réalisation des travaux</h3>
          </article>
          <article className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2f5d45]">Étape 4</p>
            <h3 className="mt-2 font-semibold text-slate-900">Livraison du chantier</h3>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Nos prestations</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/services/renovation-appartement" className="rounded-xl border border-slate-200 bg-[#fafaf9] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white">
              Rénovation appartement
            </Link>
            <Link href="/services/renovation-maison" className="rounded-xl border border-slate-200 bg-[#fafaf9] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white">
              Rénovation maison
            </Link>
            <Link href="/services/renovation-salle-de-bain" className="rounded-xl border border-slate-200 bg-[#fafaf9] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white">
              Rénovation salle de bain
            </Link>
            <Link href="/services/renovation-cuisine" className="rounded-xl border border-slate-200 bg-[#fafaf9] px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white">
              Rénovation cuisine
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Villes principales d’intervention</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/renovation/saint-cloud" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            Saint-Cloud
          </Link>
          <Link href="/renovation/boulogne-billancourt" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            Boulogne-Billancourt
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
