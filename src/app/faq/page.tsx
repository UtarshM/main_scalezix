import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { faqGroups } from "@/content/prd-site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | AI Automation Questions Answered | Scalezix",
  description:
    "Read common questions about Scalezix, AI automation, software development, digital marketing, and AI products.",
  path: "/faq",
  keywords: ["AI automation FAQ", "Scalezix FAQ", "software development FAQ"],
});

export default function FaqPage() {
  const faqEntries = Object.values(faqGroups).flat();

  return (
    <main className="section-shell py-20 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntries.map((faq) => ({
            "@type": "Question",
            name: faq,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Talk to Scalezix for a detailed answer to ${faq.toLowerCase()}.`,
            },
          })),
        }}
      />
      <div className="max-w-4xl">
        <p className="section-kicker w-fit">FAQ</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {Object.entries(faqGroups).map(([group, faqs]) => (
          <section key={group} className="mesh-card rounded-[1.8rem] p-6">
            <h2 className="text-2xl font-medium capitalize text-white">{group}</h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq) => (
                <div key={faq} className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-sm text-slate-200">{faq}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
