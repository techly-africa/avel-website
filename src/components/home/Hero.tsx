"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const openBooking = () => window.dispatchEvent(new CustomEvent("open-booking"));

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-electric-blue/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-electric-blue/5 border border-electric-blue/10 px-4 py-1.5 rounded-full mb-8">
                            <ShieldCheck className="text-electric-blue" size={16} />
                            <span className="text-electric-blue text-sm font-bold tracking-wide uppercase">
                                Compliance by Design
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-midnight leading-[1.1] mb-8">
                            Clarity-first technology delivery for <span className="text-electric-blue">regulated ecosystems.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-midnight/60 leading-relaxed mb-10 max-w-2xl">
                            AVEL Africa helps organizations ship secure, compliant digital products—without the risk, drift, or rework common in complex implementations.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={openBooking}
                                className="w-full sm:w-auto bg-electric-blue text-midnight px-8 py-4 rounded-2xl font-bold shadow-xl shadow-electric-blue/20 hover:shadow-electric-blue/30 hover:translate-y-[-2px] transition-all flex items-center justify-center group"
                            >
                                Schedule a Call
                                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <Link
                                href="/grc#assessment"
                                className="w-full sm:w-auto bg-white border border-gray-200 text-midnight px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all text-center"
                            >
                                Request a GRC Assessment
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Illustration / Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block absolute top-0 right-0 w-1/3 h-full"
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="w-[400px] h-[500px] bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 glass flex flex-col">
                            <div className="w-12 h-1.5 bg-gray-100 rounded-full mb-8 self-center" />
                            <div className="space-y-6">
                                <div className="h-4 bg-gray-50 rounded-full w-3/4 animate-pulse" />
                                <div className="h-4 bg-gray-50 rounded-full w-1/2 animate-pulse" />
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="h-24 bg-electric-blue/5 rounded-2xl border border-electric-blue/10" />
                                    <div className="h-24 bg-soft-teal/5 rounded-2xl border border-soft-teal/10" />
                                </div>
                                <div className="h-32 bg-gray-50 rounded-2xl border border-gray-100" />
                                <div className="h-12 bg-midnight/5 rounded-xl" />
                            </div>
                            <div className="mt-auto flex justify-center">
                                <div className="w-12 h-12 bg-electric-blue rounded-2xl shadow-lg shadow-electric-blue/20 flex items-center justify-center">
                                    <span className="text-midnight font-black text-xl">A</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 glass-dark p-6 rounded-3xl shadow-xl max-w-[200px]"
                        >
                            <p className="text-white text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Audit Status</p>
                            <div className="flex items-center text-emerald-400 font-bold">
                                <CheckCircle2 size={16} className="mr-2" />
                                <span>Compliant</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CheckCircle2({ size, className }: { size: number; className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
