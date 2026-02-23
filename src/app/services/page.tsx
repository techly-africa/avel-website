"use client";

import React from "react";
import { Search, PenTool, Cpu, Share2, Database, ShieldCheck, CheckCircle2, Clock, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        id: "diagnosis",
        title: "Technology Risk Diagnosis",
        icon: Search,
        description: "A comprehensive 2-3 week engagement designed to uncover hidden architectural risks, legacy debt, and security gaps before they impact delivery.",
        gets: ["Risk Heatmap", "Technical Debt Audit", "Path-to-Green Roadmap"],
        timeline: "2-3 Weeks",
        idealFor: "CTOs, Technical Directors, M&A Teams",
    },
    {
        id: "design",
        title: "Product & Solution Design",
        icon: PenTool,
        description: "We translate business vision into architecture-grade specifications. No 'drawing on napkins'—we deliver full-spec PRDs and FSDs.",
        gets: ["FSD & PRD Documentation", "API Documentation (OpenAPI)", "System Architecture Diagrams"],
        timeline: "4-6 Weeks",
        idealFor: "Heads of Product, Founders, Program Managers",
    },
    {
        id: "engineering",
        title: "Engineering Delivery",
        icon: Cpu,
        description: "High-performance, multi-tenant engineering for web, mobile, and backend systems. Built with compliance-by-design at its core.",
        gets: ["Production-ready Codebase", "CI/CD Pipeline Setup", "Security Baseline Implementation"],
        timeline: "Variable (Milestone-based)",
        idealFor: "SMEs, Enterprise Innovation Teams",
    },
    {
        id: "integration",
        title: "Integration & API Engineering",
        icon: Share2,
        description: "Specialized engineering for telco, bank, and payment rails. We handle the complex 'glue' between disparate high-trust systems.",
        gets: ["Custom API Gateways", "Bespoke Integrations", "Ecosystem Alignment Report"],
        timeline: "6-10 Weeks",
        idealFor: "Fintechs, Telcos, Banking Institutions",
    },
    {
        id: "data",
        title: "Data & Reconciliation",
        icon: Database,
        description: "Reconciliation is the heart of trust. We build systems that ensure ledger alignment, auditability, and real-time reporting.",
        gets: ["Ledger Management Systems", "Automated Reconciliation Engines", "SLA Monitoring Dashboards"],
        timeline: "8-12 Weeks",
        idealFor: "CFOs, Operations Heads, Compliance Officers",
    },
    {
        id: "security",
        title: "Security & Compliance Engineering",
        icon: ShieldCheck,
        description: "Beyond just firewalls. We build logging, monitoring, and IAM controls directly into your product architecture.",
        gets: ["Control Library (CIS/NIST)", "IAM Strategy & Implementation", "Audit-Ready Trail Logs"],
        timeline: "Ongoing / Modular",
        idealFor: "CISOs, Compliance Teams, Public Sector Units",
    },
];

export default function ServicesPage() {
    const openBooking = () => window.dispatchEvent(new CustomEvent("open-booking"));

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-midnight text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Advising. Building. <span className="text-soft-teal">Governing.</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-10">
                            AVEL Africa provides high-spec technical interventions for organizations that cannot afford delivery drift. We combine strategic advisory with rigorous engineering.
                        </p>
                        <button
                            onClick={openBooking}
                            className="bg-electric-blue text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:translate-y-[-2px] transition-all flex items-center group"
                        >
                            Book a Scoping Call
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-24">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                id={service.id}
                                className={cn(
                                    "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start scroll-mt-32",
                                    idx % 2 !== 0 && "lg:flex-row-reverse"
                                )}
                            >
                                <div className={cn(idx % 2 !== 0 && "lg:order-2")}>
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-electric-blue mb-8">
                                        <service.icon size={32} />
                                    </div>
                                    <h2 className="text-4xl font-bold text-midnight mb-6 tracking-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-midnight/60 leading-relaxed mb-10">
                                        {service.description}
                                    </p>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-sm font-bold text-midnight/40 uppercase tracking-widest mb-4">What you get</h4>
                                            <ul className="grid grid-cols-1 gap-3">
                                                {service.gets.map((item) => (
                                                    <li key={item} className="flex items-center text-midnight font-medium">
                                                        <CheckCircle2 size={18} className="text-emerald-500 mr-3 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className={cn(
                                    "bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 flex flex-col space-y-8",
                                    idx % 2 !== 0 && "lg:order-1"
                                )}>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="p-6 rounded-2xl bg-neutral-bg border border-gray-100">
                                            <div className="flex items-center text-midnight/40 text-xs font-bold uppercase tracking-widest mb-2">
                                                <Clock size={14} className="mr-2" />
                                                Timeline
                                            </div>
                                            <p className="text-lg font-bold text-midnight">{service.timeline}</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-neutral-bg border border-gray-100">
                                            <div className="flex items-center text-midnight/40 text-xs font-bold uppercase tracking-widest mb-2">
                                                <Users size={14} className="mr-2" />
                                                Ideal For
                                            </div>
                                            <p className="text-lg font-bold text-midnight leading-tight">{service.idealFor}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-sm text-midnight/50 italic">
                                            "Interested in this service? Let's discuss your specific requirements and constraints."
                                        </p>
                                        <button
                                            onClick={openBooking}
                                            className="w-full bg-midnight text-white py-4 rounded-2xl font-bold hover:bg-midnight/90 transition-all flex items-center justify-center space-x-2"
                                        >
                                            <span>Request Details</span>
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Call Band */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-3xl md:text-5xl font-bold text-midnight mb-8 tracking-tight">
                        Not sure where to start?
                    </h3>
                    <p className="text-lg text-midnight/60 mb-12 max-w-2xl mx-auto">
                        Book a complimentary 30-minute discovery session. We'll help you map your challenges to the right technical intervention.
                    </p>
                    <button
                        onClick={openBooking}
                        className="bg-midnight text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:translate-y-[-2px] transition-all"
                    >
                        Book Discovery Session
                    </button>
                </div>
            </section>
        </div>
    );
}

// Helper for conditional classes
function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}
