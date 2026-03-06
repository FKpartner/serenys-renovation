import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function HomePage() {
  const whatsappLink = buildWhatsAppLink(
    "Bonjour Serenys Renovation, je souhaite discuter de mon projet de rénovation."
  );

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-gray-900/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              Rénovation intérieure en Île-de-France
            </p>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Votre entreprise de rénovation en Île-de-France
            </h1>

            <p className="mb-10 max-w-2xl text-lg text-gray-200 md:text-xl">
              Experts de la rénovation d’appartements et maisons dans les
              Hauts-de-Seine (92) et les Yvelines (78).
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-green-700 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-green-800"
              >
                Obtenez votre devis gratuit
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-green-500 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-green-600"
              >
                Discuter de mon projet
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 text-center text-xl font-semibold text-gray-800 md:text-2xl">
          <span>APPARTEMENTS ✓</span>
          <span>MAISONS ✓</span>
          <span>SALLE DE BAIN ✓</span>
          <span>CUISINE ✓</span>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Nos services de rénovation
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <Link
              href="/services/renovation-appartement"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                Rénovation appartement
              </h3>
              <p className="text-gray-600">
                Modernisation complète ou partielle de votre appartement en
                Île-de-France.
              </p>
            </Link>

            <Link
              href="/services/renovation-maison"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                Rénovation maison
              </h3>
              <p className="text-gray-600">
                Réagencement, remise à neuf et valorisation de votre maison.
              </p>
            </Link>

            <Link
              href="/services/renovation-salle-de-bain"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                Rénovation salle de bain
              </h3>
              <p className="text-gray-600">
                Confort, esthétique et fonctionnalité pour votre pièce d’eau.
              </p>
            </Link>

            <Link
              href="/services/renovation-cuisine"
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                Rénovation cuisine
              </h3>
              <p className="text-gray-600">
                Des cuisines pensées pour votre usage, votre espace et votre
                budget.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Nos zones d’intervention
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <Link
              href="/renovation/saint-cloud"
              className="rounded-2xl border border-gray-200 p-8 transition hover:border-green-700 hover:shadow-md"
            >
              <h3 className="mb-3 text-2xl font-semibold">Saint-Cloud</h3>
              <p className="text-gray-600">
                Rénovation d’appartement, maison, cuisine et salle de bain.
              </p>
            </Link>

            <Link
              href="/renovation/boulogne-billancourt"
              className="rounded-2xl border border-gray-200 p-8 transition hover:border-green-700 hover:shadow-md"
            >
              <h3 className="mb-3 text-2xl font-semibold">
                Boulogne-Billancourt
              </h3>
              <p className="text-gray-600">
                Projets de rénovation intérieure sur mesure dans le 92.
              </p>
            </Link>

            <Link
              href="/renovation/versailles"
              className="rounded-2xl border border-gray-200 p-8 transition hover:border-green-700 hover:shadow-md"
            >
              <h3 className="mb-3 text-2xl font-semibold">Versailles</h3>
              <p className="text-gray-600">
                Entreprise de rénovation pour appartements et maisons dans le 78.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Votre projet commence ici
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Vous avez un projet de rénovation en Île-de-France ?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Échangez avec Serenys Renovation pour obtenir une première orientation
            rapide, un devis ou un échange sur WhatsApp.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-green-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Demandez votre devis gratuit
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-green-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              Discuter de mon projet
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}