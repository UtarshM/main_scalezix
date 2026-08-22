import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  Bot,
  Layers,
  ShieldCheck,
  FileText,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppPricing } from "@/components/pricing/WhatsAppPricing";
import { CRMPricing } from "@/components/pricing/CRMPricing";
import { AgentsPricing } from "@/components/pricing/AgentsPricing";
import { products, pricingPlans, services, caseStudies, blogPosts } from "@/content/site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    return {};
  }

  return buildMetadata({
    title: `${product.name} | AI Platform & Enterprise Systems | Scalezix`,
    description: product.description,
    path: `/products/${product.slug}`,
    keywords: [
      product.name,
      product.label,
      "Scalezix product",
      "AI SaaS India",
      "Enterprise AI tool",
      "WhatsApp AI India",
    ],
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    notFound();
  }

  const otherProducts = products.filter((p) => p.slug !== slug);
  const isWhatsAppAi = slug === "whatsapp-ai";

  return (
    <main className="relative overflow-hidden font-sans bg-slate-50 dark:bg-[#0A0B0D] text-slate-900 dark:text-white transition-colors duration-300">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            brand: {
              "@type": "Brand",
              name: "Scalezix",
            },
            offers: {
              "@type": "Offer",
              price: isWhatsAppAi ? "3000.00" : "1500.00",
              priceCurrency: isWhatsAppAi ? "INR" : "USD",
              availability: "https://schema.org/InStock",
              url: `https://scalezix.com/products/${product.slug}`,
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#473BFD]/20 bg-[#473BFD]/10 text-xs font-mono font-semibold text-[#473BFD] dark:text-[#D3FDB1]">
              <Sparkles className="h-3.5 w-3.5" />
              {product.label}
            </span>
            {isWhatsAppAi && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                Starting ₹3,000/mo
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] max-w-3xl">
            {product.name}
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="button-primary">
              Request Platform Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="#pricing"
              className="button-secondary border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5"
            >
              View Pricing Plans
            </a>
            <Link
              href="/pricing"
              className="button-secondary border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5"
            >
              All Pricing Tiers
            </Link>
          </div>
        </div>
      </section>

      {/* Features & Architecture Grid */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* System Architecture Details */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Core Capabilities & Architecture
              </h2>
              <ul className="mt-6 space-y-4">
                {product.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Commercial Outcomes */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Expected Business Outcomes
              </h2>
              <div className="mt-6 grid gap-4">
                {product.outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#473BFD] dark:text-[#D3FDB1] font-bold">
                      Outcome 0{idx + 1}
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Section: Dedicated Modular Pricing per Product */}
          <div id="pricing" className="mt-20 pt-16 border-t border-slate-200 dark:border-white/10">
            {isWhatsAppAi ? (
              <WhatsAppPricing showTitle={true} />
            ) : product.slug === "scalezix-crm" ? (
              <CRMPricing showTitle={true} />
            ) : product.slug === "custom-ai-agents" ? (
              <AgentsPricing showTitle={true} />
            ) : (
              <div>
                <div className="text-center max-w-xl mx-auto mb-12">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
                    Deployment Packages
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    Flexible Tiers for Every Adoption Stage
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pricingPlans.map((tier) => (
                    <div
                      key={tier.name}
                      className={`rounded-3xl p-8 border transition-all duration-300 shadow-sm flex flex-col justify-between ${
                        tier.featured
                          ? "border-[#473BFD] dark:border-[#D3FDB1] bg-white dark:bg-[#15171C] ring-1 ring-[#473BFD]/20 shadow-md"
                          : "border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {tier.name}
                          </h3>
                          {tier.featured && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#473BFD]/10 text-[#473BFD] dark:bg-[#D3FDB1]/20 dark:text-[#D3FDB1] uppercase">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-4">
                          {tier.price}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                          {tier.description}
                        </p>

                        <ul className="mt-6 space-y-3 border-t border-slate-100 dark:border-white/5 pt-6">
                          {tier.features.map((feat) => (
                            <li
                              key={feat}
                              className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#473BFD] dark:bg-[#D3FDB1]" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                        <Link
                          href="/contact"
                          className={`inline-flex w-full items-center justify-center rounded-full py-3 text-xs font-semibold transition ${
                            tier.featured
                              ? "bg-[#473BFD] text-white hover:bg-[#756CFE]"
                              : "border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                          }`}
                        >
                          {tier.cta}
                          <ChevronRight className="ml-1 h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Internal Linking & Related Ecosystem */}
          <div className="mt-20 pt-16 border-t border-slate-200 dark:border-white/10">
            <div className="max-w-2xl mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
                Connected Solutions
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Explore More Products & Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Other Products */}
              <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#473BFD] dark:text-[#D3FDB1] mb-3">
                    <Bot className="h-4 w-4" />
                    <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                      Other Products
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {otherProducts.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/products/${p.slug}`}
                          className="group flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#473BFD] dark:hover:text-[#D3FDB1] transition"
                        >
                          <span>{p.name}</span>
                          <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                  <Link
                    href="/products"
                    className="text-xs text-[#473BFD] dark:text-[#D3FDB1] font-semibold hover:underline flex items-center gap-1"
                  >
                    View All Products &rarr;
                  </Link>
                </div>
              </div>

              {/* Related Services */}
              <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#473BFD] dark:text-[#D3FDB1] mb-3">
                    <Zap className="h-4 w-4" />
                    <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                      Related Services
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {services.slice(0, 3).map((s) => (
                      <li key={s.title}>
                        <Link
                          href="/services"
                          className="group flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#473BFD] dark:hover:text-[#D3FDB1] transition"
                        >
                          <span>{s.title}</span>
                          <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                  <Link
                    href="/services"
                    className="text-xs text-[#473BFD] dark:text-[#D3FDB1] font-semibold hover:underline flex items-center gap-1"
                  >
                    Explore All Services &rarr;
                  </Link>
                </div>
              </div>

              {/* Related Resources & Case Studies */}
              <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#473BFD] dark:text-[#D3FDB1] mb-3">
                    <FileText className="h-4 w-4" />
                    <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                      Related Guides & ROI
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    <li>
                      <Link
                        href="/case-studies"
                        className="group flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#473BFD] dark:hover:text-[#D3FDB1] transition"
                      >
                        <span>2x D2C Revenue Growth Case Study</span>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/automate-whatsapp-for-business-india"
                        className="group flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#473BFD] dark:hover:text-[#D3FDB1] transition"
                      >
                        <span>How to Automate WhatsApp in India</span>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing"
                        className="group flex items-center justify-between text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline"
                      >
                        <span>Transparent Pricing Guide & Calculator</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                  <Link
                    href="/contact"
                    className="text-xs text-[#473BFD] dark:text-[#D3FDB1] font-semibold hover:underline flex items-center gap-1"
                  >
                    Schedule Free Discovery Call &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
