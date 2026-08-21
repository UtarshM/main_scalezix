import type { Metadata } from "next";
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
    <main className="w-full bg-slate-50 dark:bg-background text-slate-900 dark:text-foreground transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="w-full bg-[#0C0D0F] text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow mb-5">Results</span>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl leading-[1.1]">
              Outcome-focused automation built to create real business movement.
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
              We focus on measurable impact: response speed, throughput, reporting quality, and business confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid Section */}
      <section className="w-full bg-white dark:bg-background text-slate-900 dark:text-foreground py-20 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-[1.8rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#473BFD] dark:text-[#D3FDB1]">
                    {study.outcome}
                  </span>
                  <h2 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">{study.title}</h2>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{study.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
