import type { Metadata } from "next";

interface DevArticle {
  title?: string;
  description?: string;
  canonical_url?: string;
  cover_image?: string | null;
  published_at?: string;
}

type Props = { params: Promise<{ id: string }> };

// Articles are mirrored from DEV, so point the canonical URL at the original post
// to avoid duplicate-content issues. Falls back to generic metadata if DEV is unreachable.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const response = await fetch(
      `https://dev.to/api/articles/${encodeURIComponent(id)}`,
      { next: { revalidate: 86400 } }
    );
    if (!response.ok) throw new Error(`DEV API returned ${response.status}`);

    const article = (await response.json()) as DevArticle;
    if (!article.title) throw new Error("Article has no title");

    return {
      title: article.title,
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
  } catch {
    return { title: "Blog article" };
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
