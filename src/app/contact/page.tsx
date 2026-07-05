import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { companyInfo } from "@/content/prd-site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Scalezix | Book an AI Strategy Call",
  description:
    "Contact Scalezix to discuss AI automation, software development, digital marketing, or custom AI product opportunities.",
  path: "/contact",
  keywords: ["contact Scalezix", "AI strategy call", "automation consultation India"],
});

export default function ContactPage() {
  return (
    <main className="section-shell py-20 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Scalezix",
          url: `${companyInfo.website}/contact`,
        }}
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="section-kicker w-fit">Contact</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            Let&apos;s Build Something Together
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Tell us about your business and we’ll map your fastest path to AI-powered growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={companyInfo.calendlyHref} className="button-primary">
              Book a Free Call
            </Link>
            <Link href={companyInfo.whatsappHref} className="button-secondary">
              Chat on WhatsApp
            </Link>
          </div>

          <div className="mt-10 space-y-4 text-sm leading-7 text-slate-300">
            <div>
              <p className="font-semibold text-white">Ahmedabad Office</p>
              <p>{companyInfo.address}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Gandhinagar Office</p>
              <p>{companyInfo.address2}</p>
            </div>
            <div className="space-y-1 pt-2">
              <p>{companyInfo.phone}</p>
              <p>{companyInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="metal-panel rounded-[2rem] p-6">
          <h2 className="text-2xl font-medium text-white">Project inquiry form</h2>
          <div className="mt-6 grid gap-4">
            <input className="contact-input" placeholder="Name" />
            <input className="contact-input" placeholder="Email" />
            <input className="contact-input" placeholder="Phone (WhatsApp preferred)" />
            <input className="contact-input" placeholder="Company name" />
            <input className="contact-input" placeholder="Industry" />
            <input className="contact-input" placeholder="What do you need?" />
            <textarea className="contact-input min-h-32 py-3" placeholder="Message" />
            <button className="button-primary w-fit">Submit inquiry</button>
          </div>
        </div>
      </div>
    </main>
  );
}
