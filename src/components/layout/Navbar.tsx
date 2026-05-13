"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import AvelLogo from "@/components/ui/AvelLogo";

const navLinks = [
    { name: "Flow", href: "/products/flow" },
    { name: "Entity", href: "/products/entity" },
    { name: "Core", href: "/products/core" },
    { name: "Developers", href: "/developers" },
    { name: "About", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isDevPage = pathname?.startsWith("/developers");

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
                        "w-full max-w-7xl transition-all duration-500 pointer-events-auto",
                        scrolled 
                            ? (isDevPage ? "bg-charcoal/80 border-white/10" : "bg-white/80 border-charcoal/10") 
                            : "bg-transparent border-transparent",
                        "backdrop-blur-md border rounded-2xl px-6 md:px-8 py-3",
                        scrolled ? "mt-0 shadow-sm" : "mt-2"
                    )}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0">
                            <AvelLogo 
                                variant="full" 
                                size={28} 
                                color={isDevPage ? "white" : "default"} 
                                className="transition-all duration-500"
                            />
                        </Link>

                        <div className="hidden lg:flex items-center space-x-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-xs font-bold uppercase tracking-widest transition-all relative group py-2",
                                        isDevPage 
                                            ? (pathname === link.href ? "text-orange" : "text-white/60 hover:text-white")
                                            : (pathname === link.href ? "text-orange" : "text-charcoal/60 hover:text-charcoal")
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full",
                                        pathname === link.href && "w-full"
                                    )} />
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:block">
                            <Link
                                href="/developers"
                                className={cn(
                                    "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all active:scale-95 border-2",
                                    isDevPage 
                                        ? "bg-orange border-orange text-white hover:bg-orange/90" 
                                        : "bg-charcoal border-charcoal text-white hover:bg-charcoal/90"
                                )}
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={cn(
                                "lg:hidden p-2 active:scale-95 transition-transform",
                                isDevPage ? "text-white" : "text-charcoal"
                            )}
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
                        className={cn(
                            "fixed top-24 left-4 right-4 shadow-2xl rounded-2xl lg:hidden overflow-hidden z-50 p-2 border",
                            isDevPage ? "bg-charcoal border-white/10" : "bg-white border-charcoal/10"
                        )}
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-xs font-bold uppercase tracking-widest py-3 px-4 rounded-xl flex items-center justify-between transition-colors",
                                        pathname === link.href 
                                            ? "bg-orange/10 text-orange" 
                                            : (isDevPage ? "text-white/60" : "text-charcoal/60")
                                    )}
                                >
                                    {link.name}
                                    <ChevronRight size={14} className="opacity-50" />
                                </Link>
                            ))}
                            <Link
                                href="/developers"
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center shadow-lg active:scale-[0.98] transition-transform",
                                    isDevPage ? "bg-orange text-white" : "bg-charcoal text-white"
                                )}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

