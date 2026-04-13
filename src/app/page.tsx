import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WorkCalculator } from "@/components/home/work-calculator";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-jsonld";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Zones", href: "#villes" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Méthode", href: "#methode" },
  { label: "Guides", href: "#guides" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Rénovation d'appartement",
    description:
      "Redistribution des pièces, reprise des réseaux, finitions et pilotage du chantier pour les appartements en Île-de-France.",
    href: "/services/renovation-appartement",
  },
  {
    title: "Rénovation de maison",
    description:
      "Rénovation intérieure, amélioration du confort, modernisation des espaces et coordination tous corps d'état.",
    href: "/services/renovation-maison",
  },
  {
    title: "Rénovation de cuisine",
    description:
      "Implantation, plomberie, électricité, revêtements et finitions pour une cuisine fonctionnelle et durable.",
    href: "/services/renovation-cuisine",
  },
  {
    title: "Rénovation de salle de bain",
    description:
      "Douche, baignoire, étanchéité, ventilation, carrelage et équipements avec un suivi soigné de l'exécution.",
    href: "/services/renovation-salle-de-bain",
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

const guides = [
  {
    title: "Rénovation d'appartement : comment bien cadrer son budget",
    excerpt:
      "Les postes de coûts à anticiper et les questions à se poser avant de lancer son chantier.",
    href: "/guides/renovation-appartement-budget",
  },
  {
    title: "Rénovation de cuisine : les points clés avant de démarrer",
    excerpt:
      "Budget, implantation, matériaux et coordination des artisans pour éviter les mauvaises surprises.",
    href: "/guides/renovation-cuisine-conseils",
  },
  {
    title: "Rénovation de salle de bain : les étapes à ne pas négliger",
    excerpt:
      "Étanchéité, ventilation, plomberie et équipements : les incontournables d'une salle de bain réussie.",
    href: "/guides/renovation-salle-de-bain-etapes",
  },
];

const seoHighlights = [
  "Entreprise de rénovation en Île-de-France",
  "Travaux d'appartement, maison, cuisine et salle de bain",
  "Devis gratuit, budget cadré et suivi de chantier clair",
];

const proofStats = [
  {
    label: "Expérience métier",
    value: "20+ ans",
    detail: "Mentionnée sur le site historique Serenys Rénovation.",
  },
  {
    label: "Chantiers réalisés",
    value: "+2000",
    detail: "Argument déjà mis en avant par Serenys sur sa communication publique.",
  },
  {
    label: "Pilotage grands volumes",
    value: "250 collaborateurs",
    detail: "Équipe supervisée par Kevin Ohanian dans son parcours précédent.",
  },
  {
    label: "Ancrage local",
    value: "Conflans-Sainte-Honorine",
    detail: "Adresse publique affichée sur le site live.",
  },
];

const localProofs = [
  "Adresse publique : 9 avenue des Acacias, 78700 Conflans-Sainte-Honorine.",
  "Intervention annoncée dans toute l'Île-de-France, avec focus opérationnel sur les Hauts-de-Seine et les Yvelines.",
  "Parcours fondateur : CAP Sanitaire major Hauts-de-Seine, Brevet Professionnel, conduite de travaux et gestion de sinistres.",
  "Chantiers documentés sur Instagram à Bures-sur-Yvette, Saint-Germain-en-Laye et Antony.",
];

const featuredReview = {
  author: "Édouard",
  quote:
    "Serenys a mobilisé ses différents experts et artisans pour me faire une offre globale, particulièrement compétitive, dans un délai rapide avec un résultat de grande qualité.",
  detail:
    "Témoignage publié sur le site historique Serenys Rénovation à propos d'un chantier mêlant maçonnerie, menuiserie, peinture et électricité.",
};

const instagramProofs = [
  "Bures-sur-Yvette : réorganisation complète d'une salle de bain, reprise de l'aération et remplacement de la baignoire par une douche.",
  "Saint-Germain-en-Laye : reprise d'un appartement sinistré avec ponçage, ragréage et préparation des sols avant carrelage.",
  "Antony : dépose de cuisine, création d'une verrière sur mesure et reprise des peintures pour un rendu cohérent.",
  "Avant / après salle de bain : transformation d'une baignoire d'angle en douche à l'italienne avec matériaux plus durables.",
];

const methodSteps = [
  {
    title: "Cadrer le projet",
    description:
      "Nous échangeons sur vos besoins, les contraintes du bien, le niveau de finition recherché et le budget.",
  },
  {
    title: "Définir les priorités",
    description:
      "Nous construisons un plan d'action cohérent avec les travaux à engager, les délais visés et la réalité technique.",
  },
  {
    title: "Piloter le chantier",
    description:
      "Nous coordonnons les interventions et gardons un suivi lisible jusqu'aux finitions et à la livraison.",
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
      "Nous accompagnons les rénovations d'appartement, de maison, de cuisine et de salle de bain, avec coordination des corps d'état, reprise des réseaux et finitions.",
  },
  {
    question: "Pouvez-vous établir un devis pour des travaux de rénovation ?",
    answer:
      "Oui, la page d'accueil oriente vers un devis gratuit et un premier cadrage du budget pour vous aider à valider le projet avant le démarrage.",
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
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Entreprise de rénovation en Île-de-France pour vos projets d’appartement, maison, cuisine et salle de bain
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Serenys Rénovation accompagne les travaux intérieurs avec une approche claire :
              devis gratuit, budget cadré, coordination du chantier et finitions soignées.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2f7d4f] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#266741]"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/services/renovation-appartement"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Voir nos services
              </Link>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-700">
              <span className="font-semibold">20 ans d’expérience BTP</span>
              <span aria-hidden="true">•</span>
              <span>Plus de 2000 chantiers réalisés</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Réponse rapide • Devis gratuit • Intervention en Île-de-France
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

        <section className="border-y border-[#d7ddd5] bg-white/70">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:grid-cols-3 sm:px-6">
            {seoHighlights.map((item) => (
              <p
                key={item}
                className="rounded-xl border border-[#dbe2d9] bg-[#f8fbf7] px-4 py-3 text-sm font-semibold text-slate-800"
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-[#d5ddd3] bg-white p-6 shadow-sm sm:p-8">
              <SectionTitle
                title="Une entreprise de rénovation à l'écoute de votre projet"
                subtitle="Nous accompagnons les projets de rénovation intérieure en Île-de-France avec une approche claire, un devis gratuit et un suivi rigoureux du chantier."
              />
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                <p>
                  Nous intervenons sur des projets de rénovation intérieure en appartement et en maison,
                  avec une attention particulière au cadrage budgétaire, à la coordination des artisans et
                  à la qualité des finitions.
                </p>
                <p>
                  Chaque intervention est pensée pour améliorer le confort, la fonctionnalité et la cohérence
                  de votre espace, qu’il s’agisse d’une rénovation complète ou d’un réaménagement ciblé.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#d5ddd3] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">Accès rapides</h2>
              <ul className="mt-4 space-y-3 text-sm font-medium text-slate-700">
                <li>
                  <Link href="/services/renovation-appartement" className="hover:text-[#2f7d4f]">
                    Rénovation d’appartement en Île-de-France
                  </Link>
                </li>
                <li>
                  <Link href="/services/renovation-salle-de-bain" className="hover:text-[#2f7d4f]">
                    Rénovation de salle de bain
                  </Link>
                </li>
                <li>
                  <Link href="/renovation/saint-cloud" className="hover:text-[#2f7d4f]">
                    Entreprise de rénovation à Saint-Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/renovation/boulogne-billancourt" className="hover:text-[#2f7d4f]">
                    Entreprise de rénovation à Boulogne-Billancourt
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-[#2f7d4f]">
                    Guides rénovation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="rounded-3xl border border-[#d5ddd3] bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle
              title="Des repères concrets pour vous projeter"
              subtitle="Quelques éléments clés pour mieux comprendre notre expérience, notre ancrage local et le type de chantiers que nous accompagnons."
            />

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {proofStats.map((stat) => (
                <article key={stat.label} className="rounded-2xl border border-slate-200 bg-[#fcfdfb] p-5">
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{stat.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <article className="rounded-2xl border border-slate-200 bg-[#f7faf6] p-6">
                <h3 className="text-lg font-semibold text-slate-900">Ancrage local Serenys</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  {localProofs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
                  Témoignage client
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-800">
                  “{featuredReview.quote}”
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-900">{featuredReview.author}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{featuredReview.detail}</p>
              </article>
            </div>

            <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Exemples de chantiers récents
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Découvrez quelques exemples de travaux récemment menés pour illustrer notre manière
                de concevoir, préparer et transformer les espaces.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {instagramProofs.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#dbe2d9] bg-[#f8fbf7] p-4 text-sm leading-relaxed text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <SectionTitle
            title="Nos services de rénovation en Île-de-France"
            subtitle="Appartement, maison, cuisine ou salle de bain : nous intervenons sur les travaux les plus courants de rénovation intérieure."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <WorkCalculator />
        </section>

        <section id="methode" className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <SectionTitle
            title="Notre méthode pour piloter un chantier de rénovation"
            subtitle="Un déroulé simple pour avancer sereinement, de la prise de contact jusqu'à la livraison."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {methodSteps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-[#d9dfd9] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </article>
            ))}
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

        <section id="villes" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="rounded-3xl border border-[#d5ddd3] bg-white p-5 sm:p-8">
            <SectionTitle
              title="Nos zones d'intervention en Île-de-France"
              subtitle="Un maillage local cohérent entre la home et les pages ville pour mieux cibler les recherches géographiques."
            />
            <div className="mt-5 flex flex-wrap gap-2">
              {cityLinks.map((city) => (
                <Link
                  key={city.label}
                  href={city.href}
                  className="rounded-full border border-[#cad6c9] bg-[#f7faf6] px-4 py-2 text-sm font-medium text-slate-800 hover:border-[#2f7d4f] hover:text-[#2f7d4f]"
                >
                  {city.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="guides" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <SectionTitle
            title="Nos guides rénovation"
            subtitle="Des contenus informationnels pour travailler la longue traîne autour du budget, des étapes de chantier et des choix techniques."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {guides.map((guide) => (
              <article key={guide.title} className="rounded-2xl border border-[#d7ded7] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{guide.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{guide.excerpt}</p>
                <Link href={guide.href} className="mt-4 inline-flex text-sm font-semibold text-[#2f7d4f] hover:underline">
                  Lire le guide
                </Link>
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
                  <a href="#villes" className="hover:underline">
                    Zones d’intervention
                  </a>
                </li>
                <li>
                  <a href="#realisations" className="hover:underline">
                    Réalisations
                  </a>
                </li>
                <li>
                  <a href="#guides" className="hover:underline">
                    Guides
                  </a>
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
