import type { Metadata } from "next";
import Link from "next/link";

import { ServiceIcon } from "@/components/site/service-icon";
import { getCanadaServicesList } from "@/content/canada";
import { buildMetadata } from "@/lib/seo";

const services = getCanadaServicesList();

export const metadata: Metadata = buildMetadata({
  title: "Services | AI Systems, Software & Growth Infrastructure | Scalezix",
  description:
    "Explore Scalezix services in AI automation, AI agents, software development, CRM integrations, AI chatbots, and digital marketing.",
  path: "/services",
  keywords: [
    "AI automation services",
    "software development company",
    "AI agents services",
    "CRM integration services",
  ],
});

export default function ServicesPage() {
  return (
    <main className="section-shell py-20 md:py-24">
      <div className="max-w-4xl">
        <p className="section-kicker w-fit">Services</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          AI systems and growth services built for commercial execution
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          We combine automation, software, CRM execution, conversational systems, and search-led
          growth into one operating layer for ambitious teams.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <div key={service.slug} className="mesh-card rounded-[1.8rem] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4a84ff]/20 bg-[#17356e]/16 text-[#a6c0ff]">
              <ServiceIcon icon={service.icon} />
            </div>
            <h2 className="mt-5 text-2xl font-medium text-white">{service.name}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{service.short}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {service.deliverables.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate-400">
              Who it&apos;s for: {service.audience.slice(0, 2).join(", ")}
            </p>
            <div className="mt-6">
              <Link href={`/services/${service.slug}`} className="button-secondary">
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
