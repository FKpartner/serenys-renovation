const steps = [
  {
    title: "Étude du projet",
    text: "Nous échangeons sur vos objectifs, vos contraintes techniques et votre budget.",
  },
  {
    title: "Visite et devis",
    text: "Une visite sur place permet d'établir un devis détaillé et un planning lisible.",
  },
  {
    title: "Réalisation des travaux",
    text: "Nous coordonnons les corps de métier et suivons l'avancement du chantier.",
  },
  {
    title: "Livraison du chantier",
    text: "Réception des travaux, vérifications finales et levée des dernières réserves.",
  },
];

export function MethodStepsSection({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">Notre méthode de rénovation</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Étape {index + 1}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-slate-700">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
