"use client";

import React, { useState, useEffect } from "react";
import { leadService, Lead } from "@/services/leadService";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Download,
    Trash2,
    ExternalLink,
    Filter,
    RefreshCw,
    Search,
    Inbox
} from "lucide-react";

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const refreshLeads = () => {
        setLoading(true);
        const data = leadService.getLeads();
        setLeads(data);
        setLoading(false);
    };

    useEffect(() => {
        refreshLeads();
    }, []);

    const clearAll = () => {
        if (confirm("Are you sure you want to clear all leads? This cannot be undone.")) {
            leadService.clearLeads();
            refreshLeads();
        }
    };

    const downloadCSV = () => {
        if (leads.length === 0) return;

        const headers = ["ID", "Type", "Name", "Email", "Company", "Role", "Industry", "Timestamp", "Message"];
        const csvContent = [
            headers.join(","),
            ...leads.map(l => [
                l.id,
                l.type,
                `"${l.name}"`,
                l.email,
                `"${l.company || ""}"`,
                `"${l.role || ""}"`,
                `"${l.industry || ""}"`,
                l.timestamp,
                `"${(l.message || "").replace(/"/g, '""')}"`
            ].join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `avel_leads_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredLeads = leads.filter(l =>
        l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (l.company && l.company.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const getTypeColor = (type: string) => {
        switch (type) {
            case "grc_assessment": return "bg-purple-100 text-purple-700";
            case "booking": return "bg-blue-100 text-blue-700";
            case "demo_request": return "bg-emerald-100 text-emerald-700";
            case "contact": return "bg-gray-100 text-gray-700";
            default: return "bg-neutral-100 text-neutral-700";
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-midnight tracking-tight">Lead Command Center</h1>
                        <p className="text-midnight/50">Manage inquiries, assessments, and growth signals for AVEL.</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button variant="outline" onClick={refreshLeads} className="bg-white">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Sync
                        </Button>
                        <Button variant="outline" onClick={downloadCSV} disabled={leads.length === 0} className="bg-white">
                            <Download className="mr-2 h-4 w-4" />
                            Export CSV
                        </Button>
                        <Button variant="destructive" onClick={clearAll} disabled={leads.length === 0}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Clear
                        </Button>
                    </div>
                </div>

                <Card className="border-none shadow-sm overflow-hidden">
                    <CardHeader className="bg-white border-b border-gray-100 py-6">
                        <div className="flex items-center justify-between">
                            <div className="relative w-full max-w-md">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search leads by name, email, or company..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-midnight outline-none transition-all"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Badge variant="secondary" className="bg-midnight/5 text-midnight">
                                    {filteredLeads.length} Lead{filteredLeads.length !== 1 ? 's' : ''}
                                </Badge>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 bg-white min-h-[400px]">
                        {filteredLeads.length > 0 ? (
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                                            <TableHead className="font-bold text-midnight/70">Source</TableHead>
                                            <TableHead className="font-bold text-midnight/70">Entity / Person</TableHead>
                                            <TableHead className="font-bold text-midnight/70">Context</TableHead>
                                            <TableHead className="font-bold text-midnight/70">Message</TableHead>
                                            <TableHead className="font-bold text-midnight/70 text-right">Received</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredLeads.map((lead) => (
                                            <TableRow key={lead.id} className="cursor-default hover:bg-gray-50/30 transition-colors">
                                                <TableCell>
                                                    <Badge className={cn("capitalize px-2 py-0.5 text-[10px] font-black border-none shadow-none", getTypeColor(lead.type))}>
                                                        {lead.type.replace("_", " ")}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-midnight">{lead.name}</span>
                                                        <span className="text-xs text-midnight/40">{lead.email}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col text-sm">
                                                        <span className="font-medium text-midnight/80">{lead.company || "N/A"}</span>
                                                        <span className="text-xs text-midnight/40">{lead.role || lead.industry || ""}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <p className="text-xs text-midnight/60 max-w-[300px] line-clamp-2">
                                                        {lead.message || <span className="italic opacity-30">No message provided</span>}
                                                    </p>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <span className="text-xs font-medium text-midnight/50">
                                                        {new Date(lead.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-32 text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
                                    <Inbox size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-midnight">No leads found</h3>
                                <p className="text-sm text-midnight/40 max-w-xs">
                                    {searchTerm ? "No leads match your search criteria. Try a different term." : "Wait for growth signals to appear here after users interact with forms."}
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

// Minimalistic cn helper if not present
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
