"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
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
                        "glass-dark rounded-3xl px-6 md:px-8 py-3",
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
                                    "transition-all duration-500 object-contain invert",
                                    scrolled ? "h-8" : "h-10"
                                )}
                            />
                        </Link>

                        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium tracking-wide transition-all relative group py-2",
                                        pathname === link.href
                                            ? "text-gold-accent"
                                            : "text-white/80 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent transition-all duration-300 group-hover:w-full",
                                        pathname === link.href && "w-full"
                                    )} />
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:block">
                            <button
                                className={cn(
                                    "px-6 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg active:scale-95",
                                    "bg-white text-midnight hover:bg-white/90"
                                )}
                                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                            >
                                Book Consultation
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-white active:scale-95 transition-transform"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
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
                        className="fixed top-24 left-4 right-4 glass-dark shadow-2xl rounded-3xl lg:hidden overflow-hidden z-50 p-2"
                    >
                        <div className="flex flex-col p-4 sm:p-6 space-y-2 sm:space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-base sm:text-lg font-medium py-3 px-4 rounded-xl flex items-center justify-between transition-colors",
                                        pathname === link.href ? "bg-white/5 text-gold-accent" : "text-white/80 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                    <ChevronRight size={18} className="opacity-50" />
                                </Link>
                            ))}
                            <button
                                className="w-full bg-white text-midnight py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-[0.98] transition-transform"
                                onClick={() => {
                                    setIsOpen(false);
                                    window.dispatchEvent(new CustomEvent("open-booking"));
                                }}
                            >
                                Book Consultation
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
