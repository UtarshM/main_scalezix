import type { Metadata } from "next";
import Link from "next/link";

import { blogPosts } from "@/content/prd-site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog | AI Automation, Software & Growth Insights | Scalezix",
  description:
    "Read Scalezix blog posts on AI automation, WhatsApp systems, software development, chatbots, and growth infrastructure for Indian businesses.",
  path: "/blog",
  keywords: [
    "AI automation blog",
    "Scalezix blog",
    "WhatsApp automation insights",
    "software development blog India",
  ],
});

export default function BlogPage() {
  return (
    <main className="section-shell py-20 md:py-24">
      <div className="max-w-4xl">
        <p className="section-kicker w-fit">Blog</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white md:text-6xl">
          AI, Automation & Growth — Insights from Scalezix
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Practical guides on AI automation, software development, and digital marketing for
          Indian businesses.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="mesh-card rounded-[1.8rem] p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{post.category}</p>
              <h2 className="mt-4 text-2xl font-medium text-slate-900 dark:text-white">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <Link href={`/blog/${post.slug}`} className="button-secondary text-xs">
                Read post
              </Link>
              {post.slug === "automate-whatsapp-for-business-india" && (
                <Link
                  href="/products/whatsapp-ai"
                  className="text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline"
                >
                  WhatsApp AI (₹3k/mo) &rarr;
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Pricing CTA Banner */}
      <section className="mt-16 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
            Transparent Pricing
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Ready to Deploy Modular WhatsApp AI or Custom Agents?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Get started with WhatsApp marketing from ₹3,000/month or configure enterprise AI workflows.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link href="/pricing" className="button-primary text-xs">
            View All Pricing Plans
          </Link>
          <Link href="/contact" className="button-secondary text-xs">
            Book Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
