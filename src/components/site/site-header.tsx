"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { company, navLinks, products } from "@/content/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
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

  const logoSrc = mounted && resolvedTheme === "light" ? "/Scalezix Logo.png" : "/scalezix-logo-white.png";
  const logoClass = mounted && resolvedTheme === "light"
    ? "h-9 w-auto object-contain invert mix-blend-multiply"
    : "h-9 w-auto object-contain mix-blend-screen";

  return (
    <>
      <header className="fixed inset-x-0 top-6 z-50 px-4 lg:top-[43px]">
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full items-center justify-between gap-4 rounded-[88px] border border-black/10 dark:border-white/10 pl-5 backdrop-blur-[19px] max-w-[902px] bg-white/60 dark:bg-[#05050545] py-2.5 pr-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-colors duration-300"
        >
          <Link href="/" className="block shrink-0">
            {/* Dark Mode Logo */}
            <Image
              src="/scalezix-logo-transparent-white.png"
              alt={`${company.name} logo`}
              width={180}
              height={56}
              className="hidden dark:block h-9 w-auto object-contain"
              priority
            />
            {/* Light Mode Logo */}
            <Image
              src="/scalezix-logo-transparent-dark.png"
              alt={`${company.name} logo`}
              width={180}
              height={56}
              className="block dark:hidden h-9 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <ul className="flex items-center gap-1.5">
              <li className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setProductsOpen((value) => !value)}
                  className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-[14px] font-normal leading-6 tracking-[-0.14px] transition-colors hover:text-[#1f77ff] dark:hover:text-white text-[#0a1c2e] dark:text-[#f7f7f7]"
                >
                  Products
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform", productsOpen ? "rotate-180" : "")}
                  />
                </button>

                {productsOpen && (
                  <div className="absolute left-1/2 top-full mt-3 w-[22rem] -translate-x-1/2 rounded-3xl border border-black/[0.07] dark:border-white/[0.07] bg-white/95 dark:bg-[#05121b]/95 p-3 shadow-2xl backdrop-blur-2xl">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setProductsOpen(false)}
                        className="block rounded-2xl border border-transparent px-4 py-3 transition hover:border-black/5 dark:hover:border-white/10 hover:bg-black/[0.02] dark:hover:bg-white/[0.04]"
                      >
                        <p className="text-sm font-semibold text-[#05121b] dark:text-white">{product.name}</p>
                        <p className="mt-1 text-xs leading-5 text-[#83909a]">
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
                    className="rounded-lg px-2.5 py-1 text-[14px] font-normal leading-6 tracking-[-0.14px] transition-colors hover:text-[#1f77ff] dark:hover:text-white text-[#0a1c2e] dark:text-[#f7f7f7]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="relative isolate inline-flex items-center justify-center overflow-hidden rounded-full border border-black/20 dark:border-white/70 bg-[#1f77ff] px-6 py-2 text-[14px] font-medium leading-6 tracking-[-0.16px] text-[#05121b] hover:text-white transition-[color,border-color] duration-300 ease-in-out before:absolute before:inset-0 before:-z-[1] before:rounded-[inherit] before:bg-[linear-gradient(180deg,#ffffff_0%,#93bdff_100%)] before:transition-opacity before:duration-300 before:ease-in-out before:content-[''] hover:border-[#1f77ff] hover:before:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#05121b] dark:text-white outline-none lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-black/[0.07] dark:border-white/[0.07] bg-white/95 dark:bg-[#05121b]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden text-[#05121b] dark:text-white">
          <div className="mb-4 text-sm font-medium border-b border-black/10 dark:border-white/10 pb-2">Navigation</div>
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => setMobileProductsOpen((value) => !value)}
              className="flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm text-[#0a1c2e] dark:text-[#f7f7f7] transition hover:border-black/5 dark:hover:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#1f77ff] dark:hover:text-white"
            >
              Products
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", mobileProductsOpen ? "rotate-180" : "")}
              />
            </button>
            {mobileProductsOpen && (
              <div className="space-y-2 pl-3">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-2xl border border-transparent px-4 py-3 text-sm text-[#83909a] transition hover:border-black/5 dark:hover:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#1f77ff] dark:hover:text-white"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl border border-transparent px-4 py-3 text-sm text-[#0a1c2e] dark:text-[#f7f7f7] transition hover:border-black/5 dark:hover:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#1f77ff] dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-[#1f77ff] py-3 text-sm font-medium text-white dark:text-[#05121b]"
          >
            Talk to Us
          </Link>
        </div>
      )}
    </>
  );
}
