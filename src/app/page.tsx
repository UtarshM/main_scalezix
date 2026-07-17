"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronRight,
  Check,
  Zap,
  Workflow,
  Code,
  Megaphone,
  Bot,
  Network,
  MessageSquare,
  ShieldCheck,
  Play,
  Layers,
  Send,
  TrendingUp,
} from "lucide-react";
import {
  caseStudies,
  companyInfo,
  homeTicker,
  products,
  serviceCards,
  trustStats,
} from "@/content/prd-site";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setWaitlistStatus("loading");
    setTimeout(() => {
      setWaitlistStatus("success");
      setEmail("");
    }, 1200);
  };

  // Helper to map icon keys from prd-site to Lucide components
  const getServiceIcon = (iconKey: string) => {
    switch (iconKey) {
      case "workflow":
        return <Workflow className="h-6 w-6 text-[#1f77ff]" />;
      case "code":
        return <Code className="h-6 w-6 text-[#1f77ff]" />;
      case "megaphone":
        return <Megaphone className="h-6 w-6 text-[#1f77ff]" />;
      case "bot":
        return <Bot className="h-6 w-6 text-[#1f77ff]" />;
      case "network":
        return <Network className="h-6 w-6 text-[#1f77ff]" />;
      case "message":
        return <MessageSquare className="h-6 w-6 text-[#1f77ff]" />;
      default:
        return <Zap className="h-6 w-6 text-[#1f77ff]" />;
    }
  };

  return (
    <main className="relative overflow-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#f9fafb] dark:bg-ink pb-20 pt-[160px] sm:pt-[190px] lg:pb-28 lg:pt-[240px] transition-colors duration-300">
        {/* Subtle background graphics */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(31,119,255,0.06),transparent_55%)] dark:bg-[radial-gradient(120%_120%_at_50%_0%,rgba(31,119,255,0.14),transparent_55%)]"></div>
        <div className="absolute inset-y-0 left-0 right-0 -z-10 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] mask-[linear-gradient(to_bottom,black_40%,transparent_90%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1140px] flex-col items-center px-5 text-center sm:px-8">
          <h1 className="text-pretty font-medium text-[#05121b] dark:text-white text-[38px] leading-[1.08] tracking-[-1.2px] md:text-[56px] md:leading-[1.05] md:tracking-[-1.8px] lg:max-w-[960px] lg:text-[72px] lg:leading-[76px] lg:tracking-[-2px] transition-colors duration-300">
            We Build AI Systems That <br className="hidden md:block" />
            <span className="text-gradient">Scale Your Business.</span>
          </h1>
          <p className="mt-6 max-w-[780px] text-base leading-[26px] text-slate-700 dark:text-[#f3f4f6]/90 md:text-[20px] md:leading-[30px] transition-colors duration-300">
            Scalezix helps D2C brands, real estate companies, and growing businesses automate operations, generate leads, and move faster using AI Automation, Custom AI Agents, and modern software.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={companyInfo.calendlyHref}
              className="inline-flex items-center justify-center gap-[11.95px] rounded-full font-medium tracking-[-0.07px] whitespace-nowrap transition duration-200 outline-none relative isolate text-mist bg-[linear-gradient(279.99deg,rgba(255,255,255,0)_-5.91%,rgba(255,255,255,0.11)_18.37%,rgba(255,255,255,0)_43.31%,rgba(255,255,255,0)_51.22%,rgba(255,255,255,0.11)_61.67%,rgba(255,255,255,0)_89.72%),linear-gradient(111.87deg,#16181f_-10.38%,#070c20_106.64%)] before:absolute before:inset-0 before:-z-[1] before:rounded-[inherit] before:content-[''] before:bg-[linear-gradient(-52.65deg,rgba(255,255,255,0)_5.9%,rgba(255,255,255,0.11)_18.37%,rgba(255,255,255,0)_43.31%,rgba(255,255,255,0)_51.22%,rgba(255,255,255,0.11)_61.67%,rgba(255,255,255,0)_89.72%),linear-gradient(150.1deg,#1036e6_10.38%,#1f77ff_106.64%)] before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-0 px-8 h-[46px] py-0 text-[15px] before:bg-[#0064ff]"
            >
              Book a Free Strategy Call
            </Link>
            <Link
              href={companyInfo.whatsappHref}
              className="relative isolate inline-flex items-center justify-center overflow-hidden rounded-full border border-black/20 dark:border-white/70 bg-[#1f77ff] px-6 text-[15px] font-medium leading-6 tracking-[-0.16px] text-[#05121b] hover:text-white transition-[color,border-color] duration-300 ease-in-out before:absolute before:inset-0 before:-z-[1] before:rounded-[inherit] before:bg-[linear-gradient(180deg,#ffffff_0%,#93bdff_100%)] dark:before:bg-[linear-gradient(180deg,#ffffff_0%,#93bdff_100%)] before:transition-opacity before:duration-300 before:ease-in-out before:content-[''] hover:border-[#1f77ff] hover:before:opacity-0 h-[46px]"
            >
              Chat on WhatsApp
            </Link>
          </div>

          {/* Stats Grid */}
          <ul aria-label="Key statistics" className="mt-16 grid w-full grid-cols-2 gap-4 lg:mt-24 lg:grid-cols-4">
            {trustStats.slice(0, 4).map((stat) => (
              <StatsCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </ul>
        </div>
      </section>

      {/* 2. TICKER MARQUEE SECTION */}
      <section className="relative border-y border-[#e1eaf0] dark:border-white/10 bg-[#f3f4f6] dark:bg-ink py-6 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 overflow-hidden whitespace-nowrap text-sm text-[#83909a]">
          <div className="animate-marquee inline-flex min-w-full items-center gap-16 py-1">
            {homeTicker.concat(homeTicker).map((signal, index) => (
              <span key={`${signal}-${index}`} className="inline-flex items-center gap-3 text-[#0a1c2e] dark:text-white/80 font-medium">
                <span className="h-2 w-2 rounded-full bg-[#1f77ff] shadow-[0_0_8px_#1f77ff]" />
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="relative overflow-hidden bg-white dark:bg-ink py-24 lg:py-32 transition-colors duration-300">
        <div className="relative z-10 mx-auto flex w-full max-w-[1324px] flex-col items-center px-5 sm:px-8">
          <div className="flex flex-col items-center gap-[15px] text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#e5f5ff] px-3.5 py-1.5 text-[12px] uppercase tracking-wider font-semibold leading-[1.2] text-ink-700">
              Services
            </span>
            <h2 className="font-medium text-ink-700 dark:text-white text-[32px] leading-[1.18] tracking-[-0.42px] sm:text-[40px] lg:text-[46px] lg:leading-[52px] max-w-3xl transition-colors duration-300">
              From strategy to deployment, we handle it all.
            </h2>
          </div>

          <ul className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mt-20">
            {serviceCards.map((service) => (
              <li key={service.slug}>
                <div className="flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#e1eaf0] dark:border-white/10 bg-white dark:bg-[#0a1c2e]/60 p-8 min-h-[340px] shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:border-[#1f77ff]/30 hover:shadow-[0_12px_40px_rgba(31,119,255,0.05)] transition duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5f5ff] dark:bg-white/5 border border-blue-100 dark:border-white/10">
                      {getServiceIcon(service.icon)}
                    </div>
                    <h3 className="text-[22px] font-medium leading-[28px] text-[#05121b] dark:text-white tracking-tight transition-colors duration-300">{service.name}</h3>
                    <p className="text-[14px] leading-[1.5] text-slate-600 dark:text-white/70">
                      {service.short}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#e1eaf0] dark:border-white/10 pt-4">
                    <ul className="grid grid-cols-1 gap-2">
                      {service.bullets.slice(0, 3).map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#0a1c2e] dark:text-white/95 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#1f77ff]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={
                        service.slug === "software-development" ||
                        service.slug === "digital-marketing" ||
                        service.slug === "ai-automation"
                          ? `/services/${service.slug}`
                          : "/services"
                      }
                      className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#1f77ff] hover:text-[#146df7] transition"
                    >
                      Learn more <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. 3-STEP PROCESS SECTION */}
      <section className="relative overflow-hidden bg-[#f9fafb] dark:bg-[#040e12] py-24 lg:py-32 transition-colors duration-300">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_80%,rgba(31,119,255,0.04),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_80%,rgba(31,119,255,0.08),transparent_50%)]"></div>
        <div className="mx-auto grid max-w-[1290px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold leading-[1.2] text-[#1f77ff]">
              Our Process
            </span>
            <h2 className="text-[34px] font-medium text-[#05121b] dark:text-white lg:text-[44px] leading-tight tracking-tight transition-colors duration-300">
              From chaos to AI-powered scale in 3 steps
            </h2>
            <div className="flex flex-col gap-6 mt-4">
              <ProcessStepCard
                number="01"
                title="Discover"
                text="We audit your workflows, bottlenecks, and growth gaps to find your highest-ROI automation opportunities."
              />
              <ProcessStepCard
                number="02"
                title="Build"
                text="Our team designs and deploys custom AI systems, agents, and software tailored to your exact business model."
              />
              <ProcessStepCard
                number="03"
                title="Scale"
                text="We optimize, train your team, and evolve the system as your business grows so results compound over time."
              />
            </div>
          </div>

          {/* Rotating CSS Sphere/Orbit Graphic */}
          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center py-8">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] flex items-center justify-center">
              {/* Central Nucleus */}
              <div className="absolute h-24 w-24 rounded-full bg-[#1f77ff]/10 blur-2xl animate-pulse" />
              <div className="absolute h-16 w-16 rounded-full bg-white dark:bg-[#05121b] border-2 border-[#1f77ff] shadow-[0_0_35px_rgba(31,119,255,0.15)] dark:shadow-[0_0_35px_rgba(31,119,255,0.3)] flex items-center justify-center z-10 transition-colors duration-300">
                <Workflow className="h-6 w-6 text-[#1f77ff]" />
              </div>
              {/* Outer Orbit Rings */}
              <div className="absolute h-[220px] w-[220px] rounded-full border border-black/5 dark:border-white/5 animate-[spin_24s_linear_infinite] transition-colors" />
              <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-black/10 dark:border-white/10 animate-[spin_32s_linear_infinite_reverse] transition-colors" />
              <div className="absolute h-[380px] w-[380px] rounded-full border border-black/5 dark:border-white/5 animate-[spin_45s_linear_infinite] transition-colors" />

              {/* Orbiting Nodes */}
              <div className="absolute top-[8%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-[#0a1c2e] border border-black/10 dark:border-white/10 px-3.5 py-1.5 text-xs text-[#05121b] dark:text-white shadow-lg transition-colors">
                01. Discover
              </div>
              <div className="absolute bottom-[20%] right-[2%] translate-x-1/4 rounded-full bg-white dark:bg-[#0a1c2e] border border-black/10 dark:border-white/10 px-3.5 py-1.5 text-xs text-[#05121b] dark:text-white shadow-lg transition-colors">
                02. Build
              </div>
              <div className="absolute bottom-[20%] left-[2%] -translate-x-1/4 rounded-full bg-white dark:bg-[#0a1c2e] border border-black/10 dark:border-white/10 px-3.5 py-1.5 text-xs text-[#05121b] dark:text-white shadow-lg transition-colors">
                03. Scale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCTIZED SOLUTIONS SECTION */}
      <section id="products" className="relative overflow-hidden bg-white dark:bg-ink py-24 lg:py-32 transition-colors duration-300">
        <div className="mx-auto grid max-w-[1290px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Side: Connected Functions Visual */}
          <div className="relative order-2 mx-auto aspect-[444/383] w-full max-w-[470px] lg:order-1">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] flex items-center justify-center">
              <div className="absolute h-20 w-20 rounded-full bg-[#e5f5ff] dark:bg-[#0a1c2e] border border-blue-200 dark:border-white/10 shadow-md flex items-center justify-center z-10 transition-colors">
                <Layers className="h-7 w-7 text-[#1f77ff]" />
              </div>
              <div className="absolute h-[240px] w-[240px] rounded-full border border-[#e1eaf0] dark:border-white/5 transition-colors" />
              <div className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-[#e1eaf0] dark:border-white/5 transition-colors" />

              <span className="absolute top-[5%] left-[50%] -translate-x-1/2 rounded-full bg-[#10222f] dark:bg-[#0a1c2e] px-3.5 py-1.5 text-[12px] font-medium text-white shadow-sm transition-colors">Scalezix CRM</span>
              <span className="absolute bottom-[25%] right-[2%] rounded-full bg-[#10222f] dark:bg-[#0a1c2e] px-3.5 py-1.5 text-[12px] font-medium text-white shadow-sm transition-colors">WhatsApp AI</span>
              <span className="absolute bottom-[25%] left-[2%] rounded-full bg-[#10222f] dark:bg-[#0a1c2e] px-3.5 py-1.5 text-[12px] font-medium text-white shadow-sm transition-colors">Custom Agents</span>
            </div>
          </div>

          {/* Right Side Text */}
          <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
            <span className="inline-flex items-center justify-center rounded-full bg-[#e5f5ff] px-3.5 py-1.5 text-[12px] uppercase tracking-wider font-semibold leading-[1.2] text-ink-700">
              Solutions
            </span>
            <h2 className="text-[34px] font-medium text-[#05121b] dark:text-white lg:text-[44px] leading-tight tracking-tight transition-colors">
              Productized AI solutions
            </h2>
            <p className="max-w-[530px] text-[18px] leading-[26px] tracking-[0.16px] text-slate-600 dark:text-white/70 transition-colors">
              We build ready-to-deploy products designed to accelerate operations. Keep your workflows aligned, reduce manual copy-paste bottlenecks, and launch in weeks.
            </p>
            <div className="grid grid-cols-1 gap-4 w-full">
              {products.map((product) => (
                <div key={product.slug} className="flex flex-col gap-1 border-b border-[#e1eaf0] dark:border-white/10 pb-3">
                  <h4 className="text-lg font-semibold text-[#05121b] dark:text-white transition-colors">{product.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-white/60 transition-colors">{product.description}</p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1f77ff] hover:text-[#146df7] mt-1"
                  >
                    View details <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES SECTION */}
      <section id="results" className="relative isolate overflow-hidden bg-[#f9fafb] dark:bg-ink-700 py-24 lg:py-32 transition-colors duration-300">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-0 -z-10 h-[520px] w-[820px] -translate-x-1/4 rounded-[100%] bg-brand-glow/5 dark:bg-brand-glow/10 blur-[150px]"></div>
        <div className="mx-auto flex w-full max-w-[1290px] flex-col px-5 sm:px-8">
          <div className="flex flex-col items-center gap-[15px] text-center mb-16">
            <span className="inline-flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold leading-[1.2] text-[#1f77ff]">
              Results
            </span>
            <h2 className="font-medium text-[#05121b] dark:text-white text-[32px] tracking-[-0.42px] sm:text-[40px] lg:text-[46px] lg:leading-[52px] transition-colors">
              Case studies with measurable outcomes.
            </h2>
          </div>

          <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <div className="flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#e1eaf0] dark:border-white/10 bg-white dark:bg-[#0a1c2e]/60 p-8 min-h-[320px] backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-colors">
                  <div className="flex flex-col gap-3">
                    <span className="text-[11px] uppercase tracking-wider text-[#83909a] dark:text-white/50">{study.industry}</span>
                    <h3 className="text-[22px] font-semibold text-[#05121b] dark:text-white tracking-tight leading-[28px] mt-1 transition-colors">{study.title}</h3>
                    <p className="text-[14px] leading-[1.5] text-[#83909a] dark:text-white/70 mt-2 transition-colors">
                      {study.challenge}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#e1eaf0] dark:border-white/10 pt-4">
                    <p className="text-xs text-[#0a1c2e] dark:text-white/80 font-medium italic transition-colors">
                      Solution: {study.solution}
                    </p>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#1f77ff] hover:text-[#146df7]"
                    >
                      Read full case study <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. WHY CHOOSE SCALEZIX SECTION */}
      <section className="relative overflow-hidden bg-white dark:bg-ink py-24 lg:py-32 transition-colors duration-300">
        <div className="mx-auto flex w-full max-w-[1290px] flex-col px-5 sm:px-8">
          <div className="flex flex-col items-center gap-[15px] text-center mb-16">
            <span className="inline-flex items-center justify-center rounded-full bg-[#e5f5ff] px-3.5 py-1.5 text-[12px] uppercase tracking-wider font-semibold leading-[1.2] text-ink-700">
              Why Scalezix
            </span>
            <h2 className="font-medium text-ink-700 dark:text-white text-[32px] tracking-[-0.42px] sm:text-[40px] lg:text-[46px] lg:leading-[52px] transition-colors">
              Why businesses choose Scalezix
            </h2>
          </div>

          <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <WhyCard icon={<ShieldCheck className="h-6 w-6 text-[#1f77ff]" />} title="AI-First Approach" text="We build with AI at the core from day one." />
            <WhyCard icon={<Workflow className="h-6 w-6 text-[#1f77ff]" />} title="Full-Stack Execution" text="Strategy, design, development, and marketing under one roof." />
            <WhyCard icon={<Zap className="h-6 w-6 text-[#1f77ff]" />} title="Fast Deployment" text="Most projects go live in under six weeks." />
            <WhyCard icon={<TrendingUp className="h-6 w-6 text-[#1f77ff]" />} title="Measurable ROI" text="Every system ties back to a business metric." />
          </ul>
        </div>
      </section>

      {/* 8. QUOTE SECTION */}
      <section className="relative overflow-hidden bg-white dark:bg-ink pb-24 lg:pb-32 transition-colors duration-300">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
          <div className="relative mx-auto max-w-[1200px]">
            <figure className="relative flex min-h-[220px] items-center justify-center rounded-[39px] border-[7px] border-[#e5f5ff] dark:border-white/10 bg-[#e5f5ff]/40 dark:bg-[#0a1c2e]/40 px-8 py-12 lg:min-h-[280px] transition-colors">
              <blockquote className="max-w-[820px] text-center text-[22px] font-medium leading-[1.35] tracking-[-0.36px] text-ink-700 dark:text-white sm:text-[26px] lg:text-[32px] transition-colors">
                "Most companies do not fail at AI because the model is weak. They fail because the workflow is unclear, disconnected, or unmanaged. Scalezix focuses on operational leverage first."
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* 9. STRATEGY CALL CTA SECTION */}
      <section className="relative isolate overflow-hidden bg-white dark:bg-ink border-t border-[#e1eaf0] dark:border-white/10 py-24 transition-colors duration-300">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[40px] bg-[#10222f] px-8 py-12 md:py-16 md:px-16 text-white shadow-2xl">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#1f77ff]/10 blur-[80px]" />
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center justify-center rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-[11px] uppercase font-bold tracking-wider leading-none text-[#1f77ff]">
                  Get Started
                </span>
                <h2 className="mt-2 font-medium text-white text-[34px] leading-[1.08] tracking-[-0.5px] sm:text-[42px] lg:text-[48px]">
                  Book a free 30-minute<br />strategy call.
                </h2>
                <p className="max-w-[480px] text-[16px] leading-[26px] text-white/70 mt-2">
                  We'll map your top three automation opportunities and show where the highest ROI sits first.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href={companyInfo.calendlyHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight whitespace-nowrap bg-white text-[#10222f] hover:bg-[#1f77ff] hover:text-white transition px-8 py-4 text-[16px]"
                >
                  Book a Free Call <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={companyInfo.whatsappHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight whitespace-nowrap border border-white/30 text-white hover:bg-white/10 transition px-8 py-4 text-[16px]"
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
      <div className="relative flex h-[120px] flex-col items-center justify-center gap-[7.16px] overflow-hidden rounded-[34px] p-[17.19px] text-center sm:h-[140px] lg:h-[167.39px] backdrop-blur-[22px] backdrop-saturate-[135%] bg-white dark:[background:linear-gradient(179.86deg,rgba(30,52,104,0.55)_-10%,rgba(11,23,52,0.62)_100%)] border border-[#e1eaf0] dark:border-transparent shadow-[0_8px_30px_rgba(0,0,0,0.025)] dark:shadow-[inset_0_1px_0.5px_rgba(214,226,255,0.28),inset_0_0_0_1px_rgba(130,162,220,0.12),inset_3px_-3px_6px_-2px_rgba(150,185,255,0.30),inset_0_-1px_1.5px_-0.5px_rgba(0,0,0,0.25),0_10px_28px_rgba(4,10,28,0.40)] transition-all duration-300">
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-[70%] w-[75%] bg-transparent dark:[background:radial-gradient(120%_120%_at_0%_100%,rgba(140,180,255,0.28),transparent_60%)]"></span>
        <div className="relative flex flex-col items-center gap-[7.16px]">
          <span className="font-medium leading-[0.91] tracking-[-2.4px] text-[#05121b] dark:text-white text-[38px] [font-variant-numeric:proportional-nums] sm:text-[48px] lg:text-[56px] transition-colors">
            {value}
          </span>
          <span className="text-[12px] font-normal leading-none text-[#83909a] dark:text-white/95 lg:text-[14px] transition-colors">
            {label}
          </span>
        </div>
      </div>
    </li>
  );
}

function ProcessStepCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="text-[14px] font-semibold text-[#1f77ff] shrink-0 mt-1">{number}</span>
      <div className="flex flex-col gap-1.5">
        <h4 className="text-lg font-medium text-[#05121b] dark:text-white leading-tight transition-colors">{title}</h4>
        <p className="text-[14px] leading-[1.5] text-slate-600 dark:text-white/70 max-w-[440px] transition-colors">{text}</p>
      </div>
    </div>
  );
}

function WhyCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <li>
      <div className="flex flex-col gap-3 rounded-[20px] border border-[#e1eaf0] dark:border-white/10 p-6 bg-white dark:bg-[#0a1c2e]/60 hover:border-[#1f77ff]/30 transition-colors duration-300">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f5ff] dark:bg-white/5">
          {icon}
        </div>
        <h4 className="text-[18px] font-semibold text-[#05121b] dark:text-white tracking-tight transition-colors">{title}</h4>
        <p className="text-[13px] leading-[1.5] text-slate-600 dark:text-white/70 transition-colors">{text}</p>
      </div>
    </li>
  );
}
