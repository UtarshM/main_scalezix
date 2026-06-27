import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronRight,
  CircuitBoard,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { ServiceIcon } from "@/components/site/service-icon";
import {
  caseStudies,
  companyInfo,
  homeTicker,
  products,
  serviceCards,
  trustStats,
} from "@/content/prd-site";

export const metadata: Metadata = {
  title: "Scalezix | AI Services, Systems, and Product Experiences",
  description:
    "Scalezix builds AI service systems, growth automation, internal copilots, and premium digital product experiences for ambitious teams.",
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="spotlight-layer" />
        <div className="hero-grid opacity-80" />
        <div className="animate-pulse-blue absolute left-1/2 top-8 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#00f5ff]/12 blur-[160px]" />
        <div className="animate-float-slow absolute left-[8%] top-32 h-64 w-64 rounded-full bg-[#7b2fff]/18 blur-[130px]" />
        <div className="animate-float-delayed absolute right-[8%] top-40 h-56 w-56 rounded-full bg-[#00f5ff]/14 blur-[120px]" />
        <div className="animate-rotate-slower absolute left-[5%] top-24 h-[22rem] w-[22rem] rounded-full border border-white/8 opacity-70" />
        <div className="animate-rotate-slow absolute right-[4%] top-16 h-[18rem] w-[18rem] rounded-full border border-[#00f5ff]/15 opacity-70" />

        <div className="section-shell relative py-20 md:py-24 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="section-kicker w-fit">
                <Sparkles className="h-3.5 w-3.5" />
                AI systems for modern business
              </p>
              <div className="mt-6 max-w-5xl">
                <h1 className="mt-6 max-w-5xl text-[3rem] font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-[4.4rem] lg:text-[6.4rem]">
                  We Build AI Systems That
                  <br />
                  <span className="text-gradient">Scale Your Business.</span>
                </h1>
              </div>
              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Scalezix helps D2C brands, real estate companies, and growing businesses automate
                operations, generate leads, and move faster using AI Automation, Custom AI Agents,
                and modern software.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={companyInfo.calendlyHref} className="button-primary">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href={companyInfo.whatsappHref} className="button-secondary">
                  Chat on WhatsApp
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12 grid gap-3 sm:grid-cols-3">
                <SignalCard
                  title="Automation"
                  text="Intelligent workflows that reduce manual bottlenecks."
                />
                <SignalCard
                  title="AI agents"
                  text="Reasoning systems that qualify, summarize, and execute."
                />
                <SignalCard
                  title="Growth systems"
                  text="Software, CRM, and marketing that compound together."
                />
              </div>
            </div>

            <div className="relative lg:pb-6">
              <div className="absolute inset-0 rounded-[2rem] border border-[#00f5ff]/14 bg-[#0a142c]/42" />
              <div className="animate-float-slow absolute left-6 top-6 h-24 w-24 rounded-full border border-[#00f5ff]/20 bg-[#00f5ff]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-[#00f5ff]/16 bg-[#07101f]/72 p-6 backdrop-blur-2xl md:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-white/12" />
                <div className="animate-shimmer-band absolute inset-y-0 left-[-25%] w-[22%] bg-[linear-gradient(180deg,rgba(0,245,255,0),rgba(0,245,255,0.22),rgba(0,245,255,0))] opacity-70" />

                <div className="flex items-center justify-between border-b border-white/8 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                      Scalezix operating layer
                    </p>
                    <p className="mt-2 text-xl font-medium text-white">Business Growth Engine</p>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Active
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {trustStats.map((stat) => (
                    <MetricRow key={stat.label} label={stat.label} value={stat.value} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 py-5">
        <div className="section-shell">
          <div className="overflow-hidden whitespace-nowrap text-sm text-slate-300">
            <div className="animate-marquee inline-flex min-w-full items-center gap-10 py-1">
              {homeTicker.concat(homeTicker).map((signal, index) => (
                <span key={`${signal}-${index}`} className="inline-flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]" />
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative border-b border-white/10 py-20 md:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="section-kicker w-fit">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              Everything your business needs to scale with AI
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              From strategy to deployment, we handle it all.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <FeatureCard
                key={service.slug}
                icon={<ServiceIcon icon={service.icon} />}
                title={service.name}
                text={service.short}
                href={
                  service.slug === "software-development" ||
                  service.slug === "digital-marketing" ||
                  service.slug === "ai-automation"
                    ? `/services/${service.slug}`
                    : "/services"
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 py-20 md:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="section-kicker w-fit">
              <Workflow className="h-3.5 w-3.5" />
              From chaos to AI-powered scale in 3 steps
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <StepCard
              number="01"
              title="Discover"
              text="We audit your workflows, bottlenecks, and growth gaps to find your highest-ROI automation opportunities."
            />
            <StepCard
              number="02"
              title="Build"
              text="Our team designs and deploys custom AI systems, agents, and software tailored to your exact business model."
            />
            <StepCard
              number="03"
              title="Scale"
              text="We optimize, train your team, and evolve the system as your business grows so results compound over time."
            />
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 py-20 md:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="section-kicker w-fit">
              <CircuitBoard className="h-3.5 w-3.5" />
              Productized AI solutions
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Deploy fast. See results faster.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.slug} className="mesh-card rounded-[1.8rem] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{product.tag}</p>
                <h3 className="mt-4 text-2xl font-medium text-white">{product.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{product.description}</p>
                <div className="mt-6">
                  <Link href={`/products/${product.slug}`} className="button-secondary">
                    Explore product
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 py-20 md:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="section-kicker w-fit">Real results. Real businesses.</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Case studies with measurable outcomes.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.slug} className="mesh-card rounded-[1.8rem] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{study.industry}</p>
                <h3 className="mt-4 text-2xl font-medium text-white">{study.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{study.solution}</p>
                <div className="mt-6">
                  <Link href={`/case-studies/${study.slug}`} className="button-secondary">
                    Read full case study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative border-b border-white/10 py-20 md:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="section-kicker w-fit">
              <ShieldCheck className="h-3.5 w-3.5" />
              Why businesses choose Scalezix
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            <SignalCard title="AI-First Approach" text="We build with AI at the core from day one." />
            <SignalCard title="Full-Stack Execution" text="Strategy, design, development, and marketing under one roof." />
            <SignalCard title="Fast Deployment" text="Most projects go live in under six weeks." />
            <SignalCard title="Measurable ROI" text="Every system ties back to a business metric." />
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[#00f5ff]/16 bg-[#07101f]/75 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-12">
            <div className="absolute left-0 top-0 h-px w-full bg-white/10" />
            <div className="animate-float-slow absolute right-10 top-10 h-32 w-32 rounded-full bg-[#00f5ff]/14 blur-[100px]" />
            <div className="max-w-3xl">
              <p className="section-kicker w-fit">Ready to Scale Your Business with AI?</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                Book a free 30-minute strategy call.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                We&apos;ll map your top three automation opportunities and show where the highest ROI
                sits first.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href={companyInfo.calendlyHref} className="button-primary">
                  Book a Free Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href={companyInfo.whatsappHref} className="button-secondary">
                  Chat on WhatsApp
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SignalCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="metal-panel rounded-[1.35rem] p-4">
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function FeatureCard({ icon, title, text, href }: { icon: ReactNode; title: string; text: string; href: string }) {
  return (
    <div className="mesh-card group rounded-[1.8rem] p-6 transition duration-500 hover:-translate-y-1">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4a84ff]/20 bg-[#17356e]/16 text-[#a6c0ff]">
        {icon}
      </div>
      <h3 className="mt-5 text-2xl font-medium text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
      <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm text-[#8fb1ff]">
        Learn more
        <ChevronRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-[1.2rem] border border-white/8 bg-white/[0.02] px-4 py-3">
      <span className="text-sm text-slate-300">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}

function StepCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="metal-panel rounded-[1.8rem] p-6">
      <p className="text-sm font-medium text-[#00f5ff]">{number}</p>
      <h3 className="mt-4 text-2xl font-medium text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}
