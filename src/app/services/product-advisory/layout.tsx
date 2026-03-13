import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Advisory",
  description:
    "Institutional-grade product architecture and engineering advisory. We design and deliver digital systems that carry the weight of enterprise, government, and regulated industry requirements across Africa.",
  keywords: [
    "product advisory Africa",
    "software architecture consulting",
    "digital product engineering Africa",
    "institutional product development",
    "technology advisory Rwanda",
  ],
  openGraph: {
    title: "Product Advisory | AVEL Africa",
    description:
      "Institutional-grade product architecture and engineering advisory. We design and deliver digital systems that carry the weight of enterprise and government requirements.",
    url: "https://avel.africa/services/product-advisory",
  },
  alternates: { canonical: "https://avel.africa/services/product-advisory" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
