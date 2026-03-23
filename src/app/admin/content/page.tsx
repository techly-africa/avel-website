"use client";

import React, { useEffect, useState } from "react";
import {
    Save,
    CheckCircle2,
    Loader2,
    Layout
} from "lucide-react";
import { contentService, SiteContent } from "@/services/contentService";

export default function AdminContentPage() {
    const [contents, setContents] = useState<SiteContent[]>([]);
    const [loading, setLoading] = useState(true);
    const [savingKey, setSavingKey] = useState<string | null>(null);

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        setLoading(true);
        try {
            const data = await contentService.getAllContentAdmin();
            setContents(data);

            // If empty, seed with full site configuration nodes
            if (data.length === 0) {
                const defaults = [
                    { key: 'home_hero', data: { headline: "Engineering Institutional Resilience", subheadline: "We build highly secure, compliant digital products for Africa's most sensitive technical ecosystems." } },
                    { key: 'home_pillars', data: { label: "Our Foundation", headline: "Comprehensive delivery for modern organizations.", items: ["Product & Technology Advisory", "Engineering Delivery & Integrations", "GRC as a Service"] } },
                    { key: 'home_proof', data: { label: "Trusted by teams building critical systems", sectors: ["Telecom", "Fintech", "Public Sector", "Mobility", "SMEs"] } },
                    { key: 'cta_section', data: { title: "Ready to fortify your digital footprint?", subtitle: "Speak to our senior engineering team today for a technical audit or product strategy session." } },
                    { key: 'about_hero', data: { headline: "Institutional Excellence.", subheadline: "AVEL Africa was born from the need for high-tier advisory that understands the unique technical landscape." } },
                    { key: 'about_values', data: { items: ["Digital Sovereignty", "Institutional Integrity", "Product Excellence"] } },
                    { key: 'about_story', data: { title: "Our Story", content: "We don't operate like a generic software agency. We are principal engineers and strategic advisors." } },
                    { key: 'services_hero', data: { headline: "Strategic Capabilities.", subheadline: "High-stakes engineering and advisory for a resilient digital future." } },
                    { key: 'services_methodology', data: { title: "Our Methodology", steps: ["Explore", "Build", "Ship", "Support"] } },
                    { key: 'home_products', data: { label: "Innovation Engines", headline: "Modular products built on institutional knowledge.", items: ["AVEL Projects", "AVEL Varsity", "Rwanda Blockchain Initiative"] } },
                    { key: 'home_services', data: { label: "Core Capabilities", headline: "Specialized engineering for high-trust ecosystems.", items: ["AI Readiness Exploration", "Enterprise AI & RAG Systems", "GRC & Sovereignty", "AWS Cloud Infrastructure", "Integration & API Engineering", "Intelligence Operations"] } },
                    { key: 'footer_config', data: { intro: "Engineering Digital Resilience & Sovereignty. Trusted advisory for institutional excellence.", location: "Kigali, Rwanda", email: "contact@avel.africa" } }
                ];
                setContents(defaults as any);
            }
        } catch (error: any) {
            console.error("Content Fetch Error:", error?.message || error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (key: string, data: any) => {
        setSavingKey(key);
        try {
            await contentService.updateContent(key, data);
            fetchContent();
        } catch (error: any) {
            console.error("Content Update Error:", error?.message || error);
        } finally {
            setSavingKey(null);
        }
    };

    const handleChange = (key: string, field: string, value: string | string[]) => {
        setContents(prev => prev.map(c => {
            if (c.key === key) {
                return { ...c, data: { ...c.data, [field]: value } };
            }
            return c;
        }));
    };

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">Institutional <br />Content Control</h2>
                    <p className="text-white/60 text-sm mt-4 font-medium max-w-lg leading-relaxed">System-wide parameters for public messaging, brand voice, and digital presence.</p>
                </div>
                <div className="hidden md:block">
                    <button
                        onClick={fetchContent}
                        className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all px-8 py-4 border border-white/10 rounded-2xl bg-white/5"
                    >
                        Sync Repository
                    </button>
                </div>
            </div>

            <div className="space-y-12">
                {loading ? (
                    <div className="p-32 text-center">
                        <Loader2 className="animate-spin text-white/20 mx-auto mb-6" size={48} />
                        <p className="text-[10px] text-white/30 font-black uppercase tracking-widest italic">Decrypting configuration streams...</p>
                    </div>
                ) : contents.map((content) => (
                    <div key={content.key} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-midnight/5 space-y-10 relative group hover:border-institutional-navy/10 transition-all duration-700">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-institutional-navy/5 text-institutional-navy rounded-2xl">
                                    <Layout size={20} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-institutional-navy/40 block mb-1">Configuration Node</span>
                                    <h3 className="text-xl font-bold text-institutional-navy tracking-tight uppercase">{content.key.replace('_', ' ')}</h3>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUpdate(content.key, content.data)}
                                disabled={savingKey === content.key}
                                className="flex items-center space-x-3 px-8 py-4 bg-institutional-navy text-white rounded-2xl font-bold text-xs hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-xl shadow-institutional-navy/20"
                            >
                                {savingKey === content.key ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                                <span>{savingKey === content.key ? "Propagating..." : "Push Changes"}</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                            {Object.keys(content.data).map((field) => (
                                <div key={field} className="space-y-4">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-midnight/30 ml-2">{field.replace('_', ' ')}</label>
                                    {Array.isArray(content.data[field]) ? (
                                        <div className="space-y-3">
                                            {content.data[field].map((item: string, idx: number) => (
                                                <input
                                                    key={idx}
                                                    type="text"
                                                    value={item}
                                                    onChange={(e) => {
                                                        const newArray = [...content.data[field]];
                                                        newArray[idx] = e.target.value;
                                                        handleChange(content.key, field, newArray as any);
                                                    }}
                                                    className="w-full px-8 py-5 bg-neutral-bg border border-gray-100 rounded-2xl text-sm font-bold text-institutional-navy focus:ring-4 focus:ring-institutional-navy/5 transition-all outline-none"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <>
                                            {content.data[field].length > 60 ? (
                                                <textarea
                                                    value={content.data[field]}
                                                    onChange={(e) => handleChange(content.key, field, e.target.value)}
                                                    className="w-full px-8 py-6 bg-white border border-gray-200 rounded-[1.8rem] text-sm md:text-base leading-relaxed text-institutional-navy font-medium min-h-[140px] focus:ring-4 focus:ring-institutional-navy/5 transition-all outline-none resize-none shadow-sm"
                                                    placeholder={`Input institutional ${field}...`}
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    value={content.data[field]}
                                                    onChange={(e) => handleChange(content.key, field, e.target.value)}
                                                    className="w-full px-8 py-6 bg-white border border-gray-200 rounded-2xl text-sm md:text-base font-bold text-institutional-navy focus:ring-4 focus:ring-institutional-navy/5 transition-all outline-none shadow-sm"
                                                    placeholder={`Define ${field}...`}
                                                />
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
