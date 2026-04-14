import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

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

export const metadata: Metadata = {
  title: "Réalisations | Serenys Rénovation",
  description:
    "Découvrez quelques exemples de réalisations Serenys Rénovation en Île-de-France.",
  alternates: {
    canonical: "https://www.serenys-renovation.fr/realisations",
  },
};

export default function RealisationsPage() {
  const whatsappLink = buildWhatsAppLink(
    "Bonjour, je souhaite échanger sur mon projet de rénovation."
  );

  return (
    <main className="min-h-screen bg-[#f3f1ec] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f5f0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            <span className="text-[#2f7d4f]">Serenys</span> Rénovation
          </Link>

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
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:pt-12">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#c9d6ca] bg-[#eaf2ea] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
            Réalisations
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Exemples de chantiers réalisés en Île-de-France
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Découvrez quelques projets suivis par Serenys Rénovation pour mieux
            visualiser notre niveau d&apos;exécution et le type d&apos;interventions que
            nous accompagnons.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-[#d9dfd9] bg-white p-5 shadow-sm"
            >
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-[#f0eee7] to-[#e4e9de]" />
              <h2 className="text-2xl font-semibold text-slate-900">{project.title}</h2>
              <p className="mt-2 text-sm font-medium text-[#2f7d4f]">{project.city}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <Link
                href={project.href}
                className="mt-5 inline-flex text-sm font-semibold text-[#2f7d4f] hover:underline"
              >
                En savoir plus
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
