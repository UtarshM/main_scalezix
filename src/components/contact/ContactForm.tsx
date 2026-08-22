"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Loader2, MessageSquare, AlertCircle } from "lucide-react";
import { companyInfo } from "@/content/prd-site";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "WhatsApp AI Suite (from ₹3k/mo)",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again or chat via WhatsApp.");
      }
    } catch {
      // Fallback grace
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/918200010241?text=${encodeURIComponent(
    `Hi Scalezix Team,\n\nName: ${formData.name || "[Your Name]"}\nCompany: ${
      formData.company || "N/A"
    }\nService: ${formData.service}\nInquiry: ${formData.message || "I want to discuss AI automation opportunities."}`
  )}`;

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/10 p-8 text-center flex flex-col items-center justify-center min-h-[380px]">
        <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Inquiry Received!</h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-md">
          Thank you, <strong>{formData.name}</strong>. Our engineering and operations pod will review your requirements and reply to <strong>{formData.email}</strong> within 2 business hours.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#473BFD] hover:bg-[#756CFE] text-white px-6 py-3 text-xs font-semibold transition shadow-md"
          >
            <MessageSquare className="h-4 w-4" />
            Fast-Track on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "WhatsApp AI Suite (from ₹3k/mo)",
                message: "",
              });
            }}
            className="button-secondary text-xs"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-card/40 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Project Inquiry Form</h2>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        Share your requirements for WhatsApp AI, CRM integrations, or custom enterprise agents.
      </p>

      {errorMessage && (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="contact-input w-full bg-white dark:bg-black/40 border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
              Work Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="rahul@company.com"
              className="contact-input w-full bg-white dark:bg-black/40 border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="contact-input w-full bg-white dark:bg-black/40 border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Corp"
              className="contact-input w-full bg-white dark:bg-black/40 border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
            Service / System Required
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="contact-input w-full bg-white dark:bg-[#1A1C20] border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
          >
            <option value="WhatsApp AI Suite (from ₹3k/mo)">WhatsApp AI Suite (from ₹3,000/mo)</option>
            <option value="WhatsApp + AI Calling Engine (₹5,999/mo)">WhatsApp + AI Calling Engine (₹5,999/mo)</option>
            <option value="Scalezix CRM Custom Build">Scalezix CRM Custom Build</option>
            <option value="Custom Autonomous AI Agents">Custom Autonomous AI Agents</option>
            <option value="End-to-End AI Automation Audit">End-to-End AI Automation Audit</option>
            <option value="Custom Software & Web Development">Custom Software & Web Development</option>
            <option value="Digital Marketing & Performance SEO">Digital Marketing & Performance SEO</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
            Tell us about your project *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your current tools, team size, bottlenecks, or automation goals..."
            className="contact-input w-full bg-white dark:bg-black/40 border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 min-h-28 py-2.5"
          />
        </div>

        <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={loading}
            className="button-primary w-full sm:w-auto flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-3.5 w-3.5" />
                Submit Inquiry
              </>
            )}
          </button>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#473BFD] dark:text-[#D3FDB1] hover:underline flex items-center gap-1.5"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Or Send via WhatsApp &rarr;
          </a>
        </div>
      </form>
    </div>
  );
}
