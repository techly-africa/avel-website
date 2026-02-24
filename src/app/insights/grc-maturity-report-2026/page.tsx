"use client";

import React from "react";
import { ArrowLeft, Share2, Bookmark, BarChart3, ShieldCheck, Globe2, Zap, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import DisasterRecoveryCTA from "@/components/ui/DisasterRecoveryCTA";


export default function GRCReportPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header / Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-midnight text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link
                        href="/insights"
                        className="flex items-center space-x-2 text-white/40 hover:text-white transition-colors mb-12 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">Back to Intelligence</span>
                    </Link>

                    <span className="text-xs font-black uppercase tracking-widest text-soft-teal border border-soft-teal/20 px-4 py-2 rounded-full mb-8 inline-block">
                        Institutional Whitepaper 2026
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
                        The GRC <span className="text-electric-blue">Maturity Report.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl font-medium">
                        Surveying 150+ Compliance and Engineering leads to map the frontier of technical governance in African Fintech.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-white/10">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <Globe2 size={18} className="text-soft-teal" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Markets</p>
                                <p className="text-sm font-bold">12 Regional Hubs</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <BarChart3 size={18} className="text-electric-blue" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Data Points</p>
                                <p className="text-sm font-bold">4,200+ Responses</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <ShieldCheck size={18} className="text-soft-teal" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Standard</p>
                                <p className="text-sm font-bold">ISO/NIST Aligned</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reading View */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Sidebar / Table of Contents */}
                    <div className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-32">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-midnight/30 mb-8">On this page</h3>
                            <nav className="flex flex-col space-y-4">
                                {[
                                    { name: "Executive Summary", id: "summary" },
                                    { name: "Methodology", id: "methodology" },
                                    { name: "The Compliance Gap", id: "gap" },
                                    { name: "Regional Nuance", id: "nuance" },
                                    { name: "Future Outlook", id: "outlook" }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                        className="text-left py-2 border-l-2 border-transparent pl-6 hover:border-electric-blue/20 hover:text-electric-blue transition-all text-sm font-bold text-midnight/40"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-20 p-8 rounded-3xl bg-neutral-bg border border-gray-100 italic">
                                <p className="text-sm text-midnight/60 leading-relaxed mb-6">
                                    "Institutional technology delivery in Africa is no longer about 'shipping fast'. It's about shipping with auditability."
                                </p>
                                <p className="text-xs font-black text-midnight/40 uppercase tracking-widest">— AVEL Strategy Team</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-7">
                        <article className="prose prose-xl prose-midnight max-w-none">
                            <div id="summary" className="mb-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold text-midnight mb-8 tracking-tight">Executive Summary</h2>
                                <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                    The 2026 GRC Maturity Report arrives at a critical juncture for African financial technology. As cross-border payment initiatives like PAPSS and regional interoperability hubs scale, the delta between "functional code" and "regulated stability" has widened into a significant operational risk.
                                </p>
                                <p className="text-lg text-midnight/70 leading-relaxed">
                                    Our findings reveal that while 82% of fintechs have foundational GRC policies in place, over 65% suffer from <strong>'Compliance Drift'</strong>—a state where technical delivery bypasses established governance controls due to speed-to-market pressures.
                                </p>
                            </div>

                            <div id="methodology" className="mb-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold text-midnight mb-8 tracking-tight">Methodology</h2>
                                <p className="text-lg text-midnight/70 leading-relaxed mb-6">
                                    Our research spanned 14 months, conducting structured interviews and technical audits across 150+ institutions in 12 key African markets.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="p-6 bg-neutral-bg rounded-2xl border border-gray-100">
                                        <p className="text-2xl font-bold text-midnight">70%</p>
                                        <p className="text-xs font-medium text-midnight/40 uppercase tracking-widest">Public Sector</p>
                                    </div>
                                    <div className="p-6 bg-neutral-bg rounded-2xl border border-gray-100">
                                        <p className="text-2xl font-bold text-midnight">30%</p>
                                        <p className="text-xs font-medium text-midnight/40 uppercase tracking-widest">Fintech/Private</p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-20 p-12 bg-midnight rounded-[3rem] text-white overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-12 text-electric-blue/10">
                                    <Zap size={120} strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl font-bold mb-8 flex items-center">
                                    <Zap size={24} className="text-electric-blue mr-3" />
                                    The Core Finding
                                </h3>
                                <p className="text-4xl font-bold tracking-tight mb-8 leading-tight">
                                    Speed is losing its premium. Stability is the new competitive edge.
                                </p>
                                <div className="h-px w-full bg-white/10 mb-8" />
                                <p className="text-white/60 leading-relaxed italic">
                                    Surveyed institutions that prioritized continuous compliance over rapid feature-pumping saw a 40% reduction in regulatory friction and a 25% increase in institutional partnership conversions.
                                </p>
                            </div>

                            <div id="gap" className="mb-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold text-midnight mb-8 tracking-tight">The 2026 Compliance Gap</h2>
                                <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                    We analyzed three primary vectors of failure across the 12 hub markets. The most significant isn't technical, but structural: the disconnect between the Risk Department and the Sprints.
                                </p>
                                <ul className="space-y-6 text-lg text-midnight/70 pl-0 list-none mb-12">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-3 mr-4 shrink-0" />
                                        <span><strong>IAM Fragility:</strong> Identity and Access Management remains the primary attack vector. 40% of institutions rely on manual review for high-privilege escalations.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-3 mr-4 shrink-0" />
                                        <span><strong>Audit Lag:</strong> 80% of reconciliation processes are batch-based, leading to an 'integrity blind spot' that can persist for up to 48 hours.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-3 mr-4 shrink-0" />
                                        <span><strong>Vendor Blindness:</strong> While core systems are hardened, the integration layer with 3rd-party billers and KYC providers often lacks verifiable audit logging.</span>
                                    </li>
                                </ul>
                            </div>

                            <div id="nuance" className="mb-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold text-midnight mb-8 tracking-tight">Regional Nuance</h2>
                                <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                    Regulatory frameworks are not monolithic across the continent. While Rwanda and Egypt show high alignment with EU-GDPR standards, markets like Nigeria and Kenya are developing bespoke 'Data Sovereignty' rules that require localized storage orchestration.
                                </p>
                            </div>

                            <div id="outlook" className="mb-16 scroll-mt-32 border-t border-gray-100 pt-16">
                                <h2 className="text-3xl font-bold text-midnight mb-8 tracking-tight">Future Outlook</h2>
                                <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                    As we look toward 2027, the institutions that will lead are those that treat GRC as a competitive delivery asset rather than an annual tax. <strong>'Continuous Compliance'</strong> via automated control monitors will become the baseline for cross-border institutional trade.
                                </p>
                            </div>

                            <div className="mt-24 pt-24 border-t border-gray-100">
                                <div className="bg-neutral-bg rounded-[3rem] p-12 text-center">
                                    <h3 className="text-2xl font-bold text-midnight mb-6">Access the Full Dataset</h3>
                                    <p className="text-midnight/60 mb-10 max-w-md mx-auto">
                                        Looking for specific regional breakdowns or sector-specific benchmarks? Request our institutional data pack.
                                    </p>
                                    <button className="bg-midnight text-white px-10 py-5 rounded-2xl font-bold hover:translate-y-[-2px] transition-all shadow-xl">
                                        Request Data Access
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Meta / Sharing */}
                    <div className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-32 flex flex-col items-center space-y-8">
                            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-midnight/40 hover:text-electric-blue hover:border-electric-blue/20 transition-all">
                                <Bookmark size={20} />
                            </button>
                            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-midnight/40 hover:text-electric-blue hover:border-electric-blue/20 transition-all">
                                <Share2 size={20} />
                            </button>
                            <div className="h-px w-8 bg-gray-100" />
                            <div className="text-center">
                                <p className="text-[10px] font-black uppercase tracking-widest text-midnight/20 mb-2">Reading Time</p>
                                <p className="text-xs font-bold text-midnight/40">12 Mins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-midnight mb-6 tracking-tight">Build the future of trust.</h2>
                    <p className="text-lg text-midnight/60 mb-10">
                        Is your institution ready to move beyond 'Checklist GRC' toward continuous, code-driven governance?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="bg-midnight text-white px-10 py-5 rounded-2xl font-bold hover:translate-y-[-2px] transition-all shadow-xl">
                            Partner with AVEL
                        </Link>
                        <Link href="/grc" className="bg-white text-midnight border border-gray-100 px-10 py-5 rounded-2xl font-bold hover:bg-neutral-bg transition-all">
                            Explore GRC Modules
                        </Link>
                    </div>
                </div>
            </section>

            <DisasterRecoveryCTA />
        </div>
    );
}
