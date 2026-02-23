export interface Lead {
    id: string;
    type: "contact" | "booking" | "grc_assessment" | "demo_request" | "waitlist" | "partnership";
    name: string;
    email: string;
    company?: string;
    role?: string;
    industry?: string;
    message?: string;
    data?: any;
    timestamp: string;
}

export const leadService = {
    saveLead: async (leadData: Omit<Lead, "id" | "timestamp">): Promise<void> => {
        // Simulate API latency
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (typeof window === "undefined") return;

        const lead: Lead = {
            ...leadData,
            id: Math.random().toString(36).substring(2, 11),
            timestamp: new Date().toISOString(),
        };

        const existingLeads = JSON.parse(localStorage.getItem("avel_leads") || "[]");
        localStorage.setItem("avel_leads", JSON.stringify([lead, ...existingLeads]));

        // In a real production environment, this would trigger an email to copain@avel.africa
        console.log("Lead Routing: Sent to copain@avel.africa", lead);
    },

    getLeads: (): Lead[] => {
        if (typeof window === "undefined") return [];
        return JSON.parse(localStorage.getItem("avel_leads") || "[]");
    },

    clearLeads: () => {
        if (typeof window === "undefined") return;
        localStorage.removeItem("avel_leads");
    }
};
