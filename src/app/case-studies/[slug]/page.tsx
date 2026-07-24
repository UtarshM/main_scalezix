import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { caseStudies } from "@/content/prd-site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((entry) => entry.slug === params.slug);

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

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((entry) => entry.slug === params.slug);

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

      <div className="mt-8">
        <Link href="/contact" className="button-primary">
          Build something similar
        </Link>
      </div>
    </main>
  );
}
