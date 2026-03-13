"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/home/CTASection";
import { caseStudyService, CaseStudy } from "@/services/caseStudyService";

export default function CaseStudyDetailPage() {
    const { slug } = useParams();
    const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCaseStudy = async () => {
            try {
                const data = await caseStudyService.getCaseStudyBySlug(slug as string);
                setCaseStudy(data);
            } catch (error: any) {
                console.error("Case Study Detail Fetch Error:", error?.message || error);
            } finally {
                setLoading(false);
            }
        };
        fetchCaseStudy();
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen bg-midnight flex items-center justify-center">
            <div className="animate-pulse text-gold-accent font-serif italic text-2xl">Accessing Case Files...</div>
        </div>
    );

    if (!caseStudy) return (
        <div className="min-h-screen bg-midnight flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Case study not found.</h1>
            <Link href="/case-studies" className="text-gold-accent hover:underline flex items-center font-bold">
                <ArrowLeft size={18} className="mr-2" /> Back to Case Studies
            </Link>
        </div>
    );

    return (
        <div className="bg-midnight min-h-screen text-white">
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link href="/case-studies" className="inline-flex items-center text-white/30 hover:text-white transition-all mb-12 font-bold text-sm tracking-widest uppercase">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Case Studies
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold-accent block mb-6">{caseStudy.company}</span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[1.1]">
                                {caseStudy.title}
                            </h1>
                        </motion.div>
                        <div className="aspect-video rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden relative">
                            {caseStudy.image_url ? (
                                <img src={caseStudy.image_url} alt={caseStudy.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-institutional-navy to-midnight flex items-center justify-center">
                                    <CheckCircle2 size={80} className="text-gold-accent/20" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 border-y border-white/5">
                <div className="max-w-4xl mx-auto space-y-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-1">
                            <h3 className="text-sm font-black uppercase tracking-widest text-gold-accent/60 mb-4">The Challenge</h3>
                        </div>
                        <div className="md:col-span-2 text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                            {caseStudy.challenge}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-1">
                            <h3 className="text-sm font-black uppercase tracking-widest text-emerald-400 mb-4">The Delivery</h3>
                        </div>
                        <div className="md:col-span-2 text-xl md:text-2xl text-white/50 leading-relaxed font-light">
                            {caseStudy.result}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
