"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";
import { caseStudyService, CaseStudy } from "@/services/caseStudyService";

export default function CaseStudiesPage() {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const data = await caseStudyService.getCaseStudies();
                setCaseStudies(data);
            } catch (error: any) {
                console.error("Error fetching case studies:", error?.message || error);
            } finally {
                setLoading(false);
            }
        };
        fetchCaseStudies();
    }, []);

    return (
        <div className="bg-midnight text-white min-h-screen">
            {/* Header */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                            Mission <br />
                            <span className="text-white/50 italic font-serif">Delivery.</span>
                        </h1>
                        <p className="text-white/50 text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
                            Case studies of technical resilience and strategic clarity delivered across African institutions and founders.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies List */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 space-y-4">
                            <Loader2 className="animate-spin text-gold-accent" size={40} />
                            <p className="text-white/40 font-serif italic">Reviewing archives...</p>
                        </div>
                    ) : caseStudies.length > 0 ? (
                        <div className="space-y-20">
                            {caseStudies.map((study, index) => (
                                <motion.div
                                    key={study.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-white/5 pb-20 last:border-0"
                                >
                                    <div className="order-2 lg:order-1">
                                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold-accent block mb-6">Case Study</span>
                                        <h3 className="text-3xl md:text-5xl font-bold mb-8 group-hover:text-gold-accent transition-colors">
                                            {study.title}
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide opacity-40">The Challenge</h4>
                                                <p className="text-white/60 leading-relaxed font-light">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-emerald-400 mb-2 uppercase tracking-wide">The Result</h4>
                                                <p className="text-white/80 leading-relaxed font-light">{study.result}</p>
                                            </div>
                                        </div>
                                        <Link href={`/case-studies/${study.slug}`} className="mt-10 inline-flex items-center space-x-2 text-white font-bold group-hover:text-gold-accent transition-colors">
                                            <span>Read Full Case Study</span>
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                    <div className="order-1 lg:order-2 aspect-video rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden relative">
                                        {study.image_url ? (
                                            <img src={study.image_url} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-br from-institutional-navy/50 to-transparent" />
                                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-white/10">
                            <p className="text-white/40">No case studies available yet.</p>
                        </div>
                    )}
                </div>
            </section>

            <CTASection />
        </div>
    );
}
