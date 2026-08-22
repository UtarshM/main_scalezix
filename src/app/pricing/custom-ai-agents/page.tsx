import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Bot, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { AgentsPricing } from "@/components/pricing/AgentsPricing";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Custom AI Agents Pricing | Autonomous AI Workforce from ₹7,999/mo | Scalezix",
  description:
    "Explore transparent pricing for Custom AI Agents and autonomous operational workforce pods starting at ₹7,999/month. Zero hallucination guardrails, private VPC options, and deep tool integrations.",
  path: "/pricing/custom-ai-agents",
  keywords: [
    "Custom AI agent pricing",
    "AI workforce cost India",
    "autonomous agent pricing",
    "AI engineer retainer India",
    "enterprise AI agent cost",
    "private LLM deployment price",
  ],
});

export default function CustomAIAgentsPricingPage() {
  return (
    <main className="relative overflow-hidden font-sans bg-slate-50 dark:bg-[#0A0B0D] text-slate-900 dark:text-white transition-colors duration-300">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Scalezix Custom AI Agents & Autonomous Workforce",
            description:
              "Bespoke AI agents and autonomous engineering pods that execute complex business operations starting at ₹7,999/mo.",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "INR",
              lowPrice: "7999",
              highPrice: "49999",
              offerCount: "3",
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
            { name: "Custom AI Agents Pricing", path: "/pricing/custom-ai-agents" },
          ]),
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-18 border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
          {/* Breadcrumb pills */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Pricing Hub
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#473BFD] dark:text-[#D3FDB1] font-semibold">Custom AI Agents</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#473BFD]/20 bg-[#473BFD]/10 text-xs font-mono font-semibold text-[#473BFD] dark:text-[#D3FDB1] mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            AUTONOMOUS OPERATIONAL WORKFORCE & RAG SYSTEMS
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] max-w-4xl mx-auto">
            Custom AI Agents Pricing <br />
            <span className="text-[#473BFD] dark:text-[#D3FDB1]">Starting at ₹7,999/month</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Replace manual task bottlenecks with purpose-built autonomous agents. Dynamic vector memory, multi-LLM smart routing, human-in-the-loop review, and private VPC security.
          </p>

          {/* Quick Switch to Other Pricing Pages */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs text-slate-500 mr-1">Other Pricing Pages:</span>
            <Link
              href="/pricing/whatsapp-ai"
              className="button-secondary text-xs border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5"
            >
              WhatsApp AI Pricing (from ₹3,000/mo) &rarr;
            </Link>
            <Link
              href="/pricing/scalezix-crm"
              className="button-secondary text-xs border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5"
            >
              Scalezix CRM Pricing (from ₹4,999/mo) &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Main Pricing Module */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <AgentsPricing showTitle={false} />
        </div>
      </section>

      {/* Related Product Details Banner */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#473BFD] dark:text-[#D3FDB1] font-bold">
                ENGINEERING SPECIFICATION
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Explore Custom AI Agents Technical Blueprint
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                Discover how our autonomous pods integrate with your internal APIs, databases, and SOPs with zero data leakage.
              </p>
            </div>
            <Link
              href="/products/custom-ai-agents"
              className="button-primary text-xs shrink-0 flex items-center gap-2"
            >
              <span>View Agents Architecture</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
