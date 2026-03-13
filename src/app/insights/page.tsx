"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { insightService, Insight } from "@/services/insightService";

export default function InsightsPage() {
    const [insights, setInsights] = useState<Insight[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInsights = async () => {
            try {
                const data = await insightService.getInsights();
                setInsights(data);
            } catch (error: any) {
                console.error("Insights Fetch Error:", error?.message || error);
            } finally {
                setLoading(false);
            }
        };
        fetchInsights();
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
                            Institutional <br />
                            <span className="text-white/50 italic font-serif">Insights.</span>
                        </h1>
                        <p className="text-white/50 text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
                            Technical and strategic perspectives on engineering digital resilience across the continent.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Insights Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 space-y-4">
                            <Loader2 className="animate-spin text-gold-accent" size={40} />
                            <p className="text-white/40 font-serif italic">Gathering intelligence...</p>
                        </div>
                    ) : insights.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {insights.map((insight, index) => (
                                <Link key={insight.id} href={`/insights/${insight.slug}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group p-10 h-full rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-gold-accent/30 transition-all cursor-pointer flex flex-col"
                                    >
                                        <div className="flex justify-between items-start mb-12">
                                            <span className="text-[10px] uppercase tracking-widest font-bold text-gold-accent/60 px-3 py-1 rounded-full border border-gold-accent/20">
                                                {insight.category}
                                            </span>
                                            <ArrowUpRight className="text-white/20 group-hover:text-gold-accent transition-colors" size={24} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-white transition-colors">
                                            {insight.title}
                                        </h3>
                                        <p className="text-white/40 leading-relaxed font-light mb-8 lg:pr-20 flex-grow">
                                            {insight.description}
                                        </p>
                                        <span className="text-xs text-white/20">{insight.date}</span>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-white/10">
                            <p className="text-white/40 mb-4">No insights published yet.</p>
                            <Link href="/insights" className="text-gold-accent hover:underline text-sm font-bold">Refresh</Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
