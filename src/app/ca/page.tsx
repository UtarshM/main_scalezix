import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { ServiceIcon } from "@/components/site/service-icon";
import { getCanadaCitiesList, getCanadaServicesList } from "@/content/canada";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const cities = getCanadaCitiesList();
const services = getCanadaServicesList();

export const metadata: Metadata = buildMetadata({
  title: "Canada AI Services | SEO, Automation, Software & CRM Systems | Scalezix",
  description:
    "Explore Scalezix Canada service pages for AI automation, AI agents, software development, CRM integrations, digital marketing, and AI chatbots.",
  path: "/ca",
  keywords: [
    "AI services Canada",
    "AI automation Canada",
    "SEO and AEO Canada",
    "CRM automation Canada",
  ],
});

export default function CanadaPage() {
  return (
    <main className="section-shell py-20 md:py-24">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Canada", path: "/ca" },
        ])}
      />

      <div className="max-w-5xl">
        <p className="section-kicker w-fit">Canada</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          AI systems, automation, software, and growth pages built for Canada
        </h1>
        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
          Scalezix helps Canadian businesses build stronger AI systems, service workflows, CRM
          execution, and search-first growth infrastructure. These pages are organized by city and
          service so buyers can reach the most relevant solution quickly.
        </p>
      </div>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="section-kicker w-fit">Cities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              Canada city hubs
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/ca/${city.slug}`}
              className="mesh-card rounded-[1.8rem] p-6 transition hover:border-[#00f5ff]/20 hover:bg-white/[0.04]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{city.province}</p>
              <h3 className="mt-3 text-2xl font-medium text-white">{city.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{city.intro}</p>
              <p className="mt-5 text-sm text-slate-400">Nearby: {city.nearbyAreas.join(", ")}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <p className="section-kicker w-fit">Services</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
          Core service hubs
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="metal-panel rounded-[1.8rem] p-6 transition hover:border-[#00f5ff]/20"
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
