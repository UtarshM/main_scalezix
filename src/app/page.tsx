"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Zap,
  Workflow,
  Code,
  Megaphone,
  Bot,
  Network,
  ChevronDown,
  Sparkles,
  BarChart3,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  caseStudies,
  companyInfo,
  homeTicker,
  products,
  trustStats,
} from "@/content/prd-site";
import { AIOpportunityCalculator } from "@/components/site/AIOpportunityCalculator";
import { ComparisonGrid } from "@/components/site/ComparisonGrid";

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "ai-automation":
        return <Workflow className="h-6 w-6 text-[#473BFD] dark:text-[#D3FDB1]" />;
      case "software-development":
        return <Code className="h-6 w-6 text-[#473BFD] dark:text-[#D3FDB1]" />;
      case "digital-marketing":
        return <Megaphone className="h-6 w-6 text-[#473BFD] dark:text-[#D3FDB1]" />;
      case "ai-agents":
        return <Bot className="h-6 w-6 text-[#473BFD] dark:text-[#D3FDB1]" />;
      case "crm-integrations":
        return <Network className="h-6 w-6 text-[#473BFD] dark:text-[#D3FDB1]" />;
      default:
        return <Zap className="h-6 w-6 text-[#473BFD] dark:text-[#D3FDB1]" />;
    }
  };

  const badges = [
    "ChatGPT ≠ AI strategy",
    "More tools ≠ more output",
    "AI hype ≠ AI readiness",
    "Experiments ≠ transformation",
    "AI interest ≠ AI infrastructure"
  ];

  const faqs = [
    {
      q: "What is the Scalezix AI Opportunity Audit?",
      a: "The AI Opportunity Audit is our initial discovery phase where we analyze how work flows across your departments. We map your current manual processes, find the biggest bottlenecks, and compile a clear roadmap highlighting the highest-ROI automation opportunities, custom agents, and estimated value unlocked."
    },
    {
      q: "How are you different from a traditional software agency?",
      a: "Most software agencies only write code to your exact specs, and AI consultants only hand you a strategy document. Scalezix bridges both. We analyze workflows, design secure AI infrastructure, build custom integrations/agents, and upskill your teams so AI becomes a permanent capability inside your business."
    },
    {
      q: "Is team training included in your deployments?",
      a: "Yes. AI systems only deliver ROI if your team uses them. We build custom manuals, templates, and host interactive workshops tailored to your daily processes so your workforce knows exactly how to collaborate with AI tools."
    },
    {
      q: "What types of custom AI systems do you build?",
      a: "We deploy intelligent workflow automations (handling leads, orders, or support logs across systems), autonomous agents (qualifying prospects or summarizing documents), custom dashboards, and secure API middleware connecting your private databases with LLM models."
    },
    {
      q: "How long does a typical deployment take?",
      a: "While larger systems evolve over time, we build in modular sprints. Our initial integrations and automations are typically deployed and active in under 6 weeks, allowing you to see measurable improvements quickly."
    }
  ];

  return (
    <main className="relative overflow-hidden font-sans bg-slate-50 dark:bg-background text-slate-900 dark:text-foreground transition-colors duration-300">
      
      {/* 1. HERO SECTION WITH GLOW & GRID */}
      <section className="relative pt-[160px] pb-20 sm:pt-[190px] lg:pt-[220px] lg:pb-28 overflow-hidden">
        {/* Glow overlay */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] accent-glow pointer-events-none z-0" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-30 dark:opacity-100 grid-bg" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1140px] flex-col items-center px-5 text-center sm:px-8">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-card/40 backdrop-blur-md mb-8 text-xs font-mono text-[#473BFD] dark:text-[#D3FDB1] shadow-sm font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI Transformation & Workflow Automation</span>
          </div>

          {/* Big Bold Headline */}
          <h1 className="text-pretty font-bold text-slate-900 dark:text-white text-[38px] leading-[1.08] tracking-[-1.2px] md:text-[56px] md:leading-[1.05] md:tracking-[-1.8px] lg:max-w-[960px] lg:text-[72px] lg:leading-[76px] lg:tracking-[-2px]">
            We Build AI Systems That <br className="hidden md:block" />
            <span className="text-gradient">Scale Your Business.</span>
          </h1>

          <p className="mt-6 max-w-[780px] text-base leading-[26px] text-slate-600 dark:text-[#f3f4f6]/80 md:text-[18px] md:leading-[28px]">
            Scalezix is an applied AI company. We measure automation maturity, redesign operational workflows, and deploy secure custom AI systems that run permanently inside your business.
          </p>

          {/* Diagnosis & Strategy CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold bg-[#473BFD] hover:bg-[#756CFE] dark:hover:brightness-110 text-white px-8 py-3.5 text-sm transition shadow-[0_4px_20px_rgba(31,119,255,0.25)]"
            >
              Start with a Diagnosis
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold border border-slate-300 dark:border-white/15 bg-white/70 dark:bg-card/25 hover:bg-white dark:hover:bg-card/50 text-slate-900 dark:text-white px-8 py-3.5 text-sm transition shadow-sm"
            >
              View Pricing (from ₹3k/mo)
            </Link>
            <Link
              href={companyInfo.calendlyHref}
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold border border-transparent hover:border-slate-300 dark:hover:border-white/15 text-slate-700 dark:text-slate-300 px-6 py-3.5 text-sm transition"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Badges Flow */}
          <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-3xl">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-card/20 font-mono text-[10px] font-semibold tracking-wide text-slate-700 dark:text-slate-300 shadow-xs"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#473BFD] dark:bg-[#D3FDB1]" />
                {badge}
              </span>
            ))}
          </div>

          {/* Stats Grid */}
          <ul aria-label="Key statistics" className="mt-20 grid w-full grid-cols-2 gap-4 lg:mt-24 lg:grid-cols-4">
            {trustStats.slice(0, 4).map((stat) => (
              <StatsCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </ul>

        </div>
      </section>

      {/* 2. MARQUEE SIGNAL RUNNER */}
      <section className="relative border-y border-slate-200 dark:border-white/10 bg-white dark:bg-card/20 py-5 transition-colors duration-300 z-10">
        <div className="mx-auto max-w-7xl px-4 overflow-hidden whitespace-nowrap text-sm text-[#83909a]">
          <div className="animate-marquee inline-flex min-w-full items-center gap-16 py-1">
            {homeTicker.concat(homeTicker).map((signal, index) => (
              <span key={`${signal}-${index}`} className="inline-flex items-center gap-3 text-slate-800 dark:text-white/80 font-semibold">
                <span className="h-2 w-2 rounded-full bg-[#473BFD] dark:bg-[#D3FDB1] shadow-[0_0_8px_#473BFD]" />
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE GAP COMPARISON GRID */}
      <section className="relative py-24 z-10 bg-slate-50 dark:bg-background transition-colors duration-300">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ComparisonGrid />
        </div>
      </section>

      {/* 4. THREE CAPABILITIES (HOW WE WORK) */}
      <section id="process" className="relative py-24 bg-slate-100 dark:bg-[#0C0D0F] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="h-px w-full bg-slate-200 dark:bg-white/10 mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column Sticky Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="eyebrow mb-5">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                How AI Transformation Works
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                We work side-by-side with your operators to audit, upskill, and deploy custom infrastructure. We ensure AI becomes a permanent corporate utility.
              </p>
              <div className="mt-8">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-full font-semibold bg-[#473BFD] hover:bg-[#756CFE] text-white px-6 py-3 text-xs transition shadow-md"
                >
                  Start with a Diagnosis
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column Bento Cards */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Bento Card 1 */}
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#141518] p-6 md:p-8 relative overflow-hidden group hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 transition-all duration-300 shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#473BFD]/5 blur-2xl pointer-events-none" />
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#473BFD]/10 border border-[#473BFD]/20 flex items-center justify-center text-[#473BFD] dark:text-[#D3FDB1]">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-[#473BFD] dark:text-[#D3FDB1] uppercase tracking-wider font-bold">
                      Phase 01 &bull; Audit & ROI Blueprint
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      We measure before we build.
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mt-1">
                      We perform a deep audit on your current operational workflows and tools. We map data exchanges, detect bottlenecks, and benchmark where custom AI agents or workflow automation will deliver the highest bottom-line value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bento Card 2 */}
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#141518] p-6 md:p-8 relative overflow-hidden group hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 transition-all duration-300 shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#473BFD]/5 blur-2xl pointer-events-none" />
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#473BFD]/10 border border-[#473BFD]/20 flex items-center justify-center text-[#473BFD] dark:text-[#D3FDB1]">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-[#473BFD] dark:text-[#D3FDB1] uppercase tracking-wider font-bold">
                      Phase 02 &bull; Workforce Enablement
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      We activate teams before we automate systems.
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mt-1">
                      AI is a human system. We build custom manuals, workflow templates, and lead active hands-on workshops. We train your operators to leverage tools (ChatGPT, Claude, and custom dashboards) inside their daily roles to compound productivity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bento Card 3 */}
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#141518] p-6 md:p-8 relative overflow-hidden group hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 transition-all duration-300 shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#473BFD]/5 blur-2xl pointer-events-none" />
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#473BFD]/10 border border-[#473BFD]/20 flex items-center justify-center text-[#473BFD] dark:text-[#D3FDB1]">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-[#473BFD] dark:text-[#D3FDB1] uppercase tracking-wider font-bold">
                      Phase 03 &bull; AI Infrastructure
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      Deploy custom AI systems.
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mt-1">
                      We write code, integrate APIs, deploy custom agents, and connect LLM models securely into your business pipelines. We build custom middleware, dashboards, and automated flows that act 24/7 without manual supervision.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. EDITORIAL REAL-LIFE AI PODS SECTION (Altrdtech style) */}
      <section className="relative py-24 bg-white dark:bg-[#08090A] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          
          <div className="flex flex-col items-start mb-10">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#473BFD] dark:bg-[#D3FDB1]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
                Why Enterprises Build With Us
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight max-w-3xl">
              Applied AI Engineers Working Directly With Your Leadership.
            </h2>
          </div>

          {/* Authentic Real Life Photography Container */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl mb-12">
            <Image
              src="/images/scalezix-team-session.jpg"
              alt="Scalezix AI engineering pod and enterprise leadership in a live strategy session"
              width={1600}
              height={900}
              className="w-full h-auto object-cover aspect-[16/9]"
              priority
            />
          </div>

          {/* 3-Column Commitment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121316]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                We see what is coming first.
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                We build directly on frontier models (OpenAI, Anthropic Claude, and Google Gemini), translating technical breakthroughs into immediate operating leverage before your competitors adapt.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121316]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                Senior engineers on site.
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                You get dedicated pods of senior Indian AI engineers in Ahmedabad and Gandhinagar who scope the work, write the custom code, and stay until your systems run autonomously.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121316]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                Built for your daily reality.
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                We do not sell theoretical slide decks or generic SaaS subscriptions. Every system is engineered around your proprietary data, existing CRM, and daily operations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. INTERACTIVE CALCULATOR SECTION */}
      <section id="calculator" className="relative py-24 bg-slate-50 dark:bg-[#0C0D0F] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh] accent-glow opacity-40 dark:opacity-60 pointer-events-none z-0" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
          <div className="h-px w-full bg-slate-200 dark:bg-white/10 mb-16" />
          <AIOpportunityCalculator />
        </div>
      </section>

      {/* 7. SERVICES OVERVIEW BENTO GRID */}
      <section id="services" className="relative py-24 bg-slate-100 dark:bg-background text-slate-900 dark:text-foreground transition-colors duration-300 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="h-px w-full bg-slate-200 dark:bg-white/10 mb-16" />
          
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <span className="eyebrow">Our Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight max-w-2xl">
              From Strategy to Custom Deployment, We Handle It All.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.slug}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#141518] p-6 group hover:border-[#473BFD]/30 transition-all duration-300 shadow-sm"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-[#473BFD]/10 border border-[#473BFD]/20 flex items-center justify-center">
                      {getServiceIcon(product.slug)}
                    </div>
                    {product.slug === "whatsapp-ai" ? (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        From ₹3k/mo
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#473BFD]/10 text-[#473BFD] dark:bg-[#D3FDB1]/20 dark:text-[#D3FDB1]">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {product.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline"
                  >
                    View system specs
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href={product.slug === "whatsapp-ai" ? "/products/whatsapp-ai#pricing" : "/pricing"}
                    className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-[#473BFD] dark:hover:text-[#D3FDB1] transition"
                  >
                    Pricing &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline"
            >
              Explore all modular plans & transparent Meta API pricing &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* 8. CASE STUDIES SECTION */}
      <section id="results" className="relative py-24 bg-white dark:bg-background text-slate-900 dark:text-foreground transition-colors duration-300 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="h-px w-full bg-slate-200 dark:bg-white/10 mb-16" />
          
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <span className="eyebrow">Measurable ROI</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Case Studies with Measurable Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.slug}
                className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141518] p-6 group hover:border-[#473BFD]/30 transition-all duration-300 shadow-sm"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {study.industry}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug mt-1">
                    {study.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mt-2">
                    {study.challenge}
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-200 dark:border-white/10 pt-4">
                  <p className="text-[11px] text-slate-800 dark:text-slate-200 font-medium italic">
                    Solution: {study.solution}
                  </p>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline"
                  >
                    Read case study
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. QUOTE BLOCK */}
      <section className="relative py-16 bg-slate-100 dark:bg-[#0C0D0F] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <figure className="relative flex flex-col items-center text-center rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#141518] p-8 md:p-12 z-10 shadow-lg">
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#473BFD]/5 blur-2xl pointer-events-none" />
            <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-slate-900 dark:text-white tracking-tight">
              &ldquo;Most companies do not fail at AI because the models are weak. They fail because the workflows are unclear, disconnected, or unmanaged. Scalezix focuses on operational leverage first.&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex flex-col items-center">
              <span className="font-semibold text-xs text-slate-900 dark:text-white">
                Scalezix Operations & Systems Team
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mt-1">
                Applied AI Engineers
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 10. STRATEGIC FAQS SECTION */}
      <section id="faq" className="relative py-24 bg-slate-50 dark:bg-background text-slate-900 dark:text-foreground transition-colors duration-300 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="h-px w-full bg-slate-200 dark:bg-white/10 mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left column sticky header */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="eyebrow mb-5">FAQ</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Questions Every Leader Asks
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                Understand how we audit your systems, calculate automation value, and secure your proprietary data.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Prefer email?
                </span>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-xs font-mono font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Right column Accordions */}
            <div className="lg:col-span-8 flex flex-col border-t border-slate-200 dark:border-white/10">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="border-b border-slate-200 dark:border-white/10">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left py-5 font-semibold text-sm text-slate-900 dark:text-slate-100 hover:text-[#473BFD] dark:hover:text-[#D3FDB1] transition-colors gap-4"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-300 text-slate-400 dark:text-slate-500", isOpen ? "rotate-180 text-[#473BFD] dark:text-[#D3FDB1]" : "")} />
                    </button>
                    
                    {/* Collapsible Panel */}
                    <div className={cn("grid transition-all duration-300 ease-in-out overflow-hidden text-xs text-slate-600 dark:text-slate-300 leading-relaxed", isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 11. ACTION CTA SECTION */}
      <section className="relative py-24 bg-slate-100 dark:bg-[#0C0D0F] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8 z-10 relative">
          <div className="h-px w-full bg-slate-200 dark:bg-white/10 mb-16" />
          <div className="relative overflow-hidden rounded-[32px] bg-white dark:bg-[#141518] border border-slate-200 dark:border-white/10 px-6 py-12 md:py-16 md:px-16 text-slate-900 dark:text-white shadow-xl">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#473BFD]/10 blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center justify-center rounded-full bg-[#473BFD]/10 dark:bg-[#D3FDB1]/10 border border-[#473BFD]/20 dark:border-[#D3FDB1]/20 px-3.5 py-1 text-[11px] uppercase font-bold tracking-wider leading-none text-[#473BFD] dark:text-[#D3FDB1]">
                  Get Started
                </span>
                <h2 className="mt-2 font-semibold text-slate-900 dark:text-white text-[34px] leading-[1.08] tracking-[-0.5px] sm:text-[42px] lg:text-[48px]">
                  Book a free 30-minute<br />strategy call.
                </h2>
                <p className="max-w-[480px] text-sm leading-relaxed text-slate-600 dark:text-slate-300 mt-2">
                  We'll map your top three automation opportunities and show where the highest ROI sits first.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href={companyInfo.calendlyHref}
                  className="button-primary"
                >
                  Book a Free Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href={companyInfo.whatsappHref}
                  className="button-secondary border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:border-slate-400 dark:hover:border-white/40 hover:bg-slate-50 dark:hover:bg-white/5"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function StatsCard({ value, label }: { value: string; label: string }) {
  return (
    <li>
      <div className="relative flex h-[120px] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl p-4 text-center sm:h-[140px] lg:h-[160px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#141518] shadow-sm hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/20 transition-all duration-300">
        <div className="relative flex flex-col items-center gap-2">
          <span className="font-bold leading-none tracking-tight text-slate-900 dark:text-white text-[32px] sm:text-[42px] lg:text-[48px]">
            {value}
          </span>
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
            {label}
          </span>
        </div>
      </div>
    </li>
  );
}
