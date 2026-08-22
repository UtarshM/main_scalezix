"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  Bot,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  GitBranch,
} from "lucide-react";
import {
  agentPricingPlans,
  agentAddOns,
  agentPricingFaqs,
  agentFeatureComparison,
  contactInfo,
} from "@/content/site";
import { cn } from "@/lib/utils";

interface AgentsPricingProps {
  showTitle?: boolean;
  className?: string;
}

export function AgentsPricing({ showTitle = true, className }: AgentsPricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("agent-pod");
  const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: boolean }>({
    "agent-private-vpc": false,
    "agent-voice-synthesis": false,
  });

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedPlan =
    agentPricingPlans.find((p) => p.id === selectedPlanId) || agentPricingPlans[1];

  const discountMultiplier = billingCycle === "annual" ? 0.8 : 1;

  const basePriceNum = Math.round(selectedPlan.monthlyPriceNum * discountMultiplier);
  const addonsTotalNum = agentAddOns.reduce((acc, addon) => {
    if (selectedAddons[addon.id]) {
      return acc + Math.round(addon.monthlyPriceNum * discountMultiplier);
    }
    return acc;
  }, 0);

  const grandTotalMonthly = basePriceNum + addonsTotalNum;

  const getCtaLink = (planName: string, total: number) => {
    const activeAddonsList = agentAddOns
      .filter((a) => selectedAddons[a.id])
      .map((a) => a.name);

    const addonsText =
      activeAddonsList.length > 0
        ? ` with Add-ons: ${activeAddonsList.join(", ")}`
        : "";

    const text = encodeURIComponent(
      `Hi Scalezix! I'm interested in the Custom AI Agents ${planName} plan (₹${total.toLocaleString("en-IN")}/mo${addonsText}). Please share engineering rollout details.`
    );

    return `https://wa.me/918200010241?text=${text}`;
  };

  return (
    <section className={cn("w-full max-w-6xl mx-auto flex flex-col gap-14", className)}>
      {/* Header Section */}
      {showTitle && (
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#473BFD]/20 bg-[#473BFD]/10 text-xs font-mono font-semibold text-[#473BFD] dark:text-[#D3FDB1]">
            <Sparkles className="h-3.5 w-3.5" />
            AUTONOMOUS WORKFORCE & AGENTS PRICING
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Autonomous AI Agents. <br />
            <span className="text-[#473BFD] dark:text-[#D3FDB1]">Engineered for Real Operations.</span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Deploy specialized AI agents that reason over company knowledge, execute cross-tool workflows, and collaborate with your team with zero hallucination risk.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-4 inline-flex items-center p-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-card/40 text-xs font-medium">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-200",
                billingCycle === "monthly"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-200 flex items-center gap-2",
                billingCycle === "annual"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-[#473BFD]/20 text-[#473BFD] dark:bg-[#D3FDB1]/20 dark:text-[#D3FDB1] font-mono text-[10px] font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      )}

      {/* 3 Main AI Agents Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {agentPricingPlans.map((plan) => {
          const isSelected = selectedPlanId === plan.id;
          const displayPrice = Math.round(plan.monthlyPriceNum * discountMultiplier);

          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={cn(
                "relative rounded-3xl p-7 md:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 border",
                plan.featured
                  ? "bg-slate-900 dark:bg-card border-[#473BFD] dark:border-[#D3FDB1]/40 shadow-xl ring-1 ring-[#473BFD]/30"
                  : "bg-white dark:bg-card/40 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20",
                isSelected && !plan.featured && "ring-2 ring-[#473BFD]/40 dark:ring-white/30"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#D3FDB1] text-slate-950 text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1]" />
                    <h3 className={cn("text-xl font-bold", plan.featured ? "text-white" : "text-slate-900 dark:text-white")}>
                      {plan.name}
                    </h3>
                  </div>
                  {!plan.featured && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className={cn("mt-3 text-xs leading-relaxed", plan.featured ? "text-slate-300" : "text-slate-600 dark:text-slate-400")}>
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={cn("text-4xl md:text-5xl font-bold tracking-tight", plan.featured ? "text-white" : "text-slate-900 dark:text-white")}>
                    ₹{displayPrice.toLocaleString("en-IN")}
                  </span>
                  <span className={cn("text-xs font-mono", plan.featured ? "text-slate-400" : "text-slate-500")}>
                    /month
                  </span>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3 text-xs">
                  <span className={cn("text-[10px] font-mono font-bold tracking-wider uppercase", plan.featured ? "text-slate-400" : "text-slate-500")}>
                    INCLUDED CAPABILITIES:
                  </span>
                  {plan.includedInBase.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400 mt-0.5" />
                      <span className={cn(plan.featured ? "text-slate-200" : "text-slate-700 dark:text-slate-300")}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                <a
                  href={getCtaLink(plan.name, displayPrice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full py-3 px-5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition shadow-md",
                    plan.featured
                      ? "bg-[#473BFD] hover:bg-[#756CFE] text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                  )}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modular Add-ons Section */}
      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/30 p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#473BFD] dark:text-[#D3FDB1]">
              <Sparkles className="h-3.5 w-3.5" />
              SPECIALIZED AGENT NODES
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Advanced Infrastructure Add-ons
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Equip your autonomous agent pods with isolated on-premise compute or real-time voice telephony.
            </p>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">
              SELECTED BASE: {selectedPlan.name.toUpperCase()}
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              ₹{basePriceNum.toLocaleString("en-IN")}
              <span className="text-xs font-mono font-normal text-slate-500">/month base</span>
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {agentAddOns.map((addon) => {
            const isChecked = selectedAddons[addon.id] || false;
            const addonPrice = Math.round(addon.monthlyPriceNum * discountMultiplier);

            return (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={cn(
                  "rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between",
                  isChecked
                    ? "border-emerald-500/50 bg-emerald-500/5 dark:bg-emerald-950/15 ring-1 ring-emerald-500/30"
                    : "border-slate-200 dark:border-white/10 bg-white dark:bg-card/50 hover:border-slate-300 dark:hover:border-white/20"
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-5 w-5 rounded-md border flex items-center justify-center transition-colors",
                          isChecked
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-slate-400 dark:border-white/20 bg-transparent"
                        )}
                      >
                        {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {addon.name}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-[10px] font-mono text-slate-700 dark:text-slate-300 font-semibold">
                      {addon.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {addon.description}
                  </p>

                  <div className="mt-4 space-y-1.5 text-xs">
                    {addon.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-[11px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Add-on Price:</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    +₹{addonPrice.toLocaleString("en-IN")}/mo
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Total Bar */}
        <div className="mt-8 rounded-2xl bg-slate-900 dark:bg-card border border-slate-800 dark:border-white/15 p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              SELECTED CONFIGURATION
            </span>
            <div className="text-base font-bold flex items-center gap-2 mt-0.5">
              <span>{selectedPlan.name}</span>
              {addonsTotalNum > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-normal">
                  + {Object.values(selectedAddons).filter(Boolean).length} Add-on(s)
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">
                TOTAL PRICE
              </span>
              <span className="text-3xl font-bold tracking-tight text-[#D3FDB1]">
                ₹{grandTotalMonthly.toLocaleString("en-IN")}
                <span className="text-xs font-mono font-normal text-slate-400">/mo</span>
              </span>
            </div>

            <a
              href={getCtaLink(selectedPlan.name, grandTotalMonthly)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D3FDB1] hover:bg-[#b8fa87] text-slate-950 px-6 py-3 text-xs font-bold transition flex items-center gap-2 shadow-lg hover:scale-105"
            >
              <span>Deploy Autonomous Agent Pod</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Feature Comparison Matrix */}
      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card/20 p-6 md:p-10">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Detailed Capability Comparison
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                <th className="py-3 px-4 font-semibold">Capabilities</th>
                <th className="py-3 px-4 font-semibold text-center">Task Agent</th>
                <th className="py-3 px-4 font-semibold text-center text-[#473BFD] dark:text-[#D3FDB1]">Autonomous Pod</th>
                <th className="py-3 px-4 font-semibold text-center">Enterprise Workforce</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {agentFeatureComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-slate-200">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {typeof row.task === "boolean" ? (
                      row.task ? (
                        <Check className="h-4 w-4 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-slate-400">—</span>
                      )
                    ) : (
                      <span className="text-slate-600 dark:text-slate-300 font-mono">{row.task}</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center font-semibold text-[#473BFD] dark:text-[#D3FDB1]">
                    {typeof row.pod === "boolean" ? (
                      row.pod ? (
                        <Check className="h-4 w-4 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-slate-400">—</span>
                      )
                    ) : (
                      <span className="font-mono">{row.pod}</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {typeof row.enterprise === "boolean" ? (
                      row.enterprise ? (
                        <Check className="h-4 w-4 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-slate-400">—</span>
                      )
                    ) : (
                      <span className="text-slate-600 dark:text-slate-300 font-mono">{row.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Agent FAQs */}
      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/20 p-8 md:p-10">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Frequently Asked Questions about Custom AI Agents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
          {agentPricingFaqs.map((faq, fidx) => (
            <div key={fidx} className="p-5 rounded-2xl bg-white dark:bg-card/40 border border-slate-200 dark:border-white/10">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                {faq.question}
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
