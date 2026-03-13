"use client";

import { motion } from "framer-motion";
import { Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";

const capabilities = [
    {
        title: "MVP Architecture & Strategy",
        body: "We take founders from concept to a production-ready product architecture — one that scales without accumulating the technical debt that kills growth-stage companies.",
    },
    {
        title: "Institutional-Grade Systems Design",
        body: "Architecting software that meets the rigorous demands of banks, government institutions, and large-scale enterprises. Systems built for the weight of real accountability.",
    },
    {
        title: "Agile Product Advisory",
        body: "We help engineering teams maintain velocity without sacrificing standards. Embedded advisory that keeps delivery fast and quality uncompromised.",
    },
    {
        title: "Technical Due Diligence",
        body: "Rigorous assessment of technical assets for investors, acquirers, and strategic partners. We surface the truth — not what teams want to present.",
    },
];

const forWho = [
    { label: "Founders", detail: "Building their first or second institutional-grade product" },
    { label: "CTOs & Engineering Leads", detail: "Seeking principal-level oversight and strategic advisory" },
    { label: "Investors & Acquirers", detail: "Requiring deep technical due diligence on assets" },
    { label: "Institutions", detail: "Commissioning mission-critical digital infrastructure" },
];

export default function ProductAdvisoryPage() {
    return (
        <div className="min-h-screen bg-midnight text-white">

            {/* Hero */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-1/2 right-[-8%] w-[600px] h-[600px] bg-blue-500/[0.04] blur-[140px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-widest text-blue-400 mb-8">
                            <Cpu size={12} />
                            Strategic Pillar 01
                        </div>
                        <h1
                            className="font-bold text-white tracking-tight leading-[0.9] mb-10 max-w-4xl"
                            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
                        >
                            Product Development &amp;
                            <br />
                            <span className="text-white/20 italic font-serif font-normal">Digital Product Advisory</span>
                        </h1>
                        <p className="text-white/45 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
                            We don&apos;t just build software — we architect products that carry institutional weight. From vision to resilient reality, without compromise.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
            </section>

            {/* The Challenge */}
            <section className="py-24 px-6 border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">The Challenge</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                            Most products fail not from lack of ambition —{" "}
                            <span className="text-white/30 italic font-serif font-normal">but from architectural debt.</span>
                        </h2>
                        <p className="text-white/45 leading-relaxed font-light text-lg">
                            Africa&apos;s digital landscape is full of products that launched fast and collapsed under the weight of real usage, regulatory scrutiny, or institutional scale. The gap is not talent — it is principal-level engineering judgment applied from day one.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="rounded-3xl bg-white/[0.03] border border-white/[0.07] p-12 flex items-center justify-center aspect-square"
                    >
                        <Cpu size={180} strokeWidth={0.4} className="text-blue-400/15" />
                    </motion.div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 px-6 border-t border-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.04)_0%,_transparent_55%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">Core Capabilities</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
                            What we{" "}
                            <span className="text-white/25 italic font-serif font-normal">deliver.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {capabilities.map((c, i) => (
                            <motion.div
                                key={c.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-blue-400/25 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-white mb-4">{c.title}</h3>
                                <p className="text-white/40 leading-relaxed font-light">{c.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who this is for */}
            <section className="py-24 px-6 border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">Who This Is For</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
                            Built for those who{" "}
                            <span className="text-white/25 italic font-serif font-normal">refuse to cut corners.</span>
                        </h2>
                    </motion.div>

                    <div className="divide-y divide-white/[0.05]">
                        {forWho.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10"
                            >
                                <span className="text-white font-bold text-lg sm:w-64 shrink-0">{item.label}</span>
                                <span className="text-white/40 font-light">{item.detail}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-semibold uppercase tracking-widest"
                        >
                            <ArrowRight size={14} className="rotate-180" />
                            All Services
                        </Link>
                    </div>
                </div>
            </section>

            <CTASection title="Scale with integrity." subtitle="Book a consultation to discuss your product architecture and engineering strategy." />
        </div>
    );
}
