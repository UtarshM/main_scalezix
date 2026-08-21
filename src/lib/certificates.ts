import certificatesData from "@/data/certificates.json";

export interface CertificateRecord {
  certificateId: string;
  studentName: string;
  program: string;
  credential: string;
  startDate: string;
  endDate: string;
  issueDate: string;
  organization: string;
  status: "valid" | "revoked" | string;
  pdf: string;
}

export function sanitizeCertificateId(rawId: string): string {
  if (!rawId) return "";
  // Strip control characters, spaces, and make uppercase
  // eslint-disable-next-line no-control-regex
  return rawId.trim().replace(/[\s\u0000-\u001F\u007F-\u009F]/g, "").toUpperCase();
}

export function getCertificateById(rawId: string): CertificateRecord | null {
  const sanitized = sanitizeCertificateId(rawId);
  if (!sanitized) return null;

  const found = (certificatesData as CertificateRecord[]).find(
    (cert) => cert.certificateId.toUpperCase() === sanitized
  );

  return found || null;
}

export function getAllCertificates(): CertificateRecord[] {
  return certificatesData as CertificateRecord[];
}
