"use client";

import Image from "next/image";
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
  const dropdownRef = useRef<HTMLLIElement>(null);

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
      <header className="fixed top-0 inset-x-0 z-50 w-full flex flex-col">
        {/* Blue Announcement Bar */}
        <div className="w-full bg-[#473BFD] text-white text-[10px] md:text-xs py-2 px-4 text-center font-medium tracking-wide border-b border-white/5 relative z-50">
          Find your biggest AI opportunities in under 30 minutes.{" "}
          <Link href="/contact" className="underline hover:opacity-90 font-semibold transition-opacity ml-1">
            Book a strategy call &rarr;
          </Link>
        </div>

        {/* Main Full-Width Header */}
        <nav
          aria-label="Primary"
          className={cn(
            "w-full border-b transition-all duration-300 py-4 px-6 md:px-10 lg:px-[76px] flex items-center justify-between z-40 bg-[#0C0D0F]/90 backdrop-blur-md",
            scrolled ? "border-white/10 bg-[#0C0D0F]/95 shadow-md" : "border-white/5"
          )}
        >
          <Link href="/" className="block shrink-0">
            <Image
              src="/scalezix-logo-transparent-white.png"
              alt={`${company.name} logo`}
              width={160}
              height={50}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 lg:flex">
            <ul className="flex items-center gap-2">
              <li className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setProductsOpen((value) => !value)}
                  className="flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase text-slate-400 hover:text-white transition-colors px-3 py-2"
                >
                  Products
                  <ChevronDown
                    className={cn("h-3 w-3 transition-transform text-slate-500", productsOpen ? "rotate-180" : "")}
                  />
                </button>

                {productsOpen && (
                  <div className="absolute left-1/2 top-full mt-2 w-[22rem] -translate-x-1/2 rounded-2xl border border-white/[0.07] bg-[#0C0D0F]/95 p-3 shadow-2xl backdrop-blur-2xl">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setProductsOpen(false)}
                        className="block rounded-xl border border-transparent px-4 py-3 transition hover:border-white/10 hover:bg-white/[0.04]"
                      >
                        <p className="text-sm font-semibold text-white">{product.name}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {product.label}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-[10px] tracking-widest uppercase text-slate-400 hover:text-white transition-colors px-3 py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-2 text-xs font-semibold text-white hover:bg-white/5 transition-all duration-300 gap-1"
              >
                Talk to Us
                <span className="text-[10px]">↗</span>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white outline-none"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-0 inset-y-0 z-40 bg-[#0C0D0F] pt-[120px] pb-8 px-6 overflow-y-auto flex flex-col justify-between lg:hidden text-white">
          <div className="space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 border-b border-white/5 pb-2 mb-4">
              Navigation
            </div>
            
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setMobileProductsOpen((value) => !value)}
                className="flex w-full items-center justify-between py-2 text-sm text-slate-300 font-medium hover:text-white"
              >
                Products
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", mobileProductsOpen ? "rotate-180" : "")}
                />
              </button>
              {mobileProductsOpen && (
                <div className="space-y-2 pl-4 border-l border-white/5 mt-1">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-slate-300 font-medium hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/5 mt-auto">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#D3FDB1] border border-[#D3FDB1] px-5 py-3 text-sm font-semibold text-[#0C0D0F] hover:bg-[#c3fca0] transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
