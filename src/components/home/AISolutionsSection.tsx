"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, MessageSquare, Database, Shield } from "lucide-react";

const solutions = [
    {
        icon: MessageSquare,
        label: "AI Discovery & Education",
        detail: "We cut through the noise. We sit with your leadership team to audit your data, find real ROI opportunities, and build a safe strategy to adopt AI without the risk."
    },
    {
        icon: Database,
        label: "Chat With Your Own Data",
        detail: "We build private intelligence networks that allow your employees to instantly search, summarize, and securely chat with years of your own company documents."
    },
    {
        icon: Brain,
        label: "Automate Daily Tasks",
        detail: "We build smart software that goes beyond answering questions. Our custom logic can autonomously execute repetitive back-office tasks, saving your team thousands of hours."
    },
    {
        icon: Shield,
        label: "100% Secure & Local",
        detail: "African businesses are terrified of data leakage. We build 'Sovereign AI' on local infrastructure, ensuring your secrets never feed public AI tools like ChatGPT."
    },
];

export default function AISolutionsSection() {
    return (
        <section className="py-24 px-6 border-t border-white/[0.04] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.05)_0%,_transparent_65%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="rounded-3xl border border-blue-500/20 bg-white/[0.02] p-10 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-widest text-blue-400 mb-8">
                                <Brain size={12} />
                                Transformative AI Solutions
                            </div>
                            <h2
                                className="font-bold text-white tracking-tight leading-tight mb-6"
                                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                            >
                                Don&apos;t buy generic AI.
                                <br />
                                <span className="text-white/30 italic font-serif font-normal">Build your own.</span>
                            </h2>
                            <p className="text-white/45 text-lg leading-relaxed font-light mb-10">
                                We sit between the massive power of global models like Anthropic and the strict security needs of African business operations. We build your proprietary advantage locally, so you don&apos;t have to rely on generic public tools or risk your sovereign data.
                            </p>
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-bold rounded-2xl hover:bg-white hover:text-midnight transition-all hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] active:scale-95"
                            >
                                Discuss Your AI Strategy
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Right: Solutions grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="space-y-4"
                        >
                            <p className="text-xs font-bold text-white/25 uppercase tracking-[0.25em] mb-6">What We Build</p>
                            {solutions.map((a, i) => (
                                <motion.div
                                    key={a.label}
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.08 }}
                                    className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 transition-colors"
                                >
                                    <div className="text-blue-400/50 mt-1 shrink-0">
                                        <a.icon size={20} />
                                    </div>
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
