"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Camera, Film, Globe, Users, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AyubuAfricaArticle() {
    return (
        <div className="flex flex-col bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-midnight text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative">
                    <Link href="/insights" className="inline-flex items-center text-white/40 hover:text-white transition-colors mb-12 group">
                        <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Insights
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-soft-teal mb-6 inline-block">Case Study • Creative Digital</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Liquid Glass & <br /> <span className="text-soft-teal">Cinematic Legacy.</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-0 max-w-2xl">
                            How we transitioned Ayubu Kasasa's 20-year filmmaking legacy from a behind-the-scenes powerhouse to a front-facing digital brand.
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
                            <h3 className="text-sm font-bold text-midnight/40 uppercase tracking-widest mb-6">Project Scope</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Globe, label: "Digital Strategy" },
                                    { icon: ShieldCheck, label: "Brand Identity Evolution" },
                                    { icon: Zap, label: "Liquid Glass UI/UX" },
                                    { icon: Film, label: "Project Showcase Engine" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-3 text-midnight font-bold">
                                        <item.icon size={18} className="text-electric-blue" />
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-midnight text-white">
                            <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4 italic">"The Challenge"</h3>
                            <p className="text-lg leading-relaxed text-white/70 italic">
                                "Moving from a strictly B2B fixer role for organizations like BBC and Netflix to a personal directorial brand required a delicate balance of technical grit and artistic prestige."
                            </p>
                        </div>
                    </div>

                    {/* Article Body */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg prose-midnight max-w-none">
                            <h2 className="text-3xl font-bold text-midnight mb-6 tracking-tight">The 20-Year Benchmark</h2>
                            <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                Ayubu Kasasa isn't just a Director; he's the bridge for global storytelling in East Africa. For over two decades, his name has been synonymous with production excellence for the likes of the BBC, Netflix, and National Geographic. However, his digital presence remained a collection of legacy mentions. Our task was to build a home that reflected his dual nature: the high-stakes reliability of a Fixer and the visionary eye of a Director.
                            </p>

                            <h2 className="text-3xl font-bold text-midnight mb-6 tracking-tight">Technical Rigor: The Liquid Glass UI</h2>
                            <p className="text-lg text-midnight/70 leading-relaxed mb-8">
                                Filmmaking is about transparency and layers. We translated this into the interface using what we call <strong>"Liquid Glass"</strong>. A UI system built on high-contrast black and soft-teal accents, utilizing extreme backdrop blurs and semi-transparent layers to ensure the content—his films—always stayed the primary focus.
                            </p>

                            <div className="my-16 p-10 bg-neutral-bg rounded-[3rem] border border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div>
                                        <h4 className="text-xl font-bold text-midnight mb-4">Cinematic Dark Mode</h4>
                                        <p className="text-sm text-midnight/60 leading-relaxed">
                                            We utilized deep midnight tones (#0A0A0B) to emulate the "theater" experience, allowing video reels to pop with intensity.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-midnight mb-4">Performance First</h4>
                                        <p className="text-sm text-midnight/60 leading-relaxed">
                                            Despite the heavy use of glassmorphism and motion, the site maintains a 95+ performance score to cater to international clients in low-bandwidth field environments.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-midnight mb-6 tracking-tight">Institutional Proof</h2>
                            <p className="text-lg text-midnight/70 leading-relaxed mb-12">
                                By mapping his service matrix—from Location Scouting to Crew Logistics—into a sophisticated technical grid, we moved the brand from "consultant" to "institution." The result is a platform that serves as a professional handshake for the world's most demanding production houses.
                            </p>

                            <div className="flex items-center space-x-6 pt-12 border-t border-gray-100">
                                <a
                                    href="https://www.ayubu.africa/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-5 bg-midnight text-white rounded-2xl font-bold flex items-center group shadow-xl hover:translate-y-[-2px] transition-all"
                                >
                                    Visit ayubu.africa
                                    <Globe size={20} className="ml-2 group-hover:rotate-12 transition-transform" />
                                </a>
                                <Link
                                    href="/contact"
                                    className="text-midnight font-bold hover:text-electric-blue transition-colors flex items-center"
                                >
                                    Discuss your digital brand
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
