import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { company, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.name}`,
  description: `Read how ${company.name} handles and protects your data.`,
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32">
        <section className="section-shell">
          <div className="panel max-w-4xl p-8 md:p-12">
            <p className="section-kicker">Privacy Policy</p>
            <h1 className="mt-6 text-4xl md:text-5xl">Privacy-first by design</h1>
            <div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground md:text-base">
              <p>
                Scalezix respects user privacy and handles information only as needed to deliver automation strategy, implementation, and support services.
              </p>
              <p>
                Replace this starter copy with your final legal policy before launch. This page is included so the website structure is ready for SEO, navigation, and compliance flows.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
