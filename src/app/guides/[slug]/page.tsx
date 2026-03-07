import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/sections/faq-section";
import { guides } from "@/data/guides";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    return { title: "Guide introuvable" };
  }

  return {
    title: `${guide.title} | Serenys Rénovation`,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <article className="mx-auto max-w-4xl space-y-10">
        <header>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Guide rénovation</p>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">{guide.title}</h1>
          <p className="text-lg text-slate-700">{guide.description}</p>
        </header>

        <section className="space-y-4 rounded-2xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900">Comment utiliser ce guide</h2>
          <p className="text-slate-700">Commencez par définir vos priorités : fonctionnalité, niveau de finition et budget maximum. Cela vous aide à prendre les bonnes décisions dès le départ.</p>
          <h3 className="text-xl font-semibold text-slate-900">Checklist rapide</h3>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Identifier les travaux essentiels et les travaux optionnels.</li>
            <li>Prévoir une marge pour imprévus techniques.</li>
            <li>Comparer les délais selon les lots (peinture, plomberie, électricité).</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Questions à poser avant de signer un devis</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Quel est le calendrier prévisionnel détaillé ?</li>
            <li>• Qui coordonne les différents corps de métier ?</li>
            <li>• Quels postes peuvent évoluer selon l’état réel du chantier ?</li>
            <li>• Quelles garanties s’appliquent à mon projet ?</li>
          </ul>
        </section>

        <FaqSection
          includeSchema
          faqs={[
            {
              question: "Quel budget prévoir pour ce type de projet ?",
              answer:
                "Le budget dépend de la surface et du niveau de finition. Utilisez le calculateur pour une première base, puis demandez un devis précis.",
            },
            {
              question: "Combien de temps durent les travaux ?",
              answer:
                "Les délais varient selon la complexité technique et la coordination des lots. Un planning vous est transmis avant démarrage.",
            },
            {
              question: "Intervenez-vous en copropriété ?",
              answer:
                "Oui, nous réalisons régulièrement des rénovations en copropriété en tenant compte des contraintes d’immeuble.",
            },
            {
              question: "Comment obtenir une estimation personnalisée ?",
              answer:
                "Vous pouvez utiliser le calculateur travaux puis nous contacter pour une étude adaptée à votre logement.",
            },
          ]}
        />

        <section className="rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-bold">Passer de la lecture au projet concret</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/calculateur-travaux" className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white">Calculer mon budget</Link>
            <Link href="/contact" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white">Demander un devis</Link>
            <Link href="/services/renovation-appartement" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white">Voir les services</Link>
            <Link href="/renovation/saint-cloud" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white">Voir une page locale</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
