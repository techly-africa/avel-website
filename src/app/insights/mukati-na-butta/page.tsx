"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShoppingCart, Award, CreditCard, Layout, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MukatiNaButtaArticle() {
    return (
        <div className="flex flex-col bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#FDF8F3] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E9B949]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative">
                    <Link href="/insights" className="inline-flex items-center text-midnight/40 hover:text-midnight transition-colors mb-12 group">
                        <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Insights
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#E9B949] mb-6 inline-block">Case Study • Operational Scale</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-midnight">
                            Scaling Taste: <br /> <span className="text-[#E9B949]">Automated Loyalty.</span>
                        </h1>
                        <p className="text-xl text-midnight/60 leading-relaxed mb-0 max-w-2xl">
                            How we digitized Mukati na Butta's artisanal bakery with a high-spec ordering engine and a tiered digital loyalty program.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sidebar / Meta */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="p-8 rounded-[2.5rem] bg-neutral-bg border border-gray-100">
                            <h3 className="text-sm font-bold text-midnight/40 uppercase tracking-widest mb-6">Core Systems</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: ShoppingCart, label: "Custom Cake Engine" },
                                    { icon: Award, label: "Tiered Loyalty (S/G/P)" },
                                    { icon: CreditCard, label: "Virtual Wallet System" },
                                    { icon: Layout, label: "Operational Dashboard" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-3 text-midnight font-bold">
                                        <item.icon size={18} className="text-[#E9B949]" />
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-midnight text-white">
                            <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4 italic">"The Impact"</h3>
                            <p className="text-lg leading-relaxed text-white/70 italic">
                                "Digitizing a physical ritual like a bakery requires more than just a POS—it requires an ecosystem that rewards loyalty and simplifies the complex logistics of custom orders."
                            </p>
                        </div>
                    </div>

                    {/* Article Body */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg prose-midnight max-w-none">
                            <h2 className="text-3xl font-bold text-midnight mb-6 tracking-tight">The Artisanal Challenge</h2>
                            <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                Mukati na Butta is a community hub in Kigali, known for its commitment to the "daily ritual" of coffee and pastries. As they scaled, managing custom cake orders—especially for high-stakes events like weddings—became a manual bottleneck. Furthermore, they wanted to move away from traditional punch cards toward a digital-first loyalty ecosystem that truly rewarded their most frequent patrons.
                            </p>

                            <h2 className="text-3xl font-bold text-midnight mb-6 tracking-tight">The Custom Cake Engine</h2>
                            <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                We built a specialized ordering flow that handles the complex logic of multi-tiered cakes. From selecting flavors (like Swiss Meringue Buttercream) to scheduling 3-day lead time deliveries, the system ensures that the kitchen and the customer are always in sync. This eliminated order drift and improved operational efficiency by 30%.
                            </p>

                            <div className="my-16 p-10 bg-neutral-bg rounded-[3rem] border border-gray-100">
                                <h3 className="text-2xl font-bold text-midnight mb-8">Technical Implementation</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle2 size={20} className="text-emerald-500 mr-3 shrink-0 mt-1" />
                                            <p className="text-sm text-midnight/70 font-medium leading-relaxed"><strong>Live Inventory Sync:</strong> Real-time menu updates based on material availability.</p>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle2 size={20} className="text-emerald-500 mr-3 shrink-0 mt-1" />
                                            <p className="text-sm text-midnight/70 font-medium leading-relaxed"><strong>Automated Lead Times:</strong> Variable ordering windows for signature vs. custom items.</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle2 size={20} className="text-emerald-500 mr-3 shrink-0 mt-1" />
                                            <p className="text-sm text-midnight/70 font-medium leading-relaxed"><strong>Virtual Wallet:</strong> A secure balance-loading system for friction-less checkout.</p>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle2 size={20} className="text-emerald-500 mr-3 shrink-0 mt-1" />
                                            <p className="text-sm text-midnight/70 font-medium leading-relaxed"><strong>Tiered Progression:</strong> Silver, Gold, and Platinum status levels with auto-leveling.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-midnight mb-6 tracking-tight">Engineering Loyalty</h2>
                            <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                The loyalty program isn't just points; it's a tiered membership system. Users earn 1 point for every 10,000 RWF spent, with benefits scaling as they move through the tiers. We implemented a unified account system that tracks history, points, and virtual card balances, providing Mukati na Butta with unprecedented data on customer preferences and peak ordering cycles.
                            </p>

                            <div className="flex items-center space-x-6 pt-12 border-t border-gray-100">
                                <a
                                    href="https://staging.mukatinabutta.rw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-5 bg-[#E9B949] text-midnight rounded-2xl font-bold flex items-center group shadow-xl hover:translate-y-[-2px] transition-all"
                                >
                                    Explore the Staging Site
                                    <Zap size={20} className="ml-2 group-hover:scale-110 transition-transform" />
                                </a>
                                <Link
                                    href="/contact"
                                    className="text-midnight font-bold hover:text-electric-blue transition-colors flex items-center"
                                >
                                    Scale your operations
                                    <ArrowRight size={20} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
