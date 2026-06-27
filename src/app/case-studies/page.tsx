import type { Metadata } from "next";
import Link from "next/link";

import { caseStudies } from "@/content/prd-site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Automation Results & Outcomes | Scalezix",
  description:
    "See Scalezix case studies covering operational savings, revenue growth, and reporting improvements delivered through AI systems.",
  path: "/case-studies",
  keywords: ["automation case studies", "AI results", "Scalezix case studies", "business automation ROI"],
});

export default function CaseStudiesPage() {
  return (
    <main className="section-shell py-20 md:py-24">
      <div className="max-w-4xl">
        <p className="section-kicker w-fit">Case studies</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          Real Results for Real Businesses
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          See how Scalezix helps teams save time, increase revenue, and scale with automation.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <div key={study.slug} className="mesh-card rounded-[1.8rem] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{study.industry}</p>
            <h2 className="mt-4 text-2xl font-medium text-white">{study.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{study.challenge}</p>
            <div className="mt-6">
              <Link href={`/case-studies/${study.slug}`} className="button-secondary">
                Read full case study
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
