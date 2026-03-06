type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title?: string;
  faqs: FaqItem[];
  className?: string;
  includeSchema?: boolean;
};

function toFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function FaqSection({
  title = "Questions fréquentes",
  faqs,
  className = "",
  includeSchema = true,
}: FaqSectionProps) {
  const schema = toFaqSchema(faqs);

  return (
    <section className={className}>
      <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
            <p className="mt-2 text-slate-700">{faq.answer}</p>
          </article>
        ))}
      </div>
      {includeSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}
    </section>
  );
}

export type { FaqItem };
