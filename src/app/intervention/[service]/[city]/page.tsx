import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/sections/faq-section";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ service: string; city: string }>;
};

export async function generateStaticParams() {
  return services.flatMap((service) =>
    cities.map((city) => ({
      service: service.slug,
      city: city.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = services.find((item) => item.slug === serviceSlug);
  const city = cities.find((item) => item.slug === citySlug);

  if (!service || !city) {
    return { title: "Page introuvable" };
  }

  return {
    title: `${service.h1} à ${city.name} | Serenys Rénovation`,
    description: `${service.h1} à ${city.name} (${city.department}) : devis gratuit, suivi de chantier et intervention en Île-de-France.`,
  };
}

export default async function InterventionPage({ params }: Props) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = services.find((item) => item.slug === serviceSlug);
  const city = cities.find((item) => item.slug === citySlug);

  if (!service || !city) {
    notFound();
  }

  const faq = [
    {
      question: `Intervenez-vous rapidement à ${city.name} ?`,
      answer:
        "Nous planifions les visites selon disponibilité et zone d'intervention. Une première réponse est donnée rapidement après votre demande.",
    },
    {
      question: "Proposez-vous un devis gratuit ?",
      answer: "Oui, le devis est gratuit après qualification du projet et visite si nécessaire.",
    },
    {
      question: "Les travaux sont-ils garantis ?",
      answer: "Oui, les travaux concernés sont couverts par la garantie décennale.",
    },
    {
      question: "Intervenez-vous en copropriété ?",
      answer: "Oui, nous tenons compte des contraintes de copropriété et du règlement intérieur.",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl space-y-10">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Intervention locale</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">{service.h1} à {city.name}</h1>
          <p className="text-lg text-slate-700">Serenys Rénovation réalise votre projet de {service.h1.toLowerCase()} à {city.name} avec une méthode claire et un interlocuteur unique.</p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Ce que nous faisons pour vous</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Étude du besoin et cadrage budgétaire.</li>
            <li>• Coordination des travaux et suivi de chantier.</li>
            <li>• Réception soignée et travaux garantis.</li>
          </ul>
        </section>

        <FaqSection title={`FAQ ${service.h1.toLowerCase()} à ${city.name}`} faqs={faq} />

        <section className="rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-bold">Démarrer votre projet</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white">Demander un devis gratuit</Link>
            <Link href="/calculateur-travaux" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white">Calculer mon budget</Link>
            <Link href={`/services/${service.slug}`} className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white">Voir le service</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
