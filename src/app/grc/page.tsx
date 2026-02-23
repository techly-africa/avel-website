"use client";

import React, { useState } from "react";
import { ShieldCheck, Target, AlertTriangle, FileText, Users, Lock, CheckCircle2, ArrowRight, Loader2, Info, Award, Zap, Trophy } from "lucide-react";
import GRCBadge from "@/components/ui/GRCBadge";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { leadService } from "@/services/leadService";

const modules = [
    {
        title: "Governance",
        description: "Definition of policies, RACI matrices, decision logs, and change control procedures.",
        icon: FileText,
    },
    {
        title: "Risk Management",
        description: "Active risk registers, scoring, treatment plans, and continuous impact assessments.",
        icon: AlertTriangle,
    },
    {
        title: "Compliance",
        description: "Control mapping, evidence collection playbooks, and internal audit readiness.",
        icon: ShieldCheck,
    },
    {
        title: "Vendor & 3rd Party",
        description: "Due diligence, risk scoring for partners, and supply chain security governance.",
        icon: Users,
    },
    {
        title: "Security Baselines",
        description: "IAM strategies, logging requirements, and incident response playbooks.",
        icon: Lock,
    },
    {
        title: "Data Protection",
        description: "DPIA implementation, retention policies, and cross-border data flow controls.",
        icon: Target,
    },
];

const deliverables = [
    "Custom GRC Operating Model",
    "Tailored Control Library & Mapping",
    "Step-by-step Evidence Playbooks",
    "Quarterly Strategic Risk Reviews",
    "Pre-Audit Preparation Pack",
];


export default function GRCPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [consentChecked, setConsentChecked] = useState(false);

    const handleAssessmentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        await leadService.saveLead({
            type: "grc_assessment",
            name: formData.get("company") as string, // Using company as name principal
            email: formData.get("email") as string,
            company: formData.get("company") as string,
            industry: formData.get("industry") as string,
            message: formData.get("message") as string,
            data: {
                staffSize: formData.get("staffSize"),
            }
        });

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-midnight text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center space-x-2 bg-soft-teal/10 border border-soft-teal/20 px-4 py-1.5 rounded-full mb-8">
                            <span className="text-soft-teal text-sm font-bold tracking-wide uppercase">Operational Compliance</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            GRC as a Service — <br /> <span className="text-soft-teal text-opacity-80">Compliance that scales.</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-10">
                            Operational compliance without slowing delivery. We integrate governance directly into your technical lifecycle, ensuring audit readiness at every deploy.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="#assessment"
                                className="w-full sm:w-auto bg-white text-midnight px-8 py-4 rounded-2xl font-bold transition-all text-center hover:bg-gray-100 shadow-xl"
                            >
                                Request an Assessment
                            </a>
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                                className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all text-center"
                            >
                                Talk to an Expert
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Problem & Offer */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">The Challenge</h2>
                        <h3 className="text-4xl font-bold text-midnight mb-8 tracking-tight">The high cost of policy drift.</h3>
                        <p className="text-lg text-midnight/60 leading-relaxed mb-8">
                            In regulated ecosystems, compliance is often treated as a yearly hurdle rather than a continuous state. This leads to fragmented controls, security surprises, and expensive rework during audits.
                        </p>
                        <div className="space-y-4">
                            <div className="flex p-6 rounded-2xl bg-red-50 border border-red-100">
                                <AlertTriangle className="text-red-500 mr-4 shrink-0" size={24} />
                                <p className="text-red-900 font-medium italic">"Fragmented controls lead to 14.5% annual loss in delivery efficiency due to compliance friction."</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-bg p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-midnight mb-8">The Continuous Solution</h3>
                        <div className="space-y-6">
                            {[
                                "Unified control management across product and ops.",
                                "Automated evidence logs mapped to legal frameworks.",
                                "Executive risk visibility with actionable treatment plans.",
                                "Dedicated GRC lead for half the cost of a full-time hire."
                            ].map((item, id) => (
                                <div key={id} className="flex items-start">
                                    <div className="w-6 h-6 bg-electric-blue/10 rounded-full flex items-center justify-center text-electric-blue mr-4 shrink-0 mt-1">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <p className="text-midnight/70 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-10 border-t border-gray-200">
                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />)}
                                </div>
                                <p className="text-sm text-midnight/40 font-bold">Recommended by risk leaders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Grid */}
            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">Service Modules</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-midnight tracking-tight">Modular governance for every layer.</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map((m) => (
                            <div key={m.title} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all">
                                <div className="w-12 h-12 bg-neutral-bg rounded-xl flex items-center justify-center text-electric-blue mb-8">
                                    <m.icon size={24} />
                                </div>
                                <h4 className="text-2xl font-bold text-midnight mb-4">{m.title}</h4>
                                <p className="text-midnight/60 leading-relaxed mb-0">
                                    {m.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GRC Certification Section */}
            <section className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -top-20 -left-20 w-80 h-80 bg-soft-teal/5 rounded-full blur-[100px] pointer-events-none" />
                            <div className="bg-neutral-bg p-12 rounded-[4rem] border border-gray-100 flex flex-col items-center text-center shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />

                                <GRCBadge size="lg" className="mb-10" />

                                <h3 className="text-3xl font-bold text-midnight mb-4">The AVEL GRC Standard</h3>
                                <p className="text-midnight/60 leading-relaxed mb-8 max-w-sm">
                                    Our certification isn't just a badge—it's institutional proof of operational governance, risk resilience, and continuous compliance.
                                </p>

                                <div className="grid grid-cols-2 gap-4 w-full text-left">
                                    <div className="bg-white p-4 rounded-2xl border border-gray-100">
                                        <Zap size={20} className="text-electric-blue mb-2" />
                                        <p className="text-[10px] font-black uppercase tracking-widest text-midnight/40 mb-1">Audit Score</p>
                                        <p className="text-lg font-bold text-midnight">99.8%</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-gray-100">
                                        <Trophy size={20} className="text-soft-teal mb-2" />
                                        <p className="text-[10px] font-black uppercase tracking-widest text-midnight/40 mb-1">Status</p>
                                        <p className="text-lg font-bold text-midnight">Verified</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">Institutional Trust</h2>
                            <h3 className="text-4xl md:text-6xl font-bold text-midnight mb-8 tracking-tight">Earn the badge that means business.</h3>
                            <p className="text-xl text-midnight/60 leading-relaxed mb-10">
                                We help you build a GRC posture that is both transparent and defensible. Working towards the AVEL GRC Certification signals to partners and investors that your governance is baked into your code.
                            </p>

                            <div className="space-y-8 mb-12">
                                {[
                                    { title: "Governance Assessment", desc: "A deep-dive audit of your current policies and control logs." },
                                    { title: "Remediation & Mapping", desc: "Closing gaps and mapping controls to AVEL standards." },
                                    { title: "Continuous Verification", desc: "Live monitoring to ensure you stay above the certification bar." }
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start space-x-6">
                                        <div className="w-10 h-10 bg-midnight text-white rounded-full flex items-center justify-center font-bold shrink-0">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-midnight mb-1">{step.title}</h4>
                                            <p className="text-midnight/60">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <button
                                    onClick={() => document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" })}
                                    className="px-8 py-5 bg-midnight text-white rounded-3xl font-bold hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
                                >
                                    <span>Start Certification Journey</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Assessment Section */}
            <section id="assessment" className="py-24 px-6 bg-neutral-bg scroll-mt-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
                        {!isSuccess ? (
                            <>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-4 tracking-tight">Request a GRC Assessment</h2>
                                    <p className="text-lg text-midnight/60">
                                        Tell us about your organization and current posture. We'll provide a preliminary scope and risk outlook.
                                    </p>
                                </div>
                                <form onSubmit={handleAssessmentSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input required name="company" type="text" placeholder="Company Name" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-electric-blue transition-all" />
                                        <select required name="industry" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none border-none focus:ring-2 focus:ring-electric-blue transition-all">
                                            <option value="">Industry Segment</option>
                                            <option value="Fintech">Fintech / Payments</option>
                                            <option value="Banking">Banking</option>
                                            <option value="PublicSector">Public Sector</option>
                                            <option value="Logistics">Logistics / Mobility</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input required name="email" type="email" placeholder="Work Email" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-electric-blue transition-all" />
                                        <select required name="staffSize" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none border-none focus:ring-2 focus:ring-electric-blue transition-all">
                                            <option value="">Staff Size</option>
                                            <option value="1-50">1-50 employees</option>
                                            <option value="51-200">51-200 employees</option>
                                            <option value="201-1000">201-1000 employees</option>
                                            <option value="1000+">1000+ employees</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-sm font-bold text-midnight/70 ml-2">Current Regulatory Pain Points</p>
                                        <textarea name="message" rows={4} placeholder="e.g. Preparing for SOC2, managing license requirements, vendor risk drift..." className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-electric-blue transition-all resize-none"></textarea>
                                    </div>

                                    <div className="flex items-start space-x-3 p-1">
                                        <div className="relative flex items-center h-5">
                                            <input
                                                id="gdpr-consent-assessment"
                                                required
                                                type="checkbox"
                                                checked={consentChecked}
                                                onChange={(e) => setConsentChecked(e.target.checked)}
                                                className="w-4 h-4 text-electric-blue border-gray-300 rounded focus:ring-electric-blue accent-electric-blue cursor-pointer"
                                            />
                                        </div>
                                        <div className="text-sm">
                                            <label htmlFor="gdpr-consent-assessment" className="text-midnight/60 leading-relaxed cursor-pointer select-none">
                                                I agree to the processing of my data in accordance with the <a href="/privacy" className="text-electric-blue hover:underline">Privacy Policy</a>.
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" disabled={isSubmitting || !consentChecked} className="w-full bg-midnight text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed">
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : <><span>Request Preliminary Scope</span> <ArrowRight size={20} /></>}
                                    </button>
                                    <p className="text-center text-xs text-midnight/40 font-bold uppercase tracking-widest mt-6 italic">Secure & Confidential • Response within 24 Hours</p>
                                </form>
                            </>
                        ) : (
                            <div className="py-20 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-8">
                                    <CheckCircle2 size={44} />
                                </div>
                                <h2 className="text-4xl font-bold text-midnight mb-4 tracking-tight">Assessment Request Sent!</h2>
                                <p className="text-lg text-midnight/60 max-w-sm mx-auto mb-10">
                                    Our GRC leads will review your info and get back to you with a preliminary scope and next steps for your assessment.
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
