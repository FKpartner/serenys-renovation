import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/sections/faq-section";
import { MethodStepsSection } from "@/components/sections/method-steps";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);

  if (!city) {
    return { title: "Page introuvable" };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);

  if (!city) {
    notFound();
  }

  const closeCities = cities.filter((item) => item.slug !== city.slug).slice(0, 4);

  const faq = [
    {
      question: `Intervenez-vous à ${city.name} et dans les villes proches ?`,
      answer:
        `Oui, nous intervenons à ${city.name} et dans les communes voisines des Hauts-de-Seine et des Yvelines.`,
    },
    {
      question: "Réalisez-vous des rénovations d’appartement en copropriété ?",
      answer:
        "Oui, nous gérons régulièrement des chantiers en copropriété en respectant les contraintes d’accès, de bruit et de planning.",
    },
    {
      question: `Combien coûte une rénovation à ${city.name} ?`,
      answer:
        "Le budget varie selon la surface, l’état du bien et la qualité des finitions. Une visite permet de confirmer un devis précis.",
    },
    {
      question: "Combien de temps prennent les travaux ?",
      answer:
        "Le délai dépend de l’ampleur du chantier. Un planning prévisionnel est transmis avant le lancement des travaux.",
    },
    {
      question: "Les travaux sont-ils garantis ?",
      answer:
        "Oui, les travaux couverts par la réglementation bénéficient d’une garantie décennale.",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-14">
      <div className="mx-auto max-w-6xl space-y-12">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Zone locale</p>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">{city.h1}</h1>
          <p className="max-w-4xl text-lg text-slate-700">
            {city.intro} Nous intervenons sur des projets de rénovation intérieure en appartement et en maison, avec un suivi de chantier clair et un devis gratuit.
          </p>
          <p className="mt-2 text-sm text-slate-500">{city.department}</p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Quels travaux réalisons-nous à {city.name} ?</h2>
          <ul className="grid gap-2 text-slate-700 md:grid-cols-2">
            <li>• Rénovation d’appartement en copropriété</li>
            <li>• Rénovation de maison et redistribution intérieure</li>
            <li>• Cuisine, salle de bain et pièces d’eau</li>
            <li>• Travaux de peinture, plomberie et électricité</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Pourquoi faire appel à Serenys Rénovation à {city.name} ?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Connaissance des contraintes de chantier locales",
              "Coordination des travaux tous corps d’état",
              "Devis gratuit et cadrage du budget",
              "Travaux garantis 10 ans",
            ].map((point) => (
              <article key={point} className="rounded-2xl border border-slate-200 p-6">
                <p className="font-semibold text-slate-900">{point}</p>
              </article>
            ))}
          </div>
        </section>

        <MethodStepsSection />

        <section>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Réalisations près de chez vous</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <article key={index} className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="relative h-44 bg-slate-200">
                  <Image src="/images/placeholders/city-project.svg" alt={`Projet ${index} à ${city.name}`} fill className="object-cover" />
                  {/* Ajouter les images locales dans /public/images/realisations/. */}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">Projet à {city.name}</h3>
                  <p className="mt-2 text-slate-700">Rénovation intérieure - fiche réalisation à compléter avec photos avant/après.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FaqSection title={`FAQ rénovation à ${city.name}`} faqs={faq} />

        <section className="rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="text-3xl font-bold">Votre projet à {city.name}</h2>
          <p className="mt-3 max-w-2xl text-slate-200">Expliquez votre besoin en quelques lignes pour recevoir un devis gratuit et un premier retour rapide.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white">Demander un devis gratuit</Link>
            <Link href="/calculateur-travaux" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white">Calculer mon budget</Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Services et villes proches</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold">Services liés</h3>
              <ul className="space-y-1 text-sm">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/intervention/${service.slug}/${city.slug}`} className="hover:text-emerald-700">{service.h1} à {city.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Villes proches</h3>
              <ul className="space-y-1 text-sm">
                {closeCities.map((closeCity) => (
                  <li key={closeCity.slug}>
                    <Link href={`/renovation/${closeCity.slug}`} className="hover:text-emerald-700">{closeCity.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Liens utiles</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="/guides" className="hover:text-emerald-700">Guides rénovation</Link></li>
                <li><Link href="/calculateur-travaux" className="hover:text-emerald-700">Calculateur travaux</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-700">Contact</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
