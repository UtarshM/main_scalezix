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
  BarChart3,
  Cpu,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppPricing } from "@/components/pricing/WhatsAppPricing";
import { CRMPricing } from "@/components/pricing/CRMPricing";
import { AgentsPricing } from "@/components/pricing/AgentsPricing";
import { products, services, caseStudies, blogPosts } from "@/content/site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Transparent AI & Systems Pricing | Plans starting from ₹3,000/mo | Scalezix",
  description:
    "Explore Scalezix pricing plans for WhatsApp AI Platform (from ₹3,000/mo), Scalezix CRM (from ₹4,999/mo), and Custom AI Agents (from ₹7,999/mo). Zero hidden fees, predictable enterprise ROI.",
  path: "/pricing",
  keywords: [
    "WhatsApp AI pricing",
    "Scalezix CRM pricing",
    "Custom AI agent pricing",
    "AI automation cost India",
    "Retner alternative India",
    "HubSpot alternative India",
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
            name: "Scalezix Pricing Hub",
            description:
              "Scalezix WhatsApp AI, CRM Platform, and Custom Autonomous AI Agents pricing plans starting at ₹3,000/month.",
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
            Predictable AI Pricing for <br />
            <span className="text-[#473BFD] dark:text-[#D3FDB1]">High-Growth Businesses</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From plug-and-play WhatsApp AI starting at <strong>₹3,000/month</strong> to CRM pipelines and custom autonomous operational agents. No hidden seat fees. No contact tax.
          </p>

          {/* 3 Dedicated Solution Pillar Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            {/* WhatsApp AI Card */}
            <Link
              href="/pricing/whatsapp-ai"
              className="group rounded-3xl p-6 border border-slate-200 dark:border-white/10 bg-white dark:bg-card/50 hover:border-[#473BFD] dark:hover:border-[#D3FDB1]/50 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                    From ₹3,000/mo
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4 group-hover:text-[#473BFD] dark:group-hover:text-[#D3FDB1] transition-colors">
                  WhatsApp AI Engine
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Broadcasts, automated cart recovery, COD verification, and AI voice calls with 0% Meta markup.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1]">
                <span>Dedicated WhatsApp Pricing</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Scalezix CRM Card */}
            <Link
              href="/pricing/scalezix-crm"
              className="group rounded-3xl p-6 border border-slate-200 dark:border-white/10 bg-white dark:bg-card/50 hover:border-[#473BFD] dark:hover:border-[#D3FDB1]/50 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-2xl bg-[#473BFD]/10 text-[#473BFD] dark:text-[#D3FDB1] flex items-center justify-center">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                    From ₹4,999/mo
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4 group-hover:text-[#473BFD] dark:group-hover:text-[#D3FDB1] transition-colors">
                  Scalezix CRM Platform
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Zero per-seat fees, multi-channel automated drip follow-ups, and native WhatsApp + Tally GST sync.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1]">
                <span>Dedicated CRM Pricing</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Custom AI Agents Card */}
            <Link
              href="/pricing/custom-ai-agents"
              className="group rounded-3xl p-6 border border-slate-200 dark:border-white/10 bg-white dark:bg-card/50 hover:border-[#473BFD] dark:hover:border-[#D3FDB1]/50 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-2xl bg-purple-500/10 text-purple-500 dark:text-purple-400 flex items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                    From ₹7,999/mo
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4 group-hover:text-[#473BFD] dark:group-hover:text-[#D3FDB1] transition-colors">
                  Custom AI Agents
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Autonomous operational pods trained on company SOPs, dynamic vector memory, and private VPC hosting.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1]">
                <span>Dedicated Agents Pricing</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: WhatsApp AI Modular Pricing */}
      <section id="whatsapp-pricing" className="py-20 md:py-24 border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
                PLATFORM 1 OF 3
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                WhatsApp AI Platform
              </h2>
            </div>
            <Link
              href="/pricing/whatsapp-ai"
              className="text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline flex items-center gap-1.5"
            >
              <span>Open Standalone WhatsApp Pricing Page</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <WhatsAppPricing showTitle={false} />
        </div>
      </section>

      {/* Section 2: Scalezix CRM Pricing */}
      <section id="crm-pricing" className="py-20 md:py-24 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#0C0D0F]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
                PLATFORM 2 OF 3
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Scalezix CRM & Sales Pipeline Hub
              </h2>
            </div>
            <Link
              href="/pricing/scalezix-crm"
              className="text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline flex items-center gap-1.5"
            >
              <span>Open Standalone CRM Pricing Page</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <CRMPricing showTitle={false} />
        </div>
      </section>

      {/* Section 3: Custom AI Agents Pricing */}
      <section id="agents-pricing" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
                PLATFORM 3 OF 3
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Custom Autonomous AI Agents & Pods
              </h2>
            </div>
            <Link
              href="/pricing/custom-ai-agents"
              className="text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline flex items-center gap-1.5"
            >
              <span>Open Standalone Agents Pricing Page</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <AgentsPricing showTitle={false} />
        </div>
      </section>

      {/* Cross-linking Ecosystem Hub */}
      <section className="py-16 md:py-20 border-t border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-card/20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
              CONNECTED ECOSYSTEM
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-2">
              Explore Our Products, Services & Case Studies
            </h2>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
              Discover how our modular platforms and specialized engineering teams deliver predictable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Products Pillar */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card/40 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#473BFD] dark:text-[#D3FDB1] mb-3">
                  Products & Tools
                </h3>
                <div className="flex flex-col gap-3 text-xs">
                  {products.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/products/${prod.slug}`}
                      className="group flex flex-col p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/10"
                    >
                      <span className="font-bold text-slate-800 dark:text-white group-hover:text-[#473BFD] dark:group-hover:text-[#D3FDB1] transition-colors">
                        {prod.name}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                        {prod.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Specialized Services Pillar */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card/40 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#473BFD] dark:text-[#D3FDB1] mb-3">
                  Specialized Services
                </h3>
                <div className="flex flex-col gap-2 text-xs">
                  <Link
                    href="/services/ai-automation"
                    className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-700 dark:text-slate-300 font-medium"
                  >
                    AI Automation Engineering &rarr;
                  </Link>
                  <Link
                    href="/services/ai-agents"
                    className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-700 dark:text-slate-300 font-medium"
                  >
                    Autonomous AI Agents Deployment &rarr;
                  </Link>
                  <Link
                    href="/services/software-development"
                    className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-700 dark:text-slate-300 font-medium"
                  >
                    Custom Software & Web Architecture &rarr;
                  </Link>
                  <Link
                    href="/services/crm-integrations"
                    className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-700 dark:text-slate-300 font-medium"
                  >
                    CRM & API Middleware &rarr;
                  </Link>
                  <Link
                    href="/services/ai-chatbots"
                    className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-700 dark:text-slate-300 font-medium"
                  >
                    Customer AI Chatbots &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Proof & Insights Pillar */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card/40 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#473BFD] dark:text-[#D3FDB1] mb-3">
                  Proof & Insights
                </h3>
                <div className="flex flex-col gap-3 text-xs">
                  {caseStudies.map((study, sidx) => (
                    <Link
                      key={sidx}
                      href="/case-studies"
                      className="group flex flex-col p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/10"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                        {study.outcome}
                      </span>
                      <span className="font-medium text-slate-800 dark:text-white mt-0.5 line-clamp-1">
                        {study.title}
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/blog/automate-whatsapp-for-business-india"
                    className="mt-1 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 text-[11px] text-[#473BFD] dark:text-[#D3FDB1] font-semibold flex items-center justify-between"
                  >
                    <span>Featured Guide: Automate WhatsApp for Business</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
