import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCertificateById, getAllCertificates } from "@/lib/certificates";
import { CertificateVerificationView } from "@/components/verification/certificate-verification-view";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  const certificates = getAllCertificates();
  return certificates.map((cert) => ({
    certificateId: cert.certificateId,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ certificateId: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const certificate = getCertificateById(resolvedParams.certificateId);

  if (!certificate) {
    return {
      title: "Certificate Not Found | Scalezix Verification",
      description: "No certificate matching this ID was found on Scalezix.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: `${certificate.studentName} - Certificate Verification | Scalezix`,
    description: `Verified Scalezix ${certificate.program} ${certificate.credential} for ${certificate.studentName}.`,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: absoluteUrl(`/verify/${certificate.certificateId}`),
    },
  };
}

export default async function DirectCertificateVerificationPage({
  params,
}: {
  params: Promise<{ certificateId: string }>;
}) {
  const resolvedParams = await params;
  const certificate = getCertificateById(resolvedParams.certificateId);

  return (
    <main className="section-shell py-16 md:py-24">
      {certificate && (
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "EducationalOccupationalCredential",
              name: `${certificate.program} ${certificate.credential}`,
              description: `Verified ${certificate.credential} issued by ${certificate.organization} to ${certificate.studentName}.`,
              credentialCategory: certificate.credential,
              identifier: certificate.certificateId,
              validFrom: certificate.issueDate,
              recognizedBy: {
                "@type": "Organization",
                name: certificate.organization,
                url: "https://scalezix.com",
              },
            },
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Verification", path: "/verify" },
              { name: certificate.certificateId, path: `/verify/${certificate.certificateId}` },
            ]),
          ]}
        />
      )}
      <CertificateVerificationView initialCertificateId={resolvedParams.certificateId} />
    </main>
  );
}
