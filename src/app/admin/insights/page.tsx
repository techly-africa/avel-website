"use client";

import React, { useEffect, useState } from "react";
import {
    Plus,
    Search,
    MoreHorizontal,
    Eye,
    Edit3,
    Trash2,
    CheckCircle2,
    XCircle,
    Clock
} from "lucide-react";
import Link from "next/link";
import { insightService, Insight } from "@/services/insightService";

export default function AdminInsightsPage() {
    const [insights, setInsights] = useState<Insight[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchInsights();
    }, []);

    const fetchInsights = async () => {
        setLoading(true);
        try {
            const data = await insightService.getAllInsightsAdmin();
            setInsights(data);
        } catch (error: any) {
            console.error("Admin Insights Fetch Error:", error?.message || error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this insight?")) {
            await insightService.deleteInsight(id);
            fetchInsights();
        }
    };

    const filteredInsights = insights.filter(i =>
        i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-white">Intel Archives</h2>
                    <p className="text-white/60 text-sm mt-4 font-medium max-w-xl leading-relaxed">Systematic management of strategic insights, market reports, and institutional articles.</p>
                </div>
                <Link href="/admin/insights/new" className="inline-flex items-center space-x-3 bg-institutional-navy text-white px-8 py-4 rounded-2xl font-bold text-xs hover:scale-105 active:scale-95 transition-all shadow-xl shadow-institutional-navy/20">
                    <Plus size={18} />
                    <span>Deploy New Insight</span>
                </Link>
            </div>

            <div className="bg-white rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-midnight/5 overflow-hidden">
                <div className="px-12 py-10 border-b border-gray-50 flex items-center justify-between gap-4 bg-neutral-bg/20">
                    <div className="relative flex-1 max-w-xl group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-institutional-navy/20 group-focus-within:text-institutional-navy transition-all" size={20} />
                        <input
                            type="text"
                            placeholder="Filter archives..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-8 py-5 bg-white border-2 border-transparent rounded-2xl text-sm font-medium focus:border-institutional-navy/10 focus:ring-0 transition-all outline-none shadow-sm"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/5">
                                <th className="px-12 py-6 text-[10px] font-black uppercase tracking-widest text-white/40">Strategic Narrative</th>
                                <th className="px-12 py-6 text-[10px] font-black uppercase tracking-widest text-white/40">Class</th>
                                <th className="px-12 py-6 text-[10px] font-black uppercase tracking-widest text-white/40">Status</th>
                                <th className="px-12 py-6 text-[10px] font-black uppercase tracking-widest text-white/40">Deploy Date</th>
                                <th className="px-12 py-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-12 py-32 text-center text-white/40 font-serif italic">Loading archive matrix...</td>
                                </tr>
                            ) : filteredInsights.map((insight) => (
                                <tr key={insight.id} className="hover:bg-neutral-bg/20 transition-all duration-300 group">
                                    <td className="px-12 py-8">
                                        <div className="font-bold text-lg text-institutional-navy tracking-tight">{insight.title}</div>
                                        <div className="text-[10px] text-midnight/30 mt-1 font-black uppercase tracking-widest">{insight.slug}</div>
                                    </td>
                                    <td className="px-12 py-8">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-institutional-navy/60 bg-institutional-navy/5 px-4 py-1.5 rounded-full border border-institutional-navy/10">{insight.category}</span>
                                    </td>
                                    <td className="px-12 py-8">
                                        {insight.published ? (
                                            <span className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                                                <CheckCircle2 size={12} className="mr-2" /> Live
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-midnight/30 bg-gray-100 px-4 py-1.5 rounded-full border border-gray-200">
                                                <Clock size={12} className="mr-2" /> Staging
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-12 py-8">
                                        <span className="text-[10px] text-midnight/30 font-black uppercase tracking-widest">{insight.date}</span>
                                    </td>
                                    <td className="px-12 py-8 text-right">
                                        <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-all">
                                            <Link href={`/insights/${insight.slug}`} target="_blank" className="p-3 text-institutional-navy/40 hover:text-institutional-navy hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-institutional-navy/10" title="View Source">
                                                <Eye size={20} />
                                            </Link>
                                            <Link href={`/admin/insights/edit/${insight.id}`} className="p-3 text-institutional-navy/40 hover:text-institutional-navy hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-institutional-navy/10" title="Edit Configuration">
                                                <Edit3 size={20} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(insight.id)}
                                                className="p-3 text-red-500/30 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                                                title="Purge Archive"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {!loading && filteredInsights.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-12 py-32 text-center text-midnight/40 font-serif italic">No insights found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
