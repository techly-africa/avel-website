"use client";

import React, { useState } from "react";
import {
    Save,
    X,
    CheckCircle2,
    Loader2,
    ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { Insight } from "@/services/insightService";

interface InsightEditorProps {
    initialData?: Partial<Insight>;
    onSave: (data: Omit<Insight, 'id' | 'created_at'>) => Promise<void>;
    isEditing?: boolean;
}

export default function InsightEditor({ initialData, onSave, isEditing }: InsightEditorProps) {
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        slug: initialData?.slug || "",
        category: initialData?.category || "Strategic Advisory",
        description: initialData?.description || "",
        content: initialData?.content || "",
        date: initialData?.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
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
            alert("Error saving insight. Check console.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-10">
            <div className="flex items-center justify-between">
                <Link href="/admin/insights" className="flex items-center text-midnight/40 hover:text-midnight font-bold text-sm transition-all">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Insights
                </Link>
                <div className="flex items-center space-x-4">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="inline-flex items-center space-x-2 bg-midnight text-white px-8 py-3 rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95 disabled:opacity-50"
                    >
                        {isSaving ? <Loader2 className="animate-spin" size={18} /> : (saved ? <CheckCircle2 size={18} /> : <Save size={18} />)}
                        <span>{isSaving ? "Saving..." : (saved ? "Saved" : "Save Insight")}</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">Insight Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="The Future of Digital Sovereignty"
                                className="w-full px-0 py-2 border-b-2 border-gray-100 focus:border-midnight bg-transparent text-2xl font-bold outline-none transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">Slug</label>
                            <input
                                type="text"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/ /g, '-') })}
                                placeholder="digital-sovereignty-report"
                                className="w-full px-4 py-3 bg-neutral-bg border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-midnight/5 transition-all outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">Short Description</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="A brief summary of the insight for previews..."
                                className="w-full px-4 py-4 bg-neutral-bg border-none rounded-2xl text-sm min-h-[100px] focus:ring-2 focus:ring-midnight/5 transition-all outline-none resize-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">Content (Markdown)</label>
                            <textarea
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                placeholder="# Heading..."
                                className="w-full px-4 py-4 bg-neutral-bg border-none rounded-2xl text-sm font-mono min-h-[400px] focus:ring-2 focus:ring-midnight/5 transition-all outline-none resize-none"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest">Publishing</h4>

                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">Category</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-3 bg-neutral-bg border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-midnight/5 transition-all appearance-none"
                            >
                                <option>Strategic Advisory</option>
                                <option>GRC & Security</option>
                                <option>Product Engineering</option>
                                <option>Market Insights</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-midnight/40 mb-2">Date</label>
                            <input
                                type="text"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full px-4 py-3 bg-neutral-bg border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-midnight/5"
                            />
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
