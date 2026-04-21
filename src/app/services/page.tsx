import type { Metadata } from "next";
import { Bot, BrainCircuit, ChartNoAxesCombined, DatabaseZap, MessageSquareText, Waypoints } from "lucide-react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { company, services, siteUrl } from "@/content/site";

const serviceIcons = [Bot, Waypoints, BrainCircuit, DatabaseZap, ChartNoAxesCombined, MessageSquareText];

export const metadata: Metadata = {
  title: `Services | ${company.name}`,
  description: "Explore our AI automation services: workflow optimization, custom agents, CRM integrations, and chatbot systems.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 md:pt-40">
        <section className="section-shell">
          <p className="section-kicker">Services</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            AI systems built for speed, clarity, and measurable growth.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{company.seoDescription}</p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article key={service.title} className="panel h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
