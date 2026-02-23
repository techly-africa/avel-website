"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("avel_cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("avel_cookie_consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("avel_cookie_consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-2xl"
                >
                    <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col md:flex-row items-center gap-6">
                        <div className="w-14 h-14 bg-electric-blue/5 rounded-2xl flex items-center justify-center text-electric-blue shrink-0">
                            <Cookie size={28} />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-lg font-bold text-midnight mb-1">Cookie Preferences</h3>
                            <p className="text-sm text-midnight/60 leading-relaxed">
                                We use cookies to enhance your experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <Link href="/privacy" className="text-electric-blue hover:underline">Privacy Policy</Link>.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <button
                                onClick={handleDecline}
                                className="flex-1 md:flex-none px-6 py-3 rounded-xl text-sm font-bold text-midnight/40 hover:text-midnight transition-colors"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 md:flex-none px-8 py-3 bg-midnight text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
