import type { Metadata } from "next";
import { fetchDevArticle } from "@/app/services/devArticles";
import { personal } from "@data/personal";

type Props = { params: Promise<{ id: string }> };

// Articles are mirrored from DEV, so point the canonical URL at the original post
// to avoid duplicate-content issues. Falls back to generic metadata if DEV is unreachable.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const result = await fetchDevArticle(id);
  if (result.status !== "ok") return { title: "Blog article" };

  const { article } = result;
  return {
    title: { absolute: `${article.title} | ${personal.name}` },
    description: article.description,
    alternates: article.canonical_url
      ? { canonical: article.canonical_url }
      : undefined,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.published_at,
      images: article.cover_image ? [article.cover_image] : undefined,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
