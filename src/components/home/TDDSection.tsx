"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileSearch2 } from "lucide-react";

const audiences = [
    { label: "Investors & VCs", detail: "Validate technical assets before committing capital." },
    { label: "Strategic Partners", detail: "Assess integration readiness and engineering quality." },
    { label: "Licensing Bodies", detail: "Verify compliance posture and system integrity." },
    { label: "Contract Awarding Committees", detail: "Independently evaluate vendor technical credibility." },
];

export default function TDDSection() {
    return (
        <section className="py-24 px-6 border-t border-white/[0.04] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_transparent_65%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="rounded-3xl border border-gold-accent/20 bg-white/[0.02] p-10 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-xs font-bold uppercase tracking-widest text-gold-accent mb-8">
                                <FileSearch2 size={12} />
                                Technical Due Diligence
                            </div>
                            <h2
                                className="font-bold text-white tracking-tight leading-tight mb-6"
                                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                            >
                                Before you invest, award, or partner —
                                <br />
                                <span className="text-white/30 italic font-serif font-normal">know exactly what you are buying.</span>
                            </h2>
                            <p className="text-white/45 text-lg leading-relaxed font-light mb-10">
                                We provide independent, rigorous technical assessment of digital assets, product architecture, and engineering teams — delivering the clarity that high-stakes decisions demand.
                            </p>
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold-accent text-midnight font-bold rounded-2xl hover:bg-white transition-all hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] active:scale-95"
                            >
                                Request a Due Diligence Engagement
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Right: audience grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="space-y-4"
                        >
                            <p className="text-xs font-bold text-white/25 uppercase tracking-[0.25em] mb-6">Who commissions this</p>
                            {audiences.map((a, i) => (
                                <motion.div
                                    key={a.label}
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.08 }}
                                    className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-gold-accent/20 transition-colors"
                                >
                                    <span className="text-gold-accent/40 text-xs font-bold font-serif mt-0.5">0{i + 1}</span>
                                    <div>
                                        <p className="text-white font-bold text-sm mb-1">{a.label}</p>
                                        <p className="text-white/35 text-sm font-light">{a.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
