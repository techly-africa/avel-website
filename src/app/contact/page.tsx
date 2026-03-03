"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Globe, CheckCircle2, ArrowRight, Loader2, Info } from "lucide-react";
import { motion } from "framer-motion";
import { leadService } from "@/services/leadService";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [consentChecked, setConsentChecked] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        await leadService.saveLead({
            type: "contact",
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            company: formData.get("company") as string,
            message: formData.get("message") as string,
            data: {
                interest: formData.get("interest"),
            }
        });

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="flex flex-col">
            <section className="pt-32 pb-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-midnight tracking-tight mb-8 leading-[1.1]">
                            Talk to an <span className="text-electric-blue">expert.</span>
                        </h1>
                        <p className="text-xl text-midnight/60 leading-relaxed">
                            Whether you're starting a new initiative or need to stabilize an existing program, we're here to help. Reach out to our team via the form below.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Form */}
                        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input required name="name" type="text" placeholder="Full Name" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-midnight transition-all" />
                                        <input required name="email" type="email" placeholder="Work Email" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-midnight transition-all" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input required name="company" type="text" placeholder="Workplace" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-midnight transition-all" />
                                        <select required name="interest" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none border-none focus:ring-2 focus:ring-midnight transition-all">
                                            <option value="">I'm interested in...</option>
                                            <option value="advisory">Technology Advisory</option>
                                            <option value="engineering">Engineering Delivery</option>
                                            <option value="grc">GRC as a Service</option>
                                            <option value="product">AVEL Products</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <textarea name="message" rows={6} placeholder="How can we help?" className="w-full bg-neutral-bg rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-midnight transition-all resize-none"></textarea>

                                    <div className="flex items-start space-x-4 p-2">
                                        <div className="relative flex items-center h-6">
                                            <input
                                                id="gdpr-consent"
                                                required
                                                type="checkbox"
                                                checked={consentChecked}
                                                onChange={(e) => setConsentChecked(e.target.checked)}
                                                className="w-5 h-5 text-midnight border-gray-300 rounded focus:ring-midnight accent-midnight cursor-pointer"
                                            />
                                        </div>
                                        <div className="text-sm">
                                            <label htmlFor="gdpr-consent" className="text-midnight/60 leading-relaxed cursor-pointer select-none">
                                                I agree to the processing of my data as per the <a href="/privacy" className="text-electric-blue hover:underline">Privacy Policy</a>. I understand that my data is protected under GDPR standards.
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex p-6 rounded-2xl bg-blue-50 border border-blue-100 items-start">
                                        <Info size={20} className="text-electric-blue mr-3 shrink-0 mt-0.5" />
                                        <p className="text-xs text-blue-900 font-medium leading-relaxed">
                                            By submitting this form, you agree to our privacy policy. We'll only use your data to contact you about your inquiry. One of our experts will respond within 24 hours.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !consentChecked}
                                        className="w-full bg-midnight text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : <><span>Send Inquiry</span> <ArrowRight size={20} /></>}
                                    </button>
                                </form>
                            ) : (
                                <div className="py-20 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-8">
                                        <CheckCircle2 size={44} />
                                    </div>
                                    <h2 className="text-4xl font-bold text-midnight mb-4 tracking-tight">Message Sent!</h2>
                                    <p className="text-lg text-midnight/60 max-w-sm mx-auto mb-10">
                                        Thank you for reaching out. An AVEL expert will review your message and get back to you shortly.
                                    </p>
                                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden max-w-md">
                                        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 4 }} className="h-full bg-emerald-500" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="lg:py-10">
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-6">Offices</h3>
                                    <div className="space-y-8">
                                        <div className="flex items-start">
                                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-midnight mr-6 shrink-0">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-midnight mb-1">Kigali, Rwanda</p>
                                                <p className="text-sm text-midnight/60 leading-relaxed">
                                                    Norrsken House Kigali <br />
                                                    KN 78 St, Kigali
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-6">Direct</h3>
                                    <div className="space-y-6">
                                        <a href="mailto:contact@avel.africa" className="flex items-center group">
                                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-midnight mr-6 shrink-0 group-hover:text-electric-blue transition-colors">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-midnight/40 uppercase tracking-widest mb-0.5">Email</p>
                                                <p className="font-bold text-midnight group-hover:text-electric-blue transition-colors">contact@avel.africa</p>
                                            </div>
                                        </a>
                                        <a href="tel:+250799903601" className="flex items-center group">
                                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-midnight mr-6 shrink-0 group-hover:text-electric-blue transition-colors">
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-midnight/40 uppercase tracking-widest mb-0.5">Phone</p>
                                                <p className="font-bold text-midnight group-hover:text-electric-blue transition-colors">+250 799 903 601</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-gray-200">
                                    <h3 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-6">Social</h3>
                                    <div className="flex space-x-4">
                                        {["LinkedIn", "Twitter", "GitHub"].map((s) => (
                                            <a key={s} href="#" className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-midnight hover:text-electric-blue transition-all">
                                                <Globe size={20} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
