import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiCalendar,
  FiClock,
  FiExternalLink,
  FiHeart,
  FiMessageCircle,
} from "react-icons/fi";

import BackLink from "@components/BackLink";
import { fetchDevArticle } from "@/app/services/devArticles";
import ArticleBody from "./ArticleBody";
import "@components/detail/detail.css";

type Props = { params: Promise<{ id: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const result = await fetchDevArticle(id);

  if (result.status === "not-found") notFound();

  if (result.status === "error") {
    return (
      <article className="detail container py-4 py-lg-5" role="alert">
        <BackLink link="/blogs" page="Blogs" />
        <h1 className="detail-title">Article unavailable</h1>
        <p className="detail-lead">
          This article couldn&apos;t be loaded from DEV right now. Please try
          again later.
        </p>
      </article>
    );
  }

  const { article } = result;

  return (
    <article className="detail container py-4 py-lg-5">
      <BackLink link="/blogs" page="Blogs" />

      <header className="detail-header">
        <p className="about-eyebrow mb-2">Article</p>
        <h1 className="detail-title">{article.title}</h1>
        {article.description && (
          <p className="detail-lead">{article.description}</p>
        )}

        <div className="detail-org">
          {article.user?.profile_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.user.profile_image}
              alt=""
              className="detail-org-logo detail-avatar"
            />
          )}
          <div>
            <span className="detail-org-name">{article.user?.name}</span>
            <span className="detail-org-meta">
              <span>
                <FiCalendar aria-hidden="true" /> {article.readable_publish_date}
              </span>
              <span>
                <FiClock aria-hidden="true" /> {article.reading_time_minutes} min
                read
              </span>
              <span aria-label={`${article.public_reactions_count} reactions`}>
                <FiHeart aria-hidden="true" /> {article.public_reactions_count}
              </span>
              <span aria-label={`${article.comments_count} comments`}>
                <FiMessageCircle aria-hidden="true" /> {article.comments_count}
              </span>
            </span>
          </div>
        </div>

        {Array.isArray(article.tags) && article.tags.length > 0 && (
          <ul className="detail-tags" aria-label="Tags">
            {article.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        <div className="detail-actions">
          <a
            href={article.canonical_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            <FiExternalLink aria-hidden="true" /> Read and discuss on DEV
          </a>
        </div>
      </header>

      {article.cover_image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={article.cover_image} alt="" className="detail-cover" />
      )}

      <div className="detail-body">
        <ArticleBody markdown={article.body_markdown} />
      </div>

      <footer className="detail-footer">
        <p className="mb-2 fw-semibold">Want to talk about this?</p>
        <Link href="/contact" className="btn btn-gradient">
          Get in touch
        </Link>
      </footer>
    </article>
  );
}
