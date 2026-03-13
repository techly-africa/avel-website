"use client";

import React, { useEffect, useState } from "react";
import {
    Search,
    Trash2,
    Mail,
    Phone,
    Building2,
    Calendar,
    ChevronDown,
    Filter,
    Loader2
} from "lucide-react";
import { leadService, Lead } from "@/services/leadService";

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        setLoading(true);
        try {
            const data = await leadService.getLeads();
            setLeads(data);
        } catch (error: any) {
            console.error("Leads Fetch Error:", error?.message || error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this inquiry?")) {
            await leadService.deleteLead(id);
            fetchLeads();
        }
    };

    const filteredLeads = leads.filter(l => {
        const matchesSearch =
            l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            l.company?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesFilter = filter === "all" || l.type === filter;

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-white">Institutional Inbound</h2>
                    <p className="text-white/60 text-sm mt-4 font-medium max-w-xl leading-relaxed">Systematic archive of institutional inquiries, project bookings, and capability assessments.</p>
                </div>
            </div>

            <div className="bg-white rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-midnight/5 overflow-hidden">
                <div className="px-12 py-10 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-8 bg-neutral-bg/20">
                    <div className="relative flex-1 max-w-xl group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-institutional-navy/20 group-focus-within:text-institutional-navy transition-all" size={20} />
                        <input
                            type="text"
                            placeholder="Filter intelligence streams..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-8 py-5 bg-white border-2 border-transparent rounded-2xl text-sm font-medium focus:border-institutional-navy/10 focus:ring-0 transition-all outline-none shadow-sm"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 bg-white px-6 py-5 rounded-2xl shadow-sm border-2 border-transparent">
                            <Filter size={18} className="text-institutional-navy/40" />
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="bg-transparent border-none text-sm font-bold text-institutional-navy focus:ring-0 appearance-none pr-8 cursor-pointer outline-none"
                            >
                                <option value="all">Global Matrix</option>
                                <option value="contact">Contact Intake</option>
                                <option value="booking">Product Booking</option>
                                <option value="grc_assessment">Security Assessment</option>
                                <option value="demo_request">Institutional Demo</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="divide-y divide-gray-50">
                    {loading ? (
                        <div className="p-32 text-center">
                            <Loader2 className="animate-spin text-institutional-navy/20 mx-auto" size={40} />
                        </div>
                    ) : filteredLeads.map((lead) => (
                        <div key={lead.id} className="px-12 py-10 hover:bg-neutral-bg/20 transition-all duration-300 group">
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                                <div className="space-y-8 flex-1">
                                    <div className="flex items-center space-x-6">
                                        <div className="w-16 h-16 bg-institutional-navy text-white rounded-[1.5rem] flex items-center justify-center font-bold text-2xl shadow-xl shadow-institutional-navy/10 border border-white/10">
                                            {lead.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-2xl text-institutional-navy tracking-tight">{lead.name}</h4>
                                            <div className="flex items-center space-x-6 text-[10px] text-midnight/30 mt-2 font-black uppercase tracking-widest">
                                                <span className="flex items-center px-4 py-1.5 rounded-full bg-institutional-navy/5 text-institutional-navy border border-institutional-navy/5">
                                                    {lead.type.replace('_', ' ')}
                                                </span>
                                                <span className="flex items-center">
                                                    <Calendar size={14} className="mr-2" />
                                                    {new Date(lead.created_at || "").toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-2">
                                        <div className="flex items-center space-x-4 group/item">
                                            <div className="p-2.5 bg-neutral-bg rounded-xl text-institutional-navy/40 group-hover/item:text-institutional-navy transition-colors">
                                                <Mail size={18} />
                                            </div>
                                            <span className="text-sm font-medium text-institutional-navy/70 leading-none">{lead.email}</span>
                                        </div>
                                        {lead.company && (
                                            <div className="flex items-center space-x-4 group/item">
                                                <div className="p-2.5 bg-neutral-bg rounded-xl text-institutional-navy/40 group-hover/item:text-institutional-navy transition-colors">
                                                    <Building2 size={18} />
                                                </div>
                                                <span className="text-sm font-medium text-institutional-navy/70 leading-none">{lead.company}</span>
                                            </div>
                                        )}
                                    </div>

                                    {lead.message && (
                                        <div className="bg-neutral-bg/50 p-8 rounded-[2rem] text-base text-institutional-navy/80 leading-relaxed font-serif italic border border-white relative">
                                            <div className="absolute top-0 left-8 -translate-y-1/2 bg-white px-3 text-gold-accent font-black text-2xl font-serif">“</div>
                                            {lead.message}
                                        </div>
                                    )}
                                </div>

                                <div className="flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-6 shrink-0 pt-2">
                                    <button
                                        onClick={() => handleDelete(lead.id)}
                                        className="p-5 text-red-500/30 hover:text-red-500 hover:bg-red-50 rounded-[1.5rem] transition-all border border-transparent hover:border-red-100"
                                        title="Purge Intelligence"
                                    >
                                        <Trash2 size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!loading && filteredLeads.length === 0 && (
                        <div className="p-32 text-center space-y-6">
                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-white/10">
                                <Search size={40} />
                            </div>
                            <p className="text-white/40 text-sm font-medium italic font-serif">Awaiting institutional inbound streams.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
