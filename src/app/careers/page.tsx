"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full bg-electric-blue/5 border border-electric-blue/10 mb-8"
                        >
                            <Briefcase size={14} className="text-electric-blue mr-2" />
                            <span className="text-xs font-bold text-electric-blue uppercase tracking-widest">Careers at AVEL</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold text-midnight tracking-tight mb-8 leading-[1.1]">
                            Build the future of <span className="text-electric-blue text-glow">trust.</span>
                        </h1>
                        <p className="text-xl text-midnight/60 leading-relaxed">
                            We're looking for world-class engineers, designers, and thinkers to help us build secure, high-trust technology for Africa's leading organizations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Empty State / Coming Soon */}
            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="max-w-2xl mx-auto p-12 bg-white rounded-[3rem] shadow-2xl border border-gray-100 italic">
                        <h3 className="text-2xl font-bold text-midnight mb-4">No open roles right now.</h3>
                        <p className="text-midnight/60 mb-8">
                            We're always looking for exceptional talent. If you're passionate about GRC, high-trust engineering, or Fintech infrastructure, drop us a line.
                        </p>
                        <a
                            href="mailto:copain@avel.africa"
                            className="inline-flex items-center px-8 py-4 bg-midnight text-white font-bold rounded-2xl hover:translate-y-[-2px] transition-all group"
                        >
                            <span>Send your CV</span>
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
