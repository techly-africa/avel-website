import { supabase } from '@/lib/supabase';

export interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    company: string;
    challenge: string;
    result: string;
    image_url?: string;
    published: boolean;
    created_at?: string;
}

export const caseStudyService = {
    async getCaseStudies() {
        const { data, error } = await supabase
            .from('case_studies')
            .select('*')
            .eq('published', true)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as CaseStudy[];
    },

    async getCaseStudyBySlug(slug: string) {
        const { data, error } = await supabase
            .from('case_studies')
            .select('*')
            .eq('slug', slug)
            .single();

        if (error) throw error;
        return data as CaseStudy;
    },

    async getAllCaseStudiesAdmin() {
        const { data, error } = await supabase
            .from('case_studies')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as CaseStudy[];
    },

    async createCaseStudy(caseStudy: Omit<CaseStudy, 'id' | 'created_at'>) {
        const { data, error } = await supabase
            .from('case_studies')
            .insert([caseStudy])
            .select()
            .single();

        if (error) throw error;
        return data as CaseStudy;
    },

    async updateCaseStudy(id: string, caseStudy: Partial<CaseStudy>) {
        const { data, error } = await supabase
            .from('case_studies')
            .update(caseStudy)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as CaseStudy;
    },

    async deleteCaseStudy(id: string) {
        const { error } = await supabase
            .from('case_studies')
            .delete()
            .eq('id', id);

        if (error) throw error;
    }
};
