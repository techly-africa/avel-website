import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Partnerships",
  description:
    "Join AVEL Africa or build alongside us. We are actively seeking technology partners, channel partners, GRC firms, and exceptional engineers aligned with our institutional mission.",
  openGraph: {
    title: "Careers & Partnerships | AVEL Africa",
    description:
      "Join AVEL Africa or build alongside us. We are actively seeking technology partners, channel partners, GRC firms, and exceptional engineers.",
    url: "https://avel.africa/careers",
  },
  alternates: { canonical: "https://avel.africa/careers" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
