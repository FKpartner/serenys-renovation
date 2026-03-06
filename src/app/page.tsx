import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const trustItems = [
  "Appartements & maisons",
  "Cuisine & salle de bain",
  "Intervention 92 & 78",
  "Devis gratuit",
];

const whyItems = [
  {
    title: "Accompagnement complet",
    text: "Un interlocuteur unique du cadrage du besoin à la réception du chantier.",
  },
  {
    title: "Qualité d’exécution",
    text: "Des artisans qualifiés et un contrôle qualité rigoureux à chaque étape.",
  },
  {
    title: "Réactivité",
    text: "Des échanges rapides et une gestion de projet claire, sans zone d’ombre.",
  },
  {
    title: "Focus local 92 / 78",
    text: "Une forte présence terrain dans les Hauts-de-Seine et les Yvelines.",
  },
];

export default function HomePage() {
  const whatsappLink = buildWhatsAppLink(
    "Bonjour Serenys Renovation, je souhaite discuter de mon projet de rénovation."
  );

const prestations = [
  ...services.map((service) => ({
    title: service.h1.replace("en Île-de-France", "").trim(),
    href: `/services/${service.slug}`,
    description: service.intro,
  })),
  {
    title: "Peinture intérieure",
    href: "/contact",
    description: "Préparation des supports et finitions soignées pour chaque pièce.",
  },
  {
    title: "Plomberie",
    href: "/contact",
    description: "Mise aux normes et création de réseaux pour vos travaux intérieurs.",
  },
  {
    title: "Électricité",
    href: "/contact",
    description: "Sécurisation et modernisation des installations électriques.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900">
            Serenys <span className="text-emerald-700">Renovation</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
            <Link href="/">Accueil</Link>
            <a href="#services">Services</a>
            <Link href="/guides">Guides</Link>
            <Link href="/calculateur-travaux">Calculateur travaux</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800"
            >
              Devis gratuit
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-400"
            >
              Discuter de mon projet
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />

      <section className="relative overflow-hidden bg-slate-900 text-white">
        <Image
          src="/images/hero/renovation-hero.svg"
          alt="Artisans en chantier de rénovation"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Ajouter le fichier /public/images/hero/renovation-hero.svg pour remplacer le placeholder visuel. */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Entreprise de rénovation en Île-de-France
            </p>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Votre projet de rénovation, piloté avec exigence
            </h1>
            <p className="mb-10 max-w-2xl text-lg text-slate-200 md:text-xl">
              Serenys Renovation accompagne la transformation de votre appartement
              ou maison avec une approche premium, transparente et orientée résultats.
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

      <section className="-mt-8 px-6 pb-8">
        <div className="mx-auto grid max-w-6xl gap-3 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4">
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

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-3 text-center text-4xl font-extrabold md:text-5xl">
            Nos services de rénovation
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-slate-600">
            Des prestations pensées pour moderniser votre habitat, valoriser votre
            bien et améliorer durablement votre confort.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-3 text-2xl font-bold text-slate-900">{service.h1}</h3>
                <p className="mb-6 text-slate-600">{service.intro}</p>
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
            Nous intervenons principalement dans les Hauts-de-Seine (92) et les
            Yvelines (78), notamment dans ces villes.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/renovation/${city.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-700 hover:shadow-md"
              >
                <h3 className="text-2xl font-bold text-slate-900">{city.name}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">{city.department}</p>
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
            {whyItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15"
              >
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-slate-200">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">
            Prêt à lancer votre rénovation ?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-emerald-50">
            Recevez une première estimation rapide et échangez directement avec
            notre équipe.
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
