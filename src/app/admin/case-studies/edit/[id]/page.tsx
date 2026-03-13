"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CaseStudyEditor from "@/components/admin/CaseStudyEditor";
import { caseStudyService, CaseStudy } from "@/services/caseStudyService";

export default function EditCaseStudyPage() {
    const params = useParams();
    const id = params.id as string;
    const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCaseStudy = async () => {
            try {
                const all = await caseStudyService.getAllCaseStudiesAdmin();
                const found = all.find(c => c.id === id);
                if (found) setCaseStudy(found);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCaseStudy();
    }, [id]);

    const handleSave = async (data: Partial<CaseStudy>) => {
        await caseStudyService.updateCaseStudy(id, data);
    };

    if (loading) return <div className="p-12 text-center text-midnight/40">Loading case study data...</div>;
    if (!caseStudy) return <div className="p-12 text-center text-red-500">Case study not found.</div>;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Edit Case Study</h2>
                <p className="text-midnight/40 text-sm mt-1">Refine and update your project documentation.</p>
            </div>

            <CaseStudyEditor initialData={caseStudy} onSave={handleSave as any} isEditing />
        </div>
    );
}
