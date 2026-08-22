"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageSquare, X, Send, Sparkles, PhoneCall, CheckCircle2, ChevronRight } from "lucide-react";
import { companyInfo } from "@/content/prd-site";

export function FloatingWhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const quickPrompts = [
    {
      title: "WhatsApp AI (from ₹3k/mo)",
      desc: "Get pilot onboarding & feature demo",
      msg: "Hi Scalezix! I want to deploy the WhatsApp AI engine (₹3,000/mo plan) for my business. Please share pilot details.",
    },
    {
      title: "Custom AI Agents & CRM",
      desc: "Discuss workflow automation & architecture",
      msg: "Hi Scalezix! I want to automate my sales CRM and operations workflows with custom AI agents. Let's talk.",
    },
    {
      title: "Book Strategy Audit",
      desc: "Map your top 3 automation opportunities",
      msg: "Hi Scalezix! I'd like to book a free 30-minute AI strategy audit call with an operations engineer.",
    },
  ];

  const handleSendPrompt = (promptText: string) => {
    const url = `https://wa.me/918200010241?text=${encodeURIComponent(promptText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    handleSendPrompt(customMsg);
    setCustomMsg("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Popup Window */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#121316] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#473BFD] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Image
                    src="/scalezix-logo-transparent-white.png"
                    alt="Scalezix"
                    width={40}
                    height={40}
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#473BFD]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight flex items-center gap-1.5">
                  Scalezix Operations Pod
                </h4>
                <p className="text-[11px] text-white/80 flex items-center gap-1 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Typically replies in &lt; 5 mins
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 hover:bg-white/15 text-white/80 hover:text-white transition"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 dark:bg-[#0E0F12] flex flex-col gap-3">
            <div className="bg-white dark:bg-[#181A1F] rounded-2xl p-3.5 border border-slate-200 dark:border-white/10 shadow-xs">
              <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                👋 Hello! How can we help automate your business operations today?
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold px-1">
                Instant Options
              </span>
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt.title}
                  type="button"
                  onClick={() => handleSendPrompt(prompt.msg)}
                  className="flex items-center justify-between text-left p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#181A1F] hover:border-[#473BFD] dark:hover:border-[#D3FDB1]/50 hover:bg-slate-50 dark:hover:bg-white/5 transition group"
                >
                  <div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-white group-hover:text-[#473BFD] dark:group-hover:text-[#D3FDB1] transition-colors">
                      {prompt.title}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {prompt.desc}
                    </p>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>

            {/* Custom Input Form */}
            <form onSubmit={handleCustomSend} className="mt-2 pt-2 border-t border-slate-200 dark:border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white dark:bg-[#181A1F] border border-slate-200 dark:border-white/10 rounded-full px-4 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#473BFD]"
              />
              <button
                type="submit"
                className="h-8 w-8 shrink-0 rounded-full bg-[#473BFD] text-white flex items-center justify-center hover:bg-[#756CFE] transition"
                aria-label="Send WhatsApp message"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Open WhatsApp Chat"
      >
        <div className="relative">
          <MessageSquare className="h-5 w-5 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
        </div>
        <span className="font-semibold text-xs pr-1 hidden sm:inline">
          {isOpen ? "Close" : "Chat with Us"}
        </span>
      </button>
    </div>
  );
}
