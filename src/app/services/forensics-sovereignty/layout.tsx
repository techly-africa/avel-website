import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Forensics & Sovereignty",
  description:
    "Expert digital forensics investigation and data sovereignty advisory. Incident response, secure architecture audits, and data asset sovereignty for governments, financial institutions, and enterprise across Africa.",
  keywords: [
    "digital forensics Africa",
    "digital sovereignty advisory",
    "incident response Africa",
    "data sovereignty consulting",
    "forensics investigation Rwanda",
    "cybersecurity forensics Africa",
    "data sovereignty Africa",
  ],
  openGraph: {
    title: "Digital Forensics & Sovereignty | AVEL Africa",
    description:
      "Expert digital forensics investigation and data sovereignty advisory for governments, financial institutions, and enterprise across Africa.",
    url: "https://avel.africa/services/forensics-sovereignty",
  },
  alternates: { canonical: "https://avel.africa/services/forensics-sovereignty" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
