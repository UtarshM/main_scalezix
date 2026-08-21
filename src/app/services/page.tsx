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
    <main className="w-full bg-slate-50 dark:bg-background text-slate-900 dark:text-foreground transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="w-full bg-[#0C0D0F] text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow mb-5">Services</span>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl leading-[1.1]">
              AI systems and growth services built for commercial execution
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
              We combine automation, software, CRM execution, conversational systems, and search-led growth into one operating layer for ambitious teams.
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid Section */}
      <section className="w-full bg-white dark:bg-background text-slate-900 dark:text-foreground py-20 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.slug} className="rounded-[1.8rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#473BFD]/10 text-[#473BFD] dark:text-[#D3FDB1]">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">{service.name}</h2>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{service.short}</p>
                  <ul className="mt-5 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {service.deliverables.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-slate-400 dark:text-slate-500">
                    Who it&apos;s for: {service.audience.slice(0, 2).join(", ")}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                  <Link href={`/services/${service.slug}`} className="button-secondary border-slate-200 dark:border-white/15 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-white/30 hover:bg-slate-100 dark:hover:bg-white/5">
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
