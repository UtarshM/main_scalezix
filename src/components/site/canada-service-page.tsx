import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import type { CanadaServiceCityPage } from "@/content/canada";

export function CanadaServicePage({ page }: { page: CanadaServiceCityPage }) {
  return (
    <main className="w-full bg-[#0C0D0F]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#0C0D0F] text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="max-w-5xl">
            <span className="eyebrow mb-5">
              {page.city.name}, {page.city.province}
            </span>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl leading-[1.1]">
              {page.heroTitle}
            </h1>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300">{page.heroIntro}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="button-primary">
                Book a strategy call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href={`/services/${page.service.slug}`} className="button-secondary text-white border-white/20 hover:bg-white/5">
                Explore {page.service.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white text-slate-900 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Why {page.city.name} teams look for {page.service.name.toLowerCase()}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">{page.cityIntro}</p>
              <div className="mt-6 space-y-3">
                {page.painPoints.map((point) => (
                  <div key={point} className="rounded-[1.3rem] border border-slate-200/60 bg-white p-4">
                    <p className="text-xs leading-relaxed text-slate-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">How Scalezix approaches it</h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">{page.solutionAngle}</p>
              <div className="mt-6 grid gap-3">
                {page.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-[1.3rem] border border-slate-200/60 bg-white p-4">
                    <p className="text-xs font-semibold text-slate-800">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">What we deliver</h2>
              <div className="mt-6 space-y-3">
                {page.deliverables.map((deliverable) => (
                  <div key={deliverable} className="rounded-[1.2rem] border border-slate-200/60 bg-white p-4">
                    <p className="text-xs leading-relaxed text-slate-600">{deliverable}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Who this is built for</h2>
              <div className="mt-6 space-y-3">
                {page.idealFor.map((item) => (
                  <div key={item} className="rounded-[1.2rem] border border-slate-200/60 bg-white p-4">
                    <p className="text-xs leading-relaxed text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Implementation process</h2>
              <div className="mt-6 space-y-4">
                {page.process.map((step, index) => (
                  <div key={step} className="rounded-[1.3rem] border border-slate-200/60 bg-white p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-slate-400">Step {index + 1}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">{page.proofTitle}</h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">{page.proofBody}</p>
              <div className="mt-8 rounded-[1.4rem] border border-slate-200/60 bg-white p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-slate-400">Best nearby fit</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Teams in {page.city.nearbyAreas.join(", ")} often face similar growth and coordination
                  challenges, so the same system design principles apply across the wider region.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {page.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-[1.3rem] border border-slate-200/60 bg-white p-5">
                    <h3 className="text-sm font-semibold text-slate-900">{faq.question}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Explore related pages</h2>
                <div className="mt-6 space-y-3">
                  {page.internalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between rounded-[1.3rem] border border-slate-200 bg-white p-4 transition hover:border-[#473BFD]/20 hover:bg-slate-50"
                    >
                      <span className="text-xs text-slate-700">{link.label}</span>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[1.4rem] border border-slate-200/60 bg-white p-5">
                <h3 className="text-base font-bold text-slate-900">Need a Canada growth system, not just a bot?</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
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
          </div>

          {/* Call to action section */}
          <div className="relative mt-16 overflow-hidden rounded-[2.4rem] border border-[#D3FDB1]/16 bg-[#0C0D0F] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-12 text-white">
            <div className="absolute left-0 top-0 h-px w-full bg-white/10" />
            <div className="animate-float-slow absolute right-10 top-10 h-32 w-32 rounded-full bg-[#D3FDB1]/14 blur-[100px]" />
            
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] z-10">
              <div>
                <span className="eyebrow mb-5">Get Started in {page.city.name}</span>
                <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                  Let&apos;s Build Your {page.service.name} System
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300">
                  Ready to automate operations and drive revenue? Tell us where your workflow slows down in {page.city.name}, and we&apos;ll map your top three AI opportunities.
                </p>
                
                <div className="mt-8 space-y-4 text-xs text-slate-300">
                  <p className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D3FDB1]" />
                    Custom {page.service.name.toLowerCase()} strategy for local operations
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D3FDB1]" />
                    Integration with your existing CRMs, inboxes, and tools
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D3FDB1]" />
                    24/7 automated support and lead qualification options
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="https://calendly.com/scalezix/free-strategy-call" className="button-primary">
                    Book a Free call
                  </Link>
                  <Link href="https://wa.me/918200010241?text=Hi%20Scalezix" className="button-secondary text-white border-white/20 hover:bg-white/5">
                    WhatsApp Chat
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl p-6 bg-black/40 border border-white/10 backdrop-blur-md">
                <h3 className="text-lg font-medium text-white mb-5">Inquire about {page.service.name}</h3>
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
          </div>

        </div>
      </section>
      
    </main>
  );
}
