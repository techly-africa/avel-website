"use client";

import React, { useState } from "react";
import {
    Save,
    X,
    CheckCircle2,
    Loader2,
    ArrowLeft,
    Image as ImageIcon
} from "lucide-react";
import Link from "next/link";
import { CaseStudy } from "@/services/caseStudyService";

interface CaseStudyEditorProps {
    initialData?: Partial<CaseStudy>;
    onSave: (data: Omit<CaseStudy, 'id' | 'created_at'>) => Promise<void>;
    isEditing?: boolean;
}

export default function CaseStudyEditor({ initialData, onSave, isEditing }: CaseStudyEditorProps) {
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        slug: initialData?.slug || "",
        company: initialData?.company || "",
        challenge: initialData?.challenge || "",
        result: initialData?.result || "",
        image_url: initialData?.image_url || "",
        published: initialData?.published || false,
    });

    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            await onSave(formData as any);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error) {
            console.error(error);
            alert("Error saving case study. Check console.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-10">
            <div className="flex items-center justify-between">
                <Link href="/admin/case-studies" className="flex items-center text-midnight/40 hover:text-midnight font-bold text-sm transition-all">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Case Studies
                </Link>
                <div className="flex items-center space-x-4">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="inline-flex items-center space-x-2 bg-midnight text-white px-8 py-3 rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95 disabled:opacity-50"
                    >
                        {isSaving ? <Loader2 className="animate-spin" size={18} /> : (saved ? <CheckCircle2 size={18} /> : <Save size={18} />)}
                        <span>{isSaving ? "Saving..." : (saved ? "Saved" : "Save Case Study")}</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">Project Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Core Banking Migration"
                                className="w-full px-0 py-2 border-b-2 border-gray-100 focus:border-midnight bg-transparent text-2xl font-bold outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">Company</label>
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    placeholder="Ecobank Group"
                                    className="w-full px-4 py-3 bg-neutral-bg border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-midnight/5 transition-all outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">Slug</label>
                                <input
                                    type="text"
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/ /g, '-') })}
                                    placeholder="ecobank-migration"
                                    className="w-full px-4 py-3 bg-neutral-bg border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-midnight/5 transition-all outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">The Challenge</label>
                            <textarea
                                value={formData.challenge}
                                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                                placeholder="What was the core problem?"
                                className="w-full px-4 py-4 bg-neutral-bg border-none rounded-2xl text-sm min-h-[150px] focus:ring-2 focus:ring-midnight/5 transition-all outline-none resize-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">The Result & Delivery</label>
                            <textarea
                                value={formData.result}
                                onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                                placeholder="How did AVEL solve it and what was the outcome?"
                                className="w-full px-4 py-4 bg-neutral-bg border-none rounded-2xl text-sm min-h-[150px] focus:ring-2 focus:ring-midnight/5 transition-all outline-none resize-none"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest">Media & Status</h4>

                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">Hero Image URL</label>
                            <div className="relative">
                                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-midnight/20" size={18} />
                                <input
                                    type="text"
                                    value={formData.image_url}
                                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                                    placeholder="https://..."
                                    className="w-full pl-12 pr-4 py-3 bg-neutral-bg border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-midnight/5 transition-all"
                                />
                            </div>
                            {formData.image_url && (
                                <div className="mt-4 aspect-video rounded-2xl overflow-hidden border border-gray-100">
                                    <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                            )}
                        </div>

                        <div className="flex items-center justify-between p-4 bg-neutral-bg rounded-2xl">
                            <div>
                                <h5 className="text-sm font-bold">Published</h5>
                                <p className="text-[10px] text-midnight/40 uppercase tracking-widest mt-0.5">Visible to public</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, published: !formData.published })}
                                className={`w-12 h-6 rounded-full transition-all relative ${formData.published ? 'bg-emerald-500' : 'bg-gray-300'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${formData.published ? 'left-7' : 'left-1'}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
