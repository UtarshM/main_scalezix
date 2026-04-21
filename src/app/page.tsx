import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  ChevronRight,
  Cpu,
  DatabaseZap,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Reveal } from "@/components/site/reveal";
import {
  authorityPoints,
  caseStudies,
  company,
  contactInfo,
  faqs,
  features,
  pricingPlans,
  processSteps,
  products,
  services,
  socialProof,
  testimonials,
  siteUrl,
} from "@/content/site";

export const metadata: Metadata = {
  title: company.seoTitle,
  description: company.seoDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: company.seoTitle,
    description: company.seoDescription,
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: company.seoTitle,
    description: company.seoDescription,
  },
};

const serviceIcons = [
  Bot,
  Waypoints,
  BrainCircuit,
  DatabaseZap,
  ChartNoAxesCombined,
  MessageSquareText,
];

const featureIcons = [Cpu, BarChart3, Sparkles, ShieldCheck];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <HeroSection />
        <SocialProofSection />
        <ServicesSection />
        <ProcessSection />
        <FeaturesSection />
        <ProductsSection />
        <ResultsSection />
        <TestimonialsSection />
        <PricingSection />
        <AuthoritySection />
        <FaqSection />
        <ContactSection />
      </main>
      <MobileStickyCta />
      <ChatWidgetPlaceholder />
      <SiteFooter />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pb-20 pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.015),transparent_30%)]" />
      <div className="absolute left-1/2 top-28 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[180px]" />
      <div className="absolute bottom-0 left-1/2 h-48 w-[70rem] -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.012))]" />
      <div className="section-shell relative">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="section-kicker mx-auto w-fit">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Automation Platform
            </p>
            <h1 className="mt-8 text-6xl font-semibold leading-[0.96] tracking-[-0.04em] md:text-8xl xl:text-[7rem]">
              Scale Your
              <br />
              Business
              <br />
              <span className="text-white/45">with AI.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/40 md:text-xl">
              We help companies automate workflows, reduce costs, and grow faster using cutting-edge AI solutions.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#contact" className="button-primary min-w-[170px]">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#services" className="button-secondary min-w-[150px]">
                Get Started
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="section-shell">
        <div className="panel px-6 py-8 md:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-kicker">{socialProof.eyebrow}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialProof.logos.map((logo) => (
                  <span
                    key={logo}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {socialProof.stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Services"
          title="AI systems engineered for revenue, operational speed, and cleaner execution."
          description="Scalezix blends automation, integrations, CRM workflows, and growth systems so teams can move faster without adding manual complexity."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Reveal key={service.title} delay={index * 70}>
                <div className="panel group h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            kicker="How It Works"
            title="A clear three-step system to move from messy operations to AI-powered scale."
            description="We focus on the highest-leverage workflow, build around your current tools, and optimize for measurable business results."
            compact
          />

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90} direction="right">
                <div className="panel relative overflow-hidden p-6 md:p-7">
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-secondary" />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-foreground">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              kicker="Features"
              title="Built to be powerful for operators and easy for leadership to trust."
              description="Scalezix systems are designed for fast rollout, clean reporting, dependable automation performance, and clear ROI."
              compact
            />
            <div className="mt-10 space-y-5">
              {features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <Reveal key={feature.title} delay={index * 70}>
                    <div className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal direction="right">
            <div className="panel relative overflow-hidden p-5 md:p-7">
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-secondary/20 blur-3xl" />
              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Performance board</p>
                      <p className="mt-1 text-xl font-semibold text-white">Automation overview</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                      Real-time
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[76, 58, 92].map((value, index) => (
                      <div key={value}>
                        <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                          <span>Workflow {index + 1}</span>
                          <span>{value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-muted-foreground">Integrated tools</p>
                    <p className="mt-2 text-3xl font-semibold text-foreground">18</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-muted-foreground">Alerts prevented</p>
                    <p className="mt-2 text-3xl font-semibold text-foreground">1.2k</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-muted-foreground">Decision speed</p>
                    <p className="mt-2 text-3xl font-semibold text-foreground">2.4x</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Products"
          title="Productized solutions for teams that want faster deployment and clearer ROI."
          description="Start with proven Scalezix products, then expand into deeper custom automation once the first wins are live."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 70}>
              <div className="panel flex h-full flex-col p-6">
                <p className="text-sm font-medium text-primary">{product.label}</p>
                <h3 className="mt-3 text-2xl font-semibold">{product.name}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {product.outcomes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/90">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Explore product <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Results"
          title="Clear business outcomes, not vague automation promises."
          description="Our positioning is simple: save time, increase throughput, improve response speed, and make business decisions with better data."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 70}>
              <div className="panel h-full p-6">
                <p className="text-sm font-medium text-primary">{study.outcome}</p>
                <h3 className="mt-3 text-2xl font-semibold">{study.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {study.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Brand Signals"
          title="How Scalezix is positioned across public company profiles and updates."
          description="These are public descriptions tied to Scalezix and its brand presence, replacing generic filler quotes with grounded proof points."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 70}>
              <div className="panel h-full p-6">
                <p className="text-base leading-8 text-foreground/90">“{testimonial.quote}”</p>
                <div className="mt-8">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Pricing"
          title="Choose the engagement model that fits your stage and automation ambition."
          description="Designed for clarity: start with a focused win, expand based on proof, and scale into deeper AI infrastructure when the business case is clear."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 70} direction={index === 1 ? "scale" : "up"}>
              <div
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
                <h3 className="mt-5 text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-3 text-4xl font-semibold">{plan.price}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="button-primary mt-8 flex justify-center">
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthoritySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-shell">
        <div className="panel overflow-hidden p-8 md:p-12">
          <SectionHeading
            kicker="Authority"
            title="Our approach to AI transformation is strategic first, technical second."
            description="Businesses do not need more disconnected tools. They need automation systems that align with real customer journeys, team workflows, and growth targets."
            compact
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {authorityPoints.map((point, index) => (
              <Reveal key={point} delay={index * 70}>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm leading-7 text-foreground/90">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="FAQ"
          title="Answers to the questions buyers ask before starting AI automation."
          description="These sections are intentionally written with SEO-rich language around AI automation agency, business automation, and AI workflow automation."
        />

        <div className="mt-12 grid gap-4">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details className="panel group p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-foreground marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="pb-24 pt-16 md:pb-28 md:pt-24">
      <div className="section-shell">
        <div className="panel relative overflow-hidden p-8 md:p-12">
          <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker">Final CTA</p>
              <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
                Ready to scale with AI?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                {company.contactDescription}
              </p>
              <p className="mt-4 text-sm font-medium text-primary">
                Limited onboarding slots available.
              </p>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Scalezix HQ</p>
                <p className="mt-2">{contactInfo.addressLine1}</p>
                <p>{contactInfo.addressLine2}</p>
                <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:gap-5">
                  <a href={contactInfo.phoneHref} className="transition hover:text-foreground">
                    {contactInfo.phone}
                  </a>
                  <a href={contactInfo.alternatePhoneHref} className="transition hover:text-foreground">
                    {contactInfo.alternatePhone}
                  </a>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="#contact-form" className="button-primary">
                  Book a Call
                </Link>
                <Link href="#pricing" className="button-secondary">
                  Start Free
                </Link>
              </div>
            </div>

            <div id="contact-form" className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                Book Your Free AI Strategy Call
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                This CTA is wired to WhatsApp using your public business number so visitors already have a live inquiry path. We can swap this to your CRM, Calendly, or webhook anytime.
              </p>
              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <input className="contact-input" type="text" placeholder="Full name" />
                <input className="contact-input" type="email" placeholder="Work email" />
                <input className="contact-input" type="text" placeholder="Company" />
                <input className="contact-input" type="text" placeholder="Phone / WhatsApp" />
                <textarea
                  className="contact-input min-h-[140px] sm:col-span-2"
                  placeholder="Tell us what you want to automate"
                />
                <a
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary sm:col-span-2"
                >
                  Continue on WhatsApp
                </a>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">
                {company.demoResponseTime}. For deeper CRM capture, connect this block to your preferred lead form endpoint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStickyCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <Link href="#contact" className="button-primary flex w-full justify-center">
        {company.primaryCta}
      </Link>
    </div>
  );
}

function ChatWidgetPlaceholder() {
  return (
    <a
      href={contactInfo.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-4 z-30 hidden items-center gap-3 rounded-full border border-white/10 bg-slate-950/85 px-4 py-3 text-sm font-medium text-foreground shadow-xl backdrop-blur-xl md:flex"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
      </span>
      Chat on WhatsApp
    </a>
  );
}

function SectionHeading({
  kicker,
  title,
  description,
  compact = false,
}: {
  kicker: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "max-w-2xl" : "max-w-3xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  );
}
