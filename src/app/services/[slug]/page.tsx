import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/sections/faq-section";
import { MethodStepsSection } from "@/components/sections/method-steps";
import { cities } from "@/data/cities";
import { guides } from "@/data/guides";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
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
  };
}

function getFaq(h1: string) {
  return [
    {
      question: `Combien coûte ${h1.toLowerCase()} ?`,
      answer:
        "Le budget dépend de la surface, de l’état initial et du niveau de finition. Nous proposons une première fourchette puis un devis détaillé après visite.",
    },
    {
      question: "Combien de temps durent les travaux ?",
      answer:
        "La durée dépend de l’ampleur du projet et des lots techniques. Un planning prévisionnel vous est communiqué avant le démarrage.",
    },
    {
      question: "Faut-il quitter son logement pendant les travaux ?",
      answer:
        "Cela dépend du niveau d’intervention. Pour une rénovation lourde, un logement temporaire peut être plus confortable.",
    },
    {
      question: "Intervenez-vous en copropriété ?",
      answer:
        "Oui, nous intervenons régulièrement en copropriété en respectant les contraintes d’accès et d’horaires.",
    },
    {
      question: "Les travaux sont-ils garantis ?",
      answer:
        "Oui, les travaux couverts par la réglementation bénéficient d’une garantie décennale. Les détails sont précisés au devis.",
    },
  ];
}

const budgetRanges = [
  { label: "Rafraîchissement", value: "à partir de 400 €/m²" },
  { label: "Rénovation complète", value: "environ 800 à 1 300 €/m²" },
  { label: "Rénovation lourde", value: "à partir de 1 300 €/m²" },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const linkedCities = cities.slice(0, 6);
  const linkedGuides = guides.slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    provider: {
      "@type": "LocalBusiness",
      name: "Serenys Renovation",
    },
    areaServed: ["Île-de-France", "Hauts-de-Seine", "Yvelines"],
    description: service.intro,
  };

  return (
    <main className="min-h-screen bg-white px-6 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="mx-auto max-w-6xl space-y-12">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Service</p>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">{service.h1}</h1>
          <p className="max-w-4xl text-lg text-slate-700">{service.intro}</p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Quels travaux réalisons-nous ?</h2>
          <ul className="grid gap-3 text-slate-700 md:grid-cols-2">
            <li>• Dépose, préparation et remise à niveau des supports.</li>
            <li>• Travaux de peinture, plomberie et électricité selon besoin.</li>
            <li>• Aménagement des pièces d’eau et des espaces de vie.</li>
            <li>• Finitions soignées et contrôle qualité en fin de chantier.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Quel budget prévoir ?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {budgetRanges.map((item) => (
              <article key={item.label} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">{item.label}</h3>
                <p className="mt-2 text-emerald-700">{item.value}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Prix indicatifs à adapter selon la surface, l’état initial du bien, les contraintes techniques et le niveau de finition souhaité.
          </p>
        </section>

        <MethodStepsSection />

        <section>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Pourquoi faire appel à Serenys Rénovation ?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Devis gratuit",
              "Interlocuteur unique",
              "Coordination des travaux",
              "Intervention en Île-de-France",
              "Travaux garantis 10 ans",
            ].map((point) => (
              <article key={point} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800">
                {point}
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Réalisations liées</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <article key={index} className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="relative h-44 bg-slate-200">
                  <Image
                    src="/images/placeholders/service-project.svg"
                    alt={`Réalisation ${index} ${service.h1}`}
                    fill
                    className="object-cover"
                  />
                  {/* Ajouter les images dans /public/images/services/ pour remplacer les placeholders. */}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">Projet {index} - {service.h1}</h3>
                  <p className="text-sm text-slate-500">Hauts-de-Seine / Yvelines</p>
                  <p className="mt-2 text-slate-700">Réalisation à documenter : photos avant/après, contraintes techniques et résultat final.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FaqSection faqs={getFaq(service.h1)} />

        <section className="rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="text-3xl font-bold">Parlons de votre projet</h2>
          <p className="mt-3 max-w-2xl text-slate-200">Obtenez un cadrage clair du budget, des délais et des travaux à prévoir pour votre rénovation.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white">Demander un devis gratuit</Link>
            <Link href="/calculateur-travaux" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white">Calculer mon budget</Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Liens utiles pour préparer votre projet</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold">Villes liées</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                {linkedCities.map((city) => (
                  <li key={city.slug}>
                    <Link href={`/intervention/${service.slug}/${city.slug}`} className="hover:text-emerald-700">{service.h1} à {city.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Guides liés</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                {linkedGuides.map((guide) => (
                  <li key={guide.slug}>
                    <Link href={`/guides/${guide.slug}`} className="hover:text-emerald-700">{guide.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Actions rapides</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li><Link href="/calculateur-travaux" className="hover:text-emerald-700">Calculateur travaux</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-700">Page contact</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
