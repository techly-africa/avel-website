"use client";

import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";

const capabilities = [
    {
        title: "Generative AI Integration",
        body: "Transform raw organizational data into intelligent workflows leveraging Anthropic and GCP models, tailored for mission-critical use cases.",
    },
    {
        title: "AWS Cloud Architecture",
        body: "As an Official AWS Partner, we architect robust, highly available intelligence ecosystems scaling across enterprise infrastructure.",
    },
    {
        title: "AI Governance & Sovereignty",
        body: "Ensure your enterprise AI models meet the highest standards of data sovereignty, maintaining strict ownership and auditability.",
    },
    {
        title: "Strategic AI Advisory",
        body: "Guiding executive leadership through the complexities of AI adoption, focusing on tangible ROI and rigorous risk mitigation.",
    },
];

const forWho = [
    { label: "Executive Leadership", detail: "Seeking strategic integration of AI to maintain competitive advantage" },
    { label: "CTOs & Engineering Leads", detail: "Requiring principal-level architecture for cloud intelligence ecosystems" },
    { label: "Data & Governance Officers", detail: "Demanding strict sovereignty and auditability for AI deployments" },
    { label: "Institutions", detail: "Commissioning mission-critical, AI-driven digital infrastructure" },
];

export default function AITransformationPage() {
    return (
        <div className="min-h-screen bg-midnight text-white">

            {/* Hero */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-1/2 right-[-8%] w-[600px] h-[600px] bg-blue-500/[0.04] blur-[140px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-widest text-blue-400 mb-8">
                            <Brain size={12} />
                            Strategic Pillar 01
                        </div>
                        <h1
                            className="font-bold text-white tracking-tight leading-[0.9] mb-10 max-w-4xl"
                            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
                        >
                            Enterprise AI
                            <br />
                            <span className="text-white/20 italic font-serif font-normal">Transformation</span>
                        </h1>
                        <p className="text-white/45 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
                            Positioning institutions at the forefront of the AI era. As an Official AWS Partner, we lead the strategic deployment of strict AWS, Anthropic, and GCP intelligence ecosystems.
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
                            Most AI initiatives fail from superficial integration —{" "}
                            <span className="text-white/30 italic font-serif font-normal">not from lack of intent.</span>
                        </h2>
                        <p className="text-white/45 leading-relaxed font-light text-lg">
                            Enterprise AI is not a plugin; it is a foundational architectural shift. Institutional viability demands rigorous AWS and GCP cloud infrastructure, uncompromising data sovereignty, and principal-grade engineering judgment applied from day one.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="rounded-3xl bg-white/[0.03] border border-white/[0.07] p-12 flex items-center justify-center aspect-square"
                    >
                        <Brain size={180} strokeWidth={0.4} className="text-blue-400/15" />
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

            <CTASection title="Scale intelligently." subtitle="Book a consultation to discuss your Enterprise AI transformation strategy." />
        </div>
    );
}
