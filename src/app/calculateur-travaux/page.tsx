"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

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
  appartement: {
    economique: 600,
    standard: 900,
    premium: 1300,
  },
  maison: {
    economique: 700,
    standard: 1000,
    premium: 1400,
  },
  "salle-de-bain": {
    economique: 900,
    standard: 1400,
    premium: 2000,
  },
  cuisine: {
    economique: 800,
    standard: 1200,
    premium: 1800,
  },
  "renovation-complete": {
    economique: 1000,
    standard: 1400,
    premium: 2000,
  },
};

export default function CalculateurTravauxPage() {
  const [surface, setSurface] = useState(50);
  const [city, setCity] = useState("Saint-Cloud");
  const [renovationType, setRenovationType] =
    useState<RenovationType>("appartement");
  const [materialRange, setMaterialRange] =
    useState<MaterialRange>("standard");

  const estimate = useMemo(() => {
    const base = pricePerM2[renovationType][materialRange];
    const low = Math.round(surface * base * 0.9);
    const high = Math.round(surface * base * 1.1);

    return { low, high };
  }, [surface, renovationType, materialRange]);

  const whatsappMessage = `
Bonjour Serenys Renovation,

J'ai utilisé votre calculateur travaux.

Type de projet : ${typeLabels[renovationType]}
Surface : ${surface} m²
Ville : ${city}
Gamme matériaux : ${materialLabels[materialRange]}
Estimation : ${estimate.low.toLocaleString("fr-FR")} € à ${estimate.high.toLocaleString("fr-FR")} €

Pouvez-vous me donner un premier avis sur mon projet ?
  `.trim();

  const whatsappLink = buildWhatsAppLink(whatsappMessage);

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-700">
          Calculateur travaux
        </p>

        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          Estimez le budget de votre rénovation
        </h1>

        <p className="mb-10 max-w-3xl text-lg text-gray-700">
          Obtenez une première estimation de budget pour votre projet en
          Île-de-France, puis échangez avec Serenys Renovation sur WhatsApp.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Type de rénovation
              </label>
              <select
                value={renovationType}
                onChange={(e) =>
                  setRenovationType(e.target.value as RenovationType)
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              >
                <option value="appartement">Rénovation appartement</option>
                <option value="maison">Rénovation maison</option>
                <option value="salle-de-bain">Salle de bain</option>
                <option value="cuisine">Cuisine</option>
                <option value="renovation-complete">Rénovation complète</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Surface (m²)
              </label>
              <input
                type="number"
                min={5}
                max={500}
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Ville
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Gamme matériaux
              </label>
              <select
                value={materialRange}
                onChange={(e) =>
                  setMaterialRange(e.target.value as MaterialRange)
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              >
                <option value="economique">Économique</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-900 p-8 text-white shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
              Résultat estimatif
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              {estimate.low.toLocaleString("fr-FR")} € —{" "}
              {estimate.high.toLocaleString("fr-FR")} €
            </h2>

            <p className="mb-6 text-gray-300">
              Il s’agit d’une fourchette indicative basée sur le type de projet,
              la surface et la gamme de matériaux choisie.
            </p>

            <div className="mb-8 rounded-xl bg-white/10 p-5 text-sm text-gray-200">
              <p className="mb-2">
                <strong>Projet :</strong> {typeLabels[renovationType]}
              </p>
              <p className="mb-2">
                <strong>Surface :</strong> {surface} m²
              </p>
              <p className="mb-2">
                <strong>Ville :</strong> {city}
              </p>
              <p>
                <strong>Gamme :</strong> {materialLabels[materialRange]}
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-lg bg-green-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              Recevoir cette estimation sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}