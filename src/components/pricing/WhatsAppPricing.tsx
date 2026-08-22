"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  Bot,
  Zap,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  HelpCircle,
  Layers,
  ArrowRight,
} from "lucide-react";
import {
  whatsappPricingPlans,
  whatsappAddOns,
  whatsappPricingFaqs,
  whatsappFeatureComparison,
  contactInfo,
} from "@/content/site";
import { cn } from "@/lib/utils";

interface WhatsAppPricingProps {
  showTitle?: boolean;
  className?: string;
}

export function WhatsAppPricing({ showTitle = true, className }: WhatsAppPricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("whatsapp-only");
  const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: boolean }>({
    "ai-chatbot": false,
    "shopper-identity": false,
  });

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedPlan =
    whatsappPricingPlans.find((p) => p.id === selectedPlanId) || whatsappPricingPlans[0];

  const discountMultiplier = billingCycle === "annual" ? 0.8 : 1;

  // Calculate dynamic total price
  const basePriceNum = Math.round(selectedPlan.monthlyPriceNum * discountMultiplier);
  const addonsTotalNum = whatsappAddOns.reduce((acc, addon) => {
    if (selectedAddons[addon.id]) {
      return acc + Math.round(addon.monthlyPriceNum * discountMultiplier);
    }
    return acc;
  }, 0);

  const grandTotalMonthly = basePriceNum + addonsTotalNum;

  const getCtaLink = (planName: string, total: number) => {
    const activeAddonsList = whatsappAddOns
      .filter((a) => selectedAddons[a.id])
      .map((a) => a.name);

    const addonsText =
      activeAddonsList.length > 0
        ? ` with Add-ons: ${activeAddonsList.join(", ")}`
        : "";

    const text = encodeURIComponent(
      `Hi Scalezix! I'm interested in the ${planName} plan (₹${total.toLocaleString("en-IN")}/mo${addonsText}). Please share onboarding details.`
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
            MODULAR WHATSAPP AI PRICING
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Simple, Modular Pricing. <br />
            <span className="text-[#473BFD] dark:text-[#D3FDB1]">Zero Contact Caps.</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            No complex tiers or user caps. Start with our powerful{" "}
            <span className="font-semibold text-slate-900 dark:text-white">₹3,000/mo</span> base
            package and scale your growth with plug-and-play AI add-ons.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-4 inline-flex items-center gap-2 p-1.5 rounded-full bg-slate-200/80 dark:bg-white/10 border border-slate-300/60 dark:border-white/10 text-xs font-medium">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-200",
                billingCycle === "monthly"
                  ? "bg-white dark:bg-[#121316] text-slate-900 dark:text-white shadow-sm font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5",
                billingCycle === "annual"
                  ? "bg-white dark:bg-[#121316] text-slate-900 dark:text-white shadow-sm font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#473BFD] text-white dark:bg-[#D3FDB1] dark:text-black">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {whatsappPricingPlans.map((plan) => {
          const isSelected = selectedPlanId === plan.id;
          const displayPriceNum = Math.round(plan.monthlyPriceNum * discountMultiplier);

          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={cn(
                "rounded-[2rem] p-7 md:p-8 border transition-all duration-300 flex flex-col justify-between relative cursor-pointer",
                plan.featured
                  ? "border-[#473BFD] dark:border-[#D3FDB1] bg-white dark:bg-[#15171C] ring-2 ring-[#473BFD]/20 dark:ring-[#D3FDB1]/20 shadow-xl"
                  : isSelected
                  ? "border-slate-400 dark:border-white/30 bg-white dark:bg-[#121316] ring-1 ring-slate-400 dark:ring-white/20 shadow-md"
                  : "border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] hover:border-slate-300 dark:hover:border-white/20 shadow-sm"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-[11px] font-mono font-bold bg-[#473BFD] text-white dark:bg-[#D3FDB1] dark:text-black shadow-md tracking-wider uppercase">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {plan.id === "whatsapp-only" && <MessageSquare className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1]" />}
                    {plan.id === "whatsapp-ai-calling" && <PhoneCall className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1]" />}
                    {plan.id === "full-suite" && <Layers className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1]" />}
                    {plan.name}
                  </h3>
                  {!plan.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-1.5 border-b border-slate-100 dark:border-white/5 pb-6">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    ₹{displayPriceNum.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {plan.period}
                  </span>
                </div>

                {/* Meta API transparent badge */}
                <div className="mt-4 flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 text-[11px] text-slate-600 dark:text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>{plan.metaPricingNotice}</span>
                </div>

                {/* Included Channels (for Full Suite) */}
                {plan.includedChannels && (
                  <div className="mt-4">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Included Channels
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {plan.includedChannels.map((ch) => (
                        <span
                          key={ch}
                          className="px-2 py-0.5 rounded-md bg-[#473BFD]/10 text-[#473BFD] dark:bg-[#D3FDB1]/10 dark:text-[#D3FDB1] text-[10px] font-mono font-medium"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features List */}
                <div className="mt-6">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                    Included in Base:
                  </p>
                  <ul className="space-y-2.5">
                    {plan.includedInBase.map((feat) => (
                      <li
                        key={feat}
                        className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                <Link
                  href={getCtaLink(plan.name, displayPriceNum)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex w-full items-center justify-center rounded-full py-3.5 text-xs font-semibold transition gap-2",
                    plan.featured
                      ? "bg-[#473BFD] text-white hover:bg-[#5E53FE] shadow-lg shadow-[#473BFD]/25"
                      : "border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                  )}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plug-and-Play AI Add-ons Selector (Retner style) */}
      <div className="rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-[#101114] p-7 md:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-[#473BFD] dark:text-[#D3FDB1] mb-1">
              <Zap className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                Modular AI Upgrades
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Enhance with Plug-and-Play Add-ons
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Snap enterprise-grade autonomous agents into your base package anytime with zero setup hassle.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Selected Base: {selectedPlan.name}
            </span>
            <div className="text-xl md:text-2xl font-bold text-[#473BFD] dark:text-[#D3FDB1]">
              ₹{grandTotalMonthly.toLocaleString("en-IN")}
              <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                /month total
              </span>
            </div>
          </div>
        </div>

        {/* Add-ons Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatsappAddOns.map((addon) => {
            const isChecked = !!selectedAddons[addon.id];
            const displayAddonPrice = Math.round(addon.monthlyPriceNum * discountMultiplier);

            return (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={cn(
                  "rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between",
                  isChecked
                    ? "border-[#473BFD] dark:border-[#D3FDB1] bg-white dark:bg-[#15171C] ring-1 ring-[#473BFD]/20 shadow-md"
                    : "border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] hover:border-slate-300 dark:hover:border-white/20"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={cn(
                          "h-5 w-5 rounded-md flex items-center justify-center transition border",
                          isChecked
                            ? "bg-[#473BFD] dark:bg-[#D3FDB1] border-transparent text-white dark:text-black"
                            : "border-slate-300 dark:border-white/20 bg-transparent"
                        )}
                      >
                        {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </div>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">
                        {addon.name}
                      </h4>
                    </div>

                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#473BFD]/10 text-[#473BFD] dark:bg-[#D3FDB1]/20 dark:text-[#D3FDB1]">
                      {addon.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {addon.description}
                  </p>

                  <ul className="space-y-1.5 border-t border-slate-100 dark:border-white/5 pt-3">
                    {addon.features.map((feat) => (
                      <li
                        key={feat}
                        className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-2"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#473BFD] dark:bg-[#D3FDB1]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Add-on Price:
                  </span>
                  <span className="text-base font-bold text-slate-900 dark:text-white">
                    +₹{displayAddonPrice.toLocaleString("en-IN")}/mo
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Calculation CTA */}
        <div className="mt-8 p-5 rounded-2xl bg-white dark:bg-[#121316] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Selected Configuration
            </p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
              {selectedPlan.name}{" "}
              {Object.values(selectedAddons).some(Boolean) &&
                `+ ${
                  whatsappAddOns.filter((a) => selectedAddons[a.id]).length
                } AI Add-on(s)`}
            </p>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 block">TOTAL PRICE</span>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                ₹{grandTotalMonthly.toLocaleString("en-IN")}
                <span className="text-xs font-normal text-slate-500">/mo</span>
              </span>
            </div>

            <Link
              href={getCtaLink(selectedPlan.name, grandTotalMonthly)}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary px-6 py-3 text-xs shrink-0 flex items-center gap-2"
            >
              <span>Deploy This Stack</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Meta API Cost Transparency Box */}
      <div className="rounded-3xl border border-blue-500/20 dark:border-blue-500/30 bg-blue-50/40 dark:bg-blue-950/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-2xl bg-[#473BFD]/10 border border-[#473BFD]/20 flex items-center justify-center text-[#473BFD] dark:text-[#D3FDB1] shrink-0 mt-1">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Official WhatsApp Cloud API & Transparent Meta Billing
            </h4>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
              Scalezix connects directly to Meta&apos;s Official Cloud API. Meta charges standard
              conversation rates (Marketing ~₹0.78, Utility ~₹0.11, Service conversations free/low cost).
              We pass these charges at <strong>100% actual Meta rates with 0% markup</strong>. No hidden
              per-message penalties or gateway taxes.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="button-secondary text-xs shrink-0 border-slate-300 dark:border-white/20 whitespace-nowrap"
        >
          Check Meta Rate Card
        </Link>
      </div>

      {/* Feature Comparison Matrix */}
      <div className="rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] p-7 md:p-10 shadow-sm overflow-hidden">
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
            Plan Comparison
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Compare Plan Capabilities Side-by-Side
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 px-4 font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold w-2/5">
                  Feature / Capability
                </th>
                <th className="py-4 px-4 font-bold text-slate-900 dark:text-white text-center w-1/5">
                  WhatsApp Only (₹3k)
                </th>
                <th className="py-4 px-4 font-bold text-[#473BFD] dark:text-[#D3FDB1] text-center w-1/5">
                  WhatsApp + AI Calling
                </th>
                <th className="py-4 px-4 font-bold text-slate-900 dark:text-white text-center w-1/5">
                  Full Suite
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {whatsappFeatureComparison.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3.5 px-4 text-slate-800 dark:text-slate-200 font-medium">
                    {item.feature}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {typeof item.whatsappOnly === "boolean" ? (
                      item.whatsappOnly ? (
                        <Check className="h-4 w-4 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )
                    ) : (
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {item.whatsappOnly}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center bg-[#473BFD]/[0.02] dark:bg-[#D3FDB1]/[0.02]">
                    {typeof item.whatsappVoice === "boolean" ? (
                      item.whatsappVoice ? (
                        <Check className="h-4 w-4 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )
                    ) : (
                      <span className="font-semibold text-[#473BFD] dark:text-[#D3FDB1]">
                        {item.whatsappVoice}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {typeof item.fullSuite === "boolean" ? (
                      item.fullSuite ? (
                        <Check className="h-4 w-4 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )
                    ) : (
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {item.fullSuite}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* WhatsApp Pricing FAQ Accordion */}
      <div className="rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121316] p-7 md:p-10 shadow-sm">
        <div className="max-w-2xl mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
            Got Questions?
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            WhatsApp AI Pricing & Setup FAQs
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whatsappPricingFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-white/[0.02]"
            >
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-start gap-2">
                <HelpCircle className="h-4 w-4 text-[#473BFD] dark:text-[#D3FDB1] shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h4>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400 pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Conversion Banner */}
      <div className="rounded-[2.5rem] bg-gradient-to-r from-[#473BFD] to-[#6E63FE] text-white p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-bold">
            Ready to scale repeat revenue?
          </span>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mt-2">
            Start Your 14-Day Free WhatsApp AI Pilot
          </h3>
          <p className="mt-2 text-sm text-white/90 leading-relaxed">
            Our deployment team sets up your official WhatsApp API, Shopify workflows, cart recovery
            flows, and team inbox in under 24 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <Link
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-xs text-center hover:bg-slate-100 transition shadow-md"
          >
            Chat with Operations Team
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-full bg-white/15 border border-white/20 text-white font-semibold text-xs text-center hover:bg-white/25 transition"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
