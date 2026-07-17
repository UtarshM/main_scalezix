import Image from "next/image";
import Link from "next/link";
import { company, contactInfo, footerLinks, navLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-transparent">
      <div className="relative overflow-hidden bg-[#10222f] px-6 pb-16 pt-16 sm:px-10 lg:px-[76px] lg:pt-[80px] rounded-t-[48px] text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-8">
            <Link href="/" className="flex items-center gap-3 font-heading text-3xl font-semibold tracking-tight text-white">
              <span className="flex h-12 items-center px-1">
                <Image
                  src="/scalezix-logo-transparent-white.png"
                  alt={`${company.name} logo`}
                  width={220}
                  height={70}
                  className="h-10 w-auto object-contain"
                />
              </span>
            </Link>
            <nav className="flex flex-wrap items-center gap-5 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              {navLinks.slice(0, 4).map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
            </nav>
            <Link href="/contact" className="relative isolate inline-flex items-center justify-center overflow-hidden rounded-full border border-white/70 bg-[#1f77ff] px-6 py-2.5 text-[14px] font-medium leading-6 tracking-[-0.16px] text-[#05121b] transition-[color,border-color] duration-300 ease-in-out before:absolute before:inset-0 before:-z-[1] before:rounded-[inherit] before:bg-[linear-gradient(180deg,#ffffff_0%,#93bdff_100%)] before:transition-opacity before:duration-300 before:ease-in-out before:content-[''] hover:border-[#1f77ff] hover:text-white hover:before:opacity-0">
              Talk to Us
            </Link>
          </div>

          <div className="grid gap-12 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_0.6fr_0.6fr_0.9fr_1.1fr]">
            <div className="col-span-2 md:col-span-3 lg:col-span-1 max-w-2xl">
              <h2 className="text-4xl font-semibold leading-[1.0] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                Premium AI systems,
                <br />
                sharper digital presence
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/70 sm:text-base">
                Built for businesses that want their services, products, and automation story to feel decisive and high-trust.
              </p>
            </div>

            <FooterColumn title="Pages" links={footerLinks.company} />
            <FooterColumn title="Products" links={footerLinks.products} />

            <div>
              <h3 className="text-lg font-semibold text-white">Locations</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {footerLinks.locations.map((link) => (
                  <li key={link.href} className={link.label === "Canada AI Hub" ? "col-span-2 font-medium border-b border-white/10 pb-1.5 mb-1 text-white" : ""}>
                    <Link href={link.href} className="text-sm text-white/70 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Address and Contact</h3>
              <div className="mt-4 space-y-4 text-sm text-white/70">
                <div>
                  <p className="font-medium text-white">Ahmedabad Office</p>
                  <p>{contactInfo.addressLine1}</p>
                  <p>{contactInfo.addressLine2}</p>
                </div>
                <div>
                  <p className="font-medium text-white">Gandhinagar Office</p>
                  <p>{contactInfo.address2Line1}</p>
                  <p>{contactInfo.address2Line2}</p>
                </div>
                <div className="space-y-1.5 pt-2">
                  <p>
                    <a href="mailto:contact@scalezix.com" className="transition hover:text-white">
                      contact@scalezix.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:hr@scalezix.com" className="transition hover:text-white">
                      hr@scalezix.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:career@scalezix.com" className="transition hover:text-white">
                      career@scalezix.com
                    </a>
                  </p>
                  <p className="pt-1.5">
                    <a href={contactInfo.phoneHref} className="transition hover:text-white">
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 bg-white dark:bg-ink px-6 py-8 text-sm text-[#83909a] sm:flex-row lg:px-[76px] mx-auto max-w-7xl transition-colors duration-300">
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href={contactInfo.whatsappHref} className="transition hover:text-[#05121b] dark:hover:text-white">
            WhatsApp
          </Link>
          <Link href="/privacy" className="transition hover:text-[#05121b] dark:hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-[#05121b] dark:hover:text-white">
            Terms
          </Link>
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
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/70 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
