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
    <main className="w-full bg-slate-50 dark:bg-background text-slate-900 dark:text-foreground transition-colors duration-300">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Scalezix",
          url: `${companyInfo.website}/contact`,
        }}
      />
      
      {/* Hero Section */}
      <section className="w-full bg-[#0C0D0F] text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow mb-5">Contact</span>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Let&apos;s Build Something Together
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
              Tell us about your business and we’ll map your fastest path to AI-powered growth.
            </p>
          </div>
        </div>
      </section>

      {/* Content & Form Section */}
      <section className="w-full bg-white dark:bg-background text-slate-900 dark:text-foreground py-20 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Book a strategy call directly, chat with our operations team on WhatsApp, or visit us at our offices in Gujarat.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={companyInfo.calendlyHref} className="button-primary">
                  Book a Free Call
                </Link>
                <Link href={companyInfo.whatsappHref} className="button-secondary border-slate-200 dark:border-white/15 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-white/30 hover:bg-slate-50 dark:hover:bg-white/5">
                  Chat on WhatsApp
                </Link>
              </div>
     
              <div className="mt-10 space-y-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 text-sm mb-1 block">Ahmedabad Office</strong>
                  <p>{companyInfo.address}</p>
                </div>
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 text-sm mb-1 block">Gandhinagar Office</strong>
                  <p>{companyInfo.address2}</p>
                </div>
                <div className="space-y-1 pt-2 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                  <p>Phone: {companyInfo.phone}</p>
                  <p>Email: {companyInfo.email}</p>
                </div>
              </div>
            </div>
     
            <div className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Project inquiry form</h2>
              <div className="mt-6 grid gap-4">
                <input className="contact-input bg-white dark:bg-black/40 border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Name" />
                <input className="contact-input bg-white dark:bg-black/40 border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Email" />
                <input className="contact-input bg-white dark:bg-black/40 border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Phone (WhatsApp preferred)" />
                <input className="contact-input bg-white dark:bg-black/40 border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Company name" />
                <input className="contact-input bg-white dark:bg-black/40 border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Industry" />
                <input className="contact-input bg-white dark:bg-black/40 border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="What do you need?" />
                <textarea className="contact-input bg-white dark:bg-black/40 border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 min-h-32 py-3" placeholder="Message" />
                <button className="button-primary w-fit">Submit inquiry</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
