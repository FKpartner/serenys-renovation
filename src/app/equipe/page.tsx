import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Zones", href: "/renovation" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Guides", href: "/guides" },
  { label: "Contact", href: "/#contact" },
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

const teamProfiles = [
  {
    name: "Julien",
    role: "Électricien",
    note: "Intervient sur les réseaux, mises en conformité, appareillages et préparation des points techniques.",
  },
  {
    name: "Yanis",
    role: "Plombier",
    note: "Prend en charge les alimentations, évacuations, équipements sanitaires et reprises après sinistre.",
  },
  {
    name: "Romain",
    role: "Carreleur",
    note: "Assure les préparations de supports, le calepinage, les finitions et la qualité des poses en pièces humides.",
  },
  {
    name: "Nassim",
    role: "Menuisier agenceur",
    note: "Réalise les verrières, rangements, ajustements sur mesure et finitions d'agencement.",
  },
];

export const metadata: Metadata = {
  title: "Équipe | Serenys Rénovation",
  description:
    "Découvrez Kevin Ohanian, le fonctionnement de Serenys Rénovation et les métiers mobilisés sur les chantiers.",
  alternates: {
    canonical: "https://www.serenys-renovation.fr/equipe",
  },
};

export default function EquipePage() {
  const whatsappLink = buildWhatsAppLink(
    "Bonjour, je souhaite échanger sur mon projet de rénovation."
  );

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
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:pt-12">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#c9d6ca] bg-[#eaf2ea] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
            Équipe
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            L&apos;équipe Serenys et notre manière de piloter vos travaux
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Une approche fondée sur l&apos;expérience terrain, un pilotage clair du
            chantier et des métiers mobilisés selon les besoins du projet.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <article className="overflow-hidden rounded-3xl border border-[#d9dfd9] bg-white shadow-sm">
          <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[320px]">
              <Image
                src="/images/hero/Kevin-hero.png"
                alt="Kevin Ohanian, fondateur de Serenys Rénovation"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[52%_18%]"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
                Le fondateur
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Kevin Ohanian</h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  Depuis ses 16 ans, Kevin Ohanian construit son parcours autour
                  de la rénovation et de l&apos;humain. Formé chez un artisan
                  plombier-chauffagiste, il y apprend l&apos;exigence, la rigueur et
                  le goût du travail bien fait.
                </p>
                <p>
                  Il sort major de promotion Hauts-de-Seine du CAP Sanitaire,
                  enrichit ensuite son expertise avec un Brevet Professionnel, puis
                  développe son expérience auprès de particuliers, de bailleurs
                  sociaux et de professionnels de l&apos;immobilier.
                </p>
                <p>
                  Au fil des années, il occupe des fonctions de conducteur de
                  travaux, de gestionnaire de sinistres pour des assureurs puis de
                  directeur d&apos;agence, avec la supervision de projets
                  multidisciplinaires et d&apos;une équipe de 250 collaborateurs.
                </p>
                <p>
                  Avec Serenys Rénovation, il revient à l&apos;essentiel : une approche
                  humaine et personnalisée, une volonté de travail bien fait et des
                  clients sereins à chaque étape du chantier.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-3xl border border-[#d9dfd9] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
            Méthode chantier
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">
            Notre méthode en 5 étapes
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {methodSteps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-[#d9dfd9] bg-[#fcfdfb] p-4">
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-3xl border border-[#d9dfd9] bg-white p-6 shadow-sm sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
              Métiers mobilisés
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              Exemples de profils chantier
            </h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {teamProfiles.map((profile) => (
              <article key={profile.name + profile.role} className="rounded-2xl border border-slate-200 bg-[#fcfdfb] p-5">
                <p className="text-lg font-semibold text-slate-900">{profile.name}</p>
                <p className="mt-1 text-sm font-medium text-[#2f7d4f]">{profile.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{profile.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
