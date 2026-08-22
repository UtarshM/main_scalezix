import Link from "next/link";
import Image from "next/image";

const links = {
  Products: [
    { label: "WhatsApp AI (from ₹3k/mo)", href: "/pricing/whatsapp-ai" },
    { label: "Scalezix CRM (from ₹4,999/mo)", href: "/pricing/scalezix-crm" },
    { label: "Custom AI Agents (from ₹7,999/mo)", href: "/pricing/custom-ai-agents" },
    { label: "Master Pricing Hub", href: "/pricing" },
  ],
  Services: [
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "AI Chatbots", href: "/services/ai-chatbots" },
    { label: "CRM Integrations", href: "/services/crm-integrations" },
    { label: "Software Engineering", href: "/services/software-development" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "FAQ", href: "/faq" },
    { label: "Verify Certificate", href: "/verify" },
  ],
};

const Footer = () => (
  <footer className="border-t border-border py-16 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="inline-block">
            <Image
              src="/scalezix-logo-transparent-dark.png"
              alt="Scalezix logo"
              width={140}
              height={36}
              className="h-7 w-auto object-contain dark:hidden"
            />
            <Image
              src="/scalezix-logo-transparent-white.png"
              alt="Scalezix logo"
              width={140}
              height={36}
              className="h-7 w-auto object-contain hidden dark:block"
            />
          </Link>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed max-w-xs">
            Scale smarter with modular AI automation & WhatsApp systems.
          </p>
          <div className="mt-4">
            <Link
              href="/pricing"
              className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
            >
              WhatsApp AI from ₹3k/mo &rarr;
            </Link>
          </div>
        </div>
        {Object.entries(links).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {category}
            </h4>
            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Scalezix. All rights reserved. Ahmedabad & Gandhinagar, India.
        </p>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="/ca" className="hover:text-foreground transition-colors">
            Canada Hub
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
