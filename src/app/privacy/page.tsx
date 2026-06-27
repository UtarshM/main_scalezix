import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Scalezix",
  description: "Read the Scalezix privacy policy covering visitor data, inquiry handling, and website usage information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="section-shell py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="section-kicker w-fit">Privacy</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-300">
          This page can be replaced with finalized legal copy. It should describe how Scalezix
          collects, stores, and uses visitor and lead data.
        </p>
      </div>
    </main>
  );
}
