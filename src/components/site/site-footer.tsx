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
            <div className="flex items-center gap-3 sm:gap-4">
              {/* 1. ChatGPT */}
              <a
                href={`https://chatgpt.com/?q=${aiPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask ChatGPT about Scalezix"
                title="Ask ChatGPT about Scalezix"
                className="group h-11 w-11 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                </svg>
              </a>

              {/* 2. Claude */}
              <a
                href={`https://claude.ai/new?q=${aiPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask Claude about Scalezix"
                title="Ask Claude about Scalezix"
                className="group h-11 w-11 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-[#D97757]/40 dark:hover:border-[#D97757]/40 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-[#D97757] transition-colors" viewBox="0 0 16 16" fill="currentColor">
                  <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/>
                </svg>
              </a>

              {/* 3. Perplexity */}
              <a
                href={`https://www.perplexity.ai/search?q=${aiPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask Perplexity about Scalezix"
                title="Ask Perplexity about Scalezix"
                className="group h-11 w-11 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"/>
                </svg>
              </a>

              {/* 4. Gemini */}
              <a
                href={`https://gemini.google.com/app?q=${aiPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask Google Gemini about Scalezix"
                title="Ask Google Gemini about Scalezix"
                className="group h-11 w-11 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-purple-500/40 dark:hover:border-purple-400/40 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
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
