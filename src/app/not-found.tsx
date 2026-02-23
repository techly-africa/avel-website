"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Mail, ShieldAlert } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-midnight px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-soft-teal/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl w-full text-center relative z-10"
            >
                <div className="w-24 h-24 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center text-electric-blue mx-auto mb-12 backdrop-blur-xl">
                    <ShieldAlert size={48} />
                </div>

                <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tighter">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
                    System path <span className="text-electric-blue">unavailable.</span>
                </h2>

                <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-md mx-auto">
                    The requested resource could not be located within our technical delivery layer. It may have been moved or archived.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white text-midnight px-10 py-5 rounded-2xl font-bold hover:translate-y-[-2px] transition-all shadow-xl"
                    >
                        <Home size={20} />
                        <span>Return Home</span>
                    </Link>

                    <a
                        href="mailto:copain@avel.africa"
                        className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-md"
                    >
                        <Mail size={20} />
                        <span>Contact Support</span>
                    </a>
                </div>

                <div className="mt-20 pt-12 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">
                        AVEL TECHNICAL GOVERNANCE • EST. 2024
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
