"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, BrainCircuit, Globe2, Users } from "lucide-react";
import CTASection from "@/components/home/CTASection";

const strengths = [
    {
        icon: BrainCircuit,
        title: "Principal-Level Expertise",
        body: "Every engagement is led by senior engineers and advisors — not managed by account managers and staffed with juniors. You get direct access to the best minds on the problem.",
    },
    {
        icon: ShieldCheck,
        title: "Institutional-Grade Standards",
        body: "We apply the same rigour used in banking, telecom, and public sector to every client — regardless of size. Our bar does not move.",
    },
    {
        icon: Globe2,
        title: "Deep Continental Context",
        body: "We understand Africa's regulatory environments, infrastructure realities, and institutional dynamics. Our solutions are built for the continent — not repurposed for it.",
    },
    {
        icon: Users,
        title: "Mission-Aligned Partnership",
        body: "We don't take on every client. We work with founders and institutions whose mission demands the highest standards, and we commit to those partnerships fully.",
    },
];

const testimonials = [
    {
        quote: "AVEL doesn't come in with templates. They came in, understood our exact threat landscape, and built a governance framework that actually worked for our environment.",
        author: "Chief Information Security Officer",
        org: "Tier-1 Telecom, West Africa",
    },
    {
        quote: "Working with AVEL felt like having a principal architect embedded in our team. The level of technical depth and strategic clarity they brought was unlike any agency we'd worked with before.",
        author: "Co-Founder & CTO",
        org: "Fintech Platform, East Africa",
    },
    {
        quote: "When it came to our digital forensics investigation, discretion and precision were non-negotiable. AVEL delivered on both counts without compromise.",
        author: "General Counsel",
        org: "Financial Institution, Southern Africa",
    },
];

const principles = [
    {
        title: "Digital Sovereignty",
        body: "We believe every African institution has the right to own its digital future — its data, its infrastructure, its identity. We engineer for independence, not dependency.",
    },
    {
        title: "Institutional Integrity",
        body: "Our standards don't flex with budget or timeline. Every deliverable is held to the same bar we would apply to the most critical systems on the continent.",
    },
    {
        title: "Product Excellence",
        body: "We move beyond shipping software. We architect resilient institutional assets — systems that carry the weight of the mission and are built to endure.",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-midnight text-white">

            {/* Hero */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
                <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-gold-accent/[0.04] blur-[140px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-8">
                            About AVEL Africa
                        </p>
                        <h1
                            className="font-bold text-white tracking-tight leading-[0.9] mb-10 max-w-5xl"
                            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                        >
                            Built for the rooms where
                            <br />
                            <span className="text-white/20 italic font-serif font-normal">failure is not an option.</span>
                        </h1>
                        <p className="text-white/45 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
                            AVEL Africa was founded to close a gap in the continent&apos;s digital ecosystem — the absence of principal-level engineering advisory that understands both Africa&apos;s unique technical landscape and global institutional standards.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
            </section>

            {/* Origin Story */}
            <section className="py-32 px-6 border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">
                            Our Story
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                            We have sat in those rooms.{" "}
                            <span className="text-white/30 italic font-serif font-normal">We know what is at stake.</span>
                        </h2>
                        <div className="space-y-5 text-white/50 text-lg leading-relaxed font-light">
                            <p>
                                AVEL Africa was not born in a co-working space. It was born from direct exposure to the consequences of poor digital governance — collapsed systems, compromised data, products that failed the institutions they were meant to serve.
                            </p>
                            <p>
                                Our founders have worked inside Africa&apos;s most demanding technical environments — telecom infrastructure, financial system architecture, sovereign data policy — and emerged with a clear conviction: the continent deserves better than what generic agencies offer.
                            </p>
                            <p>
                                We operate with the discretion of advisors and the precision of engineers. Our clients don&apos;t come to us for proposals. They come to us for answers.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Abstract Visual Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { label: "Service Pillars", value: "3" },
                            { label: "Core Disciplines", value: "GRC · Forensics · Product" },
                            { label: "Operating Standard", value: "Institutional" },
                            { label: "Geography", value: "Pan-Africa" },
                        ].map((item, i) => (
                            <div
                                key={item.label}
                                className={`p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col justify-between ${i === 1 ? "col-span-2" : ""}`}
                            >
                                <span className="text-xs text-white/25 uppercase tracking-widest mb-4 block">{item.label}</span>
                                <span className="text-2xl font-bold text-white leading-tight">{item.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Strengths */}
            <section className="py-32 px-6 border-t border-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.04)_0%,_transparent_55%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 max-w-2xl"
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">
                            What Sets Us Apart
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Strengths that{" "}
                            <span className="text-white/25 italic font-serif font-normal">matter at scale.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {strengths.map((s, i) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-white/15 transition-colors group"
                            >
                                <div className="mb-6 inline-block p-3 rounded-xl bg-white/5 text-gold-accent group-hover:bg-gold-accent/10 transition-colors">
                                    <s.icon size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                                <p className="text-white/40 leading-relaxed font-light">{s.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="py-32 px-6 border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">
                            Core Principles
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                            What we stand for.{" "}
                            <span className="text-white/25 italic font-serif font-normal">Without exception.</span>
                        </h2>
                    </motion.div>

                    <div className="divide-y divide-white/[0.05]">
                        {principles.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start group"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-bold text-white/15 font-serif">0{i + 1}</span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-gold-accent transition-colors">{p.title}</h3>
                                </div>
                                <p className="text-white/40 leading-relaxed font-light md:col-span-2">{p.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 px-6 border-t border-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.04)_0%,_transparent_55%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <p className="text-xs font-bold text-gold-accent uppercase tracking-[0.25em] mb-6">
                            What Is Said About Us
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                            Trusted by those who{" "}
                            <span className="text-white/25 italic font-serif font-normal">cannot afford to fail.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="flex flex-col justify-between p-10 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-white/15 transition-colors"
                            >
                                <p className="text-white/60 text-lg leading-relaxed font-light mb-10 italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div>
                                    <p className="text-white font-bold text-sm">{t.author}</p>
                                    <p className="text-white/30 text-xs mt-1 uppercase tracking-widest">{t.org}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Link to Services */}
            <section className="py-16 px-6 border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
                    <p className="text-white/40 text-lg font-light max-w-xl">
                        Curious about how we engage? Explore the three pillars of our practice.
                    </p>
                    <Link
                        href="/services"
                        className="group shrink-0 inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white font-bold rounded-2xl hover:border-white/30 hover:bg-white/5 transition-all"
                    >
                        Our Services
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
