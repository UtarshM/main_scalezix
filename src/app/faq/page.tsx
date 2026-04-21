import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { company, faqs, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `FAQ | ${company.name}`,
  description: "Answers to common questions about AI automation, business workflows, and deployment timelines.",
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 md:pt-40">
        <section className="section-shell">
          <p className="section-kicker">FAQ</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Answers to key questions before launching AI automation.
          </h1>

          <div className="mt-12 grid gap-4">
            {faqs.map((item) => (
              <details key={item.question} className="panel group p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-foreground marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
