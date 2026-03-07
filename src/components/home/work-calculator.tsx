"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type WorkType = "salle-de-bain" | "plomberie" | "electricite" | "renovation-complete" | "peinture";
type FinishLevel = "economique" | "standard" | "premium";
type Urgency = "souple" | "rapide" | "urgent";

const workTypeLabel: Record<WorkType, string> = {
  "salle-de-bain": "Salle de bain",
  plomberie: "Plomberie",
  electricite: "Électricité",
  "renovation-complete": "Rénovation complète",
  peinture: "Peinture intérieure",
};

const baseRateByWorkType: Record<WorkType, number> = {
  "salle-de-bain": 950,
  plomberie: 180,
  electricite: 140,
  "renovation-complete": 1150,
  peinture: 55,
};

const finishMultiplier: Record<FinishLevel, number> = {
  economique: 0.9,
  standard: 1,
  premium: 1.25,
};

const urgencyMultiplier: Record<Urgency, number> = {
  souple: 1,
  rapide: 1.08,
  urgent: 1.15,
};

const cityMultiplier = ["Paris", "Neuilly", "Boulogne", "Saint-Cloud", "Rueil", "Suresnes", "Courbevoie", "Issy"];

function formatEuro(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function WorkCalculator() {
  const [workType, setWorkType] = useState<WorkType>("salle-de-bain");
  const [surface, setSurface] = useState(15);
  const [finish, setFinish] = useState<FinishLevel>("standard");
  const [city, setCity] = useState("Saint-Cloud");
  const [urgency, setUrgency] = useState<Urgency>("souple");

  const estimate = useMemo(() => {
    const cityBoost = cityMultiplier.some((token) => city.toLowerCase().includes(token.toLowerCase())) ? 1.06 : 1;

    const rawEstimate =
      surface *
      baseRateByWorkType[workType] *
      finishMultiplier[finish] *
      urgencyMultiplier[urgency] *
      cityBoost;

    return {
      low: Math.round(rawEstimate * 0.88),
      high: Math.round(rawEstimate * 1.12),
    };
  }, [city, finish, surface, urgency, workType]);

  return (
    <section id="calculateur" className="rounded-3xl border border-[#d5ddd3] bg-white p-5 shadow-sm sm:p-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Estimez le budget de vos travaux</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Obtenez une première estimation selon votre projet, votre surface et votre ville.
        </p>
      </div>

      <form className="mt-6 grid gap-4 sm:grid-cols-2" aria-label="Calculateur de budget travaux">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Type de travaux
          <select
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20"
            value={workType}
            onChange={(event) => setWorkType(event.target.value as WorkType)}
          >
            <option value="salle-de-bain">Salle de bain</option>
            <option value="plomberie">Plomberie</option>
            <option value="electricite">Électricité</option>
            <option value="renovation-complete">Rénovation complète</option>
            <option value="peinture">Peinture</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          Surface approximative (m²)
          <input
            type="number"
            min={2}
            max={400}
            value={surface}
            onChange={(event) => setSurface(Number(event.target.value) || 2)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          Niveau de finition
          <select
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20"
            value={finish}
            onChange={(event) => setFinish(event.target.value as FinishLevel)}
          >
            <option value="economique">Économique</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          Ville
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Saint-Cloud"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
          Urgence du projet
          <select
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#2f7d4f] focus:ring-2 focus:ring-[#2f7d4f]/20"
            value={urgency}
            onChange={(event) => setUrgency(event.target.value as Urgency)}
          >
            <option value="souple">Planning souple</option>
            <option value="rapide">Démarrage rapide</option>
            <option value="urgent">Projet urgent</option>
          </select>
        </label>
      </form>

      <div className="mt-6 rounded-2xl border border-[#d2decf] bg-[#f7faf6] p-5">
        <p className="text-sm text-slate-600">Estimation pour {workTypeLabel[workType]}</p>
        <p className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          {formatEuro(estimate.low)} – {formatEuro(estimate.high)}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Cette estimation est indicative. Un devis précis nécessite un échange avec notre équipe.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#2f7d4f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#266741] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f7d4f]/40"
        >
          Recevoir mon devis personnalisé
        </Link>
      </div>
    </section>
  );
}
