"use client";

import { useMemo, useState } from "react";

type RenovationType =
  | "appartement"
  | "maison"
  | "salle-de-bain"
  | "cuisine"
  | "renovation-complete";

type MaterialRange = "economique" | "standard" | "premium";

const typeLabels: Record<RenovationType, string> = {
  appartement: "Rénovation appartement",
  maison: "Rénovation maison",
  "salle-de-bain": "Salle de bain",
  cuisine: "Cuisine",
  "renovation-complete": "Rénovation complète",
};

const materialLabels: Record<MaterialRange, string> = {
  economique: "Économique",
  standard: "Standard",
  premium: "Premium",
};

const pricePerM2: Record<RenovationType, Record<MaterialRange, number>> = {
  appartement: { economique: 600, standard: 900, premium: 1300 },
  maison: { economique: 700, standard: 1000, premium: 1400 },
  "salle-de-bain": { economique: 900, standard: 1400, premium: 2000 },
  cuisine: { economique: 800, standard: 1200, premium: 1800 },
  "renovation-complete": { economique: 1000, standard: 1400, premium: 2000 },
};

export function CalculatorClient() {
  const [surface, setSurface] = useState(50);
  const [city, setCity] = useState("Saint-Cloud");
  const [renovationType, setRenovationType] = useState<RenovationType>("appartement");
  const [materialRange, setMaterialRange] = useState<MaterialRange>("standard");

  const estimate = useMemo(() => {
    const base = pricePerM2[renovationType][materialRange];
    return {
      low: Math.round(surface * base * 0.9),
      high: Math.round(surface * base * 1.1),
    };
  }, [surface, renovationType, materialRange]);

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Calculateur travaux</p>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">Estimez le budget de votre rénovation</h1>
          <p className="max-w-3xl text-lg text-slate-700">Obtenez une fourchette estimative en quelques clics, puis laissez vos coordonnées pour recevoir votre estimation et être recontacté.</p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-slate-700">Type de rénovation
                <select value={renovationType} onChange={(e) => setRenovationType(e.target.value as RenovationType)} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3">
                  <option value="appartement">Rénovation appartement</option>
                  <option value="maison">Rénovation maison</option>
                  <option value="salle-de-bain">Salle de bain</option>
                  <option value="cuisine">Cuisine</option>
                  <option value="renovation-complete">Rénovation complète</option>
                </select>
              </label>
              <label className="block text-sm font-semibold text-slate-700">Surface (m²)
                <input type="number" min={5} max={500} value={surface} onChange={(e) => setSurface(Number(e.target.value || 0))} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" />
              </label>
              <label className="block text-sm font-semibold text-slate-700">Ville
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" />
              </label>
              <label className="block text-sm font-semibold text-slate-700">Gamme matériaux
                <select value={materialRange} onChange={(e) => setMaterialRange(e.target.value as MaterialRange)} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3">
                  <option value="economique">Économique</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </label>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Résultat estimatif</p>
            <h2 className="mt-3 text-3xl font-bold">{estimate.low.toLocaleString("fr-FR")} € — {estimate.high.toLocaleString("fr-FR")} €</h2>
            <p className="mt-3 text-slate-200">Fourchette indicative basée sur le type de projet, la surface et la gamme matériaux.</p>
            <div className="mt-6 rounded-xl bg-white/10 p-5 text-sm">
              <p><strong>Projet :</strong> {typeLabels[renovationType]}</p>
              <p><strong>Surface :</strong> {surface} m²</p>
              <p><strong>Ville :</strong> {city}</p>
              <p><strong>Gamme :</strong> {materialLabels[materialRange]}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <form className="rounded-2xl border border-slate-200 bg-white p-7 lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">Recevoir cette estimation et être recontacté</h2>
            <p className="mt-2 text-slate-600">Estimation gratuite, sans engagement.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input type="text" placeholder="Nom" className="rounded-lg border border-slate-300 px-4 py-2.5" />
              <input type="email" placeholder="Email" className="rounded-lg border border-slate-300 px-4 py-2.5" />
              <input type="tel" placeholder="Téléphone" className="rounded-lg border border-slate-300 px-4 py-2.5" />
              <input type="text" placeholder="Ville" className="rounded-lg border border-slate-300 px-4 py-2.5" />
              <input type="text" placeholder="Type de projet" defaultValue={typeLabels[renovationType]} className="rounded-lg border border-slate-300 px-4 py-2.5 md:col-span-2" />
            </div>
            <p className="mt-3 text-sm text-slate-600">Formulaire front prêt à être connecté à votre système de traitement des leads.</p>
            <button type="submit" className="mt-5 rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white">Recevoir mon estimation</button>
          </form>
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">Rappel de confiance</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Devis gratuit</li>
              <li>• Réponse rapide</li>
              <li>• Travaux garantis 10 ans</li>
            </ul>
          </aside>
        </section>
      </div>
    </main>
  );
}
