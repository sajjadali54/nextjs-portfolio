"use client";

import { motion } from "framer-motion";
import { FiClock, FiMessageCircle, FiGlobe, FiHeart } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";
import { Blog } from "@/app/types";
import Link from "next/link";

import "./blogCard.css";

const BlogCard: React.FC<{ blog: Blog; className?: string }> = ({
  blog,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={className}
    >
      <Card className="glass-card portfolio-card blog-card h-100 border-0 overflow-hidden">
        <Link
          href={`/blogs/${blog.id}`}
          className="blog-card-media"
          aria-label={`Read ${blog.title}`}
        >
          <Card.Img
            src={blog.cover_image || "/logo.png"}
            alt={blog.title}
            className="blog-image"
            onError={(e) => {
              e.currentTarget.src = "/logo.png";
            }}
          />
        </Link>

        <div className="portfolio-card-content">
          <Card.Body className="d-flex flex-column p-4">
            <div className="d-flex align-items-center mb-3">
              <Card.Img
                src={blog.user.profile_image || "/logo.png"}
                alt=""
                className="blog-author-image rounded-circle me-3 shadow-sm"
                onError={(e) => {
                  e.currentTarget.src = "/logo.png";
                }}
              />
              <div>
                <div className="fw-bold text-dark">{blog.user.name}</div>
                <small className="text-muted d-flex align-items-center gap-2">
                  <FiClock aria-hidden="true" />
                  {blog.reading_time_minutes} min read •{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    timeZone: "UTC",
                  }).format(new Date(blog.published_at))}
                </small>
              </div>
            </div>

            <Card.Title className="portfolio-card-title mb-2">
              <Link
                href={`/blogs/${blog.id}`}
                className="text-decoration-none"
              >
                {blog.title}
              </Link>
            </Card.Title>

            <Card.Text className="portfolio-card-description text-muted mb-3">
              {blog.description}
            </Card.Text>

            <div className="mt-auto">
              <Tags tags={blog.tag_list.slice(0, 4)} />
            </div>
          </Card.Body>

          <Card.Footer className="portfolio-card-footer bg-transparent border-0 px-4 pb-4">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
              <Link
                href={blog.canonical_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gradient d-flex align-items-center gap-2"
              >
                <FiGlobe aria-hidden="true" />
                Read article
              </Link>

              <div className="d-flex gap-3 text-muted">
                <span
                  className="d-flex align-items-center gap-1"
                  aria-label={`${blog.public_reactions_count} reactions`}
                >
                  <FiHeart aria-hidden="true" />
                  {blog.public_reactions_count}
                </span>
                <span
                  className="d-flex align-items-center gap-1"
                  aria-label={`${blog.comments_count} comments`}
                >
                  <FiMessageCircle aria-hidden="true" />
                  {blog.comments_count}
                </span>
              </div>
            </div>
          </Card.Footer>
        </div>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
