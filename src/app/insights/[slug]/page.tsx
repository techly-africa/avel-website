"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { insightService, Insight } from "@/services/insightService";

export default function InsightDetailPage() {
    const { slug } = useParams();
    const router = useRouter();
    const [insight, setInsight] = useState<Insight | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInsight = async () => {
            try {
                const data = await insightService.getInsightBySlug(slug as string);
                setInsight(data);
            } catch (error: any) {
                console.error("Insight Detail Fetch Error:", error?.message || error);
            } finally {
                setLoading(false);
            }
        };
        fetchInsight();
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen bg-midnight flex items-center justify-center">
            <div className="animate-pulse text-gold-accent font-serif italic text-2xl">Retrieving Intel...</div>
        </div>
    );

    if (!insight) return (
        <div className="min-h-screen bg-midnight flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Article not found.</h1>
            <Link href="/insights" className="text-gold-accent hover:underline flex items-center font-bold">
                <ArrowLeft size={18} className="mr-2" /> Back to Insights
            </Link>
        </div>
    );

    return (
        <div className="bg-midnight min-h-screen text-white pt-40 pb-32 px-6">
            <div className="max-w-4xl mx-auto">
                <Link href="/insights" className="inline-flex items-center text-white/30 hover:text-white transition-all mb-12 font-bold text-sm tracking-widest uppercase">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Insights
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center space-x-4 mb-8">
                        <span className="text-xs font-bold text-gold-accent px-3 py-1 bg-gold-accent/10 border border-gold-accent/20 rounded-full uppercase tracking-widest">
                            {insight.category}
                        </span>
                        <div className="flex items-center text-white/40 text-xs">
                            <Clock size={12} className="mr-1" />
                            <span>{insight.date}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">
                        {insight.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-16 italic border-l-4 border-gold-accent/30 pl-8">
                        {insight.description}
                    </p>

                    <div className="prose prose-invert prose-gold max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {insight.content}
                        </ReactMarkdown>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
