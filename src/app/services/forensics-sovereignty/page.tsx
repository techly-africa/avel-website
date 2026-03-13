"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";

const capabilities = [
    {
        title: "Deep-Dive Digital Forensics",
        body: "Expert investigation and analysis of digital systems to uncover truth, reconstruct events, and build evidentiary chains that hold under scrutiny.",
    },
    {
        title: "Data Asset Sovereignty Advisory",
        body: "Strategic guidance for institutions seeking absolute ownership of their data — jurisdiction, storage, access, and governance — free from external dependency.",
    },
    {
        title: "Incident Response & Recovery",
        body: "Rapid, expert intervention during critical digital events. We restore integrity, preserve evidence, and minimize institutional impact when it matters most.",
    },
    {
        title: "Secure Architecture Audits",
        body: "Assessing the sovereignty-readiness and structural integrity of mission-critical digital infrastructure — before adversaries assess it for you.",
    },
];

const forWho = [
    { label: "Legal Counsel & Law Firms", detail: "Requiring forensic analysis and chain of custody documentation" },
    { label: "Executive Leadership", detail: "Managing internal investigations with maximum discretion" },
    { label: "Governments & Regulators", detail: "Asserting digital sovereignty and investigating state-level incidents" },
    { label: "Financial Institutions", detail: "Responding to fraud, breaches, and insider threats" },
];

export default function ForensicsSovereigntyPage() {
    return (
        <div className="bg-midnight text-white">

            {/* Hero */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-1/2 right-[-8%] w-[600px] h-[600px] bg-amber-500/[0.04] blur-[140px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400 mb-8">
                            <Search size={12} />
                            Strategic Pillar 03
                        </div>
                        <h1
                            className="font-bold text-white tracking-tight leading-[0.9] mb-10 max-w-4xl"
                            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
                        >
                            Digital Forensics &amp;
                            <br />
                            <span className="text-white/20 italic font-serif font-normal">Digital Sovereignty Advisory</span>
                        </h1>
                        <p className="text-white/45 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
                            Own your data. Secure your truth. Expert investigation and strategic advisory for organizations asserting full control over their digital identity and assets.
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
                            Digital sovereignty is not optional —{" "}
                            <span className="text-white/30 italic font-serif font-normal">it is existential.</span>
                        </h2>
                        <p className="text-white/45 leading-relaxed font-light text-lg">
                            African institutions store their most sensitive data on infrastructure they do not control, governed by laws of jurisdictions they do not operate in. When incidents occur, the absence of forensic-readiness amplifies the damage. We change that equation.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="rounded-3xl bg-white/[0.03] border border-white/[0.07] p-12 flex items-center justify-center aspect-square"
                    >
                        <Search size={180} strokeWidth={0.4} className="text-amber-400/15" />
                    </motion.div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 px-6 border-t border-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(251,191,36,0.04)_0%,_transparent_55%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">Advisory Pillars</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
                            What we{" "}
                            <span className="text-white/25 italic font-serif font-normal">uncover and secure.</span>
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
                                className="p-10 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-amber-400/25 transition-colors"
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
                            For those who need{" "}
                            <span className="text-white/25 italic font-serif font-normal">the truth, precisely.</span>
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

            <CTASection title="Your data is your sovereignty." subtitle="Reach out for expert advisory on digital assets, investigations, and institutional data ownership." />
        </div>
    );
}
