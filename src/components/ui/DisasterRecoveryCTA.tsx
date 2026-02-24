"use client";

import React from "react";
import { LifeBuoy, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DisasterRecoveryCTA() {
    return (
        <section className="py-12 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto bg-white border border-red-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-red-500/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="relative z-10 flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                            <LifeBuoy size={20} />
                        </div>
                        <h3 className="text-2xl font-bold text-midnight tracking-tight">Rapid Disaster Recovery Response</h3>
                    </div>
                    <p className="text-midnight/70 text-lg mb-4">
                        It happens, systems go down, developer can&apos;t be found, broken deployment pipelines & integrations.
                    </p>
                    <p className="text-midnight/60 font-medium">
                        Hire our Forward Deployed Engineer for a rapid recovery response. <strong className="text-midnight">48 Hours SLA guarantee.</strong>
                    </p>
                </div>

                <div className="relative z-10 shrink-0 w-full md:w-auto">
                    <Link
                        href="/rapid-response"
                        className="w-full md:w-auto bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 hover:translate-y-[-2px] transition-all flex items-center justify-center group shadow-lg shadow-red-600/20"
                    >
                        Request Emergency Assistance
                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
