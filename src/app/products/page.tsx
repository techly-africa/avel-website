"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Zap, FileCheck2, BadgeCheck, FlaskConical, ShieldCheck } from "lucide-react";

const products = [
    {
        id: "avel-commerce",
        icon: ShoppingCart,
        color: "text-blue-400",
        accent: "bg-blue-500/10 border-blue-500/20",
        glow: "rgba(59,130,246,0.06)",
        hoverBorder: "hover:border-blue-400/30",
        tag: "E-Commerce Infrastructure",
        name: "Avel Commerce",
        tagline: "Modern E-Commerce OS for evolving industries.",
        description: "Avel Commerce is not a storefront builder — it is a full operating system for commerce. Built for industries undergoing digital transformation, it handles the complexity of modern trade so businesses can focus on growth.",
        capabilities: [
            "Multi-vendor & multi-channel architecture",
            "Native payments & reconciliation engine",
            "Real-time inventory & logistics intelligence",
            "Institutional-grade analytics & reporting",
        ],
    },
    {
        id: "avel-business-suite",
        icon: Zap,
        color: "text-violet-400",
        accent: "bg-violet-500/10 border-violet-500/20",
        glow: "rgba(139,92,246,0.06)",
        hoverBorder: "hover:border-violet-400/30",
        tag: "Business Operations",
        name: "Avel Business Suite",
        tagline: "Not a CRM. Not an ERP. A Business Engine.",
        description: "Avel Business Suite is a unified operational core for growing organizations. It replaces the patchwork of disconnected tools with a single engine — purpose-built for how African businesses actually operate, at institutional standards.",
        capabilities: [
            "Unified customer & relationship intelligence",
            "Operations, procurement & supply chain management",
            "Financial visibility & cash flow orchestration",
            "Team workflows, tasks & performance tracking",
        ],
    },
    {
        id: "aveldocs",
        icon: FileCheck2,
        color: "text-amber-400",
        accent: "bg-amber-500/10 border-amber-500/20",
        glow: "rgba(245,158,11,0.06)",
        hoverBorder: "hover:border-amber-400/30",
        tag: "Legal & Contract Infrastructure",
        name: "AvelDocs",
        tagline: "Blockchain-powered contract management.",
        description: "AvelDocs brings immutable trust to document and contract workflows. Every agreement is timestamped, cryptographically secured, and verifiable — creating an auditable chain of record that stands up to regulatory and legal scrutiny.",
        capabilities: [
            "Blockchain-anchored document integrity",
            "Smart contract creation & lifecycle management",
            "Multi-party e-signatures with audit trails",
            "Regulatory-ready version control & archiving",
        ],
    },
    {
        id: "avalid",
        icon: BadgeCheck,
        color: "text-emerald-400",
        accent: "bg-emerald-500/10 border-emerald-500/20",
        glow: "rgba(52,211,153,0.06)",
        hoverBorder: "hover:border-emerald-400/30",
        tag: "Accreditation & Access Management",
        name: "Avalid",
        tagline: "Accreditation, crowd management, ticketing & validation — unified.",
        description: "Avalid is the institutional backbone for events, certifications, and access control at scale. From professional accreditation to large-scale crowd management, it delivers real-time validation with the reliability that high-stakes environments demand.",
        capabilities: [
            "Professional credential issuance & verification",
            "Real-time crowd management & access control",
            "Integrated ticketing with fraud-proof validation",
            "Event lifecycle management & capacity intelligence",
        ],
    },
    {
        id: "avel-research",
        icon: FlaskConical,
        color: "text-rose-400",
        accent: "bg-rose-500/10 border-rose-500/20",
        glow: "rgba(244,63,94,0.06)",
        hoverBorder: "hover:border-rose-400/30",
        tag: "AI-Powered Research",
        name: "Avel Research",
        tagline: "Qualitative intelligence at institutional depth.",
        description: "Avel Research is a qualitative AI-powered research tool built for organizations that need more than data — they need insight. It synthesizes primary and secondary research, surfaces patterns, and produces analysis-ready intelligence at a depth no manual process can match.",
        capabilities: [
            "AI-driven qualitative synthesis & theme extraction",
            "Multi-source document analysis & cross-referencing",
            "Structured insight reports with citation trails",
            "Collaborative research workspaces for institutional teams",
        ],
    },
    {
        id: "avel-grc",
        icon: ShieldCheck,
        color: "text-cyan-400",
        accent: "bg-cyan-500/10 border-cyan-500/20",
        glow: "rgba(6,182,212,0.06)",
        hoverBorder: "hover:border-cyan-400/30",
        tag: "Governance, Risk & Compliance",
        name: "AvelGRC",
        tagline: "Continuous compliance. Not annual checkbox.",
        description: "AvelGRC turns governance, risk, and compliance from a periodic burden into a continuous operational function. From automated assessments to real-time control monitoring, it gives institutions a live view of their compliance posture against the frameworks that matter.",
        capabilities: [
            "Automated GRC assessments against ISO 27001, NIST, SOC 2 & NDPR",
            "Real-time control monitoring & compliance drift alerts",
            "Risk register management with automated scoring",
            "Audit-ready evidence collection & reporting",
        ],
    },
];

export default function ProductsPage() {
    return (
        <div className="bg-midnight text-white">

            {/* Hero */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-accent/[0.03] blur-[160px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-8">Products</p>
                        <h1
                            className="font-bold text-white tracking-tight leading-[0.9] mb-10 max-w-4xl"
                            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                        >
                            Built for us first.
                            <br />
                            <span className="text-white/20 italic font-serif font-normal">Now open to you.</span>
                        </h1>
                        <p className="text-white/45 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
                            Every product in this suite started as an internal tool — built to solve real operational problems inside AVEL and our clients&apos; institutions. After years of internal use, we are opening them up. The joy, the automation, and the growth — yours to leverage.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
            </section>

            {/* Product listings */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto space-y-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className={`group relative p-10 md:p-14 rounded-3xl border border-white/[0.07] ${product.hoverBorder} transition-all overflow-hidden`}
                            style={{ background: `radial-gradient(ellipse at top right, ${product.glow} 0%, transparent 60%), rgba(255,255,255,0.02)` }}
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start gap-12">

                                {/* Left */}
                                <div className="lg:w-1/2 space-y-6">
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest ${product.accent} ${product.color}`}>
                                            <product.icon size={12} />
                                            {product.tag}
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{product.name}</h2>
                                        <p className={`text-lg font-medium mb-6 ${product.color}`}>{product.tagline}</p>
                                        <p className="text-white/45 leading-relaxed font-light">{product.description}</p>
                                    </div>

                                    <button
                                        onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                                        className="group/btn inline-flex items-center gap-3 px-6 py-3 border border-white/15 text-white text-sm font-bold rounded-xl hover:border-white/30 hover:bg-white/5 transition-all"
                                    >
                                        Request Early Access
                                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Right: capabilities */}
                                <div className="lg:w-1/2">
                                    <p className="text-xs font-bold text-white/20 uppercase tracking-[0.2em] mb-5">Core Capabilities</p>
                                    <div className="space-y-3">
                                        {product.capabilities.map((cap, j) => (
                                            <div key={cap} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                                                <span className={`text-xs font-bold font-serif mt-0.5 shrink-0 opacity-40 ${product.color}`}>0{j + 1}</span>
                                                <span className="text-white/55 text-sm font-medium leading-relaxed">{cap}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6 border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto">
                    <div className="p-12 md:p-16 rounded-3xl bg-white/[0.03] border border-white/[0.07] text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">Early Access & Partnerships</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight max-w-xl mx-auto">
                                Interested in a product?
                                <br />
                                <span className="text-white/30 italic font-serif font-normal">Get in early.</span>
                            </h2>
                            <p className="text-white/40 text-lg font-light mb-10 max-w-lg mx-auto">
                                Our products are in active development. Reach out to discuss early access, integration partnerships, or enterprise licensing.
                            </p>
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-midnight font-bold rounded-2xl hover:bg-gold-accent transition-all hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] active:scale-95"
                            >
                                Request a Conversation
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
}
