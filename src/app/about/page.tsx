import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Layers, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { company, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `About Us | ${company.name}`,
  description: company.description,
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 md:pt-40">
        <section className="section-shell">
          <div className="max-w-4xl">
            <p className="section-kicker">About Us</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
              We build growth systems for the AI-powered future.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {company.description}
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="panel p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary mb-6">
                  <Cpu className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  To eliminate business friction and overhead by replacing repetitive manual tasks with highly intelligent, secure, and integrated AI automation systems. We believe AI shouldn't just be a tool—it should be a scalable operating partner.
                </p>
              </div>
            </div>

            <div className="panel p-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-secondary/10 blur-2xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-secondary/20 bg-secondary/10 text-secondary mb-6">
                  <Layers className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold">Our Philosophy</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Workflows first, models second. We focus on designing strong system architectures that bridge the gap between AI capability and operational reality. We ensure human supervision is placed exactly where it matters.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Our Core Principles</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-sm md:text-base">
              These principles guide how we approach systems architecture, software development, and client collaboration.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="panel p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Production-Grade Quality</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  We don't build quick scripts that break next week. We design resilient, production-ready systems with full error-handling and audit logs.
                </p>
              </div>

              <div className="panel p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground mb-4">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Human-In-The-Loop</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  We design systems where AI handles 90% of the cognitive busywork while seamlessly routing exceptions to your human operators.
                </p>
              </div>

              <div className="panel p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground mb-4">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Measurable Business Impact</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Whether it is response time cut by 90% or data ingestion automated entirely, we optimize for speed, accuracy, and clear business outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="panel mt-20 relative overflow-hidden p-8 md:p-12 text-center">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold md:text-5xl">Ready to build your AI advantage?</h2>
              <p className="mt-4 text-muted-foreground text-sm md:text-base leading-7">
                Let's analyze your bottlenecks and design custom automation systems that scale your operations, reduce overhead, and grow your revenue.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="button-primary px-8 py-4 text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2">
                  <span>BOOK A STRATEGY CALL</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="button-secondary border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-semibold tracking-wide inline-flex items-center justify-center rounded-md transition">
                  EXPLORE SOLUTIONS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
