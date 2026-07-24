import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { ServiceIcon } from "@/components/site/service-icon";
import {
  buildCanadaServicePath,
  canadaCitySlugs,
  canadaServices,
  canadaServiceSlugs,
  getCanadaCity,
  getCanadaService,
  getCanadaServiceCityPages,
  isCanadaServiceSlug,
} from "@/content/canada";
import { blogPosts, caseStudies } from "@/content/prd-site";
import {
  breadcrumbSchema,
  buildMetadata,
  faqPageSchema,
  serviceSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return canadaServiceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getCanadaService(params.slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: `${service.name} Services | Scalezix`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [...service.keywords, service.name, "Scalezix services"],
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  if (!isCanadaServiceSlug(params.slug)) {
    notFound();
  }

  const service = canadaServices[params.slug];
  const relatedCaseStudy = caseStudies.find((study) => study.slug === service.relatedCaseStudySlug);
  const relatedPosts = blogPosts.filter((post) => service.relatedBlogSlugs.includes(post.slug));
  const cityPages = getCanadaServiceCityPages(service.slug);
  const featuredCities = canadaCitySlugs
    .slice(0, 6)
    .map((citySlug) => {
      const city = getCanadaCity(citySlug);

      if (!city) {
        return null;
      }

      return {
        city,
        href: buildCanadaServicePath(city.slug, service.slug),
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  return (
    <main className="section-shell py-20 md:py-24">
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
            areaServed: "Canada",
            serviceType: service.category,
          }),
          faqPageSchema(service.aeoQuestions),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <div className="max-w-5xl">
        <p className="section-kicker w-fit">
          <ServiceIcon icon={service.icon} />
          {service.category}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white md:text-6xl">
          {service.name} services built around business systems, not one-off tactics
        </h1>
        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">{service.overview}</p>
      </div>

      <section className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="mesh-card rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Why teams buy this service</h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{service.problemStatement}</p>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{service.solutionAngle}</p>
        </div>

        <div className="metal-panel rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Expected outcomes</h2>
          <div className="mt-6 grid gap-3">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-[1.2rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-4">
                <p className="text-sm font-medium text-slate-900 dark:text-white">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="metal-panel rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">What we deliver</h2>
          <div className="mt-6 space-y-3">
            {service.deliverables.map((deliverable) => (
              <div key={deliverable} className="rounded-[1.2rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-4">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{deliverable}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mesh-card rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Who this is for</h2>
          <div className="mt-6 space-y-3">
            {service.audience.map((audience) => (
              <div key={audience} className="rounded-[1.2rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-4">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="mesh-card rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Implementation process</h2>
          <div className="mt-6 space-y-4">
            {service.process.map((step, index) => (
              <div key={step} className="rounded-[1.3rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Step {index + 1}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="metal-panel rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Answer-engine friendly basics</h2>
          <div className="mt-6 space-y-4">
            {service.aeoQuestions.map((faq) => (
              <div key={faq.question} className="rounded-[1.3rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-5">
                <h3 className="text-base font-medium text-slate-900 dark:text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="metal-panel rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Featured proof angle</h2>
          <div className="mt-6 space-y-3">
            {service.proofPoints.map((point) => (
              <div key={point} className="rounded-[1.2rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-4">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{point}</p>
              </div>
            ))}
          </div>
          {relatedCaseStudy ? (
            <Link
              href={`/case-studies/${relatedCaseStudy.slug}`}
              className="mt-6 inline-flex items-center text-sm text-[#1f77ff] dark:text-[#9ab9ff] transition hover:text-[#00f5ff] dark:hover:text-white"
            >
              Read related case study
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="mesh-card rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Supporting insights</h2>
          <div className="mt-6 space-y-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-[1.3rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-4 transition hover:border-[#00f5ff]/20 hover:bg-black/[0.02] dark:hover:bg-white/[0.04]"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{post.category}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-900 dark:text-white">{post.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <p className="section-kicker w-fit">Canada rollout</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white md:text-4xl">
          Explore {service.name.toLowerCase()} in Canadian cities
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredCities.map(({ city, href }) => (
            <Link
              key={href}
              href={href}
              className="mesh-card rounded-[1.8rem] p-6 transition hover:border-[#00f5ff]/20 hover:bg-black/[0.02] dark:hover:bg-white/[0.04]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{city.province}</p>
              <h3 className="mt-3 text-2xl font-medium text-slate-900 dark:text-white">{service.name} in {city.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{city.intro}</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-500 dark:text-slate-400">
          Current phase includes {cityPages.length} Canada landing pages across major markets.
        </p>
      </section>
    </main>
  );
}
