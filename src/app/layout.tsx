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
  title: "AVEL Africa | Clarity-first Technology Delivery",
  description: "Clarity-first technology delivery for regulated and high-trust ecosystems. AVEL Africa helps organizations ship secure, compliant digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BookingModal />
        <CookieConsent />
      </body>
    </html>
  );
}
