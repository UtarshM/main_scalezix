import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { company, contactInfo, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Contact | ${company.name}`,
  description: "Book your AI strategy call with Scalezix. Reach us via WhatsApp, phone, or contact form.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 md:pt-40">
        <section className="section-shell">
          <div className="panel relative overflow-hidden p-8 md:p-12">
            <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="section-kicker">Contact</p>
                <h1 className="mt-6 text-4xl font-semibold md:text-6xl">Ready to scale with AI?</h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                  {company.contactDescription}
                </p>
                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Scalezix HQ</p>
                  <p className="mt-2">{contactInfo.addressLine1}</p>
                  <p>{contactInfo.addressLine2}</p>
                  <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:gap-5">
                    <a href={contactInfo.phoneHref} className="transition hover:text-foreground">
                      {contactInfo.phone}
                    </a>
                    <a href={contactInfo.alternatePhoneHref} className="transition hover:text-foreground">
                      {contactInfo.alternatePhone}
                    </a>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/pricing" className="button-secondary">
                    View Pricing
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 md:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                  Book Your Free AI Strategy Call
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Share your workflow bottleneck and we will map the fastest automation path for your team.
                </p>
                <form className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input className="contact-input" type="text" placeholder="Full name" />
                  <input className="contact-input" type="email" placeholder="Work email" />
                  <input className="contact-input" type="text" placeholder="Company" />
                  <input className="contact-input" type="text" placeholder="Phone / WhatsApp" />
                  <textarea className="contact-input min-h-[140px] sm:col-span-2" placeholder="Tell us what you want to automate" />
                  <a
                    href={contactInfo.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary sm:col-span-2"
                  >
                    Continue on WhatsApp
                  </a>
                </form>
                <p className="mt-4 text-xs text-muted-foreground">{company.demoResponseTime}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
