"use client";

import { XCircle, CheckCircle2, AlertTriangle, Sparkles } from "lucide-react";

export function ComparisonGrid() {
  const legacyPoints = [
    { title: "ChatGPT is not an AI strategy", desc: "Using standalone web interfaces without connection to internal databases or core tools." },
    { title: "More tools ≠ more throughput", desc: "Buying multiple SaaS subscriptions that lead to fragmented workflows and manual copy-pasting." },
    { title: "Scattered experiments", desc: "Running ad-hoc test prompts rather than deploying permanent operational pipelines." },
    { title: "Security & privacy gaps", desc: "Pasting sensitive business details or client data into unvetted public LLM boxes." },
    { title: "Workforce adoption drag", desc: "Expecting employees to learn how to prompt without workflow-embedded custom templates." }
  ];

  const scalezixPoints = [
    { title: "Workflows integrated with LLMs", desc: "Connecting internal databases, CRM pipelines, and active APIs directly into your LLM models." },
    { title: "End-to-end custom automation", desc: "Systems that trigger and complete tasks across tools automatically, running 24/7." },
    { title: "Permanent AI infrastructure", desc: "Tailored AI agents and custom middleware running inside your dedicated company servers." },
    { title: "Enterprise-grade guardrails", desc: "Deploying secure, privacy-compliant integrations that protect proprietary company data." },
    { title: "Upskilled, AI-enabled teams", desc: "Providing custom training built around your department's exact daily processes." }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 relative z-20">
      
      {/* Intro Sub-Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/10 dark:border-white/10">
        <div className="flex flex-col gap-2 max-w-xl">
          <div className="flex items-center gap-2 text-[#1f77ff]">
            <Sparkles className="h-4 w-4" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              The Automation Gap
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Moving beyond simple experiments.
          </h3>
          <p className="text-sm text-slate-500 dark:text-muted-foreground leading-relaxed mt-1">
            Many businesses start testing AI tools, but very few succeed in changing how their daily operations actually run. Scalezix bridges this gap.
          </p>
        </div>
        <div className="font-mono text-[10px] text-slate-400 dark:text-muted-foreground tracking-widest uppercase">
          Interest vs. Implementation
        </div>
      </div>

      {/* Grid Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Legacy/Stuck Column */}
        <div className="rounded-2xl border border-red-500/10 bg-white/30 dark:bg-card/20 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-red-500/5 blur-2xl pointer-events-none" />
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-black/5 dark:border-white/5 pb-4">
              <div className="h-8 w-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-slate-800 dark:text-slate-200">
                  Where Most Companies Stay
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-wider text-red-500/80 mt-0.5">
                  Fragmented & Manual
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {legacyPoints.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <h5 className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {item.title}
                    </h5>
                    <p className="text-[11px] leading-relaxed text-slate-500 dark:text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 text-[10px] font-mono text-red-500/80">
            Result: AI interest fails to yield real bottom-line gains.
          </div>
        </div>

        {/* Scalezix Column */}
        <div className="rounded-2xl border border-[#1f77ff]/20 bg-white/40 dark:bg-card/35 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-xl">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#1f77ff]/10 blur-2xl pointer-events-none" />
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-black/5 dark:border-white/5 pb-4">
              <div className="h-8 w-8 rounded-lg bg-[#1f77ff]/10 border border-[#1f77ff]/20 flex items-center justify-center text-[#1f77ff] dark:text-[#00f5ff]">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-slate-900 dark:text-white">
                  The Scalezix AI-Native Model
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#1f77ff] dark:text-[#00f5ff] mt-0.5">
                  Integrated & Automated
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {scalezixPoints.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 dark:text-[#00f5ff] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <h5 className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                      {item.title}
                    </h5>
                    <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 text-[10px] font-mono text-emerald-500 dark:text-[#00f5ff]">
            Result: Scalable infrastructure yielding compound productivity gains.
          </div>
        </div>

      </div>

    </div>
  );
}
