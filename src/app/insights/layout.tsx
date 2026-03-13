import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical and strategic perspectives on institutional digital engineering, GRC compliance, product architecture, and digital sovereignty across Africa. Case studies, whitepapers, and industry analysis.",
  openGraph: {
    title: "Insights | AVEL Africa",
    description:
      "Technical and strategic perspectives on institutional digital engineering, GRC compliance, product architecture, and digital sovereignty across Africa.",
    url: "https://avel.africa/insights",
  },
  alternates: { canonical: "https://avel.africa/insights" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
