import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach AVEL Africa for institutional digital advisory, product engineering, GRC consulting, and digital forensics engagements. Based in Kigali, Rwanda. Serving institutions across Africa.",
  openGraph: {
    title: "Contact AVEL Africa",
    description:
      "Reach AVEL Africa for institutional digital advisory, product engineering, GRC consulting, and digital forensics engagements. Kigali, Rwanda.",
    url: "https://avel.africa/contact",
  },
  alternates: { canonical: "https://avel.africa/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
