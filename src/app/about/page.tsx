import type { Metadata } from "next";
import { companyInfo } from "@/content/prd-site";
import { buildMetadata } from "@/lib/seo";
import { ShieldCheck, Sparkles, Zap, Users } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Scalezix | AI-First Company in Ahmedabad",
  description:
    "Learn about Scalezix, an AI-first technology company in Ahmedabad helping businesses automate, build, and scale with modern systems.",
  path: "/about",
  keywords: ["about Scalezix", "AI company Ahmedabad", "Scalezix founder", "AI-first agency India"],
});

export default function AboutPage() {
  return (
    <main className="w-full bg-slate-50 dark:bg-background text-slate-900 dark:text-foreground transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="w-full bg-[#0C0D0F] text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow mb-5">About us</span>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              We Are Scalezix
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
              We are an applied AI company based in Ahmedabad, India. We audit operational friction, upskill workforce teams, and construct secure custom AI databases, middleware, and agents that run permanently inside companies.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white dark:bg-background text-slate-900 dark:text-foreground py-20 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          {/* Grid Row 1: Story & Founder */}
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.8rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Story</h2>
                <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  Founded in 2024, Scalezix started with a focus on custom web applications and growth marketing. As AI models matured, we saw that businesses were struggling to connect prompt boxes with their active CRM, inventory, and database systems. 
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  We evolved to bridge this gap, shifting our focus to end-to-end AI enablement, custom middleware connectors, and agentic workflows that save manual hours and unlock measurable bottom-line value.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                Founded 2024 &bull; Applied AI focus
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Founder</h2>
                <p className="mt-4 text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-semibold">
                  Utkarsh Makwana &mdash; CEO & Founder. 
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  Utkarsh launched Scalezix to make advanced automation accessible and commercially viable for growing businesses in India and North America. His work centers on operational engineering, API design, and system architecture.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                CEO & Founder &bull; Utkarsh Makwana
              </div>
            </div>
          </div>

          {/* Grid Row 2: Vision & Technical Principles */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.8rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#473BFD]/10 text-[#473BFD] dark:text-[#D3FDB1]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                To eliminate repetitive manual friction from modern business workflows. We believe human talent should be spent on strategy, creative logic, and relationships—while custom AI infrastructure securely handles copy-pasting, lead routing, and analytics monitoring.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#473BFD]/10 text-[#473BFD] dark:text-[#D3FDB1]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Secure Guardrails</h2>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Enterprise AI succeeds only when it is secure. We integrate custom model hosting, strict private database separation, and API validation. We ensure none of your proprietary business details or customer logs are leaked or used to train public models.
              </p>
            </div>
          </div>

          {/* Grid Row 3: Values & Offices */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.8rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Values</h2>
              <ul className="space-y-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <Zap className="h-4 w-4 text-[#473BFD] dark:text-[#D3FDB1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 block">Speed first</strong>
                    We build in sprints, shipping active integrations in weeks.
                  </div>
                </li>
                <li className="flex gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#473BFD] dark:text-[#D3FDB1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 block">Privacy isolated</strong>
                    Your databases remain secure and proprietary.
                  </div>
                </li>
                <li className="flex gap-2">
                  <Users className="h-4 w-4 text-[#473BFD] dark:text-[#D3FDB1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 block">Team enablement</strong>
                    We upskill your staff to ensure long-term ROI.
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Offices</h2>
                <div className="grid gap-6 sm:grid-cols-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 text-sm mb-1 block">Ahmedabad Office</strong>
                    <p>{companyInfo.address}</p>
                  </div>
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 text-sm mb-1 block">Gandhinagar Office</strong>
                    <p>{companyInfo.address2}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                <span>Phone: {companyInfo.phone}</span>
                <span>Email: {companyInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
