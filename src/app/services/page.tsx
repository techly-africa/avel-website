"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Shield, Search } from "lucide-react";
import TDDSection from "@/components/home/TDDSection";
import CTASection from "@/components/home/CTASection";

const pillars = [
    {
        number: "01",
        icon: Cpu,
        color: "text-blue-400",
        accent: "bg-blue-500/10 border-blue-500/20",
        hover: "hover:border-blue-400/30",
        label: "Strategic Pillar 01",
        title: "Product Development & Digital Product Advisory",
        description: "We architect products that scale with mission-critical integrity. From concept to resilient reality — built for institutions that cannot afford technical debt.",
        capabilities: ["MVP Architecture & Strategy", "Institutional Systems Design", "Agile Product Advisory", "Technical Due Diligence"],
        href: "/services/product-advisory",
    },
    {
        number: "02",
        icon: Shield,
        color: "text-emerald-400",
        accent: "bg-emerald-500/10 border-emerald-500/20",
        hover: "hover:border-emerald-400/30",
        label: "Strategic Pillar 02",
        title: "GRC, Audit & Security Advisory",
        description: "Safeguarding institutional trust through rigorous governance. We design frameworks that meet global standards while operating in African regulatory environments.",
        capabilities: ["Security Audits & Vulnerability Assessment", "GRC Framework Design", "ISO/NIST Alignment", "Continuous Monitoring Strategy"],
        href: "/services/grc-security",
    },
    {
        number: "03",
        icon: Search,
        color: "text-amber-400",
        accent: "bg-amber-500/10 border-amber-500/20",
        hover: "hover:border-amber-400/30",
        label: "Strategic Pillar 03",
        title: "Digital Forensics & Digital Sovereignty Advisory",
        description: "Own your data. Secure your truth. Expert investigation and strategic advisory for organizations asserting full control over their digital assets.",
        capabilities: ["Deep-Dive Digital Forensics", "Data Asset Sovereignty Advisory", "Incident Response & Recovery", "Secure Architecture Audits"],
        href: "/services/forensics-sovereignty",
    },
];

const sectors = ["Telecom", "Fintech", "Public Sector", "Banking", "Mobility", "SMEs", "Startups", "NGOs"];

const steps = [
    {
        number: "01",
        title: "Diagnosis",
        body: "We begin every engagement with a rigorous technical and strategic assessment — understanding your systems, risks, and requirements before committing a direction.",
    },
    {
        number: "02",
        title: "Architecture",
        body: "We design solutions that balance velocity with institutional integrity. Every architecture decision is documented, justified, and built to carry real weight.",
    },
    {
        number: "03",
        title: "Delivery",
        body: "Uncompromising execution with continuous oversight. We remain engaged through delivery, ensuring what ships matches what was promised — without shortcuts.",
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-midnight text-white">

            {/* Hero */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-1/2 right-[-8%] w-[600px] h-[600px] bg-gold-accent/[0.04] blur-[140px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-8">Our Services</p>
                        <h1
                            className="font-bold text-white tracking-tight leading-[0.9] mb-10 max-w-4xl"
                            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                        >
                            Three disciplines.
                            <br />
                            <span className="text-white/20 italic font-serif font-normal">One standard of excellence.</span>
                        </h1>
                        <p className="text-white/45 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
                            High-stakes engineering and advisory for institutions that demand precision. Our practice is focused, deep, and uncompromising — by design.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
            </section>

            {/* Pillars */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.number}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={p.href}
                                className={`group block p-10 md:p-12 rounded-3xl bg-white/[0.03] border border-white/[0.07] ${p.hover} transition-all`}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-10">
                                    <div className="lg:w-1/2 space-y-5">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest ${p.accent} ${p.color}`}>
                                            <p.icon size={12} />
                                            {p.label}
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                            {p.title}
                                        </h2>
                                        <p className="text-white/40 leading-relaxed font-light">{p.description}</p>
                                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/35 group-hover:text-white transition-colors uppercase tracking-widest">
                                            Explore Pillar
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {p.capabilities.map((cap) => (
                                            <div key={cap} className="px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-sm text-white/45 font-medium">
                                                {cap}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Methodology */}
            <section className="py-32 px-6 mt-16 border-t border-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.04)_0%,_transparent_55%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">How We Engage</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                            Every engagement follows{" "}
                            <span className="text-white/25 italic font-serif font-normal">the same rigour.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05] rounded-3xl overflow-hidden">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="bg-midnight p-10 flex flex-col"
                            >
                                <span className="text-5xl font-bold text-white/[0.06] font-serif mb-8 block">{step.number}</span>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-white/40 leading-relaxed font-light text-sm flex-1">{step.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who we work with */}
            <section className="py-20 px-6 border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-center gap-10"
                    >
                        <p className="text-xs font-bold text-white/25 uppercase tracking-[0.25em] shrink-0 md:w-40">
                            Who we work with
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {sectors.map((s) => (
                                <span key={s} className="px-5 py-2 rounded-full border border-white/[0.08] text-white/35 text-sm font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <TDDSection />

            <CTASection />
        </div>
    );
}
