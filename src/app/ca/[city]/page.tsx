import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { ServiceIcon } from "@/components/site/service-icon";
import {
  buildCanadaCityPath,
  buildCanadaServicePath,
  canadaCitySlugs,
  getCanadaCity,
  getCanadaServicesList,
} from "@/content/canada";
import { breadcrumbSchema, buildMetadata, professionalServiceSchema } from "@/lib/seo";

const services = getCanadaServicesList();

export function generateStaticParams() {
  return canadaCitySlugs.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCanadaCity(citySlug);

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
  const city = getCanadaCity(citySlug);

  if (!city) {
    notFound();
  }

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
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          AI systems and growth infrastructure for {city.name} businesses
        </h1>
        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
          {city.intro} Scalezix supports {city.marketFocus} with AI automation, software,
          CRM-connected execution, conversational systems, and SEO-first growth pages designed to
          convert qualified demand.
        </p>
      </div>

      <section className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="mesh-card rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">Local market context</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">{city.regionalProofHook}</p>
          <div className="mt-6 space-y-3">
            {city.painPoints.map((point) => (
              <div key={point} className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
                <p className="text-sm leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="metal-panel rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">Strong fit for</h2>
          <div className="mt-6 space-y-3">
            {city.industries.map((industry) => (
              <div key={industry} className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
                <p className="text-sm leading-7 text-slate-200">{industry}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Nearby areas we can support: {city.nearbyAreas.join(", ")}.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <p className="section-kicker w-fit">Service pages</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
          Explore services in {city.name}
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={buildCanadaServicePath(city.slug, service.slug)}
              className="mesh-card rounded-[1.8rem] p-6 transition hover:border-[#00f5ff]/20 hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4a84ff]/20 bg-[#17356e]/16 text-[#a6c0ff]">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="mt-5 text-2xl font-medium text-white">{service.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.short}</p>
              <p className="mt-5 text-sm text-slate-400">{service.category}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
