import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { caseStudies, company, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Results | ${company.name}`,
  description: "See case-study style outcomes from automation projects including faster operations, higher throughput, and better visibility.",
  alternates: {
    canonical: `${siteUrl}/results`,
  },
};

export default function ResultsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 md:pt-40">
        <section className="section-shell">
          <p className="section-kicker">Results</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Outcome-focused automation built to create real business movement.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            We focus on measurable impact: response speed, throughput, reporting quality, and business confidence.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="panel h-full p-6">
                <p className="text-sm font-medium text-primary">{study.outcome}</p>
                <h2 className="mt-3 text-2xl font-semibold">{study.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{study.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
