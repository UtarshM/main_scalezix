import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Users, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonials", href: "/#testimonials" },
];

const products = [
  {
    name: "Scalezix CRM",
    desc: "AI-powered CRM for lead management & sales automation.",
    icon: Users,
    href: "/products/crm",
  },
  {
    name: "WhatsApp AI",
    desc: "Smart WhatsApp CRM — broadcasts, chatbots & campaigns.",
    icon: MessageSquare,
    href: "/products/whatsapp-ai",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
          Scalezix
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {/* Products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <ChevronDown size={14} className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 glass rounded-xl p-2 animate-fade-in">
                {products.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <p.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button size="sm" className="text-sm rounded-full px-5">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-5 animate-fade-in">
          {/* Mobile products */}
          <button
            className="flex items-center justify-between w-full py-2.5 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
          >
            Products
            <ChevronDown size={14} className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileProductsOpen && (
            <div className="pl-4 mb-2 space-y-1">
              {products.map((p) => (
                <Link
                  key={p.href}
                  to={p.href}
                  className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <p.icon size={14} />
                  {p.name}
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
            <Button variant="ghost" size="sm" className="justify-start text-muted-foreground">Log in</Button>
            <Button size="sm" className="rounded-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
