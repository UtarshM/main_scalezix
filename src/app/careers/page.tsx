import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers | Build AI Systems with Scalezix",
  description:
    "Explore careers at Scalezix and join an AI-first team building automation, software, and growth systems for modern businesses.",
  path: "/careers",
  keywords: ["Scalezix careers", "AI jobs Ahmedabad", "automation careers India"],
});

export default function CareersPage() {
  return (
    <main className="section-shell py-20 md:py-24">
      <div className="max-w-4xl">
        <p className="section-kicker w-fit">Careers</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          Build the Future of AI with Scalezix
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          We are looking for people who move fast, think big, and want to build AI systems that
          matter.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <section className="mesh-card rounded-[1.8rem] p-6">
          <h2 className="text-2xl font-medium text-white">Why work here</h2>
          <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-300">
            <li>• AI-first culture</li>
            <li>• Fast growth environment</li>
            <li>• Direct impact on real businesses</li>
            <li>• Remote-friendly collaboration</li>
          </ul>
        </section>
        <section className="metal-panel rounded-[1.8rem] p-6">
          <h2 className="text-2xl font-medium text-white">Open positions</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Hiring needs can be published here dynamically from a CMS or internal ops workflow.
          </p>
        </section>
      </div>
    </main>
  );
}
