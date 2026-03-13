"use client";

import React from "react";
import { useRouter } from "next/navigation";
import InsightEditor from "@/components/admin/InsightEditor";
import { insightService, Insight } from "@/services/insightService";

export default function NewInsightPage() {
    const router = useRouter();

    const handleSave = async (data: Omit<Insight, "id" | "created_at">) => {
        const result = await insightService.createInsight(data);
        if (result.id) {
            router.push(`/admin/insights/edit/${result.id}`);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Create New Insight</h2>
                <p className="text-midnight/40 text-sm mt-1">Draft a new strategic article or report.</p>
            </div>

            <InsightEditor onSave={handleSave} />
        </div>
    );
}
