"use client";

import React from "react";
import { ArrowLeft, Clock, ShieldCheck, Database, ServerCrash, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import DisasterRecoveryCTA from "@/components/ui/DisasterRecoveryCTA";

export default function WildlifeToursInsightPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-midnight text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link
                        href="/insights"
                        className="flex items-center space-x-2 text-white/40 hover:text-white transition-colors mb-12 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">Back to Intelligence</span>
                    </Link>

                    <span className="text-xs font-black uppercase tracking-widest text-red-400 border border-red-400/20 px-4 py-2 rounded-full mb-8 inline-block">
                        Rapid Response Case Study
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Total Platform Loss to Full Recovery in <span className="text-red-400">48 Hours.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl font-medium">
                        When Wildlife Tours Rwanda lost their entire web platform, client data, and bookings seamlessly, our Forward Deployed Engineers stepped in to rescue their infrastructure.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-white/10">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <Clock size={18} className="text-red-400" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Resolution Time</p>
                                <p className="text-sm font-bold">&lt; 48 Hours</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <Database size={18} className="text-electric-blue" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Data Recovered</p>
                                <p className="text-sm font-bold">100% Client Snapshots</p>
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
                                    { name: "The Crisis", id: "crisis" },
                                    { name: "Immediate Action", id: "action" },
                                    { name: "Data Recovery", id: "recovery" },
                                    { name: "Long-Term Security", id: "security" }
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
                                    "Disasters aren&apos;t scheduled. The metric that matters is how fast you can stop the bleeding and restore trust."
                                </p>
                                <p className="text-xs font-black text-midnight/40 uppercase tracking-widest">— RDRR Team</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-7">
                        <article className="prose prose-xl prose-midnight max-w-none">
                            <div id="crisis" className="mb-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold text-midnight mb-8 tracking-tight flex items-center">
                                    <ServerCrash className="mr-4 text-red-500" size={32} />
                                    The Crisis
                                </h2>
                                <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                    Wildlife Tours Rwanda faced a worst-case scenario: their entire web platform vanished. This included all active client data, historical bookings, and their primary revenue channel. Their previous developer was unavailable, and access to critical infrastructure was severed.
                                </p>
                            </div>

                            <div id="action" className="mb-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold text-midnight mb-8 tracking-tight">Immediate Action</h2>
                                <p className="text-lg text-midnight/70 leading-relaxed mb-6">
                                    Upon receiving the distress signal, our Rapid Disaster Recovery Response (RDRR) team immediately deployed an interim online presence. This critical first step ensured that potential clients still had a point of contact and that the business appeared operational while the deep recovery work began.
                                </p>
                            </div>

                            <div className="my-20 p-12 bg-midnight rounded-[3rem] text-white">
                                <h3 className="text-2xl font-bold mb-8">The 48-Hour Guarantee in Action</h3>
                                <p className="text-white/60 leading-relaxed italic text-xl">
                                    Within the 48-hour SLA window, we didn&apos;t just assess the damage—we re-established their digital footprint, circumvented the locked infrastructure, and initiated the forensic data recovery process.
                                </p>
                            </div>

                            <div id="recovery" className="mb-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold text-midnight mb-8 tracking-tight flex items-center">
                                    <Database className="mr-4 text-electric-blue" size={32} />
                                    Data Recovery & Linking
                                </h2>
                                <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                    Our engineers investigated the root cause of the platform loss and successfully extracted data snapshots of their historical clients. These snapshots were rapidly cleaned, structured, and securely linked to the newly deployed interim system, ensuring no critical booking information was permanently lost.
                                </p>
                            </div>

                            <div id="security" className="mb-16 scroll-mt-32 border-t border-gray-100 pt-16">
                                <h2 className="text-3xl font-bold text-midnight mb-8 tracking-tight flex items-center">
                                    <ShieldCheck className="mr-4 text-emerald-500" size={32} />
                                    Long-Term Security
                                </h2>
                                <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                    Recovery is only half the battle; prevention is the other. We immediately implemented a robust Backup and Disaster Recovery (DR) strategy. Furthermore, we provided continuous support to successfully recover control of their domain name and source code from the previous provider.
                                </p>
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
                        </div>
                    </div>
                </div>
            </section>

            <DisasterRecoveryCTA />
        </div>
    );
}
