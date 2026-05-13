"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, XIcon, ArrowUpRight } from "lucide-react";
import AvelLogo from "@/components/ui/AvelLogo";

const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "AVEL Flow", href: "/products/flow" },
            { name: "AVEL Entity", href: "/products/entity" },
            { name: "AVEL Core", href: "/products/core" },
        ],
    },
    {
        title: "Developers",
        links: [
            { name: "Documentation", href: "/developers" },
            { name: "API Reference", href: "/developers/api" },
            { name: "SDKs", href: "/developers/sdks" },
            { name: "System Status", href: "/status" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Case Studies", href: "/case-studies" },
            { name: "Legal", href: "/privacy" },
        ],
    },
];

export default function Footer() {
    const intro = "The foundational data and infrastructure layer for African businesses. Built in Kigali, Rwanda.";
    const location = "Kigali, Rwanda";
    const email = "contact@avel.africa";

    return (
        <footer className="grow-0 bg-off-white border-t border-charcoal/5 pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                    {/* Logo & Intro */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-8">
                            <AvelLogo variant="full" size={32} className="h-10" />
                        </Link>
                        <p className="text-charcoal/60 text-lg leading-relaxed mb-10 max-w-sm font-medium">
                            {intro}
                        </p>
                        <div className="flex space-x-6">
                            <Link href="https://www.linkedin.com/company/112191029/" target="_blank" rel="noopener noreferrer" className="text-charcoal/40 hover:text-orange transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                            </Link>
                            <Link href="https://x.com/AvelAfrica" target="_blank" rel="noopener noreferrer" className="text-charcoal/40 hover:text-orange transition-colors">
                                <XIcon size={24} />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.3em] mb-10">
                                {section.title}
                            </h4>
                            <ul className="space-y-6">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-charcoal/50 text-sm font-bold hover:text-orange transition-colors flex items-center group uppercase tracking-wider"
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
                <div className="pt-12 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 text-xs font-bold uppercase tracking-widest text-charcoal/40">
                        <div className="flex items-center">
                            <MapPin size={14} className="mr-3 text-orange" />
                            {location}
                        </div>
                        <div className="flex items-center">
                            <Mail size={14} className="mr-3 text-orange" />
                            {email}
                        </div>
                        <div className="flex items-center">
                            <Phone size={14} className="mr-3 text-orange" />
                            <a href="tel:+250799903601" className="hover:text-charcoal transition-colors">+250 799 903 601</a>
                        </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/30">
                        © {new Date().getFullYear()} AVEL Africa. Infrastructure for the continent.
                    </p>
                </div>
            </div>
        </footer>
    );
}


