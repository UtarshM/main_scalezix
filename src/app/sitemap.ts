import type { MetadataRoute } from "next";

import { canadaCitySlugs, canadaServiceCityPages } from "@/content/canada";
import { blogPosts, caseStudies, products, serviceCards } from "@/content/prd-site";

const siteUrl = "https://scalezix.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
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
    "/results",
    "/services",
    "/terms",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = serviceCards
    .filter((service) =>
      ["ai-automation", "software-development", "digital-marketing", "ai-agents", "crm-integrations", "ai-chatbots"].includes(service.slug),
    )
    .map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
    }));

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
  }));

  const canadaRoutes = [
    {
      url: `${siteUrl}/ca`,
      lastModified: new Date(),
    },
    ...canadaCitySlugs.map((city) => ({
      url: `${siteUrl}/ca/${city}`,
      lastModified: new Date(),
    })),
    ...canadaServiceCityPages.map((page) => ({
      url: `${siteUrl}/ca/${page.city.slug}/${page.service.slug}`,
      lastModified: new Date(),
    })),
  ];

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${siteUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
    ...canadaRoutes,
  ];
}
