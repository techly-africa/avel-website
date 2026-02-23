"use client";

import React, { useState } from "react";
import { GraduationCap, CheckCircle2, ArrowRight, Loader2, BookOpen, Award, BarChart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { leadService } from "@/services/leadService";

const curricula = [
    { title: "Product Strategy", description: "From PRD definition to market alignment." },
    { title: "Engineering Excellence", description: "Architecture, security, and delivery best practices." },
    { title: "Compliance Core", description: "Understanding GRC, risk, and regulatory controls." },
    { title: "Data & Insights", description: "Reconciliation, reporting, and ledger governance." },
];

export default function AvelVarsityPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        await leadService.saveLead({
            type: "waitlist",
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            data: {
                interest: formData.get("interest"),
            }
        });

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-neutral-bg">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="w-16 h-16 bg-soft-teal rounded-2xl flex items-center justify-center text-midnight mx-auto mb-8 shadow-lg">
                            <GraduationCap size={32} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-midnight tracking-tight mb-8">
                            Upskill teams with <br /> <span className="text-electric-blue">structured journeys.</span>
                        </h1>
                        <p className="text-xl text-midnight/60 leading-relaxed mb-10 max-w-2xl mx-auto">
                            AVEL Varsity provides high-intensity training programs, assessments, and certifications designed to build technical and compliance excellence in your workforce.
                        </p>
                        <a href="#waitlist" className="bg-midnight text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:translate-y-[-2px] transition-all inline-block">Join the Waitlist</a>
                    </motion.div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">The Curriculum</h2>
                            <h3 className="text-4xl font-bold text-midnight mb-8 tracking-tight">Structured learning paths for <br /> modern institutional needs.</h3>
                            <p className="text-lg text-midnight/60 leading-relaxed mb-12">
                                Our programs are not just videos. They are cohort-based journeys with real-world case studies, hands-on labs, and certification exams that matter to regulators.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {curricula.map((item) => (
                                    <div key={item.title} className="p-6 rounded-2xl bg-neutral-bg border border-gray-100">
                                        <h4 className="font-bold text-midnight mb-2">{item.title}</h4>
                                        <p className="text-sm text-midnight/60">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            {[
                                { title: "Skill Analytics", desc: "Detailed dashboards for HR and L&D leaders to track team progress.", icon: BarChart },
                                { title: "Certifications", desc: "Verifiable digital credentials for compliance and engineering.", icon: Award },
                                { title: "Interactive Labs", desc: "Hands-on environments to test compliance and security configs.", icon: BookOpen },
                                { title: "Cohort Networks", desc: "Connect with peers building in similar regulated spaces.", icon: Users },
                            ].map((f) => (
                                <div key={f.title} className="flex items-start p-8 bg-neutral-bg rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-electric-blue mr-6 shrink-0 shadow-sm">
                                        <f.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-midnight mb-2">{f.title}</h4>
                                        <p className="text-sm text-midnight/60">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Waitlist Section */}
            <section id="waitlist" className="py-24 px-6 bg-soft-teal/10 scroll-mt-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-soft-teal/20 text-center">
                        {!isSuccess ? (
                            <>
                                <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-4 tracking-tight">Join the Waitlist</h2>
                                <p className="text-lg text-midnight/60 mb-10 max-w-sm mx-auto">
                                    Be the first to know when our next cohort opens. Early access includes a complimentary skill audit for your team.
                                </p>
                                <form onSubmit={handleWaitlistSubmit} className="space-y-4 max-w-md mx-auto">
                                    <input required name="name" type="text" placeholder="Full Name" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-soft-teal transition-all" />
                                    <input required name="email" type="email" placeholder="Work Email" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-soft-teal transition-all" />
                                    <select required name="interest" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none border-none focus:ring-2 focus:ring-soft-teal transition-all">
                                        <option value="">Primary Interest</option>
                                        <option value="Product">Product Strategy</option>
                                        <option value="Engineering">Engineering Excellence</option>
                                        <option value="Compliance">Compliance & GRC</option>
                                        <option value="Data">Data & Analytics</option>
                                    </select>
                                    <button type="submit" disabled={isSubmitting} className="w-full bg-midnight text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center space-x-2 disabled:opacity-70">
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : <><span>Apply for Early Access</span> <ArrowRight size={20} /></>}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="py-20 flex flex-col items-center">
                                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-8">
                                    <CheckCircle2 size={44} />
                                </div>
                                <h2 className="text-4xl font-bold text-midnight mb-4 tracking-tight">You're on the list!</h2>
                                <p className="text-lg text-midnight/60 max-w-sm mx-auto mb-10">
                                    Thank you for your interest. We'll send you an invitation once we begin accepting candidates for the next cohort.
                                </p>
                                <div className="w-full h-1.5 bg-soft-teal/20 rounded-full overflow-hidden max-w-md">
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
