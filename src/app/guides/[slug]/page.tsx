import { notFound } from "next/navigation";
import { guides } from "@/data/guides";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    return { title: "Guide introuvable" };
  }

  return {
    title: `${guide.title} | Serenys Renovation`,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Guides
        </p>

        <h1 className="mb-6 text-4xl font-extrabold text-slate-900">{guide.title}</h1>

        <p className="mb-6 text-lg text-slate-700">{guide.description}</p>

        <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
          <p className="text-slate-700">
            Cet article sera enrichi avec des conseils détaillés, des ordres de
            grandeur budgétaires et des recommandations de planning.
          </p>
        </div>
      </div>
    </main>
  );
}
