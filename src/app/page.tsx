"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Lock, Layers } from "lucide-react";
import Hero from "@/components/home/Hero";
import PillarSection from "@/components/home/PillarSection";
import AISolutionsSection from "@/components/home/AISolutionsSection";
import CTASection from "@/components/home/CTASection";

const values = [
    {
        icon: Layers,
        title: "Enterprise AI Competence",
        body: "We bridge the gap between AI ambition and execution, specializing in Anthropic, AWS, and GCP integrations tailored for rigorous institutional environments.",
    },
    {
        icon: Shield,
        title: "Digital Sovereignty & GRC",
        body: "We ensure you maintain absolute ownership over your data ecosystems and AI pipelines — no compromises on security, compliance, or integrity.",
    },
    {
        icon: Lock,
        title: "Institutional Engineering",
        body: "We don't build apps. We architect resilient, intelligent enterprise assets designed to endure and evolve with your mission-critical operations.",
    },
];

const steps = [
    {
        number: "01",
        title: "Explore",
        body: "AI Readiness & Strategic Roadmaps. We run rigorous data audits to ensure your systems and institutional compliance are prepared for enterprise intelligence.",
    },
    {
        number: "02",
        title: "Build",
        body: "Mission-Critical AI Systems. We architect secure, proprietary Copilots and RAG pipelines designed for strict enterprise-grade environments.",
    },
    {
        number: "03",
        title: "Ship",
        body: "Secure AWS & GCP Deployment. Highly available infrastructure deployment built to scale without sacrificing data sovereignty or performance.",
    },
    {
        number: "04",
        title: "Support",
        body: "GRC & Continuous Monitoring. Uncompromising ongoing oversight to prevent model drift and ensure strict alignment with organizational and regional regulations.",
    },
];

export default function Home() {
    return (
        <div className="bg-midnight font-sans selection:bg-gold-accent selection:text-midnight">
            <Hero />

            {/* Services */}
            <PillarSection />

            {/* Why AVEL */}
            <section className="fluid-y-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.04)_0%,_transparent_60%)] pointer-events-none" />
                <div className="fluid-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Left: copy */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-4 sm:mb-6">
                                Why AVEL
                            </p>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 sm:mb-8">
                                We are not a software agency.
                                <br />
                                <span className="text-white/30 italic font-serif font-normal">We are principal engineers.</span>
                            </h2>
                            <p className="text-white/50 text-lg leading-relaxed font-light mb-6">
                                AVEL Africa builds the foundation for tomorrow's intelligent enterprises. As an Official AWS Partner, and through cross-ecosystem alliances with Anthropic and GCP, we deploy rigorous, transformative AI solutions where failure is not an option.
                            </p>
                            <p className="text-white/35 text-base leading-relaxed font-light mb-10">
                                From architecting complex intelligence ecosystems to enforcing strict data sovereignty and digital forensics, we deliver with precision, discretion, and strict institutional governance.
                            </p>
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-2 text-white/50 hover:text-white font-semibold transition-colors text-sm uppercase tracking-widest"
                            >
                                About AVEL
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Right: value cards */}
                        <div className="space-y-5">
                            {values.map((v, i) => (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-6 p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/15 transition-colors group"
                                >
                                    <div className="shrink-0 p-3 rounded-xl bg-white/5 text-gold-accent group-hover:bg-gold-accent/10 transition-colors">
                                        <v.icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-2">{v.title}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed font-light">{v.body}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="fluid-y-padding border-t border-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.04)_0%,_transparent_60%)] pointer-events-none" />
                <div className="fluid-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-4 sm:mb-6">
                            Our Methodology
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
                            Deliberate by design.{" "}
                            <span className="text-white/25 italic font-serif font-normal">Precise in execution.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl sm:rounded-[2rem] overflow-hidden">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="bg-midnight p-8 sm:p-10 flex flex-col"
                            >
                                <span className="text-4xl sm:text-5xl font-bold text-white/[0.06] font-serif mb-6 sm:mb-8 block">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-white/40 leading-relaxed font-light text-sm flex-1">{step.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <AISolutionsSection />

            <CTASection />
        </div>
    );
}
