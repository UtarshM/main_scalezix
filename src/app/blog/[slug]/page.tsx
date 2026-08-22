import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts } from "@/content/prd-site";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: `${post.title} | Scalezix Blog`,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((entry) => entry.slug !== post.slug).slice(0, 3);
  const articleUrl = absoluteUrl(`/blog/${post.slug}`);

  return (
    <main className="section-shell py-20 md:py-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Scalezix",
            },
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            mainEntityOfPage: articleUrl,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="mx-auto max-w-5xl">
        <p className="section-kicker w-fit">{post.category}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">{post.excerpt}</p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span>{post.author}</span>
          <span>{post.publishedAt}</span>
          <span>{post.readingTime}</span>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
          <div>
            <section className="metal-panel rounded-[2rem] p-6 md:p-8">
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{post.intro}</p>
            </section>

            <div className="mt-8 space-y-6">
              {post.sections.map((section) => (
                <section key={section.heading} className="mesh-card rounded-[2rem] p-6 md:p-8">
                  <h2 className="text-2xl font-medium text-slate-900 dark:text-white">{section.heading}</h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-8 metal-panel rounded-[2rem] p-6 md:p-8">
              <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-[1.4rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-5">
                    <h3 className="text-base font-medium text-slate-900 dark:text-white">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-[2rem] border border-[#D3FDB1]/20 bg-blue-50/50 dark:bg-[#1C1C1E] p-6 md:p-8">
              <h2 className="text-2xl font-medium text-slate-900 dark:text-white">
                Want to automate your business?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                Deploy modular <Link href="/products/whatsapp-ai" className="text-[#473BFD] dark:text-[#D3FDB1] font-semibold underline">WhatsApp AI starting at ₹3,000/mo</Link> or book a strategy call to map your custom CRM and agent automations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="button-primary text-xs">
                  Book a free call
                </Link>
                <Link href="/pricing" className="button-secondary text-xs">
                  View Transparent Pricing Plans
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="metal-panel rounded-[2rem] p-6">
              <h2 className="text-lg font-medium text-slate-900 dark:text-white">Table of contents</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {post.sections.map((section) => (
                  <li key={section.heading}>{section.heading}</li>
                ))}
              </ul>
            </div>

            {/* AI Products Widget */}
            <div className="metal-panel rounded-[2rem] p-6">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Featured AI Products
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/products/whatsapp-ai"
                  className="block p-3 rounded-xl border border-slate-200 dark:border-white/10 hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">WhatsApp AI</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      ₹3k/mo
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Cart recovery, broadcasts & AI voice callers.
                  </p>
                </Link>

                <Link
                  href="/products/scalezix-crm"
                  className="block p-3 rounded-xl border border-slate-200 dark:border-white/10 hover:border-[#473BFD]/30 dark:hover:border-[#D3FDB1]/30 transition"
                >
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Scalezix CRM</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Automated pipelines and lead qualification.
                  </p>
                </Link>

                <Link
                  href="/pricing"
                  className="block text-center py-2 px-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] transition"
                >
                  Explore All Pricing Tiers &rarr;
                </Link>
              </div>
            </div>

            <div className="mesh-card rounded-[2rem] p-6">
              <h2 className="text-lg font-medium text-slate-900 dark:text-white">Related posts</h2>
              <div className="mt-5 space-y-4">
                {relatedPosts.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/blog/${entry.slug}`}
                    className="block rounded-[1.3rem] border border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-4 transition hover:border-[#D3FDB1]/20 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      {entry.category}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-slate-900 dark:text-white">
                      {entry.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
