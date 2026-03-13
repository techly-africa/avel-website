"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";

const capabilities = [
    {
        title: "Security Audits & Vulnerability Assessment",
        body: "Deep-dive technical audits that identify and remediate vulnerabilities before they are exploited. We test what others assume is secure.",
    },
    {
        title: "GRC Framework Design & Implementation",
        body: "Designing governance, risk, and compliance frameworks tailored for African institutions — locally grounded, globally credible.",
    },
    {
        title: "ISO 27001 / NIST / SOC 2 Alignment",
        body: "Mapping your operations to internationally recognized standards. We build the evidence, controls, and policies that auditors and regulators expect.",
    },
    {
        title: "Continuous Monitoring Strategy",
        body: "Architecting systems for persistent visibility and detection. Your posture should be active, not reactive — we make that operational.",
    },
];

const standards = ["ISO 27001", "NIST CSF", "SOC 2 Type II", "GDPR", "NDPR", "PCI-DSS"];

const forWho = [
    { label: "Financial Institutions", detail: "Navigating regulatory mandates and security board requirements" },
    { label: "Fintechs & Payment Platforms", detail: "Achieving certification and maintaining compliance at pace" },
    { label: "Government & Public Sector", detail: "Institutionalizing security governance across agencies" },
    { label: "Enterprise & Telecom", detail: "Protecting critical infrastructure from evolving threat landscapes" },
];

export default function GrcSecurityPage() {
    return (
        <div className="bg-midnight text-white">

            {/* Hero */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-1/2 right-[-8%] w-[600px] h-[600px] bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-8">
                            <Shield size={12} />
                            Strategic Pillar 02
                        </div>
                        <h1
                            className="font-bold text-white tracking-tight leading-[0.9] mb-10 max-w-4xl"
                            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
                        >
                            GRC, Audit &amp;
                            <br />
                            <span className="text-white/20 italic font-serif font-normal">Security Advisory</span>
                        </h1>
                        <p className="text-white/45 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
                            Safeguarding institutional trust through tactical governance. We ensure your operations meet global security standards — and local compliance realities.
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
                            Governance gaps are silent.{" "}
                            <span className="text-white/30 italic font-serif font-normal">Until they are catastrophic.</span>
                        </h2>
                        <p className="text-white/45 leading-relaxed font-light text-lg">
                            Most African institutions operate with security frameworks built for yesterday&apos;s threats — or no framework at all. Regulatory scrutiny is increasing. The cost of a breach is not just financial; it is institutional. We close the gap before it costs you everything.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="rounded-3xl bg-white/[0.03] border border-white/[0.07] p-12 flex items-center justify-center aspect-square"
                    >
                        <Shield size={180} strokeWidth={0.4} className="text-emerald-400/15" />
                    </motion.div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 px-6 border-t border-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(52,211,153,0.04)_0%,_transparent_55%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">Advisory Areas</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
                            What we{" "}
                            <span className="text-white/25 italic font-serif font-normal">protect.</span>
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
                                className="p-10 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-emerald-400/25 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-white mb-4">{c.title}</h3>
                                <p className="text-white/40 leading-relaxed font-light">{c.body}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Standards strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center gap-6"
                    >
                        <span className="text-xs font-bold text-white/25 uppercase tracking-widest shrink-0">Standards we align to</span>
                        <div className="flex flex-wrap gap-3">
                            {standards.map((s) => (
                                <span key={s} className="px-4 py-1.5 rounded-full border border-emerald-400/20 text-emerald-400/70 text-xs font-bold uppercase tracking-widest">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </motion.div>
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
                            For institutions where{" "}
                            <span className="text-white/25 italic font-serif font-normal">trust is the product.</span>
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
                        <Link href="/services" className="group inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-semibold uppercase tracking-widest">
                            <ArrowRight size={14} className="rotate-180" />
                            All Services
                        </Link>
                    </div>
                </div>
            </section>

            <CTASection title="Zero-Trust. Zero-Compromise." subtitle="Build a governance framework that protects your long-term institutional value." />
        </div>
    );
}
