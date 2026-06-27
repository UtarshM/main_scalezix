import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts } from "@/content/prd-site";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

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
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{post.excerpt}</p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
          <span>{post.author}</span>
          <span>{post.publishedAt}</span>
          <span>{post.readingTime}</span>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
          <div>
            <section className="metal-panel rounded-[2rem] p-6 md:p-8">
              <p className="text-base leading-8 text-slate-300">{post.intro}</p>
            </section>

            <div className="mt-8 space-y-6">
              {post.sections.map((section) => (
                <section key={section.heading} className="mesh-card rounded-[2rem] p-6 md:p-8">
                  <h2 className="text-2xl font-medium text-white">{section.heading}</h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-8 metal-panel rounded-[2rem] p-6 md:p-8">
              <h2 className="text-2xl font-medium text-white">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-[1.4rem] border border-white/8 bg-white/[0.02] p-5">
                    <h3 className="text-base font-medium text-white">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-[2rem] border border-[#00f5ff]/14 bg-[#08111f] p-6 md:p-8">
              <h2 className="text-2xl font-medium text-white">
                Want to automate your business?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Book a free strategy call and we&apos;ll map your highest-ROI automation,
                software, or growth opportunities.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="button-primary">
                  Book a free call
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="metal-panel rounded-[2rem] p-6">
              <h2 className="text-lg font-medium text-white">Table of contents</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {post.sections.map((section) => (
                  <li key={section.heading}>{section.heading}</li>
                ))}
              </ul>
            </div>

            <div className="mesh-card rounded-[2rem] p-6">
              <h2 className="text-lg font-medium text-white">Related posts</h2>
              <div className="mt-5 space-y-4">
                {relatedPosts.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/blog/${entry.slug}`}
                    className="block rounded-[1.3rem] border border-white/8 bg-white/[0.02] p-4 transition hover:border-[#00f5ff]/20 hover:bg-white/[0.04]"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                      {entry.category}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-white">
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
