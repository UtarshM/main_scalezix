"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { faqGroups, companyInfo } from "@/content/prd-site";
import { cn } from "@/lib/utils";

const faqAnswers: Record<string, string> = {
  "What is Scalezix?": "Scalezix is an applied AI and workflow automation agency based in Ahmedabad. We build custom AI software, deploy intelligent agents, and connect your business systems to drive efficiency and operational scale.",
  "Where is Scalezix located?": "We are headquartered in Ahmedabad, Gujarat, India, with offices located at i-Hub (KCG Campus) and Gandhinagar.",
  "What industries do you serve?": "We work with D2C brands, real estate teams, logistics providers, healthcare agencies, and fast-growing SMEs in India and North America.",
  "How do I get started?": "You can start by booking a free strategy call or submitting our instant Opportunity Audit on the homepage. We will analyze your tools and map your highest-ROI opportunities.",
  "What is AI automation?": "AI automation combines artificial intelligence (LLMs like OpenAI or Gemini) with automated workflow pipelines (using Make, Zapier, or APIs) to automatically perform repetitive manual workflows (qualifying leads, syncing data, generating content).",
  "How long does it take to deploy AI automation?": "Our initial automation setups and CRM integrations are typically deployed, tested, and active in under 6 weeks.",
  "How much does AI automation cost?": "Costs scale with workflow complexity. Basic integrations are cost-effective, while custom agentic systems are priced based on the architecture. We provide flat-rate project estimates after our audit.",
  "Do I need technical knowledge to use AI automation?": "No. We handle all backend integrations, API configurations, and prompt engineering. We build simple custom dashboards and upskill your team during onboarding.",
  "What tech stack do you use?": "We build with Next.js, React, Tailwind CSS for frontend interfaces; Node.js, Python, and FastAPI for backends; and AWS / Google Cloud for secure infrastructure.",
  "How long does a software project take?": "Custom web apps and internal CRMs usually require 6 to 12 weeks for design, building, testing, and deployment.",
  "Do you provide post-launch support?": "Yes. We offer monthly SLA support packages to monitor API integrations, adjust prompts, update workflows, and optimize server resources as you scale.",
  "What digital marketing services do you offer?": "We specialize in performance marketing, Meta & Google Ads management, Conversion Rate Optimization (CRO), and advanced Search Engine Optimization (SEO / AEO) funnels.",
  "How long before I see SEO results?": "Technical SEO updates show impact in 4–8 weeks, while full ranking growth and lead compounds typically mature over 3–6 months.",
  "Do you run paid ads?": "Yes. We build high-converting landing pages, set up attribution pipelines, and run targeted paid search and social campaigns optimized for customer acquisition cost (CAC).",
  "What is Scalezix CRM?": "Scalezix CRM is our custom CRM shell tailored for D2C and real estate operations, pre-integrated with WhatsApp, lead qualification agents, and live analytics dashboards.",
  "What is WhatsApp AI?": "WhatsApp AI is an intelligent agent system connected directly to your official WhatsApp Business API. It qualifies incoming leads, answers customer FAQs, routes queries, and triggers follow-up CRM actions 24/7.",
  "Is there a free trial?": "While custom integrations do not have trials, we provide interactive mockups and strategy roadmaps for you to review before making any contract commitments."
};

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (question: string) => {
    setOpenFaq(prev => (prev === question ? null : question));
  };

  const faqEntries = Object.values(faqGroups).flat();

  return (
    <main className="section-shell">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntries.map((faq) => ({
            "@type": "Question",
            name: faq,
            acceptedAnswer: {
              "@type": "Answer",
              text: faqAnswers[faq] || `Talk to Scalezix for a detailed answer to ${faq.toLowerCase()}.`,
            },
          })),
        }}
      />
      
      <div className="max-w-4xl">
        <p className="section-kicker w-fit">FAQ</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white md:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Have questions about security, deployment timelines, pricing, or custom integrations? Browse our detailed answers below.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {Object.entries(faqGroups).map(([group, faqs]) => (
          <section key={group} className="mesh-card rounded-[1.8rem] p-6 flex flex-col justify-between h-fit">
            <div>
              <div className="flex items-center gap-2 text-[#1f77ff] mb-4">
                <Sparkles className="h-4.5 w-4.5" />
                <h2 className="text-xl font-medium capitalize text-slate-900 dark:text-white">{group}</h2>
              </div>
              <div className="space-y-3">
                {faqs.map((faq) => {
                  const isOpen = openFaq === faq;
                  const answerText = faqAnswers[faq] || "Our team can provide detailed custom blueprints and metrics for this capability. Book a short strategy call to discuss further.";
                  
                  return (
                    <div key={faq} className="rounded-xl border border-black/5 dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.02] overflow-hidden transition-all duration-300">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq)}
                        className="w-full flex items-center justify-between text-left p-4 text-xs font-semibold text-slate-800 dark:text-white hover:text-[#1f77ff] dark:hover:text-[#00f5ff] transition-colors gap-3"
                      >
                        <span>{faq}</span>
                        <ChevronDown className={cn("h-3.5 w-3.5 shrink-0 transition-transform duration-300 text-slate-400", isOpen ? "rotate-180 text-[#1f77ff] dark:text-[#00f5ff]" : "")} />
                      </button>
                      
                      <div className={cn("grid transition-all duration-300 ease-in-out overflow-hidden text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed", isOpen ? "grid-rows-[1fr] px-4 pb-4 opacity-100" : "grid-rows-[0fr] opacity-0")}>
                        <div className="overflow-hidden">
                          <p className="pt-1">{answerText}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
