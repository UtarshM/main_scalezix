import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { caseStudies } from "@/content/prd-site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    return {};
  }

  return buildMetadata({
    title: `${study.title} | Scalezix Case Study`,
    description: study.solution,
    path: `/case-studies/${study.slug}`,
    keywords: [study.industry, "Scalezix case study", "automation outcome"],
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="section-shell py-20 md:py-24">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ])}
      />

      <div className="max-w-4xl">
        <p className="section-kicker w-fit">{study.industry}</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white md:text-6xl">
          {study.title}
        </h1>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <section className="metal-panel rounded-[1.8rem] p-6">
          <h2 className="text-xl font-medium text-slate-900 dark:text-white">Challenge</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{study.challenge}</p>
        </section>
        <section className="metal-panel rounded-[1.8rem] p-6">
          <h2 className="text-xl font-medium text-slate-900 dark:text-white">Solution</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{study.solution}</p>
        </section>
        <section className="metal-panel rounded-[1.8rem] p-6">
          <h2 className="text-xl font-medium text-slate-900 dark:text-white">Results</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {study.results.map((result) => (
              <li key={result}>• {result}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/contact" className="button-primary">
          Build something similar
        </Link>
        <Link href="/pricing" className="button-secondary border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5">
          View Deployment Pricing
        </Link>
        <Link href="/case-studies" className="button-secondary border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5">
          All Case Studies
        </Link>
      </div>

      {/* Connected Products */}
      <section className="mt-16 pt-12 border-t border-slate-200 dark:border-white/10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Core AI Engines Used in Deployments
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/products/whatsapp-ai"
            className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 transition block"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900 dark:text-white">WhatsApp AI</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                From ₹3k/mo
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Autonomous chat, cart recovery & multilingual AI voice calling.
            </p>
          </Link>

          <Link
            href="/products/scalezix-crm"
            className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 transition block"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900 dark:text-white">Scalezix CRM</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#473BFD]/10 text-[#473BFD] dark:bg-[#D3FDB1]/20 dark:text-[#D3FDB1]">
                Sales AI
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Automated pipeline routing, lead scoring & real-time sync.
            </p>
          </Link>

          <Link
            href="/products/custom-ai-agents"
            className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 transition block"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900 dark:text-white">Custom AI Agents</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#473BFD]/10 text-[#473BFD] dark:bg-[#D3FDB1]/20 dark:text-[#D3FDB1]">
                Enterprise
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Custom agentic middleware trained around internal operations.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
