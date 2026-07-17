import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { JsonLd } from "@/components/seo/json-ld";
import { CursorOrb } from "@/components/site/cursor-orb";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ThemeProvider } from "@/components/site/theme-provider";
import { companyInfo } from "@/content/prd-site";
import { absoluteUrl, buildMetadata, siteName } from "@/lib/seo";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <JsonLd
              data={[
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: siteName,
                  url: companyInfo.website,
                  telephone: companyInfo.phone,
                  email: companyInfo.email,
                  address: [
                    {
                      "@type": "PostalAddress",
                      streetAddress: companyInfo.address,
                      addressLocality: "Ahmedabad",
                      addressRegion: "Gujarat",
                      postalCode: "380015",
                      addressCountry: "IN",
                    },
                    {
                      "@type": "PostalAddress",
                      streetAddress: companyInfo.address2,
                      addressLocality: "Gandhinagar",
                      addressRegion: "Gujarat",
                      postalCode: "382011",
                      addressCountry: "IN",
                    },
                  ],
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
        </ThemeProvider>
      </body>
    </html>
  );
}
