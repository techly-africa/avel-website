"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, GraduationCap, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
    {
        id: "avel-projects",
        name: "AVEL Projects",
        tagline: "Delivery Governance",
        description: "Enterprise project intelligence & delivery governance for complex cross-functional programs.",
        icon: Layers,
        color: "bg-electric-blue text-white shadow-electric-blue/30",
        cta: "Request Demo",
        href: "/products/avel-projects",
    },
    {
        id: "avel-varsity",
        name: "AVEL Varsity",
        tagline: "Workforce Upskilling",
        description: "Structured certification journeys to build technical and compliance excellence in your workforce.",
        icon: GraduationCap,
        color: "bg-electric-blue text-white shadow-electric-blue/30",
        cta: "Join Waitlist",
        href: "/products/avel-varsity",
    },
    {
        id: "rbi",
        name: "Rwanda Blockchain Initiative",
        tagline: "Public Infrastructure",
        description: "Exploring public infrastructure for verifiable records, identity, and trust systems in Africa.",
        icon: Zap,
        color: "bg-midnight text-white border border-white/20",
        cta: "Partner with RBI",
        href: "/products/rbi",
    },
];

export default function FeaturedProducts() {
    const [content, setContent] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchContent = async () => {
            try {
                const { contentService } = await import("@/services/contentService");
                const data = await contentService.getContent('home_products');
                if (data) setContent(data.data);
            } catch (error) {
                console.error("Products Fetch Error:", error);
            }
        };
        fetchContent();
    }, []);

    const label = content?.label || "Innovation Engines";
    const headline = content?.headline || "Modular products built on institutional knowledge.";

    return (
        <section className="fluid-y-padding bg-neutral-surface">
            <div className="fluid-container">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
                    <div className="max-w-3xl">
                        <h2 className="text-sm font-bold text-electric-blue uppercase tracking-[0.2em] mb-4">{label}</h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight whitespace-pre-line leading-tight">
                            {headline}
                        </h3>
                    </div>
                    <Link href="/products" className="group flex items-center text-sm font-bold text-white/50 hover:text-white transition-colors">
                        View all products
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative flex flex-col glass-panel rounded-3xl p-8 sm:p-10 hover:shadow-2xl hover:translate-y-[-4px] transition-all h-full">
                            <div className={`w-14 h-14 ${product.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform group-hover:scale-105`}>
                                <product.icon size={28} />
                            </div>
                            <div className="mb-2">
                                <span className="text-xs font-bold text-gold-accent uppercase tracking-widest">{product.tagline}</span>
                            </div>
                            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                                {product.name}
                            </h4>
                            <p className="text-white/60 leading-relaxed mb-10 flex-grow text-sm sm:text-base">
                                {product.description}
                            </p>
                            <Link
                                href={product.href}
                                className="w-full bg-white/5 border border-white/10 text-white font-bold py-4 rounded-2xl text-center hover:bg-white hover:text-midnight transition-all shadow-sm"
                            >
                                {product.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
