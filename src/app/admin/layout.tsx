"use client";

import React from "react";
import {
    LayoutDashboard,
    FileText,
    Briefcase,
    Settings,
    LogOut
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import { supabase } from "@/lib/supabase";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const router = useRouter();

    const menuItems = [
        { title: "Dashboard", icon: LayoutDashboard, href: "/admin" },
        { title: "Leads", icon: FileText, href: "/admin/leads" },
        { title: "Manage Insights", icon: FileText, href: "/admin/insights" },
        { title: "Manage Case Studies", icon: Briefcase, href: "/admin/case-studies" },
        { title: "Page Content", icon: Settings, href: "/admin/content" },
    ];

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push("/admin/login");
    };

    if (pathname === "/admin/login") return <>{children}</>;

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-neutral-bg text-midnight font-sans pt-24 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Sidebar */}
                        <aside className="w-full md:w-64 space-y-2">
                            <div className="px-4 py-8">
                                <h1 className="text-xl font-bold tracking-tight text-white">AVEL Admin</h1>
                                <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mt-1">Control Plane</p>
                            </div>
                            <nav className="space-y-2">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all ${pathname === item.href ? 'bg-white shadow-xl shadow-white/5 font-bold text-institutional-navy' : 'text-white/40 hover:text-white/80 hover:bg-white/5'}`}
                                    >
                                        <item.icon size={18} />
                                        <span className="text-sm">{item.title}</span>
                                    </Link>
                                ))}
                            </nav>
                            <div className="pt-10 px-4">
                                <button
                                    onClick={handleSignOut}
                                    className="flex items-center space-x-3 text-red-400 hover:text-red-500 text-[10px] font-black uppercase tracking-widest transition-all px-4"
                                >
                                    <LogOut size={16} />
                                    <span>Terminate Session</span>
                                </button>
                            </div>
                        </aside>

                        {/* Main Content Area */}
                        <main className="flex-1 min-w-0">
                            <div className="bg-white/40 backdrop-blur-sm rounded-[3rem] p-4 md:p-10 border border-white shadow-2xl shadow-midnight/5 min-h-[80vh]">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
