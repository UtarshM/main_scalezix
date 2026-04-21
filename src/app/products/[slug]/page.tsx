import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Reveal } from "@/components/site/reveal";
import { company, products, siteUrl } from "@/content/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  const title = `${product.name} | ${company.name}`;
  const description = `${product.description} ${product.outcomes.join(", ")}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/products/${product.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 md:pt-40">
        <section className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-kicker">{product.label}</p>
              <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
                {product.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/#contact" className="button-primary">
                  {company.primaryCta}
                </Link>
                <Link href="/#pricing" className="button-secondary">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="panel p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">
                Expected outcomes
              </p>
              <ul className="mt-6 space-y-4">
                {product.outcomes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-foreground">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-shell mt-16 md:mt-20">
          <div className="grid gap-5 lg:grid-cols-3">
            {product.details.map((detail, index) => (
              <Reveal key={detail} delay={index * 70}>
                <div className="panel h-full p-6">
                  <p className="text-sm font-medium text-primary">Capability 0{index + 1}</p>
                  <p className="mt-3 text-lg leading-8 text-foreground/90">{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-shell mt-16 md:mt-20">
          <div className="panel flex flex-col gap-5 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl">
              <p className="section-kicker">Next Step</p>
              <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
                See how {product.name} fits into your AI growth plan.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                We will map the fastest path from current workflow pain to a production-ready system.
              </p>
            </div>
            <Link href="/#contact" className="button-primary">
              Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
