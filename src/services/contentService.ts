import { supabase } from '@/lib/supabase';

export interface SiteContent {
    id: string;
    key: string;
    data: any;
    updated_at?: string;
}

export const contentService = {
    async getContent(key: string) {
        const { data, error } = await supabase
            .from('site_content')
            .select('*')
            .eq('key', key)
            .single();

        if (error && error.code !== 'PGRST116') {
            throw error;
        }
        return data as SiteContent | null;
    },

    async updateContent(key: string, contentData: any) {
        const { data, error } = await supabase
            .from('site_content')
            .upsert({ key, data: contentData, updated_at: new Date().toISOString() }, { onConflict: 'key' })
            .select()
            .single();

        if (error) throw error;
        return data as SiteContent;
    },

    async getAllContentAdmin() {
        const { data, error } = await supabase
            .from('site_content')
            .select('*')
            .order('key', { ascending: true });

        if (error) throw error;
        return data as SiteContent[];
    }
};
