import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Props = {
  params: Promise<{ slug: string }>;
};

type ServiceContent = {
  eyebrow: string;
  heroTitle: string;
  heroBody: string;
  highlights: string[];
  detailTitle: string;
  detailBody: string[];
  steps: string[];
  projectExamples: { title: string; city: string; description: string }[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
};

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Zones", href: "/#villes" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Méthode", href: "/#methode" },
  { label: "Guides", href: "/#guides" },
  { label: "Contact", href: "/#contact" },
];

const serviceContentBySlug: Record<string, ServiceContent> = {
  "renovation-appartement": {
    eyebrow: "Rénovation d'appartement",
    heroTitle:
      "Rénovation d'appartement en Île-de-France : un projet cadré, lisible et bien piloté",
    heroBody:
      "Nous accompagnons les rénovations d'appartement avec une méthode claire : définition des priorités, coordination des intervenants, suivi du chantier et finitions soignées. L'objectif est simple : transformer votre appartement sans vous laisser seul face aux arbitrages techniques.",
    highlights: [
      "Redistribution des pièces et amélioration de la circulation",
      "Reprise des sols, murs, plafonds et finitions",
      "Plomberie, électricité et coordination des corps d'état",
      "Travaux adaptés à la copropriété et au contexte du bien",
    ],
    detailTitle: "Ce que nous prenons en charge dans une rénovation d'appartement",
    detailBody: [
      "Une rénovation d'appartement demande de bien articuler les priorités : ce qui relève du confort, ce qui relève de la technique, et ce qui relève du budget. Nous vous aidons à mettre ces sujets dans le bon ordre pour éviter les décisions prises dans l'urgence.",
      "Nous intervenons sur les rénovations partielles comme sur les rénovations plus complètes : remise en état après sinistre, réaménagement intérieur, reprise des réseaux, modernisation des pièces d'eau, cuisine, peintures et finitions.",
    ],
    steps: [
      "Visite sur site pour comprendre le bien, les contraintes et le niveau de transformation souhaité.",
      "Cadrage des priorités, du budget et des postes à engager en premier.",
      "Planification du chantier avec coordination des lots techniques et suivi jusqu'à la livraison.",
    ],
    projectExamples: [
      {
        title: "Appartement sinistré à Saint-Germain-en-Laye",
        city: "Saint-Germain-en-Laye (78)",
        description:
          "Préparation complète des sols avec ponçage, stabilisation du support, ragréage et reprise des enduits pour repartir sur une base saine.",
      },
      {
        title: "Transformation intérieure à Antony",
        city: "Antony (92)",
        description:
          "Dépose de l'existant, création d'une verrière sur mesure et reprise des peintures pour retrouver un ensemble cohérent et propre.",
      },
      {
        title: "Appartement à Boulogne-Billancourt",
        city: "Boulogne-Billancourt (92)",
        description:
          "Réagencement des espaces, reprise des réseaux techniques et finitions pour améliorer le confort et la lecture du lieu.",
      },
    ],
    faqTitle: "Questions fréquentes sur la rénovation d'appartement",
    faqs: [
      {
        question: "Pouvez-vous intervenir dans un appartement en copropriété ?",
        answer:
          "Oui. Nous tenons compte des contraintes d'accès, des plages horaires, des parties communes et de l'organisation du chantier en immeuble.",
      },
      {
        question: "Faites-vous aussi les réseaux techniques ?",
        answer:
          "Oui, selon le projet nous coordonnons la plomberie, l'électricité, les reprises de supports, les finitions et les éléments sur mesure nécessaires à la rénovation.",
      },
      {
        question: "Peut-on rénover un appartement par étapes ?",
        answer:
          "Oui. Quand le budget ou l'usage du logement le demande, nous aidons à définir un phasage cohérent pour avancer progressivement sans perdre la logique d'ensemble.",
      },
    ],
  },
};

const fallbackServiceContent: ServiceContent = {
  eyebrow: "Service Serenys",
  heroTitle: "Des travaux de rénovation accompagnés avec méthode",
  heroBody:
    "Nous intervenons sur vos projets de rénovation en Île-de-France avec un cadrage clair, un suivi de chantier rigoureux et une attention forte portée aux finitions.",
  highlights: [
    "Étude du besoin et cadrage du projet",
    "Coordination des interventions",
    "Suivi des finitions et de la qualité d'exécution",
    "Devis gratuit et échanges clairs à chaque étape",
  ],
  detailTitle: "Un accompagnement pensé pour vos travaux",
  detailBody: [
    "Chaque projet est différent. Nous adaptons l'organisation du chantier au bien, au niveau de transformation souhaité et au budget disponible.",
  ],
  steps: [
    "Visite et échange sur vos besoins.",
    "Définition des priorités et du budget.",
    "Suivi du chantier jusqu'à la livraison.",
  ],
  projectExamples: [],
  faqTitle: "Questions fréquentes",
  faqs: [
    {
      question: "Pouvez-vous établir un devis ?",
      answer:
        "Oui, nous proposons un premier cadrage puis un devis adapté au projet, au bien et au niveau de finition visé.",
    },
  ],
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Page introuvable" };
  }

  return {
    title: `${service.h1} | Serenys Rénovation`,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.serenys-renovation.fr/services/${service.slug}`,
    },
  };
}

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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const content = serviceContentBySlug[service.slug] ?? fallbackServiceContent;
  const whatsappLink = buildWhatsAppLink(
    "Bonjour, je souhaite échanger sur mon projet de rénovation."
  );
  const localCities = cities.slice(0, 6);

  return (
    <main className="bg-[#f3f1ec] pb-20 text-slate-900 md:pb-0">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f5f0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            <span className="text-[#2f7d4f]">Serenys</span> Rénovation
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </Link>
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
              href="/#contact"
              className="rounded-full bg-[#2f7d4f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#266741]"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-white px-4 py-2 lg:hidden">
          <Link
            href="/#contact"
            className="block rounded-xl bg-[#2f7d4f] px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Devis gratuit
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-7 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-12">
        <div>
          <span className="inline-flex rounded-full border border-[#c9d6ca] bg-[#eaf2ea] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
            {content.eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            {content.heroBody}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2f7d4f] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#266741]"
            >
              Demander un devis gratuit
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-500"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#d8ddd8] bg-white p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
          <h2 className="text-lg font-semibold text-slate-900">
            Ce que nous pouvons améliorer dans votre appartement
          </h2>
          <div className="mt-5 grid gap-3">
            {content.highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#dbe2d9] bg-[#f8fbf7] px-4 py-4 text-sm font-medium leading-relaxed text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="rounded-3xl border border-[#d5ddd3] bg-white p-6 shadow-sm sm:p-8">
          <SectionTitle title={content.detailTitle} subtitle={service.intro} />
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            {content.detailBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionTitle
          title="Notre méthode pour piloter le chantier"
          subtitle="Un déroulé simple pour avancer sereinement, depuis le cadrage du projet jusqu'à la livraison."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {content.steps.map((step, index) => (
            <article key={step} className="rounded-2xl border border-[#d9dfd9] bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
                Étape {index + 1}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{step}</p>
            </article>
          ))}
        </div>
      </section>

      {content.projectExamples.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <SectionTitle
            title="Exemples de projets proches de cette demande"
            subtitle="Quelques repères concrets pour mieux visualiser le type d'interventions que nous accompagnons."
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {content.projectExamples.map((project) => (
              <article key={project.title} className="rounded-2xl border border-[#d9dfd9] bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-[#2f7d4f]">{project.city}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-[#d5ddd3] bg-white p-6 shadow-sm sm:p-8">
          <SectionTitle
            title="Zones d'intervention liées à ce service"
            subtitle="Retrouvez les pages locales les plus utiles pour cette prestation."
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {localCities.map((city) => (
              <Link
                key={city.slug}
                href={`/intervention/${service.slug}/${city.slug}`}
                className="rounded-full border border-[#cad6c9] bg-[#f7faf6] px-4 py-2 text-sm font-medium text-slate-800 hover:border-[#2f7d4f] hover:text-[#2f7d4f]"
              >
                {service.h1} à {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-[#d5ddd3] bg-white p-6 shadow-sm sm:p-8">
          <SectionTitle
            title={content.faqTitle}
            subtitle="Quelques réponses pour vous aider à mieux cadrer votre projet avant le premier échange."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-[#fcfdfb] p-5">
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Parlons de votre projet de {service.h1.toLowerCase()}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Décrivez votre appartement, vos contraintes et vos priorités. Nous revenons vers vous
            avec un premier cadrage du projet et un devis gratuit.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2f7d4f] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#266741]"
            >
              Devis gratuit
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/5"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
