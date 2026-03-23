"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Brain, Cpu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
    {
        title: "Enterprise AI Transformation",
        description: "Positioning institutions at the forefront of the AI era. As an Official AWS Partner, we lead the strategic deployment of AWS, Anthropic, and GCP intelligence ecosystems.",
        icon: Brain,
        href: "/services/product-advisory",
        color: "text-blue-400",
    },
    {
        title: "Product Engineering",
        description: "Architecting institutional-grade digital assets. Moving visionary applications from concept to mission-critical reality.",
        icon: Cpu,
        href: "/services/product-advisory",
        color: "text-white",
    },
    {
        title: "Security, GRC & Forensics",
        description: "Safeguarding your digital sovereignty. Comprehensive governance, audit, and security advisory for the AI-driven enterprise.",
        icon: Shield,
        href: "/services/grc-security",
        color: "text-emerald-400",
    },
];

export default function PillarSection() {
    return (
        <section className="py-32 px-6 bg-midnight relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-institutional-navy/20 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        Strategic Pillars of Digital Excellence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50 text-lg"
                    >
                        Specialized advisory and engineering for organizations that demand absolute reliability and strategic clarity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={pillar.href}
                                className="group block h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gold-accent/30 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight className="text-gold-accent" size={20} />
                                </div>

                                <div className={cn("mb-8 p-3 inline-block rounded-2xl bg-white/5", pillar.color)}>
                                    <pillar.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-accent transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                                    {pillar.description}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
