"use client";

import Image from "next/image";
import Link from "next/link";
import { company, contactInfo } from "@/content/site";

const aiPrompt = encodeURIComponent(
  "What does Scalezix (scalezix.com) do? Tell me what they build, who they build it for, and how an engagement actually runs. I lead a business trying to get AI into daily operations rather than another pilot. Explain it in plain language, as you would to someone who runs the business but does not work in technology, and skip the jargon. Use scalezix.com as your primary source and say so if you cannot find enough there."
);

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-slate-100 dark:bg-[#0A0B0D] text-slate-700 dark:text-[#9a9a9a] transition-colors duration-300 font-sans border-t border-slate-200 dark:border-white/5">
      {/* 1. Architectural Top Segmented Grid Strip */}
      <div aria-hidden="true" className="relative hidden h-[49px] overflow-hidden border-b border-slate-200 dark:border-white/10 lg:block">
        <div
          className="dark:hidden absolute inset-y-0 left-1/2 w-[2464px] -translate-x-1/2 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #94A3B8 0 1px, transparent 1px 25.6667px)",
          }}
        />
        <div
          className="hidden dark:block absolute inset-y-0 left-1/2 w-[2464px] -translate-x-1/2 opacity-60"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #292D32 0 1px, transparent 1px 25.6667px)",
          }}
        />
      </div>

      {/* 2. Side Vertical Bounding Lines */}
      <div aria-hidden="true" className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="relative mx-auto h-full w-full max-w-[1232px]">
          <div className="absolute left-0 top-[49px] bottom-0 w-px bg-slate-200 dark:bg-white/10" />
          <div className="absolute right-0 top-[49px] bottom-0 w-px bg-slate-200 dark:bg-white/10" />
        </div>
      </div>

      {/* 3. Main Footer Content */}
      <div className="mx-auto w-full max-w-[1232px] px-6 md:px-12 xl:px-0 relative z-10">
        <div className="pt-12 lg:pt-[57px] xl:px-16">
          
          {/* Top Row: Logo + Tagline and Nav */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-slate-200 dark:border-white/10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link href="/" className="inline-flex items-center transition-opacity duration-200 hover:opacity-80">
                <Image
                  src="/scalezix-logo-transparent-dark.png"
                  alt={`${company.name} logo`}
                  width={150}
                  height={38}
                  className="h-8 w-auto object-contain dark:hidden"
                />
                <Image
                  src="/scalezix-logo-transparent-white.png"
                  alt={`${company.name} logo`}
                  width={150}
                  height={38}
                  className="h-8 w-auto object-contain hidden dark:block"
                />
              </Link>
              <span className="hidden sm:inline text-slate-400 dark:text-white/20">&bull;</span>
              <p className="text-[14px] sm:text-[15px] text-slate-800 dark:text-white font-medium leading-[1.35]">
                Your partner in building an AI-native enterprise.
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-[0.14em] lg:gap-x-7 lg:text-[13px]">
              <Link href="/" className="text-slate-600 dark:text-[#9a9a9a] transition-colors duration-150 hover:text-[#473BFD] dark:hover:text-white">
                Home
              </Link>
              <Link href="/services" className="text-slate-600 dark:text-[#9a9a9a] transition-colors duration-150 hover:text-[#473BFD] dark:hover:text-white">
                Services
              </Link>
              <Link href="/pricing" className="text-[#473BFD] dark:text-[#D3FDB1] font-semibold transition-colors duration-150 hover:underline">
                Pricing
              </Link>
              <Link href="/about" className="text-slate-600 dark:text-[#9a9a9a] transition-colors duration-150 hover:text-[#473BFD] dark:hover:text-white">
                About
              </Link>
              <Link href="/case-studies" className="text-slate-600 dark:text-[#9a9a9a] transition-colors duration-150 hover:text-[#473BFD] dark:hover:text-white">
                Case Studies
              </Link>
              <Link href="/contact" className="text-slate-600 dark:text-[#9a9a9a] transition-colors duration-150 hover:text-[#473BFD] dark:hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          {/* 4. Rich Internal Linking Hub for SEO & User Exploration */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-slate-200 dark:border-white/10 text-xs">
            
            {/* Column 1: Core AI Services */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-900 dark:text-white font-bold">
                AI Capabilities
              </h4>
              <ul className="flex flex-col gap-2 text-slate-600 dark:text-[#8E939D]">
                <li>
                  <Link href="/services/ai-automation" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    AI Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-agents" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Autonomous AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/services/software-development" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    AI Software Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/services/crm-integrations" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    CRM & API Middleware
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-chatbots" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Customer AI Chatbots
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-marketing" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Digital AI Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Products & Platforms */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-900 dark:text-white font-bold">
                Products & Tools
              </h4>
              <ul className="flex flex-col gap-2 text-slate-600 dark:text-[#8E939D]">
                <li>
                  <Link href="/products/whatsapp-ai" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-between">
                    <span>WhatsApp AI Suite</span>
                    <span className="text-[9px] font-mono font-bold text-emerald-500">₹3k/mo</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing/whatsapp-ai" className="hover:text-slate-900 dark:hover:text-white transition-colors text-[11px] text-[#473BFD] dark:text-[#D3FDB1] font-semibold">
                    • WhatsApp AI Pricing (from ₹3k)
                  </Link>
                </li>
                <li>
                  <Link href="/products/scalezix-crm" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Scalezix CRM Platform
                  </Link>
                </li>
                <li>
                  <Link href="/pricing/scalezix-crm" className="hover:text-slate-900 dark:hover:text-white transition-colors text-[11px] text-[#473BFD] dark:text-[#D3FDB1] font-semibold">
                    • CRM Pricing (from ₹4,999)
                  </Link>
                </li>
                <li>
                  <Link href="/products/custom-ai-agents" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Custom AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/pricing/custom-ai-agents" className="hover:text-slate-900 dark:hover:text-white transition-colors text-[11px] text-[#473BFD] dark:text-[#D3FDB1] font-semibold">
                    • Agents Pricing (from ₹7,999)
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors font-bold text-slate-900 dark:text-white">
                    Master Pricing Hub &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Regional SEO & Canada AI Hub */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-900 dark:text-white font-bold">
                Regional Hubs
              </h4>
              <ul className="flex flex-col gap-2 text-slate-600 dark:text-[#8E939D]">
                <li>
                  <Link href="/ca" className="hover:text-slate-900 dark:hover:text-white transition-colors font-medium">
                    Canada AI Hub Overview
                  </Link>
                </li>
                <li>
                  <Link href="/ca/toronto" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Toronto AI Systems
                  </Link>
                </li>
                <li>
                  <Link href="/ca/vancouver" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Vancouver AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/ca/calgary" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Calgary Enterprise AI
                  </Link>
                </li>
                <li>
                  <Link href="/ca/mississauga" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Mississauga Hub
                  </Link>
                </li>
                <li>
                  <Link href="/ca/ottawa" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Ottawa AI Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Research, Trust & AEO */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-900 dark:text-white font-bold">
                Research & Trust
              </h4>
              <ul className="flex flex-col gap-2 text-slate-600 dark:text-[#8E939D]">
                <li>
                  <Link href="/case-studies" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Case Studies & ROI
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Articles & Publications
                  </Link>
                </li>
                <li>
                  <Link href="/verify" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Certificate Verification
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Careers & Pods
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Address & Office Details */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-900 dark:text-white font-bold">
                Offices & Contact
              </h4>
              <div className="flex flex-col gap-2.5 text-slate-600 dark:text-[#8E939D] leading-relaxed">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Ahmedabad HQ</p>
                  <p className="text-[11px]">{contactInfo.addressLine1}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Gandhinagar Office</p>
                  <p className="text-[11px]">{contactInfo.address2Line1}</p>
                </div>
                <div className="pt-1 flex flex-col gap-1 font-mono text-[11px]">
                  <a href="mailto:contact@scalezix.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    contact@scalezix.com
                  </a>
                  <a href={contactInfo.phoneHref} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* 5. Official Scalezix Centerpiece Brand Showcase */}
          <div className="relative mx-auto flex flex-col items-center justify-center py-10 lg:py-14 select-none overflow-hidden text-center">
            {/* Ambient Background Radial Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] sm:w-[600px] h-[140px] rounded-full bg-[#473BFD]/8 dark:bg-[#473BFD]/20 blur-[70px]" />
            </div>

            <Link
              href="/"
              className="relative z-10 transition-transform duration-300 hover:scale-[1.01] block w-full max-w-[420px] sm:max-w-[620px] md:max-w-[780px] lg:max-w-[880px] px-4"
              aria-label="Scalezix Home"
            >
              {/* Light Mode Official Logo */}
              <Image
                src="/scalezix-logo-transparent-dark.png"
                alt="Scalezix"
                width={880}
                height={220}
                className="w-full h-auto object-contain dark:hidden transition-opacity duration-300 opacity-90 hover:opacity-100"
                priority
              />
              {/* Dark Mode Official Logo */}
              <Image
                src="/scalezix-logo-transparent-white.png"
                alt="Scalezix"
                width={880}
                height={220}
                className="w-full h-auto object-contain hidden dark:block transition-opacity duration-300 opacity-90 hover:opacity-100 drop-shadow-[0_0_35px_rgba(71,59,253,0.4)]"
                priority
              />
            </Link>

            <p className="relative z-10 mt-5 text-[11px] sm:text-xs font-mono tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400 font-semibold">
              Scale Smarter with AI Automation & Autonomous Workforce Systems
            </p>
          </div>

        </div>
      </div>

      {/* 6. Divider Line */}
      <div className="h-px bg-slate-200 dark:border-white/10" />

      {/* 7. Bottom Row: Ask AI, Socials & Legal */}
      <div className="mx-auto w-full max-w-[1232px] px-6 md:px-12 xl:px-0 relative z-10">
        <div className="pt-8 lg:pt-[36px] pb-10 lg:pb-[32px] xl:px-16">
          
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate-500 dark:text-[#7A7F87] font-semibold">
            Ask AI about Scalezix
          </p>

          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* AI Model Trigger Icons */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* 1. ChatGPT */}
              <a
                href={`https://chatgpt.com/?q=${aiPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask ChatGPT about Scalezix"
                className="group p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-[#473BFD] dark:hover:border-white/30 transition-all duration-200 hover:scale-105 shadow-2xs"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.1458-1.7891l2.5475-1.4725 2.5475 1.4725v2.9357l-2.5475 1.4725-2.5475-1.4725z"/>
                </svg>
              </a>

              {/* 2. Claude */}
              <a
                href={`https://claude.ai/new?q=${aiPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask Claude about Scalezix"
                className="group p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-[#473BFD] dark:hover:border-white/30 transition-all duration-200 hover:scale-105 shadow-2xs"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.444 14.562l4.793 5.438h-4.228l-3.32-4.041-3.32 4.041H7.141l4.793-5.438L7.42 8.78h4.228l3.052 3.805 3.052-3.805h4.228l-4.536 5.782zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
              </a>

              {/* 3. Perplexity */}
              <a
                href={`https://www.perplexity.ai/search?q=${aiPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask Perplexity about Scalezix"
                className="group p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-[#473BFD] dark:hover:border-white/30 transition-all duration-200 hover:scale-105 shadow-2xs"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L9 9H2l6 4.5L5.5 21 12 16.5 18.5 21 16 13.5 22 9h-7L12 2z"/>
                </svg>
              </a>

              {/* 4. Gemini */}
              <a
                href={`https://gemini.google.com/app?q=${aiPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask Google Gemini about Scalezix"
                className="group p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-[#473BFD] dark:hover:border-white/30 transition-all duration-200 hover:scale-105 shadow-2xs"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24Z"/>
                </svg>
              </a>
            </div>

            {/* Social, Legal & Sitemap Links */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-mono text-slate-600 dark:text-[#9a9a9a]">
              <span className="uppercase tracking-[0.06em] text-slate-400 dark:text-[#656A72] text-[11px] font-bold">
                Stay connected
              </span>
              <a
                href="https://linkedin.com/company/scalezix"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#473BFD] dark:hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/scalezix"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#473BFD] dark:hover:text-white"
              >
                Instagram
              </a>
              <Link href={contactInfo.whatsappHref} className="transition hover:text-[#473BFD] dark:hover:text-white">
                WhatsApp
              </Link>
              <Link href="/sitemap.xml" className="transition hover:text-[#473BFD] dark:hover:text-white font-medium">
                Sitemap.xml
              </Link>
              <Link href="/privacy" className="transition hover:text-[#473BFD] dark:hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-[#473BFD] dark:hover:text-white">
                Terms
              </Link>
            </div>

          </div>

          <p className="mt-8 lg:mt-[36px] text-[12px] text-slate-500 dark:text-white/40 font-mono">
            Scalezix 2026. All Rights Reserved
          </p>

        </div>
      </div>
    </footer>
  );
}
