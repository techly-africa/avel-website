import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real-world engagements from AVEL Africa. See how we have delivered institutional-grade digital engineering, disaster recovery, product architecture, and forensics for clients across Africa.",
  openGraph: {
    title: "Case Studies | AVEL Africa",
    description:
      "Real-world engagements from AVEL Africa — disaster recovery, product architecture, forensics, and institutional digital engineering across Africa.",
    url: "https://avel.africa/case-studies",
  },
  alternates: { canonical: "https://avel.africa/case-studies" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
