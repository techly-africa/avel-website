"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import InsightEditor from "@/components/admin/InsightEditor";
import { insightService, Insight } from "@/services/insightService";

export default function EditInsightPage() {
    const params = useParams();
    const id = params.id as string;
    const [insight, setInsight] = useState<Insight | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInsight = async () => {
            try {
                // We'll add a getInsightById method to the service if needed, 
                // but for now we'll fetch all and find, or just use slug if we had it.
                // Let's optimize: add getInsightById to service.
                const all = await insightService.getAllInsightsAdmin();
                const found = all.find(i => i.id === id);
                if (found) setInsight(found);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchInsight();
    }, [id]);

    const handleSave = async (data: Partial<Insight>) => {
        await insightService.updateInsight(id, data);
    };

    if (loading) return <div className="p-12 text-center text-midnight/40">Loading insight data...</div>;
    if (!insight) return <div className="p-12 text-center text-red-500">Insight not found.</div>;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Edit Insight</h2>
                <p className="text-midnight/40 text-sm mt-1">Refine and update your strategic content.</p>
            </div>

            <InsightEditor initialData={insight} onSave={handleSave as any} isEditing />
        </div>
    );
}
