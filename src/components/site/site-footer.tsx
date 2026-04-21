import Link from "next/link";
import { company, contactInfo, footerLinks, navLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-8 md:px-6 xl:px-8">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-5">
          <Link href="/" className="font-heading text-3xl font-semibold tracking-tight text-foreground">
            {company.name}
          </Link>
          <nav className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <Link href="/" className="transition hover:text-foreground">
              Home
            </Link>
            {navLinks.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="button-primary rounded-md px-6 py-3 text-sm">
            SCHEDULE A CALL
          </Link>
        </div>

        <div className="grid gap-12 py-10 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.02em] text-white sm:text-5xl md:text-7xl">
              Your next AI
              <br />
              scale starts here
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              We are ready to turn your workflow bottlenecks into growth systems with AI automation.
            </p>
          </div>

          <FooterColumn title="Pages" links={footerLinks.company} />

          <div>
            <h3 className="text-xl font-semibold text-foreground">Address and contact</h3>
            <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <p>{contactInfo.addressLine1}</p>
              <p>{contactInfo.addressLine2}</p>
              <p className="pt-3">
                <a href="mailto:bd@scalezix.com" className="transition hover:text-foreground">
                  bd@scalezix.com
                </a>
              </p>
              <p>
                <a href={contactInfo.phoneHref} className="transition hover:text-foreground">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a href={contactInfo.alternatePhoneHref} className="transition hover:text-foreground">
                  {contactInfo.alternatePhone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href={contactInfo.linkedin} className="transition hover:text-foreground">
              LinkedIn
            </Link>
            <Link href={contactInfo.whatsappHref} className="transition hover:text-foreground">
              WhatsApp
            </Link>
            <Link href="/privacy" className="transition hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 left-1/2 w-full -translate-x-1/2 select-none text-center font-heading text-[22vw] font-semibold uppercase leading-none tracking-[-0.04em] text-white/[0.05]"
      >
        {company.name}
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
