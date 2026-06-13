import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/layout/CookieConsent";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avel.africa"),
  title: {
    default: "AVEL — Sovereign infrastructure for African businesses",
    template: "%s | AVEL",
  },
  description:
    "Compute, communication, records, and identity — owned in Africa, hosted in Africa, built for African businesses.",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "772x611",
      },
    ],
  },
  keywords: [
    "Sovereign infrastructure",
    "African cloud hosting",
    "business email Africa",
    "document management Africa",
    "business identity Africa",
    "Kigali technology",
    "AVEL Africa",
    "AvelCloud",
    "AvelMail",
  ],
  authors: [{ name: "AVEL", url: "https://avel.africa" }],
  creator: "AVEL",
  publisher: "AVEL",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avel.africa",
    siteName: "AVEL",
    title: "AVEL — Sovereign infrastructure for African businesses",
    description:
      "Compute, communication, records, and identity — owned in Africa, hosted in Africa, built for African businesses.",
    images: [
      {
        url: "/avel-new.png",
        width: 2280,
        height: 873,
        alt: "AVEL — Sovereign Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AvelAfrica",
    creator: "@AvelAfrica",
    title: "AVEL — Sovereign Infrastructure",
    description:
      "Compute, communication, records, and identity — owned in Africa, hosted in Africa, built for African businesses.",
    images: ["/avel-new.png"],
  },
  alternates: {
    canonical: "https://avel.africa",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AVEL",
  url: "https://avel.africa",
  logo: "https://avel.africa/avel-new.png",
  description:
    "AVEL is building sovereign digital infrastructure for African businesses — compute, communication, records, and identity owned and hosted in Africa.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${bricolage.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-text-primary`}
        suppressHydrationWarning
      >
        <main>{children}</main>
        <CookieConsent />
      </body>
    </html>
  );
}
