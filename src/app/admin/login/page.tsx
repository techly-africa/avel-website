"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Loader2, ShieldCheck, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;
            router.push("/admin");
        } catch (err: any) {
            setError(err.message || "Authentication failed. Access denied.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-midnight flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-accent/5 blur-[120px] rounded-full" />

            <div className="w-full max-w-md relative z-10">
                <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl space-y-8 border border-white/10">
                    <div className="text-center space-y-2">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-institutional-navy/5 text-institutional-navy mb-4">
                            <ShieldCheck size={32} />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-institutional-navy">Control Plane Access</h1>
                        <p className="text-xs font-black uppercase tracking-widest text-midnight/40">AVEL Africa Institutional Guard</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-start space-x-3 text-red-600 text-sm">
                            <AlertCircle size={18} className="mt-0.5" />
                            <p>{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-midnight/40 ml-4">Institutional Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-6 py-4 bg-neutral-bg border-none rounded-2xl text-sm focus:ring-2 focus:ring-institutional-navy/10 transition-all outline-none"
                                placeholder="name@avel-africa.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-midnight/40 ml-4">Access Key</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-6 py-4 bg-neutral-bg border-none rounded-2xl text-sm focus:ring-2 focus:ring-institutional-navy/10 transition-all outline-none"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-5 bg-institutional-navy text-white rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg shadow-institutional-navy/20"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : (
                                <>
                                    <span>Initiate Session</span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="text-[10px] text-midnight/20 font-bold uppercase tracking-widest">Authorized Personnel Only</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
