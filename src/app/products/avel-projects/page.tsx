"use client";

import React, { useState } from "react";
import { Layers, CheckCircle2, ArrowRight, Loader2, BarChart3, Clock, Lock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { leadService } from "@/services/leadService";

const features = [
    {
        title: "Portfolio Dashboards",
        description: "Executive visibility across multiple project streams with real-time health metrics.",
        icon: BarChart3,
    },
    {
        title: "Spec-to-Build Traceability",
        description: "Map requirements directly to engineering outputs and compliance evidence.",
        icon: Layers,
    },
    {
        title: "Risk & Change Logs",
        description: "Immutable record of all project risks, treatment plans, and decision history.",
        icon: ShieldCheck,
    },
    {
        title: "Audit-Ready History",
        description: "Export full program history for internal audits or regulatory reviews in minutes.",
        icon: Clock,
    },
];

export default function AvelProjectsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        await leadService.saveLead({
            type: "demo_request",
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            company: formData.get("company") as string,
        });

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-electric-blue/5 border border-electric-blue/10 px-4 py-1.5 rounded-full mb-8">
                            <span className="text-electric-blue text-sm font-bold tracking-wide uppercase">Institutional Tech</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-midnight leading-tight mb-8">
                            Project intelligence for <br /> <span className="text-electric-blue">complex programs.</span>
                        </h1>
                        <p className="text-xl text-midnight/60 leading-relaxed mb-10">
                            AVEL Projects is a delivery governance platform built to provide executive visibility and audit-ready traceability for regulated organizations.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#demo" className="w-full sm:w-auto bg-midnight text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:translate-y-[-2px] transition-all text-center">Request Demo</a>
                            <div className="flex items-center text-sm font-bold text-midnight/40 italic">
                                <Lock size={16} className="mr-2" />
                                Enterprise-grade security baseline
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="hidden lg:block relative"
                    >
                        <div className="w-full aspect-square bg-neutral-bg rounded-[4rem] border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-10 bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="h-6 w-32 bg-gray-50 rounded-full" />
                                    <div className="h-6 w-6 bg-electric-blue rounded-lg" />
                                </div>
                                <div className="space-y-4">
                                    <div className="h-24 bg-gray-50 rounded-2xl w-full" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-24 bg-electric-blue/5 rounded-2xl" />
                                        <div className="h-24 bg-soft-teal/5 rounded-2xl" />
                                    </div>
                                    <div className="h-24 bg-gray-50 rounded-2xl w-full" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full">
                                <div className="w-12 h-12 bg-neutral-bg rounded-xl flex items-center justify-center text-electric-blue mb-6">
                                    <feature.icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-midnight mb-3">{feature.title}</h4>
                                <p className="text-sm text-midnight/60 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-midnight mb-8">Security & Trust</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-neutral-bg p-8 rounded-3xl">
                            <p className="text-sm font-bold text-midnight mb-2">Role-Based Access</p>
                            <p className="text-xs text-midnight/60">Granular permissions for every team member and stakeholder.</p>
                        </div>
                        <div className="bg-neutral-bg p-8 rounded-3xl">
                            <p className="text-sm font-bold text-midnight mb-2">Audit Logs</p>
                            <p className="text-xs text-midnight/60">Every change and decision recorded in a tamper-proof log.</p>
                        </div>
                        <div className="bg-neutral-bg p-8 rounded-3xl">
                            <p className="text-sm font-bold text-midnight mb-2">Data Isolation</p>
                            <p className="text-xs text-midnight/60">Tenant-level data isolation to ensure total confidentiality.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demo Form Section */}
            <section id="demo" className="py-24 px-6 bg-midnight text-white scroll-mt-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[3rem] backdrop-blur-sm">
                        {!isSuccess ? (
                            <>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Request a Demo</h2>
                                    <p className="text-white/60">
                                        See how AVEL Projects can provide the visibility and governance your program needs.
                                    </p>
                                </div>
                                <form onSubmit={handleDemoSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input required name="name" type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-electric-blue transition-all" />
                                        <input required name="email" type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-electric-blue transition-all" />
                                    </div>
                                    <input required name="company" type="text" placeholder="Workplace / Organization" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-electric-blue transition-all" />
                                    <button type="submit" disabled={isSubmitting} className="w-full bg-white text-midnight py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-gray-100 transition-all flex items-center justify-center space-x-2 disabled:opacity-70">
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : <><span>Request Demo Access</span> <ArrowRight size={20} /></>}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="py-20 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-8">
                                    <CheckCircle2 size={44} />
                                </div>
                                <h2 className="text-4xl font-bold mb-4 tracking-tight">Demo Request Sent!</h2>
                                <p className="text-white/60 max-w-sm mx-auto mb-10">
                                    Our product team will reach out within 24 hours to schedule a deep-dive walkthrough.
                                </p>
                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden max-w-md">
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
