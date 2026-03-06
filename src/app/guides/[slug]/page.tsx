type Props = {
  params: Promise<{ slug: string }>;
};

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-700">
          Guides
        </p>
        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          Guide : {slug.replace(/-/g, " ")}
        </h1>
        <p className="text-lg text-gray-700">
          Cette page guide sera enrichie ensuite.
        </p>
      </div>
    </main>
  );
}