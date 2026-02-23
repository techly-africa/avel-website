"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GRCBadgeProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export default function GRCBadge({ className, size = "md" }: GRCBadgeProps) {
    const sizeClasses = {
        sm: "w-24 h-24",
        md: "w-32 h-32",
        lg: "w-48 h-48",
    };

    const iconSizes = {
        sm: 24,
        md: 32,
        lg: 48,
    };

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={cn(
                "relative flex items-center justify-center shrink-0",
                sizeClasses[size],
                className
            )}
        >
            {/* Outer Ring */}
            <div className="absolute inset-0 border-[3px] border-electric-blue/20 rounded-full" />

            {/* Rotating Glow Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[4px] border-[2px] border-dashed border-electric-blue/40 rounded-full"
            />

            {/* Main Badge Body */}
            <div className="absolute inset-[10px] bg-midnight rounded-full flex flex-col items-center justify-center shadow-2xl overflow-hidden border border-white/10 text-center px-2">
                {/* Background Shimmer */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent -rotate-45 pointer-events-none" />

                <ShieldCheck size={iconSizes[size]} className="text-soft-teal mb-1 drop-shadow-glow" />

                <div className="flex flex-col">
                    <span className={cn(
                        "font-black tracking-[0.2em] text-white uppercase leading-none",
                        size === "lg" ? "text-[10px]" : "text-[8px]"
                    )}>
                        AVEL GRC
                    </span>
                    <span className={cn(
                        "font-bold text-soft-teal uppercase leading-none mt-0.5",
                        size === "lg" ? "text-[9px]" : "text-[7px]"
                    )}>
                        Certified
                    </span>
                </div>

                {/* Stars/Dots */}
                <div className="flex space-x-0.5 mt-1.5 opacity-50">
                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-white rounded-full" />)}
                </div>
            </div>

            {/* Floating Verified Tag */}
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                <CheckCircle2 size={size === "lg" ? 16 : 12} strokeWidth={3} />
            </div>
        </motion.div>
    );
}
