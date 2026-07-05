import Image from "next/image";
import Link from "next/link";
import { company, contactInfo, footerLinks, navLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 md:px-6 xl:px-8">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-5">
          <Link href="/" className="flex items-center gap-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
            <span className="flex h-16 items-center px-2 py-2">
              <Image
                src="/scalezix-logo-white.png"
                alt={`${company.name} logo`}
                width={220}
                height={70}
                className="h-10 w-auto object-contain"
              />
            </span>
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
            <Link href="/blog" className="transition hover:text-foreground">
              Blog
            </Link>
          </nav>
          <Link href="/contact" className="button-primary rounded-full px-6 py-3 text-sm">
            START A PROJECT
          </Link>
        </div>

        <div className="grid gap-12 py-10 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
              Premium AI systems,
              <br />
              sharper digital presence
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              Built for businesses that want their services, products, and automation story to feel decisive and high-trust.
            </p>
          </div>

          <FooterColumn title="Pages" links={footerLinks.company} />

          <div>
            <h3 className="text-xl font-semibold text-foreground">Address and contact</h3>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Ahmedabad Office</p>
                <p>{contactInfo.addressLine1}</p>
                <p>{contactInfo.addressLine2}</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Gandhinagar Office</p>
                <p>{contactInfo.address2Line1}</p>
                <p>{contactInfo.address2Line2}</p>
              </div>
              <div className="space-y-1.5 pt-2">
                <p>
                  <a href="mailto:contact@scalezix.com" className="transition hover:text-foreground">
                    contact@scalezix.com
                  </a>
                </p>
                <p>
                  <a href="mailto:hr@scalezix.com" className="transition hover:text-foreground">
                    hr@scalezix.com
                  </a>
                </p>
                <p>
                  <a href="mailto:career@scalezix.com" className="transition hover:text-foreground">
                    career@scalezix.com
                  </a>
                </p>
                <p className="pt-1.5">
                  <a href={contactInfo.phoneHref} className="transition hover:text-foreground">
                    {contactInfo.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
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
