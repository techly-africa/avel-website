"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { leadService } from "@/services/leadService";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        type: "contact" as any,
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await leadService.saveLead({
                ...formData,
                type: "contact", // Explicitly setting as contact
            });
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            alert("Error sending inquiry. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-midnight text-white min-h-screen">
            <section className="pt-40 pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">
                                Consult <br />
                                <span className="text-white/50 italic font-serif">the Advisory.</span>
                            </h1>
                            <p className="text-white/50 text-xl max-w-md leading-relaxed font-light mb-16">
                                We specialize in high-stakes technical delivery and strategic resilience. Let's discuss your organization's digital future.
                            </p>

                            <div className="space-y-10">
                                <div className="flex items-start space-x-6">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <Mail className="text-gold-accent" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-2">Direct Inquiry</h4>
                                        <p className="text-white/40 font-light">contact@avel.africa</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <Phone className="text-gold-accent" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-2">Phone</h4>
                                        <a href="tel:+250799904601" className="text-white/40 font-light hover:text-white transition-colors">+250 799 904 601</a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <MapPin className="text-gold-accent" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-2">HQ</h4>
                                        <p className="text-white/40 font-light">Kigali, Rwanda</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-10 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl"
                        >
                            {isSuccess ? (
                                <div className="py-20 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-8">
                                        <CheckCircle2 size={44} />
                                    </div>
                                    <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Inquiry Received</h2>
                                    <p className="text-lg text-white/50 max-w-sm mx-auto mb-10">
                                        Your request has been routed to our advisory leads. Expect a response within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-gold-accent hover:underline font-bold"
                                    >
                                        Send another inquiry
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold mb-8">Strategic Inquiry</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-white/30 uppercase tracking-widest pl-2">Full Name</label>
                                                <input
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-accent transition-colors"
                                                    placeholder="Kanyi James"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-white/30 uppercase tracking-widest pl-2">Organization</label>
                                                <input
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-accent transition-colors"
                                                    placeholder="FinTech Co."
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/30 uppercase tracking-widest pl-2">Work Email</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-accent transition-colors"
                                                placeholder="james@company.com"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/30 uppercase tracking-widest pl-2">Message</label>
                                            <textarea
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-accent transition-colors resize-none"
                                                placeholder="Brief context on your requirements..."
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full group inline-flex items-center justify-center space-x-3 px-10 py-5 rounded-2xl bg-white text-midnight font-bold transition-all hover:bg-gold-accent active:scale-95 disabled:opacity-50"
                                        >
                                            {isSubmitting ? <Loader2 className="animate-spin text-midnight" /> : (
                                                <>
                                                    <span>Send Inquiry</span>
                                                    <ArrowRight size={18} />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center text-[10px] text-white/20 font-bold uppercase tracking-widest pt-4">Direct Link to GRC • Production Grade Integrity</p>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
