"use client";

import React from "react";

export default function ProofStrip() {
    const [content, setContent] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await import("@/services/contentService").then(m => m.contentService.getContent('home_proof'));
                if (data) setContent(data.data);
            } catch (error) {
                console.error("ProofStrip Fetch Error:", error);
            }
        };
        fetchContent();
    }, []);

    const label = content?.label || "Trusted by teams building critical systems";
    const sectors = content?.sectors || ["Telecom", "Fintech", "Public Sector", "Mobility", "SMEs"];

    return (
        <section className="py-12 border-y border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                    <p className="text-sm font-bold text-midnight/40 uppercase tracking-widest">
                        {label}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-30 grayscale saturate-0">
                        {sectors.map((sector: string) => (
                            <span key={sector} className="text-xl md:text-2xl font-black tracking-tighter">
                                {sector.toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
