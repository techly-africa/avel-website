import { supabase } from '@/lib/supabase';

export interface Insight {
    id: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    content: string;
    date: string;
    published: boolean;
    created_at?: string;
}

export const insightService = {
    async getInsights() {
        const { data, error } = await supabase
            .from('insights')
            .select('*')
            .eq('published', true)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as Insight[];
    },

    async getInsightBySlug(slug: string) {
        const { data, error } = await supabase
            .from('insights')
            .select('*')
            .eq('slug', slug)
            .single();

        if (error) throw error;
        return data as Insight;
    },

    async getAllInsightsAdmin() {
        const { data, error } = await supabase
            .from('insights')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as Insight[];
    },

    async createInsight(insight: Omit<Insight, 'id' | 'created_at'>) {
        const { data, error } = await supabase
            .from('insights')
            .insert([insight])
            .select()
            .single();

        if (error) throw error;
        return data as Insight;
    },

    async updateInsight(id: string, insight: Partial<Insight>) {
        const { data, error } = await supabase
            .from('insights')
            .update(insight)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as Insight;
    },

    async deleteInsight(id: string) {
        const { error } = await supabase
            .from('insights')
            .delete()
            .eq('id', id);

        if (error) throw error;
    }
};
