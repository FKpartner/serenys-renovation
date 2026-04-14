import type { Metadata } from "next";
import Link from "next/link";
import { WorkCalculator } from "@/components/home/work-calculator";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Zones", href: "/#villes" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Méthode", href: "/#methode" },
  { label: "Guides", href: "/#guides" },
  { label: "Contact", href: "/#contact" },
];

const points = [
  "Estimation indicative selon le type de travaux, la surface et la ville.",
  "Premier repère utile avant un devis détaillé et une visite technique.",
  "Approche pensée pour les projets de rénovation en Île-de-France.",
];

export const metadata: Metadata = {
  title: "Chiffrage travaux en Île-de-France | Serenys Rénovation",
  description:
    "Obtenez un premier chiffrage travaux pour votre rénovation d'appartement, maison, cuisine ou salle de bain en Île-de-France.",
  alternates: {
    canonical: "https://www.serenys-renovation.fr/chiffrage",
  },
};

export default function ChiffragePage() {
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

      <div className="border-b border-slate-200 bg-[#f7f5f0] px-4 py-3 lg:hidden">
        <Link
          href="/#contact"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#2f7d4f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#266741]"
        >
          Devis gratuit
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:pt-12">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-[#c9d6ca] bg-[#eaf2ea] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
              Chiffrage travaux
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Estimez le budget de vos travaux avant de demander un devis
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Cette page vous donne un premier repère pour votre projet de rénovation en
              appartement, maison, cuisine ou salle de bain en Île-de-France.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#d8ddd8] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
              À retenir
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2f7d4f] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#266741]"
            >
              Demander un devis précis
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <WorkCalculator />
      </section>
    </main>
  );
}
