"use client";

import React, { useEffect, useState } from "react";
import {
    Users,
    TrendingUp,
    Clock
} from "lucide-react";
import Link from "next/link";
import { leadService, Lead } from "@/services/leadService";

export default function AdminDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [stats, setStats] = useState({
        totalLeads: 0,
        recentLeads: 0,
    });

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const data = await leadService.getLeads();
                setLeads(data);
                setStats({
                    totalLeads: data.length,
                    recentLeads: data.filter(l => {
                        const d = new Date(l.created_at || "");
                        const now = new Date();
                        return (now.getTime() - d.getTime()) < (24 * 60 * 60 * 1000);
                    }).length
                });
            } catch (error: any) {
                console.error("Dashboard Fetch Error:", error?.message || error);
            }
        };
        fetchLeads();
    }, []);

    return (
        <div className="space-y-10">
            {/* Header Area */}
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-white">Systems Overview</h2>
                    <p className="text-white/60 text-sm mt-4 font-medium max-w-xl leading-relaxed">Real-time intelligence from institutional inquiries and systematic telemetry.</p>
                </div>
                <div className="hidden md:block">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                        Operational Status: Optimal
                    </span>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-midnight/5 flex flex-col justify-between group hover:border-institutional-navy/20 transition-all duration-500">
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-4 bg-institutional-navy/5 text-institutional-navy rounded-2xl group-hover:bg-institutional-navy group-hover:text-white transition-all duration-500">
                            <Users size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">Active</span>
                    </div>
                    <div>
                        <p className="text-xs font-black text-midnight/30 uppercase tracking-[0.2em] mb-2">Total Intelligence Captured</p>
                        <h3 className="text-5xl font-bold text-institutional-navy">{stats.totalLeads}</h3>
                    </div>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-midnight/5 flex flex-col justify-between group hover:border-institutional-navy/20 transition-all duration-500">
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
                            <TrendingUp size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Accelerating</span>
                    </div>
                    <div>
                        <p className="text-xs font-black text-midnight/30 uppercase tracking-[0.2em] mb-2">Inbound Delta (24h)</p>
                        <h3 className="text-5xl font-bold text-institutional-navy">+{stats.recentLeads}</h3>
                    </div>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-midnight/5 flex flex-col justify-between group hover:border-institutional-navy/20 transition-all duration-500">
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl">
                            <Clock size={24} />
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-black text-midnight/30 uppercase tracking-[0.2em] mb-2">Avg. Response Latency</p>
                        <h3 className="text-5xl font-bold text-institutional-navy">4.2h</h3>
                    </div>
                </div>
            </div>

            {/* Recent Leads Table */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-midnight/5 overflow-hidden">
                <div className="px-10 py-8 border-b border-gray-50 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-institutional-navy tracking-tight">Recent Inquiries</h3>
                        <p className="text-[10px] text-midnight/30 font-black uppercase tracking-widest mt-1">First-line reconnaissance</p>
                    </div>
                    <Link href="/admin/leads" className="text-[10px] font-black uppercase tracking-[0.2em] text-institutional-navy hover:text-gold-accent transition-all px-6 py-3 bg-neutral-bg rounded-xl">View All Intelligence</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/5">
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-white/40">Client Entity</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-white/40">Intelligence Type</th>
                                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-white/40">Capture Date</th>
                                <th className="px-10 py-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {leads.slice(0, 5).map((lead) => (
                                <tr key={lead.id} className="hover:bg-neutral-bg/30 transition-colors group">
                                    <td className="px-10 py-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-institutional-navy/5 text-institutional-navy rounded-2xl flex items-center justify-center font-bold text-lg border border-institutional-navy/5">
                                                {lead.name[0]}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-institutional-navy">{lead.name}</h4>
                                                <p className="text-xs text-midnight/40 font-medium">{lead.company || lead.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-6">
                                        <span className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-institutional-navy/5 text-institutional-navy border border-institutional-navy/10">
                                            {lead.type.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-10 py-6">
                                        <span className="text-[10px] text-midnight/30 font-black flex items-center uppercase tracking-widest">
                                            <Clock size={12} className="mr-2" />
                                            {new Date(lead.created_at || "").toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </td>
                                    <td className="px-10 py-6 text-right">
                                        <Link href={`/admin/leads`} className="text-[10px] font-black uppercase tracking-widest text-institutional-navy/40 hover:text-institutional-navy opacity-0 group-hover:opacity-100 transition-all italic">Review Details →</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {leads.length === 0 && (
                        <div className="p-20 text-center space-y-4">
                            <div className="w-16 h-16 bg-neutral-bg rounded-full flex items-center justify-center mx-auto text-midnight/10">
                                <Users size={32} />
                            </div>
                            <p className="text-midnight/40 text-sm font-medium italic font-serif">Awaiting institutional inbound streams.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
