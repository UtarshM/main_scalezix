"use client";

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
  ShieldCheck,
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
        return <Workflow className="h-6 w-6 text-[#1f77ff] dark:text-[#00f5ff]" />;
      case "software-development":
        return <Code className="h-6 w-6 text-[#1f77ff] dark:text-[#00f5ff]" />;
      case "digital-marketing":
        return <Megaphone className="h-6 w-6 text-[#1f77ff] dark:text-[#00f5ff]" />;
      case "ai-agents":
        return <Bot className="h-6 w-6 text-[#1f77ff] dark:text-[#00f5ff]" />;
      case "crm-integrations":
        return <Network className="h-6 w-6 text-[#1f77ff] dark:text-[#00f5ff]" />;
      default:
        return <Zap className="h-6 w-6 text-[#1f77ff] dark:text-[#00f5ff]" />;
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
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-40 dark:opacity-100 grid-bg" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1140px] flex-col items-center px-5 text-center sm:px-8">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-card/40 backdrop-blur-md mb-8 text-xs font-mono text-[#1f77ff] dark:text-[#00f5ff] shadow-sm">
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
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold bg-[#1f77ff] hover:bg-[#146df7] dark:hover:brightness-110 text-white px-8 py-3.5 text-sm transition shadow-[0_4px_20px_rgba(31,119,255,0.25)]"
            >
              Start with a Diagnosis
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href={companyInfo.calendlyHref}
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold border border-black/15 dark:border-white/15 bg-white/40 dark:bg-card/25 hover:bg-white/70 dark:hover:bg-card/50 px-8 py-3.5 text-sm transition"
            >
              Book a Strategy Call
            </Link>
          </div>

          {/* Badges Flow */}
          <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-3xl">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/5 bg-white/30 dark:bg-card/20 font-mono text-[10px] tracking-wide text-slate-500 dark:text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#1f77ff] dark:bg-[#00f5ff]" />
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
      <section className="relative border-y border-black/10 dark:border-white/10 bg-white/80 dark:bg-card/20 py-5 transition-colors duration-300 z-10">
        <div className="mx-auto max-w-7xl px-4 overflow-hidden whitespace-nowrap text-sm text-[#83909a]">
          <div className="animate-marquee inline-flex min-w-full items-center gap-16 py-1">
            {homeTicker.concat(homeTicker).map((signal, index) => (
              <span key={`${signal}-${index}`} className="inline-flex items-center gap-3 text-slate-800 dark:text-white/80 font-medium">
                <span className="h-2 w-2 rounded-full bg-[#1f77ff] dark:bg-[#00f5ff] shadow-[0_0_8px_#1f77ff]" />
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE GAP COMPARISON GRID */}
      <section className="relative py-24 z-10 bg-slate-50 dark:bg-background">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ComparisonGrid />
        </div>
      </section>

      {/* 4. THREE CAPABILITIES (HOW WE WORK) */}
      <section id="process" className="relative py-24 bg-slate-50 dark:bg-background overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="section-rule mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column Sticky Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="eyebrow mb-5">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                How AI Transformation Works
              </h2>
              <p className="text-sm text-slate-500 dark:text-muted-foreground mt-4 leading-relaxed">
                We work side-by-side with your operators to audit, upskill, and deploy custom infrastructure. We ensure AI becomes a permanent corporate utility.
              </p>
              <div className="mt-8">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-full font-semibold bg-[#1f77ff] hover:bg-[#146df7] dark:hover:brightness-110 text-white px-6 py-3 text-xs transition shadow-md"
                >
                  Start with a Diagnosis
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column Bento Cards */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Bento Card 1 */}
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-card/20 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#1f77ff]/30 dark:hover:border-[#1f77ff]/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#1f77ff]/5 blur-2xl pointer-events-none" />
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#1f77ff]/10 border border-[#1f77ff]/20 flex items-center justify-center text-[#1f77ff]">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-[#1f77ff] uppercase tracking-wider font-semibold">
                      Phase 01 &bull; Audit & ROI Blueprint
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      We measure before we build.
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 mt-1">
                      We perform a deep audit on your current operational workflows and tools. We map data exchanges, detect bottlenecks, and benchmark where custom AI agents or workflow automation will deliver the highest bottom-line value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bento Card 2 */}
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-card/20 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#1f77ff]/30 dark:hover:border-[#1f77ff]/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#1f77ff]/5 blur-2xl pointer-events-none" />
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#1f77ff]/10 border border-[#1f77ff]/20 flex items-center justify-center text-[#1f77ff]">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-[#1f77ff] uppercase tracking-wider font-semibold">
                      Phase 02 &bull; Workforce Enablement
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      We activate teams before we automate systems.
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 mt-1">
                      AI is a human system. We build custom manuals, workflow templates, and lead active hands-on workshops. We train your operators to leverage tools (ChatGPT, Claude, and custom dashboards) inside their daily roles to compound productivity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bento Card 3 */}
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-card/20 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#1f77ff]/30 dark:hover:border-[#1f77ff]/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#1f77ff]/5 blur-2xl pointer-events-none" />
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#1f77ff]/10 border border-[#1f77ff]/20 flex items-center justify-center text-[#1f77ff]">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-[#1f77ff] uppercase tracking-wider font-semibold">
                      Phase 03 &bull; AI Infrastructure
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      Deploy custom AI systems.
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 mt-1">
                      We write code, integrate APIs, deploy custom agents, and connect LLM models securely into your business pipelines. We build custom middleware, dashboards, and automated flows that act 24/7 without manual supervision.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE CALCULATOR SECTION */}
      <section id="calculator" className="relative py-24 bg-slate-50 dark:bg-background overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh] accent-glow opacity-60 pointer-events-none z-0" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
          <div className="section-rule mb-16" />
          <AIOpportunityCalculator />
        </div>
      </section>

      {/* 6. SERVICES OVERVIEW BENTO GRID */}
      <section id="services" className="relative py-24 bg-slate-50 dark:bg-background overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="section-rule mb-16" />
          
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
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-card/20 p-6 backdrop-blur-sm group hover:border-[#1f77ff]/30 dark:hover:border-[#1f77ff]/40 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#1f77ff]/10 border border-[#1f77ff]/20 flex items-center justify-center">
                    {getServiceIcon(product.slug)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {product.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1f77ff] dark:text-[#00f5ff] hover:underline"
                  >
                    View system specs
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CASE STUDIES SECTION */}
      <section id="results" className="relative py-24 bg-slate-50 dark:bg-background overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="section-rule mb-16" />
          
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
                className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-card/20 p-6 backdrop-blur-sm hover:border-[#1f77ff]/30 dark:hover:border-[#1f77ff]/40 transition-all duration-300"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 dark:text-muted-foreground">
                    {study.industry}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug mt-1">
                    {study.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 mt-2">
                    {study.challenge}
                  </p>
                </div>
                <div className="mt-6 border-t border-black/5 dark:border-white/5 pt-4">
                  <p className="text-[11px] text-slate-800 dark:text-slate-200 font-medium italic">
                    Solution: {study.solution}
                  </p>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#1f77ff] dark:text-[#00f5ff] hover:underline"
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

      {/* 8. QUOTE BLOCK */}
      <section className="relative py-16 bg-slate-50 dark:bg-background overflow-hidden">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <figure className="relative flex flex-col items-center text-center rounded-3xl border border-black/10 dark:border-white/10 bg-white/30 dark:bg-card/20 p-8 md:p-12 backdrop-blur-sm z-10 shadow-lg">
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#1f77ff]/5 blur-2xl pointer-events-none" />
            <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-slate-800 dark:text-white tracking-tight">
              &ldquo;Most companies do not fail at AI because the models are weak. They fail because the workflows are unclear, disconnected, or unmanaged. Scalezix focuses on operational leverage first.&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex flex-col items-center">
              <span className="font-semibold text-xs text-slate-900 dark:text-white">
                Scalezix Operations & Systems Team
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-muted-foreground uppercase tracking-wider mt-1">
                Applied AI Engineers
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 9. STRATEGIC FAQS SECTION */}
      <section id="faq" className="relative py-24 bg-slate-50 dark:bg-background overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="section-rule mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left column sticky header */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="eyebrow mb-5">FAQ</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Questions Every Leader Asks
              </h2>
              <p className="text-xs text-slate-500 dark:text-muted-foreground mt-4 leading-relaxed">
                Understand how we audit your systems, calculate automation value, and secure your proprietary data.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  Prefer email?
                </span>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-xs font-mono font-semibold text-[#1f77ff] hover:underline"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Right column Accordions */}
            <div className="lg:col-span-8 flex flex-col border-t border-black/10 dark:border-white/10">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="border-b border-black/10 dark:border-white/10">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left py-5 font-semibold text-sm text-slate-800 dark:text-white hover:text-[#1f77ff] dark:hover:text-[#00f5ff] transition-colors gap-4"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-300 text-slate-400", isOpen ? "rotate-180 text-[#1f77ff] dark:text-[#00f5ff]" : "")} />
                    </button>
                    
                    {/* Collapsible Panel */}
                    <div className={cn("grid transition-all duration-300 ease-in-out overflow-hidden text-xs text-slate-500 dark:text-slate-400 leading-relaxed", isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0")}>
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

      {/* 10. ACTION CTA SECTION */}
      <section className="relative py-24 bg-slate-50 dark:bg-background overflow-hidden">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8 z-10 relative">
          <div className="section-rule mb-16" />
          <div className="relative overflow-hidden rounded-[32px] bg-[#10222f] dark:bg-card/40 border border-white/5 px-6 py-12 md:py-16 md:px-16 text-white shadow-2xl">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#1f77ff]/10 blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center justify-center rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-[11px] uppercase font-bold tracking-wider leading-none text-[#1f77ff] dark:text-[#00f5ff]">
                  Get Started
                </span>
                <h2 className="mt-2 font-semibold text-white text-[34px] leading-[1.08] tracking-[-0.5px] sm:text-[42px] lg:text-[48px]">
                  Book a free 30-minute<br />strategy call.
                </h2>
                <p className="max-w-[480px] text-sm leading-relaxed text-white/70 mt-2">
                  We'll map your top three automation opportunities and show where the highest ROI sits first.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href={companyInfo.calendlyHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full font-semibold bg-white text-[#10222f] hover:bg-[#1f77ff] hover:text-white transition px-8 py-3.5 text-sm"
                >
                  Book a Free Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={companyInfo.whatsappHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full font-semibold border border-white/30 text-white hover:bg-white/10 transition px-8 py-3.5 text-sm"
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
      <div className="relative flex h-[120px] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl p-4 text-center sm:h-[140px] lg:h-[160px] border border-black/10 dark:border-white/10 bg-white/50 dark:bg-card/30 backdrop-blur-xl shadow-sm hover:border-[#1f77ff]/30 dark:hover:border-[#1f77ff]/40 transition-all duration-300">
        <div className="relative flex flex-col items-center gap-2">
          <span className="font-bold leading-none tracking-tight text-slate-900 dark:text-white text-[32px] sm:text-[42px] lg:text-[48px]">
            {value}
          </span>
          <span className="text-[11px] font-mono text-slate-500 dark:text-muted-foreground uppercase tracking-wider">
            {label}
          </span>
        </div>
      </div>
    </li>
  );
}
