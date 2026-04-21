"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { company, navLinks, products } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "px-3 pt-3" : "px-0 pt-0"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between transition-all duration-300",
            scrolled
              ? "rounded-full border border-white/[0.07] bg-black/75 px-6 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              : "px-4 py-5"
          )}
        >
          <Link href="/" className="font-heading text-[1.7rem] font-semibold tracking-tight text-foreground">
            {company.name}
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setProductsOpen((value) => !value)}
                className="flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
              >
                Products
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", productsOpen ? "rotate-180" : "")}
                />
              </button>

              {productsOpen ? (
                <div className="absolute left-1/2 top-full mt-4 w-[22rem] -translate-x-1/2 rounded-3xl border border-white/[0.07] bg-black/90 p-3 shadow-2xl backdrop-blur-2xl">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="block rounded-2xl border border-transparent px-4 py-3 transition hover:border-white/10 hover:bg-white/[0.04]"
                    >
                      <p className="text-sm font-semibold text-foreground">{product.name}</p>
                      <p className="mt-1 text-xs leading-6 text-muted-foreground">
                        {product.label}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
              Log in
            </Link>
            <Link href="/contact" className="button-primary px-7 py-3">
              Get Started
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-white/[0.07] bg-black/90 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="mb-4 text-sm font-medium text-foreground">Navigation</div>
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => setMobileProductsOpen((value) => !value)}
              className="flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm text-muted-foreground transition hover:border-white/10 hover:bg-white/5 hover:text-foreground"
            >
              Products
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", mobileProductsOpen ? "rotate-180" : "")}
              />
            </button>
            {mobileProductsOpen ? (
              <div className="space-y-2 pl-3">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-2xl border border-transparent px-4 py-3 text-sm text-muted-foreground transition hover:border-white/10 hover:bg-white/5 hover:text-foreground"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            ) : null}
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl border border-transparent px-4 py-3 text-sm text-muted-foreground transition hover:border-white/10 hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="button-primary mt-4 flex justify-center"
          >
            Get Started
          </Link>
        </div>
      ) : null}
    </>
  );
}
