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
          <article key={post.slug} className="mesh-card rounded-[1.8rem] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{post.category}</p>
            <h2 className="mt-4 text-2xl font-medium text-slate-900 dark:text-white">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            <div className="mt-6">
              <Link href={`/blog/${post.slug}`} className="button-secondary">
                Read post
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
