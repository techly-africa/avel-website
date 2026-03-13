"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CaseStudyEditor from "@/components/admin/CaseStudyEditor";
import { caseStudyService, CaseStudy } from "@/services/caseStudyService";

export default function NewCaseStudyPage() {
    const router = useRouter();

    const handleSave = async (data: Omit<CaseStudy, "id" | "created_at">) => {
        const result = await caseStudyService.createCaseStudy(data);
        if (result.id) {
            router.push(`/admin/case-studies/edit/${result.id}`);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Create New Case Study</h2>
                <p className="text-midnight/40 text-sm mt-1">Document a deep-dive project or success story.</p>
            </div>

            <CaseStudyEditor onSave={handleSave} />
        </div>
    );
}
