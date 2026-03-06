import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact rénovation en Île-de-France | Serenys Rénovation",
  description:
    "Contactez Serenys Rénovation pour votre projet de rénovation d'appartement ou de maison. Devis gratuit et réponse rapide.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl space-y-10">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Contact</p>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">Parlons de votre projet de rénovation</h1>
          <p className="max-w-3xl text-lg text-slate-700">Décrivez votre besoin pour recevoir un devis gratuit et un premier retour sur les étapes de votre chantier en Île-de-France.</p>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <form className="rounded-2xl border border-slate-200 bg-white p-7 lg:col-span-2">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">Nom
                <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5" />
              </label>
              <label className="text-sm font-semibold text-slate-700">Téléphone
                <input type="tel" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5" />
              </label>
              <label className="text-sm font-semibold text-slate-700">Email
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5" />
              </label>
              <label className="text-sm font-semibold text-slate-700">Ville
                <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5" />
              </label>
              <label className="text-sm font-semibold text-slate-700">Type de travaux
                <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5" />
              </label>
              <label className="text-sm font-semibold text-slate-700">Budget
                <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-semibold text-slate-700">Message
              <textarea rows={5} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5" />
            </label>
            <p className="mt-3 text-sm text-slate-600">Formulaire front prêt à connecter à votre backend (email/CRM) ultérieurement.</p>
            <button type="submit" className="mt-5 rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white">Envoyer ma demande</button>
          </form>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-slate-900">Réassurance</h2>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>• Devis gratuit</li>
                <li>• Réponse rapide</li>
                <li>• Intervention en Île-de-France</li>
                <li>• Travaux garantis 10 ans</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900">Pourquoi nous contacter ?</h2>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>• Étude du besoin</li>
                <li>• Devis gratuit</li>
                <li>• Accompagnement du projet</li>
                <li>• Réponse rapide</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 text-sm text-slate-700">
              <p>Téléphone : [Téléphone à compléter]</p>
              <p className="mt-2">Email : [Email à compléter]</p>
              <p className="mt-2">SIRET : [SIRET à compléter]</p>
              <p className="mt-2">Assurance décennale : [Référence à compléter]</p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
