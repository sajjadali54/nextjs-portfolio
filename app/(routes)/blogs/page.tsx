"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import BlogCard from "@/app/components/cards/BlogCard";
import { useMediaQuery } from "@/app/hooks";
import Pagination from "@components/Pagination";
import SearchBox from "@components/search/SearchBox";
import Loader from "@components/Loader";
import { paginate } from "@utils/index";
import { Blog } from "@types";
import { FiAlertTriangle } from "react-icons/fi";

const Blogs = () => {
  const isMobile = useMediaQuery();
  const PAGE_SIZE = isMobile ? 4 : 8;
  const CURRENT_PAGE = 1;

  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<Blog[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
  const [error, setError] = useState("");

  const url = "https://dev.to/api/articles?username=sajjadali";

  useEffect(() => {
    const controller = new AbortController();
    const fetchPosts = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data: Blog[] = await response.json();
        if (!Array.isArray(data)) throw new Error("Unexpected response from DEV");
        setPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError("Blog posts are temporarily unavailable. Please try again later.");
        console.error("Error fetching blog posts:", err);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchPosts();
    return () => controller.abort();
  }, [url]);

  useEffect(() => {
    const field = searchQuery.trim().toLowerCase();
    const filtered = posts.filter(
      (post: Blog) =>
        post.title.toLowerCase().includes(field) ||
        post.description.toLowerCase().includes(field) ||
        post.tag_list.some((tag) => tag.toLowerCase().includes(field)),
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [searchQuery, posts]);

  const items = paginate(filteredPosts, currentPage, PAGE_SIZE);
  const pageCount = Math.ceil(filteredPosts.length / PAGE_SIZE);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, Math.max(1, pageCount)));
  }, [pageCount]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container className="blogs-page p-0">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <header className="page-heading mb-4">
          <h1 className="h2 mb-2">Writing</h1>
          <p className="text-muted mb-0">
            Articles and notes published on DEV.
          </p>
        </header>

        <SearchBox
          searchField={searchQuery}
          searchChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search blog posts..."
        />

        {error ? (
          <div className="text-center py-5" role="alert">
            <FiAlertTriangle className="mb-3" size={32} />
            <p className="mb-0">{error}</p>
          </div>
        ) : loading ? (
          <Loader />
        ) : (
          <>
            {items.length === 0 ? (
              <motion.div
                className="empty-state text-center py-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <FiAlertTriangle className="empty-icon mb-3" />
                <h4 className="text-muted">No posts found</h4>
                <p className="text-muted">Try adjusting your search terms</p>
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid-layout"
              >
                {items.map((post, index) => (
                  <motion.div
                    key={post.id || index}
                    variants={itemVariants}
                    className="grid-item"
                  >
                    <BlogCard blog={post} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            <Pagination
              itemsCount={filteredPosts.length}
              pageSize={PAGE_SIZE}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        )}
      </motion.div>
    </Container>
  );
};

export default Blogs;
