import type { MetadataRoute } from "next";

import { canadaCitySlugs, canadaServiceCityPages } from "@/content/canada";
import { blogPosts, caseStudies, products, serviceCards } from "@/content/prd-site";
import { getSeoLocationSlugs } from "@/lib/seo-location-pages";

const siteUrl = "https://scalezix.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/blog",
    "/careers",
    "/case-studies",
    "/contact",
    "/faq",
    "/privacy",
    "/process",
    "/products",
    "/pricing",
    "/pricing/whatsapp-ai",
    "/pricing/scalezix-crm",
    "/pricing/custom-ai-agents",
    "/results",
    "/services",
    "/terms",
    "/verify",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = serviceCards
    .filter((service) =>
      ["ai-automation", "software-development", "digital-marketing", "ai-agents", "crm-integrations", "ai-chatbots"].includes(service.slug),
    )
    .map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const canadaRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/ca`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...canadaCitySlugs.map((city) => ({
      url: `${siteUrl}/ca/${city}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...canadaServiceCityPages.map((page) => ({
      url: `${siteUrl}/ca/${page.city.slug}/${page.service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${siteUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const seoLocationRoutes: MetadataRoute.Sitemap = getSeoLocationSlugs().map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
    ...canadaRoutes,
    ...seoLocationRoutes,
  ];
}
