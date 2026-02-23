"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { caseStudies } from "@/lib/data/case-studies";
import { ArrowLeft, CheckCircle2, ChevronRight, Share2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CaseStudyDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const study = caseStudies.find(cs => cs.slug === slug);

    if (!study) return notFound();

    return (
        <div className="flex flex-col">
            <section className="pt-32 pb-20 px-6 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <Link href="/case-studies" className="inline-flex items-center text-sm font-bold text-midnight/40 hover:text-midnight mb-12 transition-colors">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to all cases
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {study.tags.map(t => (
                            <span key={t} className="text-xs font-black uppercase tracking-widest text-electric-blue bg-electric-blue/5 px-4 py-1.5 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-midnight tracking-tight mb-8 leading-[1.1]">
                        {study.title}
                    </h1>

                    <p className="text-xl text-midnight/60 leading-relaxed italic border-l-4 border-electric-blue pl-8">
                        "{study.summary}"
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="md:col-span-2 space-y-16">
                            <div className="space-y-6">
                                <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest">Context</h2>
                                <p className="text-lg text-midnight/70 leading-relaxed">{study.context}</p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest">The Challenge</h2>
                                <p className="text-lg text-midnight/70 leading-relaxed">{study.challenge}</p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest">Our Approach</h2>
                                <p className="text-lg text-midnight/70 leading-relaxed">{study.approach}</p>
                            </div>
                        </div>

                        <div className="md:col-span-1">
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-32">
                                <h2 className="text-sm font-bold text-midnight uppercase tracking-widest mb-6">Key Outcomes</h2>
                                <ul className="space-y-6">
                                    {study.outcomes.map((o, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle2 size={18} className="text-emerald-500 mr-3 shrink-0 mt-1" />
                                            <span className="text-sm font-bold text-midnight leading-snug">{o}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-12 pt-8 border-t border-gray-100">
                                    <button onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))} className="w-full bg-midnight text-white py-4 rounded-2xl font-bold text-sm shadow-md flex items-center justify-center group">
                                        Book a similar session
                                        <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cross-Link */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-neutral-bg rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold text-midnight mb-4">Interested in our approach?</h2>
                            <p className="text-midnight/60">Every organization has unique risks and challenges. Let's discuss how we can apply our delivery framework to your specific context.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <button onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))} className="bg-midnight text-white px-10 py-5 rounded-2xl font-bold shadow-xl">Schedule a Call</button>
                            <Link href="/services" className="bg-white text-midnight px-10 py-5 rounded-2xl font-bold border border-gray-100 text-center">View Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
