import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles, MessageSquare, Users, Cpu, Zap, Shield } from "lucide-react";

import { products } from "@/content/prd-site";
import { services, caseStudies } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Products | WhatsApp AI, AI CRM & Custom Agents | Scalezix",
  description:
    "Browse Scalezix AI products including WhatsApp AI Platform (from ₹3,000/mo), Scalezix CRM, and custom AI agent solutions for growing businesses in India.",
  path: "/products",
  keywords: [
    "AI CRM India",
    "WhatsApp AI platform",
    "WhatsApp automation starting 3k",
    "custom AI agents",
    "Scalezix products",
  ],
});

export default function ProductsPage() {
  const getProductPriceBadge = (slug: string) => {
    if (slug === "whatsapp-ai") return "Starting ₹3,000/mo";
    if (slug === "scalezix-crm") return "From $1,500";
    return "Custom Architecture";
  };

  const getProductIcon = (slug: string) => {
    if (slug === "whatsapp-ai") return <MessageSquare className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1]" />;
    if (slug === "scalezix-crm") return <Users className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1]" />;
    return <Cpu className="h-5 w-5 text-[#473BFD] dark:text-[#D3FDB1]" />;
  };

  return (
    <main className="section-shell py-20 md:py-24">
      {/* Header */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#473BFD]/20 bg-[#473BFD]/10 text-xs font-mono font-semibold text-[#473BFD] dark:text-[#D3FDB1] mb-3">
          <Sparkles className="h-3.5 w-3.5" />
          ENTERPRISE-GRADE AI PRODUCTS
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white md:text-6xl">
          AI Products Built for Modern Businesses
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Deploy faster with productized AI solutions. Start with our modular WhatsApp AI at{" "}
          <strong className="text-slate-900 dark:text-white">₹3,000/mo</strong> or scale your entire
          enterprise pipeline with custom agents.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pricing" className="button-primary text-xs flex items-center gap-1.5">
            <span>View All Pricing Plans</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link href="/services" className="button-secondary text-xs">
            Explore Custom Services
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.slug}
            className="mesh-card rounded-[2rem] p-7 flex flex-col justify-between border border-slate-200 dark:border-white/10 hover:border-[#473BFD]/40 dark:hover:border-[#D3FDB1]/40 transition shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getProductIcon(product.slug)}
                  <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 font-mono font-semibold">
                    {product.tag}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#473BFD]/10 text-[#473BFD] dark:bg-[#D3FDB1]/20 dark:text-[#D3FDB1]">
                  {getProductPriceBadge(product.slug)}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                {product.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {product.description}
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-white/5 pt-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#473BFD] dark:bg-[#D3FDB1]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <Link
                href={`/products/${product.slug}`}
                className="button-primary text-xs py-2.5 px-4 flex items-center gap-1"
              >
                <span>Explore Platform</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={product.slug === "whatsapp-ai" ? "/products/whatsapp-ai#pricing" : "/pricing"}
                className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#473BFD] dark:hover:text-[#D3FDB1] transition"
              >
                View Pricing &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Internal Linking: Related Services & Case Studies */}
      <section className="mt-20 pt-16 border-t border-slate-200 dark:border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#473BFD] dark:text-[#D3FDB1] font-bold">
              Integrated Services
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Need End-to-End Implementation Support?
            </h3>
          </div>
          <Link href="/services" className="button-secondary text-xs shrink-0">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121316] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mt-2">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline flex items-center gap-1"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
