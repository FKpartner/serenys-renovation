import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/sections/faq-section";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides rénovation | Serenys Rénovation",
  description:
    "Guides pratiques pour préparer un projet de rénovation intérieure en Île-de-France : budget, planning, choix techniques et organisation des travaux.",
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Guides</p>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">Guides rénovation Serenys</h1>
          <p className="max-w-3xl text-lg text-slate-700">Des contenus structurés pour comparer les options, estimer le budget et préparer votre projet de travaux intérieurs.</p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-emerald-700">
              <h2 className="text-xl font-bold text-slate-900">{guide.title}</h2>
              <p className="mt-2 text-slate-700">{guide.description}</p>
            </Link>
          ))}
        </section>

        <section className="rounded-2xl bg-slate-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Liens rapides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/renovation-appartement" className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold">Service appartement</Link>
            <Link href="/renovation/saint-cloud" className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold">Rénovation à Saint-Cloud</Link>
            <Link href="/calculateur-travaux" className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold">Calculateur travaux</Link>
            <Link href="/contact" className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold">Contact</Link>
          </div>
        </section>

        <FaqSection
          faqs={[
            {
              question: "Pourquoi lire un guide avant de lancer mes travaux ?",
              answer:
                "Un guide vous aide à cadrer votre budget, les délais et les priorités techniques avant de demander des devis.",
            },
            {
              question: "Les guides remplacent-ils un devis ?",
              answer:
                "Non, ils donnent un cadre. Le devis précis nécessite une visite et l'analyse de votre bien.",
            },
            {
              question: "Puis-je demander une estimation après lecture ?",
              answer:
                "Oui, vous pouvez utiliser le calculateur puis nous contacter pour un échange personnalisé.",
            },
            {
              question: "Intervenez-vous dans ma ville ?",
              answer:
                "Nous intervenons principalement dans les Hauts-de-Seine et les Yvelines, avec extension possible selon le projet.",
            },
          ]}
        />
      </div>
    </main>
  );
}
