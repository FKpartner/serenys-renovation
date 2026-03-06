import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const services = [
  {
    title: "Rénovation appartement",
    description:
      "Optimisation des volumes, modernisation complète et valorisation de votre bien.",
    href: "/services/renovation-appartement",
  },
  {
    title: "Rénovation maison",
    description:
      "Réaménagement intérieur, confort thermique et finitions premium pour votre maison.",
    href: "/services/renovation-maison",
  },
  {
    title: "Rénovation salle de bain",
    description:
      "Design, étanchéité, équipements durables et pose soignée pour une pièce d’eau moderne.",
    href: "/services/renovation-salle-de-bain",
  },
  {
    title: "Rénovation cuisine",
    description:
      "Cuisine fonctionnelle et élégante, pensée selon vos usages et votre budget.",
    href: "/services/renovation-cuisine",
  },
];

const cityLinks = [
  { name: "Saint-Cloud", href: "/renovation/saint-cloud", active: true },
  {
    name: "Boulogne-Billancourt",
    href: "/renovation/boulogne-billancourt",
    active: true,
  },
  { name: "Versailles", href: "/renovation/versailles", active: true },
  { name: "Rueil-Malmaison", href: "/contact", active: false },
  { name: "Suresnes", href: "/contact", active: false },
  { name: "Meudon", href: "/contact", active: false },
];

const trustItems = [
  "Appartements & maisons",
  "Salle de bain & cuisine",
  "Devis gratuit",
  "Intervention 92 & 78",
];

export default function HomePage() {
  const whatsappLink = buildWhatsAppLink(
    "Bonjour Serenys Renovation, je souhaite discuter de mon projet de rénovation."
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40" />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 md:pb-36 md:pt-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Vos travaux, notre engagement, votre sérénité
            </p>

            <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Entreprise de rénovation premium en Île-de-France
            </h1>

            <p className="mb-10 max-w-2xl text-lg text-slate-200 md:text-xl">
              Serenys Renovation transforme appartements et maisons avec un pilotage
              complet, des finitions haut de gamme et un accompagnement réactif.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-emerald-600 px-7 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-700"
              >
                Obtenez votre devis gratuit
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/40 bg-white/10 px-7 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/20"
              >
                Discuter de mon projet
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-6 pb-8">
        <div className="mx-auto grid max-w-6xl gap-3 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
          {trustItems.map((item) => (
            <p
              key={item}
              className="rounded-lg bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-3 text-center text-4xl font-extrabold md:text-5xl">
            Nos services de rénovation
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-slate-600">
            Une offre claire, pensée pour la rénovation intérieure haut de gamme,
            avec un niveau d’exigence constant de l’étude à la livraison.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-3 text-2xl font-bold text-slate-900">{service.title}</h3>
                <p className="mb-6 text-slate-600">{service.description}</p>
                <span className="text-sm font-semibold text-emerald-700">Découvrir →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-3 text-center text-4xl font-extrabold md:text-5xl">
            Zones d’intervention
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-slate-600">
            Serenys Renovation intervient en priorité dans les Hauts-de-Seine (92)
            et les Yvelines (78).
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cityLinks.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-700 hover:shadow-md"
              >
                <h3 className="text-2xl font-bold text-slate-900">{city.name}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {city.active ? "Page locale disponible" : "Intervention sur demande"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-extrabold md:text-5xl">
            Pourquoi choisir Serenys Renovation
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Accompagnement complet",
                text: "Un interlocuteur unique pour cadrer le projet, le budget et les délais.",
              },
              {
                title: "Qualité d’exécution",
                text: "Des artisans qualifiés et un niveau de finition premium à chaque étape.",
              },
              {
                title: "Réactivité",
                text: "Réponses rapides, arbitrages clairs et suivi chantier transparent.",
              },
              {
                title: "Focus local 92 / 78",
                text: "Une parfaite connaissance des contraintes et attentes locales.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-slate-200">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200 md:p-10">
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Ils nous choisissent pour notre sérieux
            </h2>
            <p className="mb-8 text-slate-600">
              Devis détaillé, communication claire, respect des engagements : notre
              objectif est de vous livrer un chantier propre, dans les délais.
            </p>

            <div className="grid gap-4 text-sm font-semibold text-slate-700 md:grid-cols-3">
              <p className="rounded-xl bg-slate-50 px-4 py-3">✓ Devis gratuit et rapide</p>
              <p className="rounded-xl bg-slate-50 px-4 py-3">✓ Contact WhatsApp direct</p>
              <p className="rounded-xl bg-slate-50 px-4 py-3">✓ Approche premium et locale</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">
            Donnez vie à votre projet de rénovation
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-emerald-50">
            Recevez une première estimation rapide et échangez avec notre équipe
            dès aujourd’hui.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-emerald-800 transition hover:bg-emerald-50"
            >
              Obtenez votre devis gratuit
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Discuter de mon projet
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
