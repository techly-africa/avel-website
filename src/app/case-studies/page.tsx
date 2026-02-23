"use client";

import React, { useState } from "react";
import { caseStudies } from "@/lib/data/case-studies";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const allTags = ["All", ...Array.from(new Set(caseStudies.flatMap(cs => cs.tags)))];

export default function CaseStudiesPage() {
    const [activeTag, setActiveTag] = useState("All");

    const filteredStudies = activeTag === "All"
        ? caseStudies
        : caseStudies.filter(cs => cs.tags.includes(activeTag));

    return (
        <div className="flex flex-col">
            <section className="pt-32 pb-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-midnight tracking-tight mb-8">
                            Stories of <span className="text-electric-blue">delivery.</span>
                        </h1>
                        <p className="text-xl text-midnight/60 leading-relaxed">
                            We focus on high-stakes interventions where clarity and compliance are the difference between success and failure. Read how we've helped teams stabilize and scale.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-y border-gray-100 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center space-x-4 overflow-x-auto no-scrollbar">
                    <Filter size={18} className="text-midnight/40 shrink-0" />
                    <div className="flex items-center space-x-2">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                                    activeTag === tag
                                        ? "bg-midnight text-white"
                                        : "bg-neutral-bg text-midnight/40 hover:text-midnight"
                                )}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24 px-6 bg-neutral-bg min-h-[600px]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredStudies.map((cs) => (
                                <motion.div
                                    key={cs.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col group"
                                >
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {cs.tags.map(t => (
                                            <span key={t} className="text-[10px] font-black uppercase tracking-widest text-electric-blue bg-electric-blue/5 px-2.5 py-1 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-2xl font-bold text-midnight mb-4 tracking-tight leading-tight group-hover:text-electric-blue transition-colors">
                                        {cs.title}
                                    </h2>
                                    <p className="text-midnight/60 text-sm leading-relaxed mb-8 flex-grow">
                                        {cs.summary}
                                    </p>
                                    <Link
                                        href={`/case-studies/${cs.slug}`}
                                        className="flex justify-between items-center group/btn"
                                    >
                                        <span className="text-sm font-bold text-midnight">Read Story</span>
                                        <div className="w-10 h-10 bg-neutral-bg rounded-xl flex items-center justify-center text-midnight group-hover/btn:bg-electric-blue group-hover/btn:text-white transition-all">
                                            <ArrowRight size={18} />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
