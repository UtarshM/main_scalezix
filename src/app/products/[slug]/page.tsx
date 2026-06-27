import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { products } from "@/content/prd-site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((entry) => entry.slug === params.slug);

  if (!product) {
    return {};
  }

  return buildMetadata({
    title: `${product.name} | Scalezix Products`,
    description: product.description,
    path: `/products/${product.slug}`,
    keywords: [product.name, "Scalezix product", "AI product India"],
  });
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((entry) => entry.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="section-shell py-20 md:py-24">
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
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="section-kicker w-fit">{product.tag}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{product.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="button-primary">
              Get started
            </Link>
            <Link href="/contact" className="button-secondary">
              Book a free call
            </Link>
          </div>
        </div>

        <div className="metal-panel rounded-[2rem] p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Key features</p>
          <div className="mt-5 grid gap-3">
            {product.features.map((feature) => (
              <div key={feature} className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
                <p className="text-sm font-medium text-white">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        {["Starter", "Growth", "Enterprise"].map((tier) => (
          <div key={tier} className="mesh-card rounded-[1.8rem] p-6">
            <p className="text-sm font-medium text-white">{tier}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Flexible packaging for businesses at different stages of adoption and scale.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
