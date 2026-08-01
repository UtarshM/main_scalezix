"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Search,
  ExternalLink,
  Download,
  ShieldCheck,
  Award,
  Calendar,
  Building2,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import {
  CertificateRecord,
  getCertificateById,
  sanitizeCertificateId,
} from "@/lib/certificates";

interface CertificateVerificationViewProps {
  initialCertificateId?: string;
}

export function CertificateVerificationView({
  initialCertificateId = "",
}: CertificateVerificationViewProps) {
  const router = useRouter();

  const [inputVal, setInputVal] = useState(initialCertificateId);
  const [searchedId, setSearchedId] = useState<string | null>(
    initialCertificateId ? sanitizeCertificateId(initialCertificateId) : null
  );
  const [certificate, setCertificate] = useState<CertificateRecord | null>(
    initialCertificateId ? getCertificateById(initialCertificateId) : null
  );
  const [hasSearched, setHasSearched] = useState(Boolean(initialCertificateId));

  useEffect(() => {
    if (initialCertificateId) {
      const sanitized = sanitizeCertificateId(initialCertificateId);
      setInputVal(sanitized);
      setSearchedId(sanitized);
      setCertificate(getCertificateById(sanitized));
      setHasSearched(true);
    }
  }, [initialCertificateId]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized = sanitizeCertificateId(inputVal);
    if (!sanitized) return;

    setSearchedId(sanitized);
    const result = getCertificateById(sanitized);
    setCertificate(result);
    setHasSearched(true);

    // Update URL quietly without full page reload for shareability
    if (result) {
      router.push(`/verify/${sanitized}`, { scroll: false });
    }
  };

  const handleResetSearch = () => {
    setInputVal("");
    setSearchedId(null);
    setCertificate(null);
    setHasSearched(false);
    router.push("/verify", { scroll: false });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Header section */}
      <div className="text-left space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 text-[#00f5ff] text-xs font-mono tracking-wider uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          Scalezix Credential Verification
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Certificate Verification
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
          Verify authentic internship certificates, software engineering credentials, and AI project completion certificates issued by Scalezix.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="mesh-card rounded-[1.8rem] p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#00f5ff]/5 blur-3xl pointer-events-none" />

        <form onSubmit={handleSearch} className="space-y-4">
          <label htmlFor="certificateIdInput" className="block text-sm font-medium text-slate-900 dark:text-white">
            Certificate ID
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                id="certificateIdInput"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="e.g. SZX-AIML-26-001 or SZX-FSD-26-001"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/50 text-slate-900 dark:text-white placeholder:text-slate-400 font-mono text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-[#00f5ff] transition-all"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            <button
              type="submit"
              className="button-primary px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium"
            >
              <span>Verify Certificate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Enter the unique Certificate ID printed on your official Scalezix certificate document.
          </p>
        </form>
      </div>

      {/* Verification Result Display */}
      {hasSearched && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-300">
          {certificate ? (
            certificate.status.toLowerCase() === "valid" ? (
              /* SUCCESSFUL VERIFICATION CARD */
              <div className="metal-panel rounded-[2rem] p-6 sm:p-8 md:p-10 border border-emerald-500/30 dark:border-emerald-500/30 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.03] space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

                {/* Badge Header */}
                <div className="flex flex-col items-center text-center space-y-3 pb-6 border-b border-black/5 dark:border-white/10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                    ✓ CERTIFICATE VERIFIED
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white pt-2">
                    {certificate.studentName}
                  </h2>
                  <div className="text-base sm:text-lg font-medium text-[#00f5ff]">
                    {certificate.program} &bull; {certificate.credential}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
                    This credential has been successfully verified as an official certificate issued by Scalezix Technologies.
                  </p>
                </div>

                {/* Grid details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
                  <div className="p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <Award className="w-4 h-4 text-[#00f5ff]" />
                      <span>Certificate ID</span>
                    </div>
                    <div className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                      {certificate.certificateId}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <Calendar className="w-4 h-4 text-[#00f5ff]" />
                      <span>Internship Period</span>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                      {certificate.startDate} – {certificate.endDate}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <Calendar className="w-4 h-4 text-[#00f5ff]" />
                      <span>Issue Date</span>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                      {certificate.issueDate}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <Building2 className="w-4 h-4 text-[#00f5ff]" />
                      <span>Status / Issuer</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <span>✓ VALID</span>
                      <span className="text-slate-400 font-normal">({certificate.organization})</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-black/5 dark:border-white/10">
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary w-full sm:w-auto px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Certificate</span>
                  </a>
                  <a
                    href={certificate.pdf}
                    download={`${certificate.certificateId}.pdf`}
                    className="button-secondary w-full sm:w-auto px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Certificate</span>
                  </a>
                </div>
              </div>
            ) : (
              /* REVOKED CERTIFICATE CARD */
              <div className="metal-panel rounded-[2rem] p-6 sm:p-8 text-center border border-amber-500/40 bg-amber-500/[0.03] space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <AlertTriangle className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
                    Certificate Record Found
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Status: REVOKED
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    This certificate (<span className="font-mono text-slate-900 dark:text-white">{certificate.certificateId}</span>) issued for <strong className="text-slate-900 dark:text-white">{certificate.studentName}</strong> is no longer considered a valid credential issued by Scalezix.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleResetSearch}
                  className="button-secondary px-5 py-2.5 rounded-xl inline-flex items-center gap-2 text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Verify Another Certificate</span>
                </button>
              </div>
            )
          ) : (
            /* NOT FOUND CARD */
            <div className="metal-panel rounded-[2rem] p-6 sm:p-8 md:p-10 text-center border border-rose-500/30 bg-rose-500/[0.02] space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500">
                <XCircle className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Certificate Not Found
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  We couldn&apos;t find an official certificate matching:
                </p>
                <div className="inline-block font-mono text-base font-semibold px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                  {searchedId || inputVal}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                  Please check the Certificate ID printed on the document and try again.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleResetSearch}
                  className="button-secondary px-6 py-3 rounded-xl inline-flex items-center gap-2 text-sm font-medium"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
