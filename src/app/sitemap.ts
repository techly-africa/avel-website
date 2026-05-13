import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

const BASE = "https://avel.africa";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
  ];

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return staticRoutes;
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  let insightRoutes: MetadataRoute.Sitemap = [];
  let caseStudyRoutes: MetadataRoute.Sitemap = [];

  try {
    const { data: insights } = await supabase
      .from("insights")
      .select("slug, created_at")
      .eq("published", true);

    if (insights) {
      insightRoutes = insights.map((i) => ({
        url: `${BASE}/insights/${i.slug}`,
        lastModified: new Date(i.created_at),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch { /* degrades gracefully */ }

  try {
    const { data: caseStudies } = await supabase
      .from("case_studies")
      .select("slug, created_at")
      .eq("published", true);

    if (caseStudies) {
      caseStudyRoutes = caseStudies.map((c) => ({
        url: `${BASE}/case-studies/${c.slug}`,
        lastModified: new Date(c.created_at),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch { /* degrades gracefully */ }

  return [...staticRoutes, ...insightRoutes, ...caseStudyRoutes];
}
