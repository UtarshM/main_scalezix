import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { company, processSteps, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Process | ${company.name}`,
  description: "Understand our three-step AI implementation process from discovery to deployment and optimization.",
  alternates: {
    canonical: `${siteUrl}/process`,
  },
};

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 md:pt-40">
        <section className="section-shell">
          <p className="section-kicker">How It Works</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            A simple process to turn operational bottlenecks into AI-powered systems.
          </h1>

          <div className="mt-12 grid gap-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="panel relative overflow-hidden p-6 md:p-7">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-secondary" />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-foreground">
                    0{index + 1}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{step.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
