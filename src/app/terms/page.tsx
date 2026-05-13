import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { company, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${company.name}`,
  description: `Review the service terms and usage policies for ${company.name}.`,
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32">
        <section className="section-shell">
          <div className="panel max-w-4xl p-8 md:p-12">
            <p className="section-kicker">Terms of Service</p>
            <h1 className="mt-6 text-4xl md:text-5xl">Clear engagement terms</h1>
            <div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground md:text-base">
              <p>
                These starter terms give your footer a proper destination and should be replaced with your approved contract language before publishing.
              </p>
              <p>
                Include billing, delivery, acceptable use, confidentiality, and limitation-of-liability language that matches your actual service model.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
