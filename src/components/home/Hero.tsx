"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-midnight pt-20">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none" />

            {/* Glow orbs */}
            <div className="absolute top-1/3 right-[-5%] w-[700px] h-[700px] bg-gold-accent/[0.05] blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] bg-blue-600/[0.05] blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-24">

                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-12"
                >
                    <span className="w-1.5 h-1.5 bg-gold-accent rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.25em]">
                        Institutional Engineering · Africa
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-bold text-white tracking-tight leading-[0.9] mb-10 max-w-5xl"
                    style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
                >
                    Engineering
                    <br />
                    <span className="text-white/20 italic font-serif font-normal">Institutional</span>
                    <br />
                    Resilience.
                </motion.h1>

                {/* Sub + CTAs */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-white/45 text-xl md:text-2xl leading-relaxed font-light max-w-xl"
                    >
                        High-stakes product development, security governance, and digital sovereignty advisory for Africa&apos;s most critical organizations.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="flex flex-col sm:flex-row items-start gap-4 shrink-0"
                    >
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-midnight font-bold rounded-2xl hover:bg-gold-accent transition-all hover:shadow-[0_20px_40px_rgba(212,175,55,0.25)] active:scale-95"
                        >
                            Book a Consultation
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white font-bold rounded-2xl hover:border-white/30 hover:bg-white/5 transition-all"
                        >
                            Explore Services
                        </Link>
                    </motion.div>
                </div>

                {/* Stats strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-24 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-3 gap-10"
                >
                    {[
                        { value: "3", label: "Service Pillars" },
                        { value: "GRC", label: "Governance & Compliance" },
                        { value: "Sovereign", label: "Digital Independence" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs text-white/25 uppercase tracking-[0.2em]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
        </section>
    );
}
