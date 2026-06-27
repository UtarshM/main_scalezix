import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Scalezix",
  description: "Read the Scalezix terms of service covering usage, project engagement, and service limitations.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="section-shell py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="section-kicker w-fit">Terms</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          Terms of Service
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-300">
          This page can be replaced with finalized legal terms covering usage, engagement
          conditions, and service limitations.
        </p>
      </div>
    </main>
  );
}
