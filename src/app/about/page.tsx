import type { Metadata } from "next";

import { companyInfo } from "@/content/prd-site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Scalezix | AI-First Company in Ahmedabad",
  description:
    "Learn about Scalezix, an AI-first technology company in Ahmedabad helping businesses automate, build, and scale with modern systems.",
  path: "/about",
  keywords: ["about Scalezix", "AI company Ahmedabad", "Scalezix founder", "AI-first agency India"],
});

export default function AboutPage() {
  return (
    <main className="section-shell py-20 md:py-24">
      <div className="max-w-4xl">
        <p className="section-kicker w-fit">About us</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          We Are Scalezix
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          An AI-first technology company from Ahmedabad, India, helping businesses automate, grow,
          and scale through AI automation, intelligent agents, and modern software systems.
        </p>
      </div>

      <section className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="mesh-card rounded-[1.8rem] p-6">
          <h2 className="text-2xl font-medium text-white">Our story</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Founded in 2024, Scalezix started as a software and digital marketing company. It is
            now evolving into a full AI transformation partner focused on automation systems,
            productized AI solutions, and modern business experiences.
          </p>
        </div>
        <div className="metal-panel rounded-[1.8rem] p-6">
          <h2 className="text-2xl font-medium text-white">Founder</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Utkarsh Makwana — CEO & Founder. Focused on making AI accessible and commercially
            actionable for growing businesses in India.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="mesh-card rounded-[1.8rem] p-6">
          <h2 className="text-2xl font-medium text-white">Values</h2>
          <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-300">
            <li>• AI-First</li>
            <li>• Speed</li>
            <li>• Transparency</li>
            <li>• Impact</li>
          </ul>
        </div>
        <div className="metal-panel rounded-[1.8rem] p-6">
          <h2 className="text-2xl font-medium text-white">Office</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">{companyInfo.address}</p>
        </div>
      </section>
    </main>
  );
}
