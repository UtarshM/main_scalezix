import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import type { CanadaServiceCityPage } from "@/content/canada";

export function CanadaServicePage({ page }: { page: CanadaServiceCityPage }) {
  return (
    <main className="section-shell py-20 md:py-24">
      <div className="max-w-5xl">
        <p className="section-kicker w-fit">
          {page.city.name}, {page.city.province}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          {page.heroTitle}
        </h1>
        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">{page.heroIntro}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="button-primary">
            Book a strategy call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href={`/services/${page.service.slug}`} className="button-secondary">
            Explore {page.service.name}
          </Link>
        </div>
      </div>

      <section className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="mesh-card rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">
            Why {page.city.name} teams look for {page.service.name.toLowerCase()}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">{page.cityIntro}</p>
          <div className="mt-6 space-y-3">
            {page.painPoints.map((point) => (
              <div key={point} className="rounded-[1.3rem] border border-white/8 bg-white/[0.02] p-4">
                <p className="text-sm leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="metal-panel rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">How Scalezix approaches it</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">{page.solutionAngle}</p>
          <div className="mt-6 grid gap-3">
            {page.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-[1.3rem] border border-[#00f5ff]/14 bg-[#08111f] p-4">
                <p className="text-sm font-medium text-white">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="mesh-card rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">What we deliver</h2>
          <div className="mt-6 space-y-3">
            {page.deliverables.map((deliverable) => (
              <div key={deliverable} className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
                <p className="text-sm leading-7 text-slate-200">{deliverable}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="metal-panel rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">Who this is built for</h2>
          <div className="mt-6 space-y-3">
            {page.idealFor.map((item) => (
              <div key={item} className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="metal-panel rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">Implementation process</h2>
          <div className="mt-6 space-y-4">
            {page.process.map((step, index) => (
              <div key={step} className="rounded-[1.3rem] border border-white/8 bg-white/[0.02] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Step {index + 1}</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mesh-card rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">{page.proofTitle}</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">{page.proofBody}</p>
          <div className="mt-8 rounded-[1.4rem] border border-[#00f5ff]/14 bg-[#08111f] p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Best nearby fit</p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Teams in {page.city.nearbyAreas.join(", ")} often face similar growth and coordination
              challenges, so the same system design principles apply across the wider region.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="metal-panel rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1.3rem] border border-white/8 bg-white/[0.02] p-5">
                <h3 className="text-base font-medium text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mesh-card rounded-[2rem] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">Explore related pages</h2>
          <div className="mt-6 space-y-3">
            {page.internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-[1.3rem] border border-white/8 bg-white/[0.02] p-4 transition hover:border-[#00f5ff]/20 hover:bg-white/[0.04]"
              >
                <span className="text-sm text-slate-200">{link.label}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-[1.4rem] border border-[#00f5ff]/14 bg-[#08111f] p-5">
            <h3 className="text-lg font-medium text-white">Need a Canada growth system, not just a bot?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Scalezix blends AI systems, software, CRM integration, and revenue operations so
              conversational tools sit inside a more useful commercial workflow.
            </p>
            <div className="mt-5">
              <Link href="/contact" className="button-primary">
                Talk to Scalezix
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-16 overflow-hidden rounded-[2.4rem] border border-[#00f5ff]/16 bg-[#07101f]/75 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-12">
        <div className="absolute left-0 top-0 h-px w-full bg-white/10" />
        <div className="animate-float-slow absolute right-10 top-10 h-32 w-32 rounded-full bg-[#00f5ff]/14 blur-[100px]" />
        
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] z-10">
          <div>
            <p className="section-kicker w-fit">Get Started in {page.city.name}</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Let&apos;s Build Your {page.service.name} System
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Ready to automate operations and drive revenue? Tell us where your workflow slows down in {page.city.name}, and we&apos;ll map your top three AI opportunities.
            </p>
            
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]" />
                Custom {page.service.name.toLowerCase()} strategy for local operations
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]" />
                Integration with your existing CRMs, inboxes, and tools
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]" />
                24/7 automated support and lead qualification options
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="https://calendly.com/scalezix/free-strategy-call" className="button-primary">
                Book a Free call
              </Link>
              <Link href="https://wa.me/918200010241?text=Hi%20Scalezix" className="button-secondary">
                WhatsApp Chat
              </Link>
            </div>
          </div>

          <div className="metal-panel rounded-2xl p-6 bg-black/40 backdrop-blur-md">
            <h3 className="text-xl font-medium text-white mb-5">Inquire about {page.service.name}</h3>
            <div className="grid gap-3.5">
              <input className="contact-input" placeholder="Your Name" />
              <input className="contact-input" placeholder="Work Email" />
              <input className="contact-input" placeholder="Phone Number" />
              <input className="contact-input" placeholder="Company Name" />
              <textarea className="contact-input min-h-24 py-3" placeholder="Tell us about your automation or software needs..." />
              <button className="button-primary w-full mt-2">Submit Inquiry</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
