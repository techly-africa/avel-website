"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push("/admin/login");
            } else {
                setAuthenticated(true);
            }
            setLoading(false);
        };

        checkAuth();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                router.push("/admin/login");
                setAuthenticated(false);
            } else {
                setAuthenticated(true);
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-neutral-bg flex flex-col items-center justify-center space-y-4">
                <Loader2 className="animate-spin text-institutional-navy" size={40} />
                <p className="text-midnight/40 font-serif italic uppercase tracking-widest text-[10px] font-bold">Verifying Credentials...</p>
            </div>
        );
    }

    if (!authenticated) return null;

    return <>{children}</>;
}
