import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/modals/BookingModal";
import CookieConsent from "@/components/layout/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avel.africa"),
  title: {
    default: "AVEL Africa — Building the Infrastructure for African Reality",
    template: "%s | AVEL Africa",
  },
  description:
    "We are building the infrastructure layer African businesses have been waiting for. Payments intelligence, business identity, and connectivity — built for African reality.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "African infrastructure",
    "business identity",
    "payments intelligence",
    "Kigali technology",
    "AVEL Africa",
    "data layer Africa",
  ],
  authors: [{ name: "AVEL Africa", url: "https://avel.africa" }],
  creator: "AVEL Africa",
  publisher: "AVEL Africa",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avel.africa",
    siteName: "AVEL Africa",
    title: "AVEL Africa — Building the Infrastructure for African Reality",
    description:
      "We are building the infrastructure layer African businesses have been waiting for. Payments intelligence, business identity, and connectivity — built from Kigali, Rwanda.",
    images: [
      {
        url: "/avel_africa_horizontal.png",
        width: 1200,
        height: 630,
        alt: "AVEL Africa — Building Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AvelAfrica",
    creator: "@AvelAfrica",
    title: "AVEL Africa — Building Infrastructure",
    description:
      "We are building the infrastructure layer African businesses have been waiting for.",
    images: ["/avel_africa_horizontal.png"],
  },
  alternates: {
    canonical: "https://avel.africa",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AVEL Africa",
  url: "https://avel.africa",
  logo: "https://avel.africa/avel_logo.png",
  description:
    "AVEL Africa is a team of builders and integrators creating the foundational infrastructure layer for African businesses.",
  foundingLocation: { "@type": "Place", name: "Kigali, Rwanda" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+250799903601",
    email: "contact@avel.africa",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.linkedin.com/company/112191029/",
    "https://x.com/AvelAfrica",
  ],
  areaServed: "Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <main>{children}</main>
        <BookingModal />
        <CookieConsent />
      </body>
    </html>
  );
}
