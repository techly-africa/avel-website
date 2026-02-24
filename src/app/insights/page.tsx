"use client";

import { ArrowRight, BookOpen, Download, Calendar, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const articles = [
    {
        type: "Case Study",
        title: "Scaling Taste: Automated Loyalty & Ordering for Mukati na Butta",
        excerpt: "How we digitized Kigali's premier artisan bakery with a custom cake engine and tiered loyalty program.",
        date: "Feb 23, 2026",
        cta: "Read Story",
        href: "/insights/mukati-na-butta",
    },
    {
        type: "Case Study",
        title: "Rapid Disaster Recovery: Wildlife Tours Rwanda",
        excerpt: "How we deployed an interim online presence and recovered client data snapshots in under 48 hours following a total platform loss.",
        date: "Feb 24, 2026",
        cta: "Read Story",
        href: "/insights/wildlife-tours-rwanda-disaster-recovery",
    },
    {
        type: "Case Study",
        title: "Liquid Glass & Cinematic Legacy: The Ayubu Africa Digital Presence",
        excerpt: "How we translated a 20-year filmmaking legacy into a premium digital brand for East Africa's premier Director.",
        date: "Feb 23, 2026",
        cta: "Read Story",
        href: "/insights/ayubu-africa",
    },
    {
        type: "Whitepaper",
        title: "The Compliance Drift: Why Annual Audits are Failing African Fintechs",
        excerpt: "An analysis of the operational gaps that lead to regulatory friction and how continuous GRC can stabilize delivery.",
        date: "Feb 12, 2026",
        cta: "Read Report",
        href: "/insights/grc-maturity-report-2026",
    },
    {
        type: "Technical Article",
        title: "Multi-tenant IAM: Beyond Simple Role-Based Access Control",
        excerpt: "A deep dive into building verifiable identity systems for inter-agency and institutional commerce platforms.",
        date: "Jan 28, 2026",
        cta: "Read Article",
    },
    {
        type: "Industry Insights",
        title: "Regional Interoperability: The Future of Cross-Border Payments in EA",
        excerpt: "Exploring the technical and regulatory hurdles of real-time multi-currency settlement across East Africa.",
        date: "Jan 15, 2026",
        cta: "Read Article",
    },
];

export default function InsightsPage() {
    return (
        <div className="flex flex-col">
            <section className="pt-32 pb-20 px-6 bg-midnight text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Institutional <span className="text-electric-blue">intelligence.</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            Research, whitepapers, and technical deep-dives on the systems that power Africa's digital economy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Article Grid - Primary Feed */}
            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((art) => (
                            <Link
                                key={art.title}
                                href={art.href || "#"}
                                className={cn(
                                    "bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col h-full group",
                                    !art.href && "pointer-events-none"
                                )}
                            >
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-electric-blue bg-electric-blue/5 px-2.5 py-1 rounded-full">
                                        {art.type}
                                    </span>
                                    <div className="flex items-center text-midnight/30 text-[10px] font-bold">
                                        <Calendar size={12} className="mr-1.5" />
                                        {art.date}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-midnight mb-4 tracking-tight group-hover:text-electric-blue transition-colors leading-tight">
                                    {art.title}
                                </h3>
                                <p className="text-midnight/60 text-sm leading-relaxed mb-10 flex-grow">
                                    {art.excerpt}
                                </p>
                                <div className="flex items-center text-sm font-bold text-midnight group/btn">
                                    <span>{art.cta}</span>
                                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="text-sm font-bold text-midnight/40 hover:text-midnight transition-colors flex items-center mx-auto">
                            <BookOpen size={16} className="mr-2" />
                            View Archive
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured / Lead Article - Strategic Placement below grid */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-neutral-bg rounded-[4rem] p-10 md:p-16 border border-gray-100 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-xs font-black uppercase tracking-widest text-electric-blue bg-electric-blue/5 px-4 py-2 rounded-full mb-8 inline-block">
                                Latest Whitepaper
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 tracking-tight leading-tight">
                                2026 GRC Maturity Report: The State of African Fintech.
                            </h2>
                            <p className="text-lg text-midnight/60 leading-relaxed mb-10">
                                Our annual report surveying over 150 compliance and engineering leads across 12 markets to understand the primary hurdles in technical delivery governance.
                            </p>
                            <Link
                                href="/insights/grc-maturity-report-2026"
                                className="flex items-center space-x-3 bg-midnight text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:translate-y-[-2px] transition-all w-fit"
                            >
                                <BookOpen size={20} />
                                <span>Read the Report</span>
                            </Link>
                        </div>
                        <div className="lg:w-1/2 w-full aspect-[4/3] bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative group">
                            <div className="absolute inset-0 bg-neutral-bg p-12 flex flex-col">
                                <div className="flex justify-between items-center mb-12">
                                    <div className="w-12 h-1 bg-midnight/10 rounded-full" />
                                    <div className="w-4 h-4 rounded-full border-2 border-midnight/10" />
                                </div>
                                <div className="space-y-6">
                                    <div className="h-8 bg-midnight/5 rounded-lg w-3/4" />
                                    <div className="h-8 bg-midnight/5 rounded-lg w-1/2" />
                                    <div className="pt-8 grid grid-cols-2 gap-4">
                                        <div className="h-24 rounded-2xl border-2 border-dashed border-midnight/5 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center">
                                                <Zap size={24} className="text-electric-blue" />
                                            </div>
                                        </div>
                                        <div className="h-24 rounded-2xl bg-midnight/5" />
                                    </div>
                                    <div className="space-y-3 pt-6">
                                        <div className="h-2 bg-midnight/5 rounded-full w-full" />
                                        <div className="h-2 bg-midnight/5 rounded-full w-[90%]" />
                                        <div className="h-2 bg-midnight/5 rounded-full w-[85%]" />
                                    </div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-midnight/90 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-2xl backdrop-blur-md">
                                    Click to Preview
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-midnight mx-auto mb-8 shadow-sm">
                        <Calendar size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-midnight mb-6 tracking-tight">Stay informed.</h2>
                    <p className="text-lg text-midnight/60 mb-10">
                        Subscribe to our monthly newsletter for a curated selection of our latest research and institutional insights.
                    </p>
                    <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto">
                        <input required type="email" placeholder="Work Email" className="w-full bg-white rounded-2xl px-6 py-4 border border-gray-100 outline-none focus:ring-2 focus:ring-electric-blue transition-all" />
                        <button className="w-full sm:w-auto bg-midnight text-white px-8 py-4 rounded-2xl font-bold whitespace-nowrap shadow-xl">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
