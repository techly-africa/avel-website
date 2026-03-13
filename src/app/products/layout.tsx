import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Six institutional-grade products built internally and now available: Avel Commerce, AvelGRC, Avel Business Suite, AvelDocs, Avalid, and Avel Research. Built for us first — now open to you.",
  keywords: [
    "AvelGRC",
    "Avel Commerce",
    "AvelDocs",
    "Avalid",
    "Avel Research",
    "Avel Business Suite",
    "GRC software Africa",
    "compliance platform Africa",
    "institutional software Africa",
  ],
  openGraph: {
    title: "Products | AVEL Africa",
    description:
      "Six institutional-grade products built internally and now available: Avel Commerce, AvelGRC, Avel Business Suite, AvelDocs, Avalid, and Avel Research.",
    url: "https://avel.africa/products",
  },
  alternates: { canonical: "https://avel.africa/products" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
