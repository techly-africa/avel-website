"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { leadService } from "@/services/leadService";
import Link from "next/link";

export default function BookingModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [consentChecked, setConsentChecked] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("open-booking", handleOpen);
        return () => window.removeEventListener("open-booking", handleOpen);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        await leadService.saveLead({
            type: "booking",
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            company: formData.get("company") as string,
            role: formData.get("role") as string,
            message: formData.get("message") as string,
        });

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after some time
        setTimeout(() => {
            setIsOpen(false);
            setTimeout(() => setIsSuccess(false), 500);
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="absolute inset-0 bg-midnight/40 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 text-midnight/40 hover:text-midnight transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="p-8 md:p-12">
                        {!isSuccess ? (
                            <>
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-midnight mb-2">Schedule a Call</h2>
                                    <p className="text-midnight/60">
                                        Let&apos;s discuss how AVEL can help you build and scale secure, compliant digital products.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-midnight/70 ml-1">Full Name</label>
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                placeholder="e.g. Jean Doe"
                                                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-midnight focus:ring-2 focus:ring-electric-blue outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-midnight/70 ml-1">Work Email</label>
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                placeholder="jean@company.com"
                                                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-midnight focus:ring-2 focus:ring-electric-blue outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-midnight/70 ml-1">Company</label>
                                            <input
                                                required
                                                name="company"
                                                type="text"
                                                placeholder="e.g. Avel Payments"
                                                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-midnight focus:ring-2 focus:ring-electric-blue outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-midnight/70 ml-1">Role</label>
                                            <input
                                                required
                                                name="role"
                                                type="text"
                                                placeholder="e.g. CTO"
                                                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-midnight focus:ring-2 focus:ring-electric-blue outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-midnight/70 ml-1">Message (Optional)</label>
                                            <textarea
                                                rows={3}
                                                name="message"
                                                placeholder="Tell us briefly what you're building..."
                                                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-midnight focus:ring-2 focus:ring-electric-blue outline-none transition-all resize-none"
                                            />
                                        </div>

                                        <div className="flex items-start space-x-3 p-1">
                                            <div className="relative flex items-center h-5">
                                                <input
                                                    id="gdpr-consent-booking"
                                                    required
                                                    type="checkbox"
                                                    checked={consentChecked}
                                                    onChange={(e) => setConsentChecked(e.target.checked)}
                                                    className="w-4 h-4 text-electric-blue border-gray-300 rounded focus:ring-electric-blue accent-electric-blue cursor-pointer"
                                                />
                                            </div>
                                            <div className="text-xs">
                                                <label htmlFor="gdpr-consent-booking" className="text-midnight/60 leading-relaxed cursor-pointer select-none">
                                                    I agree to the processing of my personal data in accordance with the <Link href="/privacy" className="text-electric-blue hover:underline">Privacy Policy</Link> and GDPR standards.
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !consentChecked}
                                        className="w-full bg-electric-blue text-midnight py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="animate-spin" />
                                        ) : (
                                            <>
                                                <span>Confirm Interest</span>
                                                <ChevronRight size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-12 flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h2 className="text-3xl font-bold text-midnight mb-2">Request Received!</h2>
                                <p className="text-midnight/60 max-w-sm mb-8">
                                    Thank you for reaching out. We&apos;ve received your request and will be in touch within 24 hours to schedule your call.
                                </p>
                                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 3 }}
                                        className="h-full bg-emerald-500"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
