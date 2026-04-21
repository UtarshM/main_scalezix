import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { company, contactInfo, faqs, siteUrl } from "@/content/site";
import { ThemeProvider } from "@/components/site/theme-provider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: company.seoTitle,
    template: `%s | ${company.name}`,
  },
  description: company.seoDescription,
  keywords: company.keywords,
  applicationName: company.name,
  creator: company.name,
  publisher: company.name,
  category: "technology",
  authors: [{ name: company.name }],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: company.seoTitle,
    description: company.seoDescription,
    url: siteUrl,
    siteName: company.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: company.seoTitle,
    description: company.seoDescription,
    creator: "@scalezixco",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  description: company.description,
  slogan: company.tagline,
  areaServed: "Worldwide",
  knowsAbout: company.keywords,
  sameAs: [contactInfo.linkedin],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: contactInfo.phone,
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contactInfo.addressLine1}, ${contactInfo.addressLine2}`,
    addressLocality: contactInfo.city,
    addressRegion: contactInfo.region,
    postalCode: contactInfo.postalCode,
    addressCountry: contactInfo.country,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI workflow automation and business automation services",
  provider: {
    "@type": "Organization",
    name: company.name,
    url: siteUrl,
  },
  areaServed: "Worldwide",
  description: company.seoDescription,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
