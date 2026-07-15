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

export function faqPageSchema(
  faqs: Array<{
    question: string;
    answer: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
  serviceType?: string;
};

export function serviceSchema({
  name,
  description,
  path,
  areaServed,
  serviceType,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    areaServed,
    provider: {
      "@type": "Organization",
      name: siteName,
      url: companyInfo.website,
      telephone: companyInfo.phone,
      email: companyInfo.email,
    },
  };
}

type ProfessionalServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  areaServed: string;
  keywords?: string[];
};

export function professionalServiceSchema({
  name,
  description,
  path,
  areaServed,
  keywords = [],
}: ProfessionalServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url: absoluteUrl(path),
    areaServed,
    keywords,
    provider: {
      "@type": "Organization",
      name: siteName,
      url: companyInfo.website,
      telephone: companyInfo.phone,
      email: companyInfo.email,
    },
  };
}
