"use client";

import React, { useState } from "react";
import { AlertOctagon, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function RapidResponsePage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-neutral-bg flex flex-col pb-24">
            <section className="pt-32 pb-16 px-6 bg-midnight text-white relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -ml-[400px] w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10 text-center">
                    <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-400 mx-auto mb-8">
                        <AlertOctagon size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Rapid Technical <span className="text-red-400">Distress Response</span>
                    </h1>
                    <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
                        Don&apos;t let broken pipelines, rogue legacy systems, or AWOL developers stall your business. Engage our Forward Deployed Engineers with a 48-Hour SLA Guarantee.
                    </p>
                </div>
            </section>

            <section className="px-6 -mt-8 relative z-20">
                <div className="max-w-3xl mx-auto">
                    {submitted ? (
                        <div className="bg-white rounded-[2rem] p-12 shadow-xl border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={40} />
                            </div>
                            <h2 className="text-3xl font-bold text-midnight mb-4">Distress Signal Received</h2>
                            <p className="text-lg text-midnight/60 mb-8 max-w-lg mx-auto">
                                Our Rapid Response team has been notified. We will review your incident details and a principal engineer will be in touch shortly to initiate triage.
                            </p>
                            <Link href="/" className="inline-flex bg-midnight text-white px-8 py-4 rounded-xl font-bold hover:bg-midnight/90 transition-colors">
                                Return to Homepage
                            </Link>
                        </div>
                    ) : (
                        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100">
                            <div className="mb-10 pb-8 border-b border-gray-100">
                                <h2 className="text-2xl font-bold text-midnight mb-4">Incident Intake Form</h2>
                                <p className="text-midnight/60">
                                    Provide as much context as possible. The more details we have, the faster our Forward Deployed Engineers can assess and recover your infrastructure.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-midnight mb-2">Full Name</label>
                                        <input type="text" required className="w-full bg-neutral-bg border border-gray-200 rounded-xl px-4 py-3 text-midnight focus:outline-none focus:border-midnight transition-colors" placeholder="Jane Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-midnight mb-2">Company / Organization</label>
                                        <input type="text" required className="w-full bg-neutral-bg border border-gray-200 rounded-xl px-4 py-3 text-midnight focus:outline-none focus:border-midnight transition-colors" placeholder="Acme Corp" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-midnight mb-2">Work Email</label>
                                        <input type="email" required className="w-full bg-neutral-bg border border-gray-200 rounded-xl px-4 py-3 text-midnight focus:outline-none focus:border-midnight transition-colors" placeholder="jane@acme.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-midnight mb-2">Contact Number</label>
                                        <input type="tel" required className="w-full bg-neutral-bg border border-gray-200 rounded-xl px-4 py-3 text-midnight focus:outline-none focus:border-midnight transition-colors" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-midnight mb-2">Nature of the Emergency</label>
                                    <select required defaultValue="" className="w-full bg-neutral-bg border border-gray-200 rounded-xl px-4 py-3 text-midnight focus:outline-none focus:border-midnight transition-colors">
                                        <option value="" disabled>Select the primary issue...</option>
                                        <option value="downtime">System / Server Downtime</option>
                                        <option value="pipeline">Broken Deployment Pipelines</option>
                                        <option value="integration">Failing Integrations / APIs</option>
                                        <option value="abandoned">Abandoned Codebase / Unavailable Developer</option>
                                        <option value="security">Security / Data Breach Incident</option>
                                        <option value="other">Other Technical Crisis</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-midnight mb-2">Describe the Distress Situation</label>
                                    <textarea required rows={5} className="w-full bg-neutral-bg border border-gray-200 rounded-xl px-4 py-3 text-midnight focus:outline-none focus:border-midnight transition-colors resize-none" placeholder="Provide details about what went down, the impact, and access availability..." />
                                </div>

                                <div className="pt-6">
                                    <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 group shadow-lg shadow-red-600/20">
                                        <span>Submit Distress Signal for Immediate Triage</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>

                            <div className="mt-8 bg-neutral-bg p-6 rounded-2xl flex items-start space-x-4 border border-gray-100/50">
                                <ShieldCheck size={24} className="text-midnight/40 shrink-0 mt-1" />
                                <p className="text-sm text-midnight/60">
                                    All submissions are kept strictly confidential. Our Forward Deployed Engineers operate under strict NDAs to ensure your infrastructure and commercial secrets remain secure during recovery operations.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
