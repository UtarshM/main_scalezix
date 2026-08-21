import type { Metadata } from "next";
import { company, processSteps, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Process | ${company.name}`,
  description: "Understand our three-step AI implementation process from discovery to deployment and optimization.",
  alternates: {
    canonical: `${siteUrl}/process`,
  },
};

export default function ProcessPage() {
  return (
    <main className="w-full bg-[#0C0D0F]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#0C0D0F] text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow mb-5">How It Works</span>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl leading-[1.1]">
              A simple process to turn operational bottlenecks into AI-powered systems.
            </h1>
          </div>
        </div>
      </section>

      {/* Content List Section */}
      <section className="w-full bg-white text-slate-900 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {processSteps.map((step, index) => (
              <article key={step.title} className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-[#473BFD]" />
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#473BFD]/5 text-[#473BFD] text-lg font-bold">
                    0{index + 1}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
