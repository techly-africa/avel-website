import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GRC & Security Advisory",
  description:
    "Governance, Risk & Compliance advisory for African institutions. ISO 27001, NIST CSF, SOC 2, NDPR, and PCI-DSS alignment. Continuous compliance programmes for regulated industries.",
  keywords: [
    "GRC consulting Africa",
    "ISO 27001 Rwanda",
    "NIST compliance Africa",
    "SOC 2 advisory",
    "cybersecurity consulting Africa",
    "compliance advisory Rwanda",
    "NDPR compliance",
    "information security Africa",
  ],
  openGraph: {
    title: "GRC & Security Advisory | AVEL Africa",
    description:
      "Governance, Risk & Compliance advisory for African institutions. ISO 27001, NIST CSF, SOC 2, NDPR, and PCI-DSS alignment for regulated industries.",
    url: "https://avel.africa/services/grc-security",
  },
  alternates: { canonical: "https://avel.africa/services/grc-security" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
