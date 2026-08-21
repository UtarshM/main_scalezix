import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { CanadaServicePage } from "@/components/site/canada-service-page";
import { getSeoLocationPage, getSeoLocationSlugs } from "@/lib/seo-location-pages";
import {
  breadcrumbSchema,
  buildMetadata,
  faqPageSchema,
  professionalServiceSchema,
  serviceSchema,
} from "@/lib/seo";

// Force static generation of all 1,827 pages at build time
export function generateStaticParams() {
  const slugs = getSeoLocationSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLocationPage(slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${slug}`,
    keywords: [
      ...page.city.keywords,
      ...page.service.keywords,
      `${page.service.name} ${page.city.name}`,
      `${page.city.name} ${page.service.name} company`,
    ],
  });
}

export default async function SeoLocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoLocationPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${page.service.name} in ${page.city.name}`,
            description: page.metaDescription,
            path: `/${slug}`,
            areaServed: `${page.city.name}, ${page.city.province}, Canada`,
            serviceType: page.service.category,
          }),
          professionalServiceSchema({
            name: `${page.service.name} - ${page.city.name}`,
            description: page.heroIntro,
            path: `/${slug}`,
            areaServed: `${page.city.name}, ${page.city.province}, Canada`,
            keywords: [...page.city.keywords, ...page.service.keywords],
          }),
          faqPageSchema(page.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.city.name, path: `/ca/${page.city.slug}` },
            {
              name: page.service.name,
              path: `/${slug}`,
            },
          ]),
        ]}
      />
      <CanadaServicePage page={page} />
    </>
  );
}
