"use client";

import React, { useState } from "react";
import { Zap, Shield, Search, Users, ArrowRight, Loader2, CheckCircle2, Globe, Archive } from "lucide-react";
import { motion } from "framer-motion";
import { leadService } from "@/services/leadService";

export default function RbiPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        await leadService.saveLead({
            type: "partnership",
            name: formData.get("organization") as string,
            email: formData.get("email") as string,
            company: formData.get("organization") as string,
            message: formData.get("message") as string,
        });

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-midnight text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-soft-teal/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-soft-teal mx-auto mb-8 backdrop-blur-sm">
                            <Zap size={40} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Rwanda Blockchain <br /> <span className="text-soft-teal">Initiative.</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
                            Exploring public infrastructure for verifiable records, identity, and trust systems. An advisory and exploratory initiative focused on applied pilots for the African continent.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#partner" className="w-full sm:w-auto bg-white text-midnight px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-gray-100 transition-all">Partner with RBI</a>
                            <div className="text-xs font-bold text-white/40 uppercase tracking-widest bg-white/5 px-6 py-5 rounded-2xl border border-white/10">Research • Policy • Prototypes</div>
                        </div>
                        <p className="mt-12 text-xs text-white/30 italic max-w-lg mx-auto">
                            Disclaimer: Exploratory initiative; not a token sale; not investment advice; focused on research and applied pilots.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pillars */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { title: "Research & Policy", desc: "Leading the dialogue on how public infrastructure can support national digital goals.", icon: Globe },
                            { title: "Prototypes & Sandboxes", desc: "Applied technical pilots for identity, title records, and verifiable credentials.", icon: Archive },
                            { title: "Ecosystem Partnerships", desc: "Connecting global technology leaders with regional institutional stakeholders.", icon: Users },
                        ].map(p => (
                            <div key={p.title} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-neutral-bg rounded-2xl flex items-center justify-center text-midnight mb-8">
                                    <p.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-midnight mb-4">{p.title}</h3>
                                <p className="text-midnight/60 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Section */}
            <section id="partner" className="py-24 px-6 bg-neutral-bg scroll-mt-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
                        {!isSuccess ? (
                            <>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-4">Partner with RBI</h2>
                                    <p className="text-lg text-midnight/60">
                                        We're looking for research partners, technology providers, and institutional stakeholders to collaborate on applied pilots.
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input required name="organization" type="text" placeholder="Organization" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-midnight transition-all" />
                                        <input required name="email" type="email" placeholder="Contact Email" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-midnight transition-all" />
                                    </div>
                                    <textarea name="message" rows={4} placeholder="How would you like to collaborate with the Rwanda Blockchain Initiative?" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-midnight transition-all resize-none"></textarea>
                                    <button type="submit" disabled={isSubmitting} className="w-full bg-midnight text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center space-x-2 disabled:opacity-70">
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : <><span>Submit Partnership Inquiry</span> <ArrowRight size={20} /></>}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="py-20 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-8">
                                    <CheckCircle2 size={44} />
                                </div>
                                <h2 className="text-4xl font-bold text-midnight mb-4">Inquiry Received</h2>
                                <p className="text-lg text-midnight/60 max-w-sm mx-auto mb-10">
                                    Thank you for reaching out. A member of our initiative team will review your inquiry and be in touch to discuss potential collaboration.
                                </p>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden max-w-md">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 4 }} className="h-full bg-emerald-500" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
