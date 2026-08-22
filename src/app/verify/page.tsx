import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CertificateVerificationView } from "@/components/verification/certificate-verification-view";

export const metadata: Metadata = buildMetadata({
  title: "Certificate Verification | Scalezix",
  description: "Verify internship certificates and credentials issued by Scalezix.",
  path: "/verify",
  keywords: [
    "Scalezix certificate verification",
    "verify Scalezix certificate",
    "internship certificate verification",
    "Scalezix credentials",
  ],
});

export default async function VerifyPage({
  searchParams,
}: {
  searchParams?: Promise<{ id?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const initialId = resolvedParams?.id || "";

  return (
    <main className="section-shell py-16 md:py-24">
      <CertificateVerificationView initialCertificateId={initialId} />
    </main>
  );
}
