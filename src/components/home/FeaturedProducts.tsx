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
        color: "bg-electric-blue text-white",
        cta: "Request Demo",
        href: "/products/avel-projects",
    },
    {
        id: "avel-varsity",
        name: "AVEL Varsity",
        tagline: "Workforce Upskilling",
        description: "Structured certification journeys to build technical and compliance excellence in your workforce.",
        icon: GraduationCap,
        color: "bg-electric-blue text-midnight shadow-electric-blue/20",
        cta: "Join Waitlist",
        href: "/products/avel-varsity",
    },
    {
        id: "rbi",
        name: "Rwanda Blockchain Initiative",
        tagline: "Public Infrastructure",
        description: "Exploring public infrastructure for verifiable records, identity, and trust systems in Africa.",
        icon: Zap,
        color: "bg-midnight text-white border border-white/20 shadow-none",
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
    const items = content?.items || products.map(p => p.name);

    return (
        <section className="py-24 px-6 bg-neutral-bg">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">{label}</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-midnight tracking-tight whitespace-pre-line">
                            {headline}
                        </h3>
                    </div>
                    <Link href="/products" className="group flex items-center text-sm font-bold text-midnight/40 hover:text-midnight transition-colors">
                        View all products
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative flex flex-col bg-white rounded-[3rem] p-10 shadow-sm hover:shadow-2xl hover:translate-y-[-4px] transition-all border border-gray-100 h-full">
                            <div className={`w-14 h-14 ${product.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                                <product.icon size={28} />
                            </div>
                            <div className="mb-2">
                                <span className="text-xs font-bold text-electric-blue uppercase tracking-widest">{product.tagline}</span>
                            </div>
                            <h4 className="text-3xl font-bold text-midnight mb-4 tracking-tight">
                                {product.name}
                            </h4>
                            <p className="text-midnight/60 leading-relaxed mb-10 flex-grow">
                                {product.description}
                            </p>
                            <Link
                                href={product.href}
                                className="w-full bg-gray-50 text-midnight font-bold py-4 rounded-2xl text-center group-hover:bg-midnight group-hover:text-white transition-all shadow-sm"
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
