import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built for the rooms where failure is not an option. Learn about AVEL Africa's origin, engineering philosophy, and the principles guiding institutional digital work across the continent.",
  openGraph: {
    title: "About AVEL Africa",
    description:
      "Built for the rooms where failure is not an option. Learn about AVEL Africa's origin, engineering philosophy, and the principles guiding institutional digital work across the continent.",
    url: "https://avel.africa/about",
  },
  alternates: { canonical: "https://avel.africa/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
