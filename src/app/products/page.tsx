import type { Metadata } from "next";
import Link from "next/link";

import { products } from "@/content/prd-site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Products | AI CRM, WhatsApp AI & Custom Agents | Scalezix",
  description:
    "Browse Scalezix AI products including Scalezix CRM, WhatsApp AI Platform, and custom AI agent solutions for growing businesses.",
  path: "/products",
  keywords: ["AI CRM India", "WhatsApp AI platform", "custom AI agents", "Scalezix products"],
});

export default function ProductsPage() {
  return (
    <main className="section-shell py-20 md:py-24">
      <div className="max-w-4xl">
        <p className="section-kicker w-fit">Products</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          AI Products Built for Indian Businesses
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          Deploy faster with productized AI solutions. No full custom build is required to get
          started.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.slug} className="mesh-card rounded-[1.8rem] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{product.tag}</p>
            <h2 className="mt-4 text-2xl font-medium text-white">{product.name}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{product.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {product.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={`/products/${product.slug}`} className="button-secondary">
                Explore product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
