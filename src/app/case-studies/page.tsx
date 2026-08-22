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
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white md:text-6xl">
          Real Results for Real Businesses
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          See how Scalezix helps teams save time, increase revenue, and scale with automation.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <div key={study.slug} className="mesh-card rounded-[1.8rem] p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{study.industry}</p>
              <h2 className="mt-4 text-2xl font-medium text-slate-900 dark:text-white">{study.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{study.challenge}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <Link href={`/case-studies/${study.slug}`} className="button-secondary text-xs w-full text-center">
                Read full case study &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Connected Products & Pricing CTA */}
      <section className="mt-16 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
            Proven Automation Architecture
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Replicate These Results in Your Business
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Explore our modular WhatsApp AI (from ₹3k/mo), CRM, or custom autonomous agent packages.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link href="/pricing" className="button-primary text-xs">
            View Pricing Plans
          </Link>
          <Link href="/products/whatsapp-ai" className="button-secondary text-xs">
            WhatsApp AI Engine
          </Link>
        </div>
      </section>
    </main>
  );
}
