"use client";

import { useState, useRef, useEffect } from "react";
import { Check, AlertCircle, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

// Personal email domains to block
const BLOCKED_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.in", "yahoo.co.uk",
  "hotmail.com", "hotmail.co.uk", "hotmail.in", "outlook.com", "live.com",
  "icloud.com", "me.com", "mac.com", "aol.com", "protonmail.com", "proton.me",
  "tutanota.com", "tutamail.com", "zohomail.com", "yandex.com", "yandex.ru",
  "mail.com", "gmx.com", "gmx.net", "rediffmail.com"
]);

// Helper to check if email is corporate/work email
function isWorkEmail(email: string): boolean {
  if (!email || !email.includes("@")) return false;
  const domain = email.split("@")[1]?.toLowerCase();
  return !!domain && !BLOCKED_DOMAINS.has(domain);
}

interface DeptScore {
  name: string;
  score: number;
  status: string;
  statusColor: string;
}

export function AIOpportunityCalculator() {
  const [formData, setFormData] = useState({
    email: "",
    website: "",
    role: "",
    lookingFor: [] as string[],
    companySize: "",
    timeline: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Default state before calculation
  const [deptScores, setDeptScores] = useState<DeptScore[]>([
    { name: "Marketing & Ads", score: 72, status: "ACTIVATE NOW", statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5" },
    { name: "Sales Outreach", score: 61, status: "ACTIVATE NOW", statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5" },
    { name: "Customer Operations", score: 55, status: "MONITOR", statusColor: "text-amber-400 border-amber-400/30 bg-amber-400/5" },
    { name: "Finance & Analytics", score: 48, status: "MONITOR", statusColor: "text-amber-400 border-amber-400/30 bg-amber-400/5" },
    { name: "Operations & HR", score: 39, status: "BUILD REQUIRED", statusColor: "text-[#1f77ff] border-[#1f77ff]/30 bg-[#1f77ff]/5" }
  ]);

  const [roiEstimate, setRoiEstimate] = useState("Rs. 3.2 Crore");
  const [overallScore, setOverallScore] = useState(55);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "email") setErrorMsg("");
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => {
      const selected = prev.lookingFor.includes(option)
        ? prev.lookingFor.filter(o => o !== option)
        : [...prev.lookingFor, option];
      return { ...prev, lookingFor: selected };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!isWorkEmail(formData.email)) {
      setErrorMsg("Please use your work email address (personal domains like Gmail are blocked).");
      return;
    }

    if (formData.lookingFor.length === 0) {
      setErrorMsg("Please select at least one capability you are looking for.");
      return;
    }

    setLoading(true);

    // Dynamic ROI calculations based on company size
    setTimeout(async () => {
      let roi = "Rs. 65 Lakhs";
      let baseScore = 48;
      
      switch (formData.companySize) {
        case "1-99":
          roi = "Rs. 85 Lakhs - 1.5 Crore";
          baseScore = 52;
          break;
        case "100-499":
          roi = "Rs. 3 Crore - 5.5 Crore";
          baseScore = 64;
          break;
        case "500-999":
          roi = "Rs. 8 Crore - 14 Crore";
          baseScore = 72;
          break;
        case "1000+":
          roi = "Rs. 18 Crore - 32 Crore";
          baseScore = 81;
          break;
        default:
          roi = "Rs. 3.2 Crore";
          baseScore = 55;
      }

      // Generate dynamic department scores based on base score
      const newScores = [
        {
          name: "Marketing & Ads",
          score: Math.min(95, Math.max(30, baseScore + Math.floor(Math.random() * 15) - 5)),
          status: "",
          statusColor: ""
        },
        {
          name: "Sales Outreach",
          score: Math.min(95, Math.max(30, baseScore + Math.floor(Math.random() * 15) - 8)),
          status: "",
          statusColor: ""
        },
        {
          name: "Customer Operations",
          score: Math.min(95, Math.max(30, baseScore + Math.floor(Math.random() * 15) - 10)),
          status: "",
          statusColor: ""
        },
        {
          name: "Finance & Analytics",
          score: Math.min(95, Math.max(30, baseScore + Math.floor(Math.random() * 15) - 12)),
          status: "",
          statusColor: ""
        },
        {
          name: "Operations & HR",
          score: Math.min(95, Math.max(30, baseScore + Math.floor(Math.random() * 15) - 15)),
          status: "",
          statusColor: ""
        }
      ].map(dept => {
        if (dept.score >= 70) {
          return {
            ...dept,
            status: "ACTIVATE NOW",
            statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5"
          };
        } else if (dept.score >= 50) {
          return {
            ...dept,
            status: "MONITOR",
            statusColor: "text-amber-400 border-amber-400/30 bg-amber-400/5"
          };
        } else {
          return {
            ...dept,
            status: "BUILD REQUIRED",
            statusColor: "text-[#1f77ff] border-[#1f77ff]/30 bg-[#1f77ff]/5"
          };
        }
      });

      setDeptScores(newScores);
      setRoiEstimate(roi);
      setOverallScore(baseScore);

      // Attempt to hit altrdtech webhook, fallback silently if fails
      try {
        await fetch("https://hook.eu1.make.com/lk8i0qqacl8ft90yetc6du2tut3szak7", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            lookingFor: formData.lookingFor.join(", "),
            overallScore: baseScore,
            roiEstimate: roi,
            source: "Scalezix Calculator",
            submittedAt: new Date().toISOString()
          })
        });
      } catch (err) {
        console.warn("Webhook submit failed (ignored for dev):", err);
      }

      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-20">
      {/* Left side: Visual Scoreboard Card */}
      <div className="lg:col-span-6 flex flex-col gap-4">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-card/40 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full bg-[#1f77ff] animate-pulse shadow-[0_0_8px_#1f77ff]" />
              <span className="font-mono text-[10px] text-slate-500 dark:text-muted-foreground uppercase tracking-widest">
                AI Opportunity Index Preview
              </span>
            </div>
            <span className="font-mono text-[9px] text-[#1f77ff] border border-[#1f77ff]/20 bg-[#1f77ff]/5 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Simulation
            </span>
          </div>

          {/* Overall Score */}
          <div className="px-6 py-6 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] text-slate-500 dark:text-muted-foreground uppercase tracking-wider mb-1">
                Overall Automation Score
              </p>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                {overallScore}%
              </h3>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-mono text-[10px] text-slate-500 dark:text-muted-foreground uppercase tracking-wider mb-1">
                Maturity Tier
              </span>
              <span className="font-semibold text-xs tracking-wide text-slate-700 dark:text-slate-300">
                {overallScore >= 70 ? "AI-Integrated" : overallScore >= 50 ? "AI-Active" : "AI-Aware"}
              </span>
            </div>
          </div>

          {/* Department Breakdown */}
          <div className="px-6 py-6 flex flex-col gap-4">
            <p className="font-mono text-[9px] text-slate-500 dark:text-muted-foreground uppercase tracking-widest">
              Department Breakdown & Status
            </p>

            <div className="flex flex-col gap-3.5">
              {deptScores.map((dept, idx) => {
                const colorHex = dept.score >= 70
                  ? "hsl(142, 71%, 45%)"
                  : dept.score >= 50
                    ? "hsl(43, 96%, 56%)"
                    : "#1f77ff";

                return (
                  <div key={idx} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                    <span className="font-mono text-[11px] text-slate-600 dark:text-muted-foreground w-36 flex-shrink-0 truncate">
                      {dept.name}
                    </span>
                    
                    {/* Progress Bar Container */}
                    <div className="relative h-2 rounded-full flex-1 bg-black/5 dark:bg-white/5 overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${dept.score}%`,
                          backgroundColor: colorHex,
                          boxShadow: `0 0 10px ${colorHex}50`
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0 min-w-[130px] mt-1 sm:mt-0">
                      <span className="font-mono text-[11px] font-bold" style={{ color: colorHex }}>
                        {dept.score}%
                      </span>
                      <span className={cn("font-mono text-[8px] tracking-wider px-2 py-0.5 rounded border flex-shrink-0", dept.statusColor)}>
                        {dept.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Estimated Value Unlocked */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-black/40 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-mono text-[10px] text-slate-500 dark:text-muted-foreground">
              Estimated annual value unlocked through AI:
            </span>
            <span className="font-mono text-sm font-bold text-[#1f77ff] dark:text-[#00f5ff] flex items-center gap-1.5 animate-pulse">
              <TrendingUp className="h-4 w-4 shrink-0" />
              {roiEstimate}
            </span>
          </div>

        </div>
      </div>

      {/* Right side: Interactive Audit Form */}
      <div className="lg:col-span-6">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-card/20 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#1f77ff]/5 blur-2xl pointer-events-none" />

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 flex-1 gap-6">
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.2)]">
                <Check className="h-8 w-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Audit Simulation Complete
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Your custom AI Opportunity roadmap has been calculated. We have sent a detailed breakdown to <strong className="text-slate-800 dark:text-slate-200">{formData.email}</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-mono text-[#1f77ff] hover:underline flex items-center gap-1"
              >
                Run another diagnosis
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#1f77ff]">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Instant Assessment
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Calculate Your AI ROI
                </h3>
                <p className="text-xs text-slate-500 dark:text-muted-foreground">
                  Find out how much manual operational work can be automated and what your estimated annual returns could look like.
                </p>
              </div>

              {errorMsg && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3 flex items-start gap-2.5 text-xs text-red-500">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex flex-col gap-4">
                {/* Inputs Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Work Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black/5 dark:bg-black/25 border border-black/10 dark:border-white/10 rounded-md px-3.5 py-2.5 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-muted-foreground focus:outline-none focus:border-[#1f77ff] transition-colors"
                  />
                  <input
                    type="url"
                    name="website"
                    required
                    placeholder="Company Website URL"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full bg-black/5 dark:bg-black/25 border border-black/10 dark:border-white/10 rounded-md px-3.5 py-2.5 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-muted-foreground focus:outline-none focus:border-[#1f77ff] transition-colors"
                  />
                </div>

                {/* Dropdowns Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full bg-black/5 dark:bg-black/25 border border-black/10 dark:border-white/10 rounded-md px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#1f77ff] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="dark:bg-slate-900">Your Role</option>
                    <option value="Founder/CEO" className="dark:bg-slate-900 text-slate-800 dark:text-white">Founder/CEO</option>
                    <option value="CXO/Leadership" className="dark:bg-slate-900 text-slate-800 dark:text-white">CXO/Leadership</option>
                    <option value="Head of Department" className="dark:bg-slate-900 text-slate-800 dark:text-white">Head of Department</option>
                    <option value="Individual Contributor" className="dark:bg-slate-900 text-slate-800 dark:text-white">Individual Contributor</option>
                    <option value="Other" className="dark:bg-slate-900 text-slate-800 dark:text-white">Other</option>
                  </select>

                  <select
                    name="companySize"
                    required
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full bg-black/5 dark:bg-black/25 border border-black/10 dark:border-white/10 rounded-md px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#1f77ff] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="dark:bg-slate-900">Company Size</option>
                    <option value="1-99" className="dark:bg-slate-900 text-slate-800 dark:text-white">1-99 employees</option>
                    <option value="100-499" className="dark:bg-slate-900 text-slate-800 dark:text-white">100-499 employees</option>
                    <option value="500-999" className="dark:bg-slate-900 text-slate-800 dark:text-white">500-999 employees</option>
                    <option value="1000+" className="dark:bg-slate-900 text-slate-800 dark:text-white">1000+ employees</option>
                  </select>
                </div>

                <select
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full bg-black/5 dark:bg-black/25 border border-black/10 dark:border-white/10 rounded-md px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#1f77ff] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="dark:bg-slate-900">Automation Timeline</option>
                  <option value="Immediately (0–30 days)" className="dark:bg-slate-900 text-slate-800 dark:text-white">Immediately (0–30 days)</option>
                  <option value="1–3 months" className="dark:bg-slate-900 text-slate-800 dark:text-white">1–3 months</option>
                  <option value="Exploring / not sure yet" className="dark:bg-slate-900 text-slate-800 dark:text-white">Exploring / not sure yet</option>
                </select>

                {/* Multiselect Capabilities */}
                <div className="flex flex-col gap-2.5">
                  <label className="font-mono text-[9px] text-slate-500 dark:text-muted-foreground uppercase tracking-widest">
                    What are you looking to solve?
                  </label>
                  <div className="flex flex-col gap-2">
                    {[
                      "Assess AI readiness across teams and roles",
                      "Workforce training to use AI effectively in daily work",
                      "Redesign workflows using AI & APIs",
                      "Deploy custom AI agents internally",
                      "Explore customer-facing AI solutions"
                    ].map((option, idx) => {
                      const isSelected = formData.lookingFor.includes(option);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleCheckboxChange(option)}
                          className={cn(
                            "w-full text-left px-3.5 py-2.5 rounded-lg border text-[11px] leading-relaxed transition-all flex items-center justify-between gap-3 bg-black/5 dark:bg-[#05121b]/40 border-black/10 dark:border-white/5",
                            isSelected
                              ? "border-[#1f77ff] text-[#1f77ff] bg-[#1f77ff]/5 font-semibold"
                              : "text-slate-700 dark:text-slate-300 hover:border-black/20 dark:hover:border-white/10"
                          )}
                        >
                          <span>{option}</span>
                          <span className={cn(
                            "w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-colors duration-150",
                            isSelected
                              ? "border-[#1f77ff] bg-[#1f77ff] text-white"
                              : "border-black/20 dark:border-white/20"
                          )}>
                            {isSelected && <Check className="w-2.5 h-2.5" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1f77ff] hover:bg-[#146df7] dark:hover:brightness-110 text-white font-semibold px-4 py-3 rounded-full transition-all text-xs flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(31,119,255,0.25)]"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Calculating Roadmap...
                  </>
                ) : (
                  <>
                    Run the AI Opportunity Audit
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Secure indicator */}
          <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-center gap-2 text-[10px] text-slate-400 dark:text-muted-foreground font-mono">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
            <span>GDPR compliant. Work emails strictly validated.</span>
          </div>

        </div>
      </div>
    </div>
  );
}
