import React from "react";
import Link from "next/link";
import { Mail, MapPin, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Risk Diagnosis", href: "/services#diagnosis" },
            { name: "Product Design", href: "/services#design" },
            { name: "GRC as a Service", href: "/grc" },
            { name: "API Engineering", href: "/services#engineering" },
        ],
    },
    {
        title: "Products",
        links: [
            { name: "AVEL Projects", href: "/products/avel-projects" },
            { name: "AVEL Varsity", href: "/products/avel-varsity" },
            { name: "RBI", href: "/products/rbi" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Case Studies", href: "/case-studies" },
            { name: "Insights", href: "/insights" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Logo & Intro */}
                    <div className="lg:col-span-2 pr-0 lg:pr-20">
                        <Link href="/" className="inline-block mb-8">
                            <img
                                src="/avel_africa_logo_transparent.png"
                                alt="AVEL Logo"
                                className="h-16 object-contain"
                            />
                        </Link>
                        <p className="text-midnight/60 text-base leading-relaxed mb-8 max-w-sm">
                            Clarity-first technology delivery for regulated and high-trust ecosystems.
                            Helping organizations ship secure, compliant digital products.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-midnight/40 hover:bg-electric-blue hover:text-white transition-all">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-midnight/40 hover:bg-electric-blue hover:text-white transition-all">
                                <Twitter size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-sm font-bold text-midnight uppercase tracking-wider mb-6">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-midnight/60 text-sm hover:text-electric-blue transition-colors flex items-center group"
                                        >
                                            {link.name}
                                            <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-midnight/40">
                        <div className="flex items-center">
                            <MapPin size={14} className="mr-2" />
                            Kigali, Rwanda
                        </div>
                        <div className="flex items-center">
                            <Mail size={14} className="mr-2" />
                            copain@avel.africa
                        </div>
                    </div>
                    <p className="text-sm text-midnight/40 text-center">
                        © {new Date().getFullYear()} AVEL Africa. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
