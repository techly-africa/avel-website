"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, XIcon, ArrowUpRight } from "lucide-react";

const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Product Development", href: "/services/product-advisory" },
            { name: "GRC & Security", href: "/services/grc-security" },
            { name: "Digital Forensics", href: "/services/forensics-sovereignty" },
            { name: "Digital Sovereignty", href: "/services/forensics-sovereignty" },
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
    const [config, setConfig] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchConfig = async () => {
            try {
                const { contentService } = await import("@/services/contentService");
                const data = await contentService.getContent('footer_config');
                if (data) setConfig(data.data);
            } catch (error) {
                console.error("Footer Fetch Error:", error);
            }
        };
        fetchConfig();
    }, []);

    const intro = config?.intro || "Engineering Digital Resilience & Sovereignty. Trusted advisory for institutional excellence and technical integrity across Africa.";
    const location = config?.location || "Kigali, Rwanda";
    const email = config?.email || "contact@avel.africa";

    return (
        <footer className="grow-0 bg-midnight border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Logo & Intro */}
                    <div className="lg:col-span-2 pr-0 lg:pr-20">
                        <Link href="/" className="inline-block mb-8">
                            <img
                                src="/avel_africa_logo_transparent.png"
                                alt="AVEL Logo"
                                className="h-14 object-contain invert"
                            />
                        </Link>
                        <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">
                            {intro}
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.linkedin.com/company/112191029/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                            </Link>
                            <Link href="https://x.com/AvelAfrica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all">
                                <XIcon size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/40 text-sm hover:text-gold-accent transition-colors flex items-center group"
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
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-white/30">
                        <div className="flex items-center">
                            <MapPin size={14} className="mr-2" />
                            {location}
                        </div>
                        <div className="flex items-center">
                            <Mail size={14} className="mr-2" />
                            {email}
                        </div>
                        <div className="flex items-center">
                            <Phone size={14} className="mr-2" />
                            <a href="tel:+250799904601" className="hover:text-white transition-colors">+250 799 904 601</a>
                        </div>
                    </div>
                    <p className="text-sm text-white/30 text-center">
                        © {new Date().getFullYear()} AVEL Africa. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

