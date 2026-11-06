import { Post } from "@types";

export type ArticleResult =
  | { status: "ok"; article: Post }
  | { status: "not-found" }
  | { status: "error" };

// DEV responses are untrusted: validate the id, the HTTP status, and the shape.
// The same URL and cache options are used by the page and its metadata, so Next.js
// deduplicates the request. Articles refresh at most once a day.
export async function fetchDevArticle(id: string): Promise<ArticleResult> {
  if (!/^\d+$/.test(id)) return { status: "not-found" };

  try {
    const response = await fetch(`https://dev.to/api/articles/${id}`, {
      next: { revalidate: 86400 },
    });
    if (response.status === 404) return { status: "not-found" };
    if (!response.ok) return { status: "error" };

    const data = (await response.json()) as Partial<Post> | null;
    if (
      !data ||
      typeof data.title !== "string" ||
      typeof data.body_markdown !== "string"
    ) {
      return { status: "error" };
    }
    return { status: "ok", article: data as Post };
  } catch {
    return { status: "error" };
  }
}
