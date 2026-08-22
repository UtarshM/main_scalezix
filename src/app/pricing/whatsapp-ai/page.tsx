import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, MessageSquare, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppPricing } from "@/components/pricing/WhatsAppPricing";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { products } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "WhatsApp AI Platform Pricing | Starts at ₹3,000/mo | Scalezix",
  description:
    "Explore transparent modular pricing for Scalezix WhatsApp AI starting at ₹3,000/month. Unlimited contacts, shared team inbox, abandoned cart recovery, AI voice agents, and 0% markup on Meta Cloud API.",
  path: "/pricing/whatsapp-ai",
  keywords: [
    "WhatsApp AI pricing",
    "WhatsApp marketing pricing India",
    "Retner alternative India",
    "WhatsApp chatbot price",
    "Scalezix WhatsApp pricing",
    "AI voice caller pricing",
  ],
});

export default function WhatsAppPricingPage() {
  return (
    <main className="relative overflow-hidden font-sans bg-slate-50 dark:bg-[#0A0B0D] text-slate-900 dark:text-white transition-colors duration-300">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Scalezix WhatsApp AI Growth Engine",
            description:
              "WhatsApp AI marketing, broadcast, automated cart recovery, and AI voice calling platform starting at ₹3,000/mo.",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "INR",
              lowPrice: "3000",
              highPrice: "11999",
              offerCount: "3",
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
            { name: "WhatsApp AI Pricing", path: "/pricing/whatsapp-ai" },
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
            <span className="text-[#473BFD] dark:text-[#D3FDB1] font-semibold">WhatsApp AI</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#473BFD]/20 bg-[#473BFD]/10 text-xs font-mono font-semibold text-[#473BFD] dark:text-[#D3FDB1] mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            OFFICIAL META CLOUD API & VOICE CALLING ENGINE
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] max-w-4xl mx-auto">
            WhatsApp AI Pricing Plans <br />
            <span className="text-[#473BFD] dark:text-[#D3FDB1]">Starting at ₹3,000/month</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Zero contact caps, zero per-seat fees, and 0% markup on official Meta API charges. Scale your D2C brand or enterprise sales loop with predictable ROI.
          </p>

          {/* Quick Switch to Other Pricing Pages */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs text-slate-500 mr-1">Other Pricing Pages:</span>
            <Link
              href="/pricing/scalezix-crm"
              className="button-secondary text-xs border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5"
            >
              Scalezix CRM Pricing (from ₹4,999/mo) &rarr;
            </Link>
            <Link
              href="/pricing/custom-ai-agents"
              className="button-secondary text-xs border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5"
            >
              Custom AI Agents Pricing (from ₹7,999/mo) &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Main Pricing Module */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <WhatsAppPricing showTitle={false} />
        </div>
      </section>

      {/* Related Product Details Banner */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#473BFD] dark:text-[#D3FDB1] font-bold">
                EXPLORE DEEP CAPABILITIES
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Want to see the complete WhatsApp AI feature architecture?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                Read our in-depth product breakdown covering Shopify 1-click sync, automated flow builder, and multilingual voice callers.
              </p>
            </div>
            <Link
              href="/products/whatsapp-ai"
              className="button-primary text-xs shrink-0 flex items-center gap-2"
            >
              <span>View Product Overview</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
