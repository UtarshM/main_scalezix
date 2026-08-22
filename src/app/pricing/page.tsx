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
  Check,
  Cpu,
  HelpCircle,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { products, services, caseStudies, blogPosts } from "@/content/site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing Directory | WhatsApp AI, CRM & Custom Agents | Scalezix",
  description:
    "Explore dedicated pricing for Scalezix platforms: WhatsApp AI (from ₹3,000/mo), Scalezix CRM (from ₹4,999/mo), and Custom AI Agents (from ₹7,999/mo). Zero hidden fees, transparent ROI.",
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

const generalPricingFaqs = [
  {
    question: "How do I choose between WhatsApp AI, Scalezix CRM, and Custom Agents?",
    answer:
      "If your primary focus is customer communication, broadcasts, cart recovery, and voice calling, choose WhatsApp AI (from ₹3,000/mo). If you need to manage sales pipelines, deal stages, and rep follow-ups, choose Scalezix CRM (from ₹4,999/mo). If you require specialized AI agents to execute internal SOPs across multiple tools, choose Custom AI Agents (from ₹7,999/mo).",
  },
  {
    question: "Can we bundle WhatsApp AI and Scalezix CRM together?",
    answer:
      "Yes! Scalezix CRM and WhatsApp AI are designed to work seamlessly together with native 2-way data sync. Contact our team to get a bundled custom discount for your company.",
  },
  {
    question: "Are there long-term contract lock-ins?",
    answer:
      "No. All standard monthly plans operate on a flexible month-to-month subscription that you can upgrade, downgrade, or cancel anytime. We also offer annual billing with a 20% discount.",
  },
  {
    question: "Do you offer proof-of-concept (POC) pilots?",
    answer:
      "Yes. For custom agents and enterprise deployments, we run a rapid 14-day production pilot to prove accuracy and speed-to-ROI before full rollout.",
  },
];

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
              "Scalezix WhatsApp AI, CRM Platform, and Custom Autonomous AI Agents pricing directory.",
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
            Choose Your AI Growth Platform <br />
            <span className="text-[#473BFD] dark:text-[#D3FDB1]">Select a Dedicated Pricing Suite</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Transparent modular pricing with zero per-user seat penalties, zero contact caps, and no hidden markups. Click any platform below to explore its dedicated tiers and interactive calculator.
          </p>
        </div>
      </section>

      {/* 3 Dedicated Standalone Pricing Platform Cards */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: WhatsApp AI Platform */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card/50 p-8 flex flex-col justify-between hover:border-[#25D366] dark:hover:border-[#25D366]/60 transition-all duration-300 shadow-md hover:shadow-2xl group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    From ₹3,000/mo
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-6 group-hover:text-[#25D366] transition-colors">
                  WhatsApp AI Platform
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Official Meta Cloud API, automated abandoned cart recovery, COD verification, broadcast campaigns, and multilingual AI voice callers.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span><strong>₹3,000/mo</strong> — WhatsApp Only Base</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span><strong>₹5,999/mo</strong> — WhatsApp + Voice AI Calling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span><strong>₹11,999/mo</strong> — Full Omnichannel Suite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span><strong>0% Markup</strong> on official Meta API</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Unlimited Contacts & Shared Inbox</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                <Link
                  href="/pricing/whatsapp-ai"
                  className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition duration-200 hover:scale-[1.02]"
                >
                  <span>Explore WhatsApp AI Pricing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Scalezix CRM Platform */}
            <div className="rounded-3xl border border-[#473BFD] dark:border-[#D3FDB1]/40 bg-slate-900 dark:bg-card p-8 flex flex-col justify-between shadow-xl ring-1 ring-[#473BFD]/30 transition-all duration-300 hover:shadow-2xl group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-[#473BFD]/20 text-[#D3FDB1] flex items-center justify-center">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D3FDB1]/20 text-[#D3FDB1] border border-[#D3FDB1]/30">
                    From ₹4,999/mo
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mt-6 group-hover:text-[#D3FDB1] transition-colors">
                  Scalezix CRM Platform
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  High-velocity sales pipeline, 2-way WhatsApp chat sync, automated multi-channel follow-ups, and native Tally GST invoice connectors.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-800 dark:border-white/10 space-y-2.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>₹4,999/mo</strong> — Starter Sales Hub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>₹9,999/mo</strong> — Growth Engine CRM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>₹24,999/mo</strong> — Enterprise Custom CRM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>Zero per-user seat fees</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Free white-glove data migration</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 dark:border-white/10">
                <Link
                  href="/pricing/scalezix-crm"
                  className="w-full py-3.5 px-6 rounded-full bg-[#D3FDB1] hover:bg-[#b8fa87] text-slate-950 text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition duration-200 hover:scale-[1.02]"
                >
                  <span>Explore Scalezix CRM Pricing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: Custom AI Agents & Pods */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card/50 p-8 flex flex-col justify-between hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-2xl group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    From ₹7,999/mo
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-6 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Custom AI Agents & Pods
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Autonomous operational squads trained on company SOPs, dynamic vector memory, multi-LLM smart routing, and isolated private VPC hosting.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span><strong>₹7,999/mo</strong> — Single Task Agent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span><strong>₹19,999/mo</strong> — Multi-Agent Autonomous Pod</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span><strong>₹49,999/mo</strong> — Enterprise Workforce</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span><strong>Zero Data Retention</strong> enterprise privacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Human-in-the-loop review gates</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                <Link
                  href="/pricing/custom-ai-agents"
                  className="w-full py-3.5 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition duration-200 hover:scale-[1.02]"
                >
                  <span>Explore Custom Agents Pricing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Billing Commitments */}
      <section className="py-16 md:py-20 border-y border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E0F12]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
              THE SCALEZIX PROMISE
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-2">
              Why Modern Operators Choose Scalezix
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40">
              <Shield className="h-6 w-6 text-emerald-500 mb-3" />
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">0% API Markups</h3>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We pass official Meta WhatsApp charges directly with zero added surcharges.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40">
              <Zap className="h-6 w-6 text-[#473BFD] dark:text-[#D3FDB1] mb-3" />
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">No Per-Seat Taxes</h3>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Add your entire sales and operations staff without being penalized for hiring.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40">
              <Layers className="h-6 w-6 text-purple-500 mb-3" />
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Modular Plug-and-Play</h3>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Activate chatbots, voice callers, or ERP connectors anytime with 1-click add-ons.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40">
              <Sparkles className="h-6 w-6 text-amber-500 mb-3" />
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">White-Glove Setup</h3>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Dedicated engineering pods handle integration, workflow mapping, and team training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General Pricing FAQs */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-xs leading-relaxed">
            {generalPricingFaqs.map((faq, fidx) => (
              <div
                key={fidx}
                className="p-6 rounded-2xl bg-white dark:bg-card/40 border border-slate-200 dark:border-white/10"
              >
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Need Custom Consulting Banner */}
          <div className="mt-14 max-w-4xl mx-auto rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-card/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Need a Custom Architecture or Multi-Platform Bundle?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-lg">
                Talk directly with a Scalezix operations architect to scope your systems, APIs, and timeline.
              </p>
            </div>
            <Link
              href="/contact"
              className="button-primary text-xs shrink-0 flex items-center gap-2"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
