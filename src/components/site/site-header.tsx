"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { company, navLinks, products } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setMounted(true);
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

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  const logoSrc = isDark
    ? "/scalezix-logo-transparent-white.png"
    : "/scalezix-logo-transparent-dark.png";

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
            "w-full border-b transition-all duration-300 py-4 px-6 md:px-10 lg:px-[76px] flex items-center justify-between z-40 backdrop-blur-md",
            isDark
              ? scrolled
                ? "border-white/10 bg-[#0C0D0F]/95 shadow-md text-white"
                : "border-white/5 bg-[#0C0D0F]/90 text-white"
              : scrolled
                ? "border-black/10 bg-white/95 shadow-sm text-slate-900"
                : "border-black/5 bg-white/90 text-slate-900"
          )}
        >
          <Link href="/" className="block shrink-0">
            <Image
              src={logoSrc}
              alt={`${company.name} logo`}
              width={160}
              height={50}
              className="h-8 w-auto object-contain transition-opacity duration-300"
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
                  className={cn(
                    "flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase transition-colors px-3 py-2",
                    isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900 font-medium"
                  )}
                >
                  Products
                  <ChevronDown
                    className={cn(
                      "h-3 w-3 transition-transform",
                      isDark ? "text-slate-500" : "text-slate-400",
                      productsOpen ? "rotate-180" : ""
                    )}
                  />
                </button>

                {productsOpen && (
                  <div
                    className={cn(
                      "absolute left-1/2 top-full mt-2 w-[22rem] -translate-x-1/2 rounded-2xl p-3 shadow-2xl backdrop-blur-2xl border",
                      isDark
                        ? "border-white/[0.07] bg-[#0C0D0F]/95 text-white"
                        : "border-black/[0.08] bg-white/95 text-slate-900"
                    )}
                  >
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setProductsOpen(false)}
                        className={cn(
                          "block rounded-xl border border-transparent px-4 py-3 transition",
                          isDark
                            ? "hover:border-white/10 hover:bg-white/[0.04]"
                            : "hover:border-black/10 hover:bg-slate-50"
                        )}
                      >
                        <p className={cn("text-sm font-semibold", isDark ? "text-white" : "text-slate-900")}>
                          {product.name}
                        </p>
                        <p className={cn("mt-1 text-xs leading-5", isDark ? "text-slate-400" : "text-slate-500")}>
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
                    className={cn(
                      "font-mono text-[10px] tracking-widest uppercase transition-colors px-3 py-2",
                      isDark
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-600 hover:text-slate-900 font-medium"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                  isDark
                    ? "border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    : "border-black/15 bg-black/5 text-slate-700 hover:bg-black/10 hover:text-slate-900"
                )}
                aria-label="Toggle theme"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {mounted ? (
                  isDark ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-slate-700" />
                ) : (
                  <div className="h-4 w-4" />
                )}
              </button>

              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center rounded-full border px-5 py-2 text-xs font-semibold transition-all duration-300 gap-1",
                  isDark
                    ? "border-white/15 bg-transparent text-white hover:bg-white/5"
                    : "border-black/15 bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                Talk to Us
                <span className="text-[10px]">↗</span>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle + Theme Switcher */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                isDark
                  ? "border-white/15 bg-white/5 text-slate-300"
                  : "border-black/15 bg-black/5 text-slate-700"
              )}
              aria-label="Toggle theme"
            >
              {mounted ? (
                isDark ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-slate-700" />
              ) : (
                <div className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full outline-none",
                isDark ? "text-white" : "text-slate-900"
              )}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={cn(
            "fixed inset-x-0 inset-y-0 z-40 pt-[120px] pb-8 px-6 overflow-y-auto flex flex-col justify-between lg:hidden transition-colors duration-300",
            isDark ? "bg-[#0C0D0F] text-white" : "bg-white text-slate-900"
          )}
        >
          <div className="space-y-4">
            <div
              className={cn(
                "text-[10px] font-mono uppercase tracking-widest border-b pb-2 mb-4 flex items-center justify-between",
                isDark ? "text-slate-500 border-white/5" : "text-slate-500 border-black/5"
              )}
            >
              <span>Navigation</span>
              <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="flex items-center gap-1.5 text-xs text-[#473BFD]"
              >
                {isDark ? <Sun className="h-3.5 w-3.5 text-amber-300" /> : <Moon className="h-3.5 w-3.5" />}
                <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
            
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setMobileProductsOpen((value) => !value)}
                className={cn(
                  "flex w-full items-center justify-between py-2 text-sm font-medium",
                  isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                )}
              >
                Products
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", mobileProductsOpen ? "rotate-180" : "")}
                />
              </button>
              {mobileProductsOpen && (
                <div className={cn("space-y-2 pl-4 border-l mt-1", isDark ? "border-white/5" : "border-black/5")}>
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block py-1.5 text-xs transition-colors",
                        isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                      )}
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
                className={cn(
                  "block py-2 text-sm font-medium transition-colors",
                  isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className={cn("pt-6 border-t mt-auto", isDark ? "border-white/5" : "border-black/5")}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#473BFD] border border-[#473BFD] px-5 py-3 text-sm font-semibold text-white hover:bg-[#756CFE] transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
