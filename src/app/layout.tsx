import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { JsonLd } from "@/components/seo/json-ld";
import { CursorOrb } from "@/components/site/cursor-orb";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { companyInfo } from "@/content/prd-site";
import { absoluteUrl, buildMetadata, siteName } from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "Scalezix | AI Automation, Software Development & Growth Systems",
  description:
    "Scalezix builds AI automation systems, software, agents, and growth infrastructure for modern businesses in India.",
  path: "/",
  keywords: [
    "Scalezix",
    "AI automation agency India",
    "software development company Ahmedabad",
    "WhatsApp automation India",
    "AI agents for business",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          <JsonLd
            data={[
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: siteName,
                url: companyInfo.website,
                telephone: companyInfo.phone,
                email: companyInfo.email,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: companyInfo.address,
                  addressCountry: "IN",
                },
                sameAs: [companyInfo.whatsappHref],
                logo: absoluteUrl("/scalezix-logo-white.png"),
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: siteName,
                url: companyInfo.website,
              },
            ]}
          />
          <CursorOrb />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
