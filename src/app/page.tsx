import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WorkCalculator } from "@/components/home/work-calculator";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-jsonld";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Villes", href: "#villes" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Équipe", href: "#equipe" },
  { label: "Avis", href: "#avis" },
  { label: "Guides", href: "#guides" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Rénovation salle de bain",
    description: "Conception, plomberie, carrelage et finitions premium pour une salle de bain durable.",
    href: "/services/renovation-salle-de-bain",
    icon: "🛁",
  },
  {
    title: "Électricité",
    description: "Mise aux normes, tableau électrique et modernisation complète de vos installations.",
    href: "/services/renovation-appartement",
    icon: "💡",
  },
  {
    title: "Plomberie",
    description: "Réseaux, équipements et dépannage planifié pour un confort sans mauvaise surprise.",
    href: "/services/renovation-maison",
    icon: "🚰",
  },
  {
    title: "Rénovation d’appartement",
    description: "Gestion tous corps d’état avec interlocuteur unique et pilotage chantier rigoureux.",
    href: "/services/renovation-appartement",
    icon: "🏠",
  },
  {
    title: "Peinture intérieure",
    description: "Préparation des supports, choix des teintes et rendu soigné pièce par pièce.",
    href: "/services/renovation-maison",
    icon: "🎨",
  },
  {
    title: "Revêtements & finitions",
    description: "Parquet, sols, habillages muraux et finitions haut de gamme adaptées à votre style.",
    href: "/services/renovation-appartement",
    icon: "🧱",
  },
];

const projects = [
  {
    title: "Salle de bain à Saint-Cloud",
    city: "Saint-Cloud",
    description: "Transformation complète d’une salle de bain familiale avec matériaux premium.",
    href: "/intervention/renovation-salle-de-bain/saint-cloud",
  },
  {
    title: "Rénovation appartement à Boulogne",
    city: "Boulogne-Billancourt",
    description: "Réagencement des espaces, reprise des réseaux et finitions sur mesure.",
    href: "/intervention/renovation-appartement/boulogne-billancourt",
  },
  {
    title: "Mise aux normes électrique à Rueil-Malmaison",
    city: "Rueil-Malmaison",
    description: "Sécurisation complète et modernisation électrique dans un appartement ancien.",
    href: "/intervention/renovation-appartement/rueil-malmaison",
  },
];

const cityLinks = [
  { label: "Saint-Cloud", href: "/renovation/saint-cloud" },
  { label: "Boulogne-Billancourt", href: "/renovation/boulogne-billancourt" },
  { label: "Rueil-Malmaison", href: "/renovation/rueil-malmaison" },
  { label: "Suresnes", href: "/renovation/suresnes" },
  { label: "Paris 16", href: "/renovation/versailles" },
  { label: "Neuilly-sur-Seine", href: "/renovation/meudon" },
  { label: "Courbevoie", href: "/renovation/boulogne-billancourt" },
  { label: "Issy-les-Moulineaux", href: "/renovation/meudon" },
];

const guides = [
  {
    title: "Quel budget pour rénover une salle de bain ?",
    excerpt: "Les postes de coût à prévoir pour cadrer votre budget avant de lancer le chantier.",
    href: "/guides/renovation-salle-de-bain-etapes",
  },
  {
    title: "Comment choisir une entreprise de rénovation ?",
    excerpt: "Les critères concrets pour sélectionner un artisan fiable et bien assuré en Île-de-France.",
    href: "/guides/renovation-appartement-budget",
  },
  {
    title: "Refaire l’électricité d’un appartement : prix et étapes",
    excerpt: "Méthode, points de vigilance et estimation pour une mise aux normes réussie.",
    href: "/guides/renovation-cuisine-conseils",
  },
  {
    title: "Plomberie : quand faut-il tout remplacer ?",
    excerpt: "Signes d’usure, choix techniques et arbitrages entre réparation et rénovation complète.",
    href: "/guides",
  },
  {
    title: "Les erreurs à éviter avant des travaux",
    excerpt: "Checklist simple pour démarrer votre projet dans de bonnes conditions.",
    href: "/guides",
  },
];

export const metadata: Metadata = {
  title: "Serenys Rénovation | Votre expert rénovation en Île-de-France",
  description:
    "Entreprise de rénovation en Île-de-France : salle de bain, plomberie, électricité et rénovation intérieure. Devis gratuit et réponse rapide.",
  openGraph: {
    title: "Votre expert rénovation en Île-de-France | Serenys Rénovation",
    description:
      "20 ans d’expérience BTP, +2000 chantiers réalisés. Demandez votre devis travaux gratuit.",
    url: "https://www.serenys-renovation.fr",
    siteName: "Serenys Rénovation",
    locale: "fr_FR",
    type: "website",
  },
};

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{subtitle}</p>
    </div>
  );
}

export default function HomePage() {
  const whatsappLink = buildWhatsAppLink("Bonjour, je souhaite échanger sur mon projet de rénovation.");

  return (
    <>
      <LocalBusinessJsonLd pageUrl="https://www.serenys-renovation.fr" />
      <main className="bg-[#f3f1ec] pb-20 text-slate-900 md:pb-0">
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f5f0]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
              <span className="text-[#2f7d4f]">Serenys</span> Rénovation
            </Link>

            <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-slate-900">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-white"
              >
                WhatsApp : échanger sur mon projet
              </a>
              <Link
                href="#contact"
                className="rounded-full bg-[#2f7d4f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#266741]"
              >
                Devis gratuit
              </Link>
            </div>

            <details className="group lg:hidden">
              <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800">
                ☰
              </summary>
              <div className="absolute inset-x-0 top-[68px] border-b border-slate-200 bg-[#f7f5f0] p-4 shadow-lg">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a key={item.label} href={item.href} className="rounded-xl px-3 py-2 text-base font-medium text-slate-800 hover:bg-white">
                      {item.label}
                    </a>
                  ))}
                  <Link href="#contact" className="mt-2 rounded-xl bg-[#2f7d4f] px-4 py-3 text-center font-semibold text-white">
                    Devis gratuit
                  </Link>
                  <a href="tel:+33184807967" className="rounded-xl border border-slate-300 px-4 py-3 text-center font-semibold text-slate-800">
                    Appeler
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-300 px-4 py-3 text-center font-semibold text-slate-800">
                    WhatsApp
                  </a>
                </div>
              </div>
            </details>
          </div>
          <div className="border-t border-slate-200 bg-white px-4 py-2 lg:hidden">
            <Link href="#contact" className="block rounded-xl bg-[#2f7d4f] px-4 py-2.5 text-center text-sm font-semibold text-white">
              Devis gratuit
            </Link>
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-7 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-12">
          <div>
            <span className="inline-flex rounded-full border border-[#c9d6ca] bg-[#eaf2ea] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#2f7d4f]">
              Entreprise de rénovation en Île-de-France
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Votre expert rénovation en Île-de-France
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              20 ans d’expérience BTP, plus de 2000 chantiers réalisés. Salle de bain, plomberie,
              électricité, rénovation intérieure.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2f7d4f] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#266741]">
                Obtenir un devis gratuit
              </Link>
              <a href="tel:+33184807967" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-50">
                Appeler maintenant
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-700">
              <span className="text-[#c9952f]">★★★★★</span>
              <span className="font-semibold">4,8/5 sur Google</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">Réponse rapide • Devis gratuit • Artisans qualifiés</p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ddd8] bg-gradient-to-br from-[#f9f7f2] to-[#ebe8de] p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)] sm:p-5">
            <Image
              src="/images/hero/Kevin-hero.png"
              alt="Kevin, fondateur de Serenys Rénovation"
              width={700}
              height={840}
              className="h-auto w-full rounded-3xl object-cover"
              priority
            />
            <div className="absolute bottom-8 left-7 rounded-2xl border border-white/70 bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">+2000 chantiers réalisés</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d7ddd5] bg-white/70">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            {[
              "20 ans d’expérience BTP",
              "+2000 projets réalisés",
              "Artisans qualifiés et assurés",
              "Intervention rapide en Île-de-France",
            ].map((item) => (
              <p key={item} className="rounded-xl border border-[#dbe2d9] bg-[#f8fbf7] px-4 py-3 text-sm font-semibold text-slate-800">
                ✓ {item}
              </p>
            ))}
          </div>
        </section>

        <section id="avis" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="rounded-3xl border border-[#d5ddd3] bg-white p-5 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="rounded-xl bg-slate-100 px-4 py-2 text-base font-semibold text-slate-700">Google</span>
                <div>
                  <p className="text-3xl font-semibold text-slate-900">4,8/5</p>
                  <p className="text-sm text-slate-600">4,8/5 – Note moyenne sur Google</p>
                </div>
              </div>
              <a href="#" className="rounded-full bg-[#2f7d4f] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#266741]">
                Voir tous les avis
              </a>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                "Travaux impeccables et équipe très professionnelle. Chantier terminé dans les délais.",
                "Très bonne communication, devis clair et résultat soigné.",
                "Intervention sérieuse pour rénovation salle de bain et plomberie.",
              ].map((review) => (
                <article key={review} className="rounded-2xl border border-slate-200 bg-[#fcfdfb] p-4">
                  <p className="text-sm leading-relaxed text-slate-700">“{review}”</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Client Île-de-France</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <SectionTitle
            title="Nos services rénovation en Île-de-France"
            subtitle="Une équipe coordonnée pour des travaux clairs, soignés et pilotés de bout en bout."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-[#d8dfd8] bg-white p-5 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4ec] text-lg">{service.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <Link href={service.href} className="mt-4 inline-flex text-sm font-semibold text-[#2f7d4f] hover:underline">
                  En savoir plus
                </Link>
              </article>
            ))}
          </div>
          <Link href="/renovation" className="mt-6 inline-flex rounded-full bg-[#2f7d4f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#266741]">
            Voir tous les services
          </Link>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <WorkCalculator />
        </section>

        <section id="equipe" className="mx-auto grid max-w-7xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-[#d6ddd6] bg-white p-3 shadow-sm">
            <Image src="/images/kevin-founder.svg" alt="Portrait de Kevin, fondateur Serenys" width={640} height={760} className="h-auto w-full rounded-2xl" />
          </div>
          <div>
            <SectionTitle
              title="Un interlocuteur expérimenté pour vos travaux"
              subtitle="Kevin, fondateur de Serenys, s’appuie sur 20 ans d’expérience dans le BTP avec une exigence forte sur la qualité, le suivi et la transparence."
            />
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["20 ans d’expérience BTP", "+2000 chantiers", "Suivi rigoureux du chantier"].map((item) => (
                <p key={item} className="rounded-2xl border border-[#d9e1d8] bg-white px-4 py-4 text-sm font-semibold text-slate-800">
                  {item}
                </p>
              ))}
            </div>
            <Link href="#contact" className="mt-6 inline-flex rounded-full bg-[#2f7d4f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#266741]">
              Parler de mon projet
            </Link>
          </div>
        </section>

        <section id="realisations" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <SectionTitle
            title="Réalisations récentes"
            subtitle="Découvrez des exemples de chantiers avant/après menés en Île-de-France."
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-[#d9dfd9] bg-white p-5 shadow-sm">
                <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-[#f0eee7] to-[#e4e9de]" />
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#2f7d4f]">{project.city}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
                <Link href={project.href} className="mt-4 inline-flex text-sm font-semibold text-[#2f7d4f] hover:underline">
                  Voir le projet
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="villes" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="rounded-3xl border border-[#d5ddd3] bg-white p-5 sm:p-8">
            <SectionTitle
              title="Nos zones d’intervention"
              subtitle="Serenys Rénovation intervient dans plusieurs villes d’Île-de-France pour vos projets de rénovation intérieure."
            />
            <div className="mt-5 flex flex-wrap gap-2">
              {cityLinks.map((city) => (
                <Link key={city.label} href={city.href} className="rounded-full border border-[#cad6c9] bg-[#f7faf6] px-4 py-2 text-sm font-medium text-slate-800 hover:border-[#2f7d4f] hover:text-[#2f7d4f]">
                  {city.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="guides" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <SectionTitle
            title="Nos guides travaux"
            subtitle="Des conseils clairs pour préparer votre rénovation."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <article key={guide.title} className="rounded-2xl border border-[#d7ded7] bg-white p-5 shadow-sm">
                <div className="mb-4 h-28 rounded-xl bg-[#eff3ea]" />
                <h3 className="text-lg font-semibold text-slate-900">{guide.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{guide.excerpt}</p>
                <Link href={guide.href} className="mt-4 inline-flex text-sm font-semibold text-[#2f7d4f] hover:underline">
                  Lire le guide
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="rounded-3xl border border-[#d5ddd3] bg-white p-5 sm:p-8">
            <SectionTitle
              title="Parlez-nous de votre projet"
              subtitle="Décrivez votre besoin et recevez un premier retour rapide."
            />
            <form className="mt-6 grid gap-4 md:grid-cols-2" aria-label="Formulaire de contact travaux">
              {[
                { label: "Nom", type: "text" },
                { label: "Téléphone", type: "tel" },
                { label: "Email", type: "email" },
                { label: "Ville", type: "text" },
              ].map((field) => (
                <label key={field.label} className="space-y-2 text-sm font-medium text-slate-700">
                  {field.label}
                  <input type={field.type} className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20" />
                </label>
              ))}
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Type de travaux
                <select className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20">
                  <option>Rénovation salle de bain</option>
                  <option>Plomberie</option>
                  <option>Électricité</option>
                  <option>Rénovation complète</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
                Message
                <textarea rows={5} className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20" />
              </label>
              <button type="button" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2f7d4f] px-6 py-3 text-base font-semibold text-white hover:bg-[#266741]">
                Recevoir mon devis
              </button>
            </form>
            <p className="mt-4 text-sm text-slate-600">Réponse rapide • Devis gratuit • Sans engagement</p>
          </div>
        </section>

        <footer className="mt-12 border-t border-slate-200 bg-[#ebe7de]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
            <div>
              <p className="text-xl font-semibold text-slate-900"><span className="text-[#2f7d4f]">Serenys</span> Rénovation</p>
              <p className="mt-2 text-sm text-slate-600">Rénovation intérieure premium en Île-de-France.</p>
              <p className="mt-4 text-sm text-slate-700">01 84 80 79 67</p>
              <p className="text-sm text-slate-700">contact@serenys-renovation.fr</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-sm font-semibold text-[#2f7d4f] hover:underline">WhatsApp</a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">Navigation</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#villes" className="hover:underline">Villes</a></li>
                <li><a href="#realisations" className="hover:underline">Réalisations</a></li>
                <li><a href="#guides" className="hover:underline">Guides</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">Liens SEO local</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li><Link href="/intervention/renovation-salle-de-bain/saint-cloud" className="hover:underline">Rénovation salle de bain Saint-Cloud</Link></li>
                <li><Link href="/intervention/renovation-maison/saint-cloud" className="hover:underline">Plombier Saint-Cloud</Link></li>
                <li><Link href="/intervention/renovation-appartement/boulogne-billancourt" className="hover:underline">Électricien Boulogne</Link></li>
                <li><Link href="/intervention/renovation-appartement/rueil-malmaison" className="hover:underline">Rénovation appartement Rueil-Malmaison</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">Informations</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
                <li><Link href="/sitemap.xml">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-md gap-2">
            <a href="tel:+33184807967" className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 px-3 py-3 text-sm font-semibold text-slate-900">
              Appeler
            </a>
            <Link href="#contact" className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#2f7d4f] px-3 py-3 text-sm font-semibold text-white">
              Devis gratuit
            </Link>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center rounded-xl border border-[#bdd0be] bg-[#edf4ec] px-3 py-3 text-sm font-semibold text-[#2f7d4f]">
              WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
