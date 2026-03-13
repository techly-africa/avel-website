"use client";

import React, { useEffect, useState } from "react";
import {
    Plus,
    Search,
    Eye,
    Edit3,
    Trash2,
    CheckCircle2,
    Clock,
    Image as ImageIcon
} from "lucide-react";
import Link from "next/link";
import { caseStudyService, CaseStudy } from "@/services/caseStudyService";

export default function AdminCaseStudiesPage() {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCaseStudies();
    }, []);

    const fetchCaseStudies = async () => {
        setLoading(true);
        try {
            const data = await caseStudyService.getAllCaseStudiesAdmin();
            setCaseStudies(data);
        } catch (error: any) {
            console.error("Admin Case Studies Fetch Error:", error?.message || error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this case study?")) {
            await caseStudyService.deleteCaseStudy(id);
            fetchCaseStudies();
        }
    };

    const filteredCaseStudies = caseStudies.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.company.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-white">Project Chronicles</h2>
                    <p className="text-white/60 text-sm mt-4 font-medium max-w-xl leading-relaxed">Systematic archive of institutional case studies, project deep-dives, and client success narratives.</p>
                </div>
                <Link href="/admin/case-studies/new" className="inline-flex items-center space-x-3 bg-institutional-navy text-white px-8 py-4 rounded-2xl font-bold text-xs hover:scale-105 active:scale-95 transition-all shadow-xl shadow-institutional-navy/20">
                    <Plus size={18} />
                    <span>Archive New Project</span>
                </Link>
            </div>

            <div className="bg-white rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-midnight/5 overflow-hidden">
                <div className="px-12 py-10 border-b border-gray-50 flex items-center justify-between gap-4 bg-neutral-bg/20">
                    <div className="relative flex-1 max-w-xl group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-institutional-navy/20 group-focus-within:text-institutional-navy transition-all" size={20} />
                        <input
                            type="text"
                            placeholder="Search project matrix..."
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
                                <th className="px-12 py-6 text-[10px] font-black uppercase tracking-widest text-white/40">Project Entity</th>
                                <th className="px-12 py-6 text-[10px] font-black uppercase tracking-widest text-white/40">Organization</th>
                                <th className="px-12 py-6 text-[10px] font-black uppercase tracking-widest text-white/40">Operational Status</th>
                                <th className="px-12 py-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="px-12 py-32 text-center text-white/40 font-serif italic">Loading project matrix...</td>
                                </tr>
                            ) : filteredCaseStudies.map((cs) => (
                                <tr key={cs.id} className="hover:bg-neutral-bg/20 transition-all duration-300 group">
                                    <td className="px-12 py-8">
                                        <div className="flex items-center space-x-6">
                                            <div className="w-16 h-16 bg-institutional-navy/5 text-institutional-navy rounded-[1.5rem] flex items-center justify-center border border-institutional-navy/5 overflow-hidden group-hover:scale-105 transition-all duration-500 shadow-sm">
                                                {cs.image_url ? (
                                                    <img src={cs.image_url} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <ImageIcon size={24} className="opacity-20" />
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg text-institutional-navy tracking-tight">{cs.title}</div>
                                                <div className="text-[10px] text-midnight/30 mt-1 font-black uppercase tracking-widest">{cs.slug}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-8">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-institutional-navy/60 bg-institutional-navy/5 px-4 py-1.5 rounded-full border border-institutional-navy/10">{cs.company}</span>
                                    </td>
                                    <td className="px-12 py-8">
                                        {cs.published ? (
                                            <span className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                                                <CheckCircle2 size={12} className="mr-2" /> Live
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-midnight/30 bg-gray-100 px-4 py-1.5 rounded-full border border-gray-200">
                                                <Clock size={12} className="mr-2" /> Staging
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-12 py-8 text-right">
                                        <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-all">
                                            <Link href={`/case-studies/${cs.slug}`} target="_blank" className="p-3 text-institutional-navy/40 hover:text-institutional-navy hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-institutional-navy/10" title="View Source">
                                                <Eye size={20} />
                                            </Link>
                                            <Link href={`/admin/case-studies/edit/${cs.id}`} className="p-3 text-institutional-navy/40 hover:text-institutional-navy hover:bg-white rounded-xl shadow-sm transition-all border border-transparent hover:border-institutional-navy/10" title="Edit Configuration">
                                                <Edit3 size={20} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(cs.id)}
                                                className="p-3 text-red-500/30 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                                                title="Purge Chronicle"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {!loading && filteredCaseStudies.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-12 py-32 text-center text-midnight/40 font-serif italic">No project chronicles found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
