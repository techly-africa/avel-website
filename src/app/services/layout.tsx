import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three strategic pillars for institutional resilience: Product Advisory, GRC & Security, and Digital Forensics & Sovereignty. Delivered with engineering precision across Africa.",
  openGraph: {
    title: "Services | AVEL Africa",
    description:
      "Three strategic pillars for institutional resilience: Product Advisory, GRC & Security, and Digital Forensics & Sovereignty. Delivered with engineering precision across Africa.",
    url: "https://avel.africa/services",
  },
  alternates: { canonical: "https://avel.africa/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
