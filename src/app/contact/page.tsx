export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-700">
          Contact
        </p>

        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          Demandez votre devis gratuit
        </h1>

        <p className="mb-8 text-lg text-gray-700">
          Parlez-nous de votre projet de rénovation en Île-de-France.
        </p>

        <div className="rounded-xl bg-gray-100 p-8">
          <p className="mb-3 text-gray-700">
            Email : contact@serenys-renovation.fr
          </p>

          <p className="mb-3 text-gray-700">
            Téléphone : 06 00 00 00 00
          </p>

          <p className="text-gray-700">
            Zone d’intervention : Hauts-de-Seine, Yvelines, Île-de-France
          </p>
        </div>
      </div>
    </main>
  );
}