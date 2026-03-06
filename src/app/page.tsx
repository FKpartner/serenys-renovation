import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { MethodStepsSection } from "@/components/sections/method-steps";
import { FaqSection } from "@/components/sections/faq-section";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-jsonld";

export const metadata: Metadata = {
  title: "Entreprise de rénovation en Île-de-France | Serenys Rénovation",
  description:
    "Rénovation d’appartement et de maison en Île-de-France. Devis gratuit, accompagnement complet et travaux garantis 10 ans.",
};

const trustBadges = [
  "Devis gratuit",
  "Accompagnement complet",
  "Intervention en Île-de-France",
  "Travaux garantis 10 ans",
];

const whyItems = [
  "Suivi de chantier",
  "Interlocuteur unique",
  "Coordination des corps de métier",
  "Travaux garantis 10 ans",
];

const faqItems = [
  {
    question: "Combien coûte une rénovation d’appartement ?",
    answer:
      "Le budget dépend surtout de la surface, de l’état du logement et du niveau de finition. Nous proposons une estimation initiale puis un devis détaillé après visite.",
  },
  {
    question: "Combien de temps durent les travaux ?",
    answer:
      "Un rafraîchissement peut durer quelques semaines, une rénovation complète plusieurs mois. Un planning précis est remis avant démarrage.",
  },
  {
    question: "Les travaux sont-ils garantis ?",
    answer:
      "Oui, les travaux couverts par la réglementation bénéficient d’une garantie décennale. Les conditions exactes sont précisées dans votre devis.",
  },
  {
    question: "Intervenez-vous en copropriété ?",
    answer:
      "Oui. Nous préparons le chantier en tenant compte du règlement de copropriété, des accès et des contraintes horaires.",
  },
  {
    question: "Proposez-vous un devis gratuit ?",
    answer:
      "Oui, le devis est gratuit et sans engagement après qualification de votre besoin et, si nécessaire, visite du bien.",
  },
];

const testimonialItems = [
  {
    title: "Projet à Saint-Cloud",
    text: "Avis client à intégrer.",
  },
  {
    title: "Projet à Versailles",
    text: "Avis client à intégrer.",
  },
  {
    title: "Travaux de rénovation intérieure",
    text: "Avis client à intégrer.",
  },
];

const realisations = [
  {
    title: "Rénovation d’appartement",
    description: "Rénovation intérieure complète avec redistribution des pièces.",
    city: "Saint-Cloud",
    image: "/images/realisations/appartement-saint-cloud.svg",
  },
  {
    title: "Rénovation de maison",
    description: "Modernisation des espaces de vie et finitions premium.",
    city: "Versailles",
    image: "/images/realisations/maison-versailles.svg",
  },
  {
    title: "Cuisine et salle de bain",
    description: "Refonte technique et esthétique de deux pièces clés.",
    city: "Boulogne-Billancourt",
    image: "/images/realisations/cuisine-boulogne.svg",
  },
];

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
      <LocalBusinessJsonLd pageUrl="https://www.serenys-renovation.fr" />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="text-lg font-extrabold tracking-tight md:text-xl">
            Serenys <span className="text-emerald-700">Rénovation</span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-700 lg:flex">
            <Link href="/">Accueil</Link>
            <a href="#prestations">Services</a>
            <Link href="/guides">Guides</Link>
            <Link href="/calculateur-travaux">Calculateur travaux</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="hidden gap-2 md:flex">
            <Link href="/contact" className="rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white">
              Devis gratuit
            </Link>
            <Link href="/calculateur-travaux" className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700">
              Discuter de mon projet
            </Link>
          </div>
        </div>
      </header>

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
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Rénovation d’appartement et de maison en Île-de-France
            </h1>
            <p className="mb-8 text-lg text-slate-200">
              Entreprise de rénovation tous corps d’état. Devis gratuit, accompagnement complet, suivi de chantier et travaux garantis 10 ans en Île-de-France.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-lg bg-emerald-600 px-6 py-3.5 text-center font-semibold text-white">
                Obtenir un devis gratuit
              </Link>
              <Link href="/calculateur-travaux" className="rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-center font-semibold text-white">
                Calculer mon budget travaux
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-7 px-6 pb-6">
        <div className="mx-auto grid max-w-6xl gap-3 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <p key={badge} className="rounded-full bg-slate-50 px-4 py-2 text-center text-sm font-semibold text-slate-700">
              {badge}
            </p>
          ))}
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-3">
          <article>
            <p className="text-sm text-slate-500">Avis clients / satisfaction</p>
            <p className="mt-1 text-xl font-bold">[Note moyenne à compléter]</p>
          </article>
          <article>
            <p className="text-sm text-slate-500">Positionnement</p>
            <p className="mt-1 text-xl font-bold">Entreprise de rénovation en Île-de-France</p>
          </article>
          <article>
            <p className="text-sm text-slate-500">Garantie</p>
            <p className="mt-1 text-xl font-bold">Travaux garantis 10 ans</p>
          </article>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Pourquoi choisir Serenys Rénovation ?</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyItems.map((item) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <MethodStepsSection />
        </div>
      </div>

      <section id="prestations" className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Nos prestations</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {prestations.map((item) => (
              <Link key={item.title} href={item.href} className="rounded-2xl border border-slate-200 p-6 hover:border-emerald-600">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-700">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Nos zones d’intervention</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link key={city.slug} href={`/renovation/${city.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 font-semibold hover:border-emerald-600">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Avis clients</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonialItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Nos réalisations</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {realisations.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="relative h-48 w-full bg-slate-200">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  {/* Ajouter les images dans /public/images/realisations/ pour remplacer les placeholders. */}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{project.city}</p>
                  <p className="mt-2 text-slate-700">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <FaqSection faqs={faqItems} />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Entreprise de rénovation en Île-de-France</h2>
          <p className="leading-8 text-slate-700">
            Serenys Rénovation accompagne les particuliers qui souhaitent moderniser un appartement ou une maison en Île-de-France. Notre équipe intervient sur des travaux intérieurs de différentes ampleurs : rafraîchissement, rénovation complète, reprise technique, cuisine, salle de bain et réaménagement des pièces de vie. Nous privilégions une méthode claire, avec un cadrage du besoin en amont, une visite technique, un devis structuré et un suivi de chantier lisible. Cette organisation permet d’avancer sereinement, avec un interlocuteur unique et des choix techniques expliqués simplement.
            Nous intervenons régulièrement dans les Hauts-de-Seine et les Yvelines, notamment pour des projets en copropriété où la coordination et le respect du cadre de chantier sont essentiels. Notre objectif est d’apporter une rénovation durable, adaptée à votre budget et à vos usages. Pour démarrer, vous pouvez demander un devis gratuit ou utiliser notre calculateur pour obtenir une première fourchette de budget avant échange avec l’équipe Serenys.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white">
              Obtenir un devis gratuit
            </Link>
            <Link href="/calculateur-travaux" className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800">
              Calculer mon budget travaux
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
