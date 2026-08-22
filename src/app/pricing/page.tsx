import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  Layers,
  PhoneCall,
  MessageSquare,
  Bot,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppPricing } from "@/components/pricing/WhatsAppPricing";
import { pricingPlans, products, services, caseStudies, blogPosts } from "@/content/site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Transparent AI & WhatsApp AI Pricing | Plans starting from ₹3,000/mo | Scalezix",
  description:
    "Explore Scalezix pricing plans for WhatsApp AI Platform (from ₹3,000/mo), AI Calling Voice Agents, and Custom AI Enterprise Automations. Zero user caps, transparent Meta billing.",
  path: "/pricing",
  keywords: [
    "WhatsApp AI pricing",
    "WhatsApp marketing pricing India",
    "Retner alternative India",
    "AI chatbot pricing",
    "Scalezix pricing",
    "AI automation cost India",
  ],
});

export default function PricingPage() {
  return (
    <main className="relative overflow-hidden font-sans bg-slate-50 dark:bg-[#0A0B0D] text-slate-900 dark:text-white transition-colors duration-300">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Scalezix Pricing Plans",
            description:
              "Scalezix WhatsApp AI and Custom Enterprise AI Automation pricing plans starting at ₹3,000/month.",
            url: "https://scalezix.com/pricing",
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#473BFD]/20 bg-[#473BFD]/10 text-xs font-mono font-semibold text-[#473BFD] dark:text-[#D3FDB1] mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            TRANSPARENT, OUTCOME-DRIVEN PRICING
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] max-w-4xl mx-auto">
            Predictable Pricing for <br />
            <span className="text-[#473BFD] dark:text-[#D3FDB1]">High-Growth Businesses</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From plug-and-play WhatsApp AI starting at <strong>₹3,000/month</strong> to custom
            operational agent infrastructure. No hidden seat fees. No contact tax.
          </p>

          {/* Quick Nav Anchors */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#whatsapp-pricing"
              className="button-primary text-xs flex items-center gap-2"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp AI Plans (from ₹3k/mo)</span>
            </a>
            <a
              href="#custom-ai-pricing"
              className="button-secondary text-xs border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5"
            >
              Custom AI Engineering Plans
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: WhatsApp AI Modular Pricing (Retner.ai model) */}
      <section id="whatsapp-pricing" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <WhatsAppPricing />
        </div>
      </section>

      {/* Section 2: Custom AI Systems & Workflow Automation Plans */}
      <section
        id="custom-ai-pricing"
        className="py-20 md:py-24 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0C0D0F]"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
              Bespoke Systems
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              Custom AI Engineering & CRM Deployments
            </h2>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              For teams requiring custom backend automations, multi-agent reasoning, CRM pipelines,
              and private AI infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 border transition-all duration-300 shadow-sm flex flex-col justify-between ${
                  tier.featured
                    ? "border-[#473BFD] dark:border-[#D3FDB1] bg-slate-50/50 dark:bg-[#15171C] ring-2 ring-[#473BFD]/20 shadow-xl"
                    : "border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tier.name}</h3>
                    {tier.featured && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#473BFD]/10 text-[#473BFD] dark:bg-[#D3FDB1]/20 dark:text-[#D3FDB1] uppercase">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-3xl font-extrabold text-slate-900 dark:text-white mt-4">
                    {tier.price}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">{tier.description}</p>

                  <ul className="mt-6 space-y-3 border-t border-slate-100 dark:border-white/5 pt-6">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#473BFD] dark:text-[#D3FDB1] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                  <Link
                    href="/contact"
                    className={`inline-flex w-full items-center justify-center rounded-full py-3 text-xs font-semibold transition ${
                      tier.featured
                        ? "bg-[#473BFD] text-white hover:bg-[#756CFE]"
                        : "border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                    }`}
                  >
                    {tier.cta}
                    <ChevronRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking Hub Section: Products, Services & Case Studies */}
      <section className="py-20 md:py-24 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A0B0D]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
              Explore The Ecosystem
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
              Scalezix Products, Services & Proven Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Products Column */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Bot className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1]" />
                Products & Tools
              </h3>
              <ul className="space-y-3">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="group block p-3 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#473BFD] dark:group-hover:text-[#D3FDB1] transition-colors">
                          {p.name}
                        </span>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {p.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1]" />
                Specialized Services
              </h3>
              <ul className="space-y-3">
                {services.slice(0, 4).map((s) => (
                  <li key={s.title}>
                    <Link
                      href="/services"
                      className="group block p-3 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#473BFD] dark:group-hover:text-[#D3FDB1] transition-colors">
                          {s.title}
                        </span>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {s.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Studies & Insights */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1]" />
                Proof & Insights
              </h3>
              <ul className="space-y-3">
                {caseStudies.map((cs) => (
                  <li key={cs.title}>
                    <Link
                      href="/case-studies"
                      className="group block p-3 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition"
                    >
                      <span className="text-[10px] font-mono font-bold uppercase text-[#473BFD] dark:text-[#D3FDB1]">
                        {cs.outcome}
                      </span>
                      <p className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5 group-hover:text-[#473BFD] dark:group-hover:text-[#D3FDB1] transition-colors">
                        {cs.title}
                      </p>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/blog/automate-whatsapp-for-business-india"
                    className="group block p-3 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition"
                  >
                    <span className="text-[10px] font-mono font-bold uppercase text-emerald-500">
                      Featured Guide
                    </span>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">
                      How to Automate WhatsApp for Business in India (2026 Guide) &rarr;
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
