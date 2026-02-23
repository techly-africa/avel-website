"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "GRC", href: "/grc" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
                <nav
                    className={cn(
                        "w-full max-w-7xl transition-all duration-700 pointer-events-auto",
                        "bg-white/80 backdrop-blur-2xl border border-white/50 rounded-[2.5rem] px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
                        scrolled ? "mt-0" : "mt-2"
                    )}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0">
                            <img
                                src="/avel_africa_logo_transparent.png"
                                alt="AVEL Logo"
                                className={cn(
                                    "transition-all duration-500 object-contain drop-shadow-sm",
                                    scrolled ? "h-9" : "h-11"
                                )}
                            />
                        </Link>

                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-bold transition-all relative group py-2",
                                        pathname === link.href
                                            ? "text-electric-blue"
                                            : "text-midnight/90 hover:text-midnight hover:scale-105"
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full",
                                        pathname === link.href && "w-full"
                                    )} />
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:block">
                            <button
                                className={cn(
                                    "px-6 py-2.5 rounded-2xl text-sm font-bold transition-all shadow-lg active:scale-95",
                                    "bg-electric-blue text-midnight hover:bg-electric-blue/90 shadow-electric-blue/20"
                                )}
                                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                            >
                                Schedule a Call
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-midnight"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 left-4 right-4 bg-white shadow-2xl rounded-3xl border border-gray-100 lg:hidden overflow-hidden z-50 px-2 py-4"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-bold py-2 flex items-center justify-between",
                                        pathname === link.href ? "text-electric-blue" : "text-midnight/70"
                                    )}
                                >
                                    {link.name}
                                    <ChevronRight size={18} />
                                </Link>
                            ))}
                            <button
                                className="w-full bg-midnight text-white py-4 rounded-2xl font-bold shadow-lg mt-4 active:scale-[0.98] transition-transform"
                                onClick={() => {
                                    setIsOpen(false);
                                    window.dispatchEvent(new CustomEvent("open-booking"));
                                }}
                            >
                                Schedule a Call
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
