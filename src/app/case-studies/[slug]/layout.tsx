import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return { title: "Case Study" };
  const supabase = createClient(url, key);
  try {
    const { data } = await supabase
      .from("case_studies")
      .select("title, challenge, company")
      .eq("slug", slug)
      .single();

    if (!data) return { title: "Case Study" };

    return {
      title: `${data.title} — ${data.company}`,
      description: data.challenge,
      openGraph: {
        title: `${data.title} | AVEL Africa`,
        description: data.challenge,
        url: `https://avel.africa/case-studies/${slug}`,
        type: "article",
      },
      alternates: { canonical: `https://avel.africa/case-studies/${slug}` },
    };
  } catch {
    return { title: "Case Study" };
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
