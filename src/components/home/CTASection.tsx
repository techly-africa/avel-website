"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { contentService } from "@/services/contentService";

export default function CTASection({
    title: initialTitle = "Ready to engineer resilience?",
    subtitle: initialSubtitle = "Secure your digital future with institutional-grade advisory and engineering.",
    ctaText = "Book a Consultation"
}) {
    const [content, setContent] = useState({
        title: initialTitle,
        subtitle: initialSubtitle
    });

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await contentService.getContent('cta_section');
                if (data?.data) {
                    setContent(data.data);
                }
            } catch (error: any) {
                console.error("CTA Content Fetch Error:", error?.message || error);
            }
        };
        fetchContent();
    }, []);

    return (
        <section className="py-32 px-6 bg-midnight relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="p-12 md:p-20 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            {content.title}
                        </h2>
                        <p className="text-white/50 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light">
                            {content.subtitle}
                        </p>
                        <button
                            className="group relative inline-flex items-center space-x-3 px-10 py-5 rounded-2xl bg-white text-midnight font-bold transition-all hover:bg-gold-accent hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] active:scale-95 text-lg"
                            onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                        >
                            <span>{ctaText}</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
