import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-jsonld";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Zones", href: "/renovation" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Équipe", href: "/equipe" },
  { label: "Guides", href: "/guides" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Rénovation d'appartement",
    description:
      "Redistribution des pièces, reprise des réseaux, menuiserie, plâtrerie, revêtements et finitions pour les appartements en Île-de-France.",
    href: "/services/renovation-appartement",
  },
  {
    title: "Rénovation de maison",
    description:
      "Rénovation intérieure, gros et second oeuvre, optimisation des volumes et coordination tous corps d'état.",
    href: "/services/renovation-maison",
  },
  {
    title: "Rénovation de cuisine",
    description:
      "Implantation, plomberie, électricité, verrière, revêtements et finitions pour une cuisine fonctionnelle et durable.",
    href: "/services/renovation-cuisine",
  },
  {
    title: "Rénovation de salle de bain",
    description:
      "Douche, baignoire, étanchéité, ventilation, carrelage et équipements avec un suivi soigné de l'exécution.",
    href: "/services/renovation-salle-de-bain",
  },
  {
    title: "Réparation après dégâts des eaux",
    description:
      "Recherche de remise en état, reprises des supports, séchage, réparation et finitions après sinistre ou infiltration.",
    href: "/services/renovation-appartement",
  },
  {
    title: "Plomberie et électricité",
    description:
      "Reprise des réseaux, mise en conformité, appareillages, alimentation et interventions techniques intégrées au chantier.",
    href: "/services/renovation-salle-de-bain",
  },
  {
    title: "Plâtrerie, carrelage et parquet",
    description:
      "Cloisons, faux plafonds, ragréage, carrelage, parquet et revêtements pour repartir sur une base saine et durable.",
    href: "/services/renovation-appartement",
  },
  {
    title: "Peinture, menuiserie et agencement sur mesure",
    description:
      "Peinture intérieure, finitions, verrières, rangements, menuiseries et solutions sur mesure pour optimiser l'espace.",
    href: "/services/renovation-cuisine",
  },
];

const projects = [
  {
    title: "Salle de bain principale à Bures-sur-Yvette",
    city: "Bures-sur-Yvette (91)",
    description:
      "Rénovation complète du sol au plafond, reprise de l'aération, réorganisation de l'espace et remplacement de la baignoire par une douche plus pratique.",
    href: "/services/renovation-salle-de-bain",
  },
  {
    title: "Appartement sinistré à Saint-Germain-en-Laye",
    city: "Saint-Germain-en-Laye (78)",
    description:
      "Ponçage complet, stabilisation du support, ragréage et reprise des enduits pour repartir sur une base saine avant le futur carrelage.",
    href: "/services/renovation-appartement",
  },
  {
    title: "Transformation de cuisine à Antony",
    city: "Antony (92)",
    description:
      "Dépose de l'existant, création d'une verrière sur mesure et reprise des peintures pour obtenir un rendu homogène, propre et durable.",
    href: "/services/renovation-cuisine",
  },
];

const cityLinks = [
  { label: "Saint-Cloud", href: "/renovation/saint-cloud" },
  { label: "Boulogne-Billancourt", href: "/renovation/boulogne-billancourt" },
  { label: "Rueil-Malmaison", href: "/renovation/rueil-malmaison" },
  { label: "Suresnes", href: "/renovation/suresnes" },
  { label: "Versailles", href: "/renovation/versailles" },
  { label: "Meudon", href: "/renovation/meudon" },
];

const reviews = [
  {
    author: "Édouard",
    location: "Yvelines",
    quote:
      "Serenys a mobilisé ses différents experts et artisans pour me faire une offre globale, particulièrement compétitive, dans un délai rapide avec un résultat de grande qualité.",
    detail: "Projet multi-lots avec maçonnerie, menuiserie, peinture et électricité.",
  },
  {
    author: "Client salle de bain",
    location: "Bures-sur-Yvette",
    quote:
      "Le chantier a été repensé de manière très concrète pour gagner en confort, en fonctionnalité et en qualité d'usage au quotidien.",
    detail: "Reprise complète de salle de bain avec aération, douche et réorganisation de l'espace.",
  },
  {
    author: "Client appartement",
    location: "Saint-Germain-en-Laye",
    quote:
      "L'enchaînement des étapes, la préparation des supports et la clarté du suivi ont permis d'avancer sereinement sur un chantier pourtant technique.",
    detail: "Reprise d'un appartement sinistré avec ponçage, ragréage et remise en état.",
  },
];

const methodSteps = [
  {
    title: "1. Demande de devis",
    description:
      "Nous recueillons vos besoins, les contraintes du bien, le niveau de finition attendu et les grandes lignes du budget.",
  },
  {
    title: "2. Visite technique",
    description:
      "Un rendez-vous sur place permet d'évaluer l'existant, les points techniques et les arbitrages à prévoir avant lancement.",
  },
  {
    title: "3. Chiffrage et planification",
    description:
      "Nous préparons un devis clair, les postes de travaux, le niveau de finition retenu et le planning de réalisation.",
  },
  {
    title: "4. Coordination du chantier",
    description:
      "Nous pilotons les corps d'état, le suivi d'avancement et les ajustements nécessaires jusqu'aux finitions.",
  },
  {
    title: "5. Livraison",
    description:
      "Nous faisons la réception du chantier avec vous pour valider le rendu final, les détails de finition et la bonne remise des espaces.",
  },
];

const faqs = [
  {
    question: "Dans quelles zones d'Île-de-France intervenez-vous ?",
    answer:
      "Nous intervenons principalement dans les Hauts-de-Seine et les Yvelines, notamment à Saint-Cloud, Boulogne-Billancourt, Rueil-Malmaison, Suresnes, Versailles et Meudon.",
  },
  {
    question: "Quels travaux de rénovation réalisez-vous ?",
    answer:
      "Nous intervenons sur l'essentiel des travaux de rénovation intérieure : plomberie, électricité, plâtrerie, peinture, menuiserie, revêtements, cuisine, salle de bain, maison et appartement.",
  },
  {
    question: "Pouvez-vous établir un devis pour des travaux de rénovation ?",
    answer:
      "Oui, la page d'accueil oriente vers un devis gratuit et un premier cadrage du budget pour vous aider à valider le projet avant le démarrage.",
  },
  {
    question: "Intervenez-vous sur des chantiers techniques ou après sinistre ?",
    answer:
      "Oui, nous pouvons accompagner des remises en état techniques, des reprises de supports, des réseaux et des rénovations après sinistre selon la nature du projet.",
  },
  {
    question: "Faites-vous aussi de l'agencement et du sur-mesure ?",
    answer:
      "Oui, nous pouvons intégrer l'agencement, les verrières, les menuiseries et les solutions sur mesure quand elles font partie du chantier.",
  },
];

export const metadata: Metadata = {
  title: "Entreprise de rénovation en Île-de-France | Serenys Rénovation",
  description:
    "Entreprise de rénovation en Île-de-France : rénovation d'appartement, maison, cuisine et salle de bain. Devis gratuit, suivi de chantier et intervention dans les Hauts-de-Seine et les Yvelines.",
  alternates: {
    canonical: "https://www.serenys-renovation.fr",
  },
  openGraph: {
    title: "Entreprise de rénovation en Île-de-France | Serenys Rénovation",
    description:
      "Rénovation d'appartement, maison, cuisine et salle de bain en Île-de-France. Demandez votre devis gratuit.",
    url: "https://www.serenys-renovation.fr",
    siteName: "Serenys Rénovation",
    locale: "fr_FR",
    type: "website",
  },
};

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}

export default function HomePage() {
  const whatsappLink = buildWhatsAppLink(
    "Bonjour, je souhaite échanger sur mon projet de rénovation."
  );

  return (
    <>
      <LocalBusinessJsonLd pageUrl="https://www.serenys-renovation.fr" />
      <main className="bg-[#f3f1ec] pb-20 text-slate-900 md:pb-0">
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f5f0]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
              <span className="text-[#2f7d4f]">Serenys</span> Rénovation
            </Link>

            <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-slate-900">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-white"
              >
                WhatsApp
              </a>
              <Link
                href="#contact"
                className="rounded-full bg-[#2f7d4f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#266741]"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-7 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-12">
          <div>
            <span className="inline-flex rounded-full border border-[#c9d6ca] bg-[#eaf2ea] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
              Entreprise de rénovation en Île-de-France
            </span>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-tight text-slate-900 sm:max-w-2xl sm:text-5xl">
              Des travaux bien faits, en toute sérénité
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Serenys Rénovation accompagne vos projets de rénovation intérieure en Île-de-France avec un devis clair, un budget cadré et un chantier bien piloté.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2f7d4f] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#266741]"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/realisations"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Voir nos réalisations
              </Link>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-700">
              <span className="font-semibold">20 ans d&apos;expérience BTP</span>
              <span aria-hidden="true">•</span>
              <span>Plus de 2000 chantiers réalisés</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Réponse sous 2h • Devis gratuit en 48h • Travaux garantis 10 ans
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ddd8] bg-gradient-to-br from-[#f9f7f2] to-[#ebe8de] p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)] sm:p-5">
            <Image
              src="/images/hero/Kevin-hero.png"
              alt="Kevin, fondateur de Serenys Rénovation"
              width={700}
              height={840}
              className="h-auto w-full rounded-3xl object-cover"
              priority
            />
            <div className="absolute bottom-8 left-7 rounded-2xl border border-white/70 bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">Intervention dans les Hauts-de-Seine et les Yvelines</p>
            </div>
          </div>
        </section>

        <section id="realisations" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <SectionTitle
            title="Exemples de réalisations en Île-de-France"
            subtitle="Quelques exemples de projets pour vous aider à visualiser le type d'interventions que nous réalisons en Île-de-France."
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-[#d9dfd9] bg-white p-5 shadow-sm">
                <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-[#f0eee7] to-[#e4e9de]" />
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#2f7d4f]">{project.city}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
                <Link href={project.href} className="mt-4 inline-flex text-sm font-semibold text-[#2f7d4f] hover:underline">
                  Voir la page locale
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="rounded-3xl border border-[#d5ddd3] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
              Avis clients
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.author + review.location}
                  className="rounded-2xl border border-slate-200 bg-[#fcfdfb] p-4"
                >
                  <p className="text-sm leading-relaxed text-slate-700">“{review.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{review.author}</p>
                  <p className="mt-1 text-sm text-[#2f7d4f]">{review.location}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{review.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <SectionTitle
            title="Nos services de rénovation en Île-de-France"
            subtitle="Les principaux types de rénovation et les métiers que nous mobilisons pour accompagner votre chantier en Île-de-France."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-[#d8dfd8] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <Link href={service.href} className="mt-4 inline-flex text-sm font-semibold text-[#2f7d4f] hover:underline">
                  En savoir plus
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="rounded-3xl border border-[#d5ddd3] bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionTitle
                  title="Besoin d'un premier chiffrage pour vos travaux ?"
                  subtitle="Accédez à notre page dédiée pour estimer une première enveloppe selon votre type de projet, votre surface et votre ville."
                />
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Cette estimation vous permet d&apos;avoir un premier repère avant de demander un devis
                  plus précis à notre équipe.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[#dbe2d9] bg-[#f8fbf7] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
                  Chiffrage travaux
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  Estimez rapidement votre budget rénovation
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Appartement, maison, cuisine ou salle de bain : obtenez une estimation indicative
                  en quelques clics.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/chiffrage"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2f7d4f] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#266741]"
                  >
                    Accéder au chiffrage
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-500"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="methode" className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <SectionTitle
            title="Notre méthode en 5 étapes pour piloter votre chantier"
            subtitle="Un déroulé clair pour cadrer, chiffrer, réaliser et livrer votre projet de rénovation en Île-de-France."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {methodSteps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-[#d9dfd9] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="rounded-3xl border border-[#d5ddd3] bg-white p-5 shadow-sm sm:p-8">
            <SectionTitle
              title="Questions fréquentes sur nos travaux de rénovation"
              subtitle="Une FAQ courte pour renforcer la compréhension de l'offre, des zones d'intervention et des intentions de recherche principales."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 bg-[#fcfdfb] p-5">
                  <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="rounded-3xl border border-[#d5ddd3] bg-white p-5 sm:p-8">
            <SectionTitle
              title="Parlez-nous de votre projet"
              subtitle="Décrivez vos travaux et recevez un premier retour pour cadrer le budget et la faisabilité."
            />
            <form className="mt-6 grid gap-4 md:grid-cols-2" aria-label="Formulaire de contact travaux">
              {[
                { label: "Nom", type: "text" },
                { label: "Téléphone", type: "tel" },
                { label: "Email", type: "email" },
                { label: "Ville", type: "text" },
              ].map((field) => (
                <label key={field.label} className="space-y-2 text-sm font-medium text-slate-700">
                  {field.label}
                  <input
                    type={field.type}
                    className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20"
                  />
                </label>
              ))}
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Type de travaux
                <select className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20">
                  <option>Rénovation d’appartement</option>
                  <option>Rénovation de maison</option>
                  <option>Rénovation de cuisine</option>
                  <option>Rénovation de salle de bain</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
                Message
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20"
                />
              </label>
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2f7d4f] px-6 py-3 text-base font-semibold text-white hover:bg-[#266741]"
              >
                Recevoir mon devis
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-12 border-t border-slate-200 bg-[#ebe7de]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
            <div>
              <p className="text-xl font-semibold text-slate-900">
                <span className="text-[#2f7d4f]">Serenys</span> Rénovation
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Rénovation intérieure en Île-de-France.
              </p>
              <p className="mt-4 text-sm text-slate-700">01 84 80 79 67</p>
              <p className="text-sm text-slate-700">contact@serenys-renovation.fr</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex text-sm font-semibold text-[#2f7d4f] hover:underline"
              >
                WhatsApp
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">
                Navigation
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <a href="#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <Link href="/renovation" className="hover:underline">
                    Zones d’intervention
                  </Link>
                </li>
                <li>
                  <a href="#realisations" className="hover:underline">
                    Réalisations
                  </a>
                </li>
                <li>
                  <Link href="/guides" className="hover:underline">
                    Guides
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">
                Liens SEO local
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <Link href="/renovation/saint-cloud" className="hover:underline">
                    Entreprise de rénovation à Saint-Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/renovation/boulogne-billancourt" className="hover:underline">
                    Entreprise de rénovation à Boulogne-Billancourt
                  </Link>
                </li>
                <li>
                  <Link href="/intervention/renovation-appartement/rueil-malmaison" className="hover:underline">
                    Rénovation d’appartement à Rueil-Malmaison
                  </Link>
                </li>
                <li>
                  <Link href="/intervention/renovation-salle-de-bain/saint-cloud" className="hover:underline">
                    Rénovation de salle de bain à Saint-Cloud
                  </Link>
                </li>
              </ul>

              <div className="mt-5">
                <h4 className="text-sm font-semibold text-slate-900">Zones d&apos;intervention</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cityLinks.map((city) => (
                    <Link
                      key={city.label}
                      href={city.href}
                      className="rounded-full border border-[#cad6c9] bg-[#f7faf6] px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-[#2f7d4f] hover:text-[#2f7d4f]"
                    >
                      {city.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">
                Informations
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <Link href="/guides" className="hover:underline">
                    Guides rénovation
                  </Link>
                </li>
                <li>
                  <Link href="/renovation" className="hover:underline">
                    Nos zones d’intervention
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap.xml" className="hover:underline">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
