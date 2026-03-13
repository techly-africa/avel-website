import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { data } = await supabase
      .from("insights")
      .select("title, description, category")
      .eq("slug", slug)
      .single();

    if (!data) return { title: "Insight" };

    return {
      title: data.title,
      description: data.description,
      openGraph: {
        title: `${data.title} | AVEL Africa`,
        description: data.description,
        url: `https://avel.africa/insights/${slug}`,
        type: "article",
      },
      alternates: { canonical: `https://avel.africa/insights/${slug}` },
    };
  } catch {
    return { title: "Insight" };
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
