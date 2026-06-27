import type { Metadata } from "next";

import { companyInfo } from "@/content/prd-site";

export const siteUrl = companyInfo.website;
export const siteName = "Scalezix";
export const defaultOgImage = `${siteUrl}/scalezix-logo-white.png`;

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: SeoInput): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords: [...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      images: [
        {
          url: defaultOgImage,
          width: 1324,
          height: 464,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function breadcrumbSchema(
  items: Array<{
    name: string;
    path: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
