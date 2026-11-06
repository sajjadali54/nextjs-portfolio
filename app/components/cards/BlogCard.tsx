"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiHeart, FiMessageCircle } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";
import { Blog } from "@/app/types";
import Link from "next/link";

import "./blogCard.css";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));

const BlogCard: React.FC<{ blog: Blog; className?: string }> = ({
  blog,
  className = "",
}) => {
  const href = `/blogs/${blog.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={`h-100 ${className}`}
    >
      <Card className="glass-card portfolio-card blog-card h-100 border-0 overflow-hidden">
        <Link href={href} className="blog-card-media" tabIndex={-1} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={blog.cover_image || "/logo.png"}
            alt=""
            className="blog-image"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/logo.png";
            }}
          />
        </Link>

        <div className="portfolio-card-content">
          <Card.Body className="d-flex flex-column">
            <p className="blog-card-meta">
              <time dateTime={blog.published_at}>
                {formatDate(blog.published_at)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{blog.reading_time_minutes} min read</span>
            </p>

            <h3 className="portfolio-card-title blog-card-title mb-2">
              <Link href={href} className="text-decoration-none">
                {blog.title}
              </Link>
            </h3>

            <p className="blog-card-description text-muted mb-3">
              {blog.description}
            </p>

            {blog.tag_list.length > 0 && (
              <div className="mt-auto">
                <Tags tags={blog.tag_list.slice(0, 3)} />
              </div>
            )}
          </Card.Body>

          <Card.Footer className="portfolio-card-footer bg-transparent border-0">
            <div className="blog-card-footer">
              <Link
                href={href}
                className="blog-card-read"
                aria-label={`Read article: ${blog.title}`}
              >
                Read article <FiArrowRight aria-hidden="true" />
              </Link>

              <span className="blog-card-stats">
                <span aria-label={`${blog.public_reactions_count} reactions`}>
                  <FiHeart aria-hidden="true" /> {blog.public_reactions_count}
                </span>
                <span aria-label={`${blog.comments_count} comments`}>
                  <FiMessageCircle aria-hidden="true" /> {blog.comments_count}
                </span>
              </span>
            </div>
          </Card.Footer>
        </div>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
