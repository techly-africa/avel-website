import { supabase } from '@/lib/supabase';

export interface Lead {
    id: string;
    type: "contact" | "booking" | "grc_assessment" | "demo_request" | "waitlist" | "partnership";
    name: string;
    email: string;
    company?: string;
    role?: string;
    industry?: string;
    message?: string;
    data?: Record<string, unknown>;
    created_at?: string;
}

export const leadService = {
    async saveLead(leadData: Omit<Lead, "id" | "created_at">): Promise<void> {
        const { error } = await supabase
            .from('leads')
            .insert([leadData]);

        if (error) {
            console.error("Supabase Lead Insertion Error:", error);
            // Fallback for user experience if DB is not ready
            this.saveLeadFallback(leadData);
            throw error;
        }

        console.log("Lead Routing: Sent to Supabase and contact@avel.africa");
    },

    // Retain fallback to localStorage for resilience
    saveLeadFallback(leadData: Omit<Lead, "id" | "created_at">) {
        if (typeof window === "undefined") return;

        const lead = {
            ...leadData,
            id: Math.random().toString(36).substring(2, 11),
            created_at: new Date().toISOString(),
        };

        const existingLeads = JSON.parse(localStorage.getItem("avel_leads") || "[]");
        localStorage.setItem("avel_leads", JSON.stringify([lead, ...existingLeads]));
    },

    async getLeads(): Promise<Lead[]> {
        const { data, error } = await supabase
            .from('leads')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error("Supabase Fetch Leads Error:", error);
            // Return from localStorage as fallback
            if (typeof window !== "undefined") {
                return JSON.parse(localStorage.getItem("avel_leads") || "[]");
            }
            return [];
        }

        return data as Lead[];
    },

    async deleteLead(id: string) {
        const { error } = await supabase
            .from('leads')
            .delete()
            .eq('id', id);

        if (error) throw error;
    }
};
