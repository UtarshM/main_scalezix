import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { company, pricingPlans, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Pricing | ${company.name}`,
  description: "Compare Scalezix pricing plans for starter, growth, and enterprise AI automation engagements.",
  alternates: {
    canonical: `${siteUrl}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 md:pt-40">
        <section className="section-shell">
          <p className="section-kicker">Pricing</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Flexible plans for teams at different automation maturity levels.
          </h1>

          <div className="mt-12 grid gap-5 xl:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`h-full rounded-[2rem] border p-7 ${
                  plan.featured
                    ? "border-primary/40 bg-gradient-to-b from-primary/15 via-slate-950/75 to-slate-950/95 shadow-[0_18px_60px_rgba(59,130,246,0.18)]"
                    : "panel"
                }`}
              >
                {plan.featured ? (
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Most Popular
                  </span>
                ) : null}
                <h2 className="mt-5 text-2xl font-semibold">{plan.name}</h2>
                <p className="mt-3 text-4xl font-semibold">{plan.price}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{plan.description}</p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="button-primary mt-8 flex justify-center">
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
