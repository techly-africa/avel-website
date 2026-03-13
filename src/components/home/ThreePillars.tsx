"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Code2, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
    {
        title: "Product & Technology Advisory",
        description: "Aligning product strategy with technical feasibility and regulatory requirements before a single line of code is written.",
        icon: Search,
        color: "bg-electric-blue/5 text-electric-blue",
        href: "/services",
    },
    {
        title: "Engineering Delivery & Integrations",
        description: "High-spec implementation of core systems, payment rails, and multi-tenant platforms with audit-ready traceability.",
        icon: Code2,
        color: "bg-midnight/5 text-midnight",
        href: "/services",
    },
    {
        title: "GRC as a Service",
        description: "Continuous compliance and risk governance integrated into the delivery lifecycle. No surprises, no policy drift.",
        icon: ShieldAlert,
        color: "bg-electric-blue/5 text-electric-blue",
        href: "/grc",
    },
];

export default function ThreePillars() {
    const [content, setContent] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await import("@/services/contentService").then(m => m.contentService.getContent('home_pillars'));
                if (data) setContent(data.data);
            } catch (error) {
                console.error("Pillars Fetch Error:", error);
            }
        };
        fetchContent();
    }, []);

    const label = content?.label || "Our Foundation";
    const headline = content?.headline || "Comprehensive delivery for modern organizations.";
    const items = content?.items || pillars.map(p => p.title);

    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-4">{label}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-midnight tracking-tight whitespace-pre-line">
                        {headline}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all cursor-default"
                        >
                            <div className={`w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}>
                                <pillar.icon size={28} />
                            </div>
                            <h4 className="text-2xl font-bold text-midnight mb-4 leading-tight">
                                {pillar.title}
                            </h4>
                            <p className="text-midnight/60 leading-relaxed mb-8">
                                {pillar.description}
                            </p>
                            <Link
                                href={pillar.href}
                                className="inline-flex items-center text-sm font-bold text-midnight group-hover:text-electric-blue transition-colors"
                            >
                                Learn more
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
