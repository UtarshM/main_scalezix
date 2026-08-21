import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { buildCanadaCityPath, canadaCitySlugs } from "@/content/canada";
import { getSeoCity, getSeoCities, getSeoServicesForCity } from "@/lib/seo-location-pages";
import { breadcrumbSchema, buildMetadata, professionalServiceSchema } from "@/lib/seo";

export function generateStaticParams() {
  const seoCitySlugs = getSeoCities().map((c) => c.slug);
  const combined = Array.from(new Set([...canadaCitySlugs, ...seoCitySlugs]));
  return combined.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getSeoCity(citySlug);

  if (!city) {
    return {};
  }

  return buildMetadata({
    title: `AI Automation Agency in ${city.name}, ${city.province} | Scalezix Canada`,
    description: `Explore Scalezix services in ${city.name}, including AI automation, AI agents, software development, CRM integrations, digital marketing, and AI chatbot systems.`,
    path: buildCanadaCityPath(city.slug),
    keywords: [...city.keywords, `${city.name} AI agency`, `${city.name} automation company`],
  });
}

export default async function CanadaCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getSeoCity(citySlug);

  if (!city) {
    notFound();
  }

  const categorizedServices = getSeoServicesForCity(city.slug);

  return (
    <main className="section-shell py-20 md:py-24">
      <JsonLd
        data={[
          professionalServiceSchema({
            name: `Scalezix Canada - ${city.name}`,
            description: `AI systems, automation, software, CRM integration, and growth services for businesses in ${city.name}, ${city.province}.`,
            path: buildCanadaCityPath(city.slug),
            areaServed: `${city.name}, ${city.province}, Canada`,
            keywords: city.keywords,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Canada", path: "/ca" },
            { name: city.name, path: buildCanadaCityPath(city.slug) },
          ]),
        ]}
      />

      <div className="max-w-5xl">
        <p className="section-kicker w-fit">
          {city.name}, {city.province}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white md:text-6xl">
          AI systems and growth infrastructure for {city.name} businesses
        </h1>
        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">
          {city.intro} Scalezix supports {city.marketFocus} with AI automation, software,
          CRM-connected execution, conversational systems, and SEO-first growth pages designed to
          convert qualified demand.
        </p>
      </div>

      <section className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="mesh-card rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Local market context</h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{city.regionalProofHook}</p>
          <div className="mt-6 space-y-3">
            {city.painPoints.map((point) => (
              <div key={point} className="rounded-[1.2rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-4">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="metal-panel rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Strong fit for</h2>
          <div className="mt-6 space-y-3">
            {city.industries.map((industry) => (
              <div key={industry} className="rounded-[1.2rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-4">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{industry}</p>
              </div>
            ))}
          </div>
          {city.nearbyAreas.length > 0 && (
            <p className="mt-6 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Nearby areas we can support: {city.nearbyAreas.join(", ")}.
            </p>
          )}
        </div>
      </section>

      <section className="mt-14">
        <p className="section-kicker w-fit">Services Directory</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white md:text-4xl">
          Explore AI & Software services in {city.name}
        </h2>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Select a category below to explore our targeted local solutions in {city.name}.
        </p>

        <div className="mt-8 space-y-4">
          {categorizedServices.map((cat, catIdx) => (
            <details
              key={catIdx}
              className="group border border-black/5 dark:border-white/8 rounded-[1.8rem] bg-black/[0.01] dark:bg-white/[0.015] overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none font-medium text-xl text-slate-900 dark:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.03]">
                <span>{cat.category}</span>
                <span className="text-xs px-3 py-1 font-mono border border-black/10 dark:border-white/10 rounded-full text-slate-500 dark:text-slate-400">
                  {cat.services.length} services
                </span>
              </summary>
              <div className="p-6 pt-0 border-t border-black/5 dark:border-white/5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-black/[0.01] dark:bg-white/[0.005]">
                {cat.services.map((svc, svcIdx) => (
                  <Link
                    key={svcIdx}
                    href={`/${svc.slug}`}
                    className="flex flex-col justify-between p-5 rounded-2xl border border-black/5 dark:border-white/8 bg-white/50 dark:bg-slate-900/50 hover:border-[#D3FDB1]/20 hover:bg-black/[0.02] dark:hover:bg-white/[0.04] transition"
                  >
                    <div>
                      <h4 className="font-semibold text-base text-slate-900 dark:text-white">{svc.name}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {svc.description}
                      </p>
                    </div>
                    <span className="mt-4 flex items-center text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1]">
                      View Page &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
