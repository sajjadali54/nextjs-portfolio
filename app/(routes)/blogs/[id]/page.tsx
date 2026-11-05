"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { FiClock, FiMessageCircle, FiHeart, FiGlobe } from "react-icons/fi";
import { Post } from "@/app/types";
import Loader from "@/app/components/Loader";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import BackLink from "@/app/components/BackLink";

const SyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter").then((mod) => mod.Prism),
  { ssr: false },
);

const BlogPost = () => {
  const [blog, setBlog] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams<{ id: string }>();
  const postId = params.id;
  const url = "https://dev.to/api/articles/";

  useEffect(() => {
    const controller = new AbortController();
    const fetchBlogPost = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`${url}${postId}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`DEV returned ${response.status}`);
        const data: Post = await response.json();
        if (
          !data ||
          typeof data.title !== "string" ||
          typeof data.body_markdown !== "string"
        ) {
          throw new Error("DEV returned an invalid article.");
        }
        setBlog(data);
      } catch (requestError) {
        if (
          requestError instanceof Error &&
          requestError.name === "AbortError"
        ) {
          return;
        }
        console.error("Error fetching blog post:", requestError);
        setError("This article could not be loaded. It may have been removed.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    fetchBlogPost();
    return () => controller.abort();
  }, [postId]);

  if (loading) return <Loader />;

  if (error || !blog) {
    return (
      <div className="empty-state text-center" role="alert">
        <FiGlobe className="empty-icon mb-3" />
        <h1 className="h4">Article unavailable</h1>
        <p className="text-muted">{error || "This article could not be found."}</p>
        <BackLink link="/blogs" page="Blogs" />
      </div>
    );
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="page-surface">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="py-4"
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10} sm={12}>
              {/* Cover Image */}
              {blog.cover_image && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-4"
                >
                  <Image
                    src={blog.cover_image}
                    alt={blog.title}
                    className="img-fluid rounded-3 shadow-lg cover-image"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/placeholder-blog.png";
                    }}
                  />
                </motion.div>
              )}

              {/* Title */}
              <motion.h1 className="text-gradient text-center mb-4">
                <a
                  href={blog.canonical_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  {blog.title}
                </a>
              </motion.h1>

              {/* Author Section */}
              <motion.div
                className="section-panel p-3 mb-4 rounded-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="d-flex align-items-center gap-3">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Image
                      src={blog.user.profile_image || "/placeholder-avatar.png"}
                      alt={blog.user.name}
                      className="rounded-circle shadow-sm"
                      width={60}
                      height={60}
                    />
                  </motion.div>
                  <div>
                    <h5 className="mb-0 fw-bold">{blog.user.name}</h5>
                    <div className="text-muted d-flex align-items-center gap-2">
                      <FiClock className="text-primary" />
                      <span>
                        {blog.readable_publish_date} •{" "}
                        {blog.reading_time_minutes} min read
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Reactions */}
              <div className="d-flex justify-content-center gap-4 mb-4">
                <div className="reaction-badge">
                  <FiHeart className="text-danger" />
                  <span>{blog.public_reactions_count}</span>
                </div>
                <div className="reaction-badge">
                  <FiMessageCircle className="text-primary" />
                  <span>{blog.comments_count}</span>
                </div>
                <a
                  href={blog.canonical_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gradient"
                >
                  <FiGlobe className="me-2" />
                  Read on DEV
                </a>
              </div>

              {/* Content */}
              <motion.div className="section-panel p-4 rounded-4">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    img: ({ ...props }) => (
                      <Image
                        {...props}
                        alt="Blog Image"
                        className="blog-image rounded-3 shadow-sm my-4"
                        fluid
                      />
                    ),
                    code(obj) {
                      const { className, children, ...props } = obj;
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        <SyntaxHighlighter
                          style={atomDark}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-3 my-3"
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {blog.body_markdown}
                </ReactMarkdown>
              </motion.div>

              <BackLink link="/blogs" page="Blogs" />
            </Col>
          </Row>
        </Container>

        <style jsx global>{`
          .page-surface {
            display: contents;
          }

          .text-gradient {
            background: var(--gradient);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .author-card {
            background: var(--primary-soft) !important;
            border: 1px solid var(--border) !important;
          }

          .reaction-badge {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: var(--card) !important;
            border: 1px solid var(--border) !important;
            border-radius: 2rem;
            backdrop-filter: blur(5px);
            color: var(--foreground);
          }

          .btn-gradient {
            background: var(--gradient) !important;
            border: none;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 2rem;
            transition: all 0.3s ease;
          }

          .btn-gradient:hover {
            filter: brightness(1.08);
            transform: translateY(-2px);
          }

          .blog-image {
            transition: transform 0.3s ease;
          }

          .blog-image:hover {
            transform: scale(1.02);
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default BlogPost;
