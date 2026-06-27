import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { ServiceIcon } from "@/components/site/service-icon";
import { serviceCards, serviceDetailContent } from "@/content/prd-site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

type Slug = keyof typeof serviceDetailContent;

export function generateStaticParams() {
  return Object.keys(serviceDetailContent).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const content = serviceDetailContent[params.slug as Slug];
  const serviceMeta = serviceCards.find((service) => service.slug === params.slug);

  if (!content || !serviceMeta) {
    return {};
  }

  return buildMetadata({
    title: `${serviceMeta.name} Services | Scalezix`,
    description: content.description,
    path: `/services/${serviceMeta.slug}`,
    keywords: [serviceMeta.name, "Scalezix services", "AI automation India"],
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const content = serviceDetailContent[params.slug as Slug];
  const serviceMeta = serviceCards.find((service) => service.slug === params.slug);

  if (!content || !serviceMeta) {
    notFound();
  }

  return (
    <main className="section-shell py-20 md:py-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: serviceMeta.name,
            description: content.description,
            provider: {
              "@type": "Organization",
              name: "Scalezix",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faqs.map((faq) => ({
              "@type": "Question",
              name: faq,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Talk to Scalezix to get a tailored answer for ${faq.toLowerCase()}.`,
              },
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: serviceMeta.name, path: `/services/${serviceMeta.slug}` },
          ]),
        ]}
      />

      <div className="max-w-4xl">
        <p className="section-kicker w-fit">
          <ServiceIcon icon={serviceMeta.icon} />
          Service detail
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          {content.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{content.description}</p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {content.sections.map((section) => (
          <section key={section.title} className="metal-panel rounded-[1.8rem] p-6">
            <h2 className="text-2xl font-medium text-white">{section.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{section.text}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 mesh-card rounded-[1.8rem] p-6">
        <h2 className="text-2xl font-medium text-white">FAQ</h2>
        <div className="mt-5 grid gap-3">
          {content.faqs.map((faq) => (
            <div key={faq} className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
              <p className="text-sm font-medium text-white">{faq}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/contact" className="button-primary">
            Get a quote
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
