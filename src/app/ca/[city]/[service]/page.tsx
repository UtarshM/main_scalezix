import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { CanadaServicePage } from "@/components/site/canada-service-page";
import {
  buildCanadaCityPath,
  buildCanadaServicePath,
  canadaCitySlugs,
  canadaServiceSlugs,
  getCanadaServiceCityPage,
  isCanadaCitySlug,
  isCanadaServiceSlug,
} from "@/content/canada";
import {
  breadcrumbSchema,
  buildMetadata,
  faqPageSchema,
  professionalServiceSchema,
  serviceSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return canadaCitySlugs.flatMap((city) => canadaServiceSlugs.map((service) => ({ city, service })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city, service } = await params;

  if (!isCanadaCitySlug(city) || !isCanadaServiceSlug(service)) {
    return {};
  }

  const page = getCanadaServiceCityPage(city, service);

  return buildMetadata({
    title: page.title,
    description: page.metaDescription,
    path: buildCanadaServicePath(city, service),
    keywords: [
      ...page.city.keywords,
      ...page.service.keywords,
      `${page.service.name} ${page.city.name}`,
      `${page.city.name} ${page.service.name} company`,
    ],
  });
}

export default async function CanadaServiceDetailPage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city, service } = await params;

  if (!isCanadaCitySlug(city) || !isCanadaServiceSlug(service)) {
    notFound();
  }

  const page = getCanadaServiceCityPage(city, service);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${page.service.name} in ${page.city.name}`,
            description: page.metaDescription,
            path: buildCanadaServicePath(page.city.slug, page.service.slug),
            areaServed: `${page.city.name}, ${page.city.province}, Canada`,
            serviceType: page.service.category,
          }),
          professionalServiceSchema({
            name: `${page.service.name} - ${page.city.name}`,
            description: page.heroIntro,
            path: buildCanadaServicePath(page.city.slug, page.service.slug),
            areaServed: `${page.city.name}, ${page.city.province}, Canada`,
            keywords: [...page.city.keywords, ...page.service.keywords],
          }),
          faqPageSchema(page.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Canada", path: "/ca" },
            { name: page.city.name, path: buildCanadaCityPath(page.city.slug) },
            {
              name: page.service.name,
              path: buildCanadaServicePath(page.city.slug, page.service.slug),
            },
          ]),
        ]}
      />
      <CanadaServicePage page={page} />
    </>
  );
}
