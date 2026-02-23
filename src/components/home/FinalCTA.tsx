"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
    const openBooking = () => window.dispatchEvent(new CustomEvent("open-booking"));

    return (
        <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto bg-midnight rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                {/* Visual accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-electric-blue/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ship with confidence.
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        Ready to stabilize your digital product lifecycle and achieve operational clarity? Let's discuss your next milestone.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            onClick={openBooking}
                            className="w-full sm:w-auto bg-electric-blue text-midnight px-10 py-5 rounded-2xl font-bold text-lg hover:bg-electric-blue/90 hover:translate-y-[-2px] transition-all shadow-xl shadow-electric-blue/20 flex items-center justify-center group"
                        >
                            Schedule a Call
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            href="/grc#assessment"
                            className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
                        >
                            Request a GRC Assessment
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
