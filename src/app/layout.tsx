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
    default: "AVEL Africa — Institutional Digital Engineering",
    template: "%s | AVEL Africa",
  },
  description:
    "AVEL Africa empowers Africa's most demanding institutions to embrace the AI era. Enterprise intelligence ecosystems (Anthropic, AWS, GCP) secured by institutional-grade governance.",
  keywords: [
    "Enterprise AI Africa",
    "AI Transformation Africa",
    "Anthropic partner Africa",
    "AWS AI integration",
    "GCP cloud intelligence",
    "institutional technology Africa",
    "GRC consulting Rwanda",
    "digital sovereignty",
    "cybersecurity advisory Africa",
    "Kigali technology firm",
    "AVEL Africa",
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
    title: "AVEL Africa — Institutional Digital Engineering",
    description:
      "AVEL Africa empowers Africa's most demanding institutions to embrace the AI era. Enterprise intelligence ecosystems (Anthropic, AWS, GCP) secured by institutional-grade governance.",
    images: [
      {
        url: "/avel_africa_horizontal.png",
        width: 1200,
        height: 630,
        alt: "AVEL Africa — Institutional Digital Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AvelAfrica",
    creator: "@AvelAfrica",
    title: "AVEL Africa — Institutional Digital Engineering",
    description:
      "AVEL Africa empowers Africa's most demanding institutions to embrace the AI era.",
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
  logo: "https://avel.africa/avel_africa_logo_transparent.png",
  description:
    "Institutional digital engineering firm providing AI transformation, product engineering, and GRC security advisory for Africa's most demanding institutions.",
  foundingLocation: { "@type": "Place", name: "Kigali, Rwanda" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+250799904601",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BookingModal />
        <CookieConsent />
      </body>
    </html>
  );
}
