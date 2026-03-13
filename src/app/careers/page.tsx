"use client";

import { motion } from "framer-motion";
import { ArrowRight, Handshake, Users, Zap, Globe, Code2, ShieldCheck, BookOpen, Mail } from "lucide-react";
import CTASection from "@/components/home/CTASection";

const partnerTypes = [
    {
        icon: Globe,
        title: "Technology Partners",
        body: "SaaS platforms, infrastructure providers, and technology companies looking to integrate or co-develop solutions for African institutional markets.",
    },
    {
        icon: Handshake,
        title: "Distribution & Channel Partners",
        body: "Regional firms, consultancies, and business networks that serve enterprise and public sector clients and want to deliver AVEL-backed products and services.",
    },
    {
        icon: ShieldCheck,
        title: "GRC & Compliance Partners",
        body: "Regulatory consultancies, audit firms, and certification bodies looking to co-deliver continuous compliance programmes powered by AvelGRC.",
    },
    {
        icon: BookOpen,
        title: "Research & Academic Partners",
        body: "Universities, think tanks, and research institutions advancing digital governance, sovereignty, and institutional technology policy across the continent.",
    },
];

const values = [
    {
        icon: Zap,
        title: "Bias for precision",
        body: "We are not generalists. Every role and engagement demands depth, rigour, and ownership.",
    },
    {
        icon: Code2,
        title: "Engineering-first culture",
        body: "Whether you write code or strategy, you think like an engineer — structured, evidence-based, and outcome-driven.",
    },
    {
        icon: Users,
        title: "Institutional accountability",
        body: "Our clients operate in high-stakes environments. We hold ourselves to the same standard we demand of the systems we build.",
    },
];

export default function CareersPage() {
    return (
        <div className="bg-midnight text-white">

            {/* Hero */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] bg-gold-accent/[0.04] blur-[140px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-8">Careers & Partnerships</p>
                        <h1
                            className="font-bold text-white tracking-tight leading-[0.9] mb-10 max-w-4xl"
                            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                        >
                            Join the work.
                            <br />
                            <span className="text-white/20 italic font-serif font-normal">Or build alongside us.</span>
                        </h1>
                        <p className="text-white/45 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
                            We are actively growing — both our team and our partner ecosystem. If you believe in engineering digital resilience for Africa&apos;s institutions, there is a place for you here.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
            </section>

            {/* Partnership — actively looking */}
            <section className="py-24 px-6 border-t border-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.05)_0%,_transparent_55%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-xs font-bold uppercase tracking-widest text-gold-accent mb-8">
                            <Handshake size={12} />
                            Actively Seeking Partners
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-6">
                            We are looking for{" "}
                            <span className="text-white/25 italic font-serif font-normal">the right partners.</span>
                        </h2>
                        <p className="text-white/50 text-lg font-light max-w-2xl leading-relaxed">
                            AVEL is building an ecosystem of trusted partners who share our commitment to institutional-grade delivery. We are not looking for resellers — we are looking for co-builders who can take our work deeper into markets, sectors, and institutions we do not yet reach.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {partnerTypes.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-6 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-gold-accent/20 transition-colors"
                            >
                                <div className="shrink-0 p-3 rounded-xl bg-gold-accent/10 text-gold-accent">
                                    <p.icon size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">{p.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed font-light">{p.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-10"
                    >
                        <a
                            href="mailto:contact@avel.africa"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold-accent text-midnight font-bold rounded-2xl hover:bg-white transition-all hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] active:scale-95"
                        >
                            <Mail size={18} />
                            Start a Partnership Conversation
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Careers */}
            <section className="py-24 px-6 border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
                    >
                        <div>
                            <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">Join the Team</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                                We hire for{" "}
                                <span className="text-white/25 italic font-serif font-normal">depth, not headcount.</span>
                            </h2>
                            <p className="text-white/50 text-lg font-light leading-relaxed mb-6">
                                AVEL runs lean and builds with precision. Every person on the team carries the weight of institutional trust — and earns the space to do consequential work.
                            </p>
                            <p className="text-white/35 text-base font-light leading-relaxed mb-10">
                                We do not have open roles posted right now, but we are always interested in meeting exceptional engineers, security practitioners, and operators who are aligned with our mission.
                            </p>
                            <a
                                href="mailto:contact@avel.africa"
                                className="group inline-flex items-center gap-2 text-white/50 hover:text-white font-semibold transition-colors text-sm uppercase tracking-widest"
                            >
                                Send us your profile
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="space-y-5">
                            {values.map((v, i) => (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-6 p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
                                >
                                    <div className="shrink-0 p-3 rounded-xl bg-white/5 text-gold-accent">
                                        <v.icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">{v.title}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed font-light">{v.body}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <CTASection
                title="Ready to build with us?"
                subtitle="Whether you are a potential partner or an exceptional individual — the conversation starts with a message."
            />
        </div>
    );
}
