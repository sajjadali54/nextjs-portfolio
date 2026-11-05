"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/app/components/cards/ProjectCard";
import Tags from "@components/Tags";
import MyPagination from "@components/Pagination";
import SearchBox from "@components/search/SearchBox";
import { paginate } from "@utils/index";
import { fetchProjects } from "@services/projectService";
import useMediaQuery from "@hooks/useMediaQuery";
import { Tag, Project } from "@types";
import Loader from "@/app/components/Loader";
import { FiAlertTriangle } from "react-icons/fi";

const Projects = () => {
  const MOBILE_PAGE_SIZE = 3;
  const DESKTOP_PAGE_SIZE = 6;

  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(MOBILE_PAGE_SIZE);
  const [tags, setTags] = useState<Tag>({});
  const [error, setError] = useState("");
  const isMobile = useMediaQuery();

  useEffect(() => {
    let active = true;
    const getProjects = async () => {
      setLoading(true);
      try {
        const fetchedProjects = await fetchProjects();
        if (!active) return;
        setAllProjects(fetchedProjects);
        setTags(
          fetchedProjects.reduce((acc: Tag, project: Project) => {
            acc[project.language.toLowerCase()] = false;
            return acc;
          }, {}),
        );
      } catch (requestError) {
        console.error("Error loading projects:", requestError);
        if (active) setError("Projects could not be loaded. Please try again later.");
      } finally {
        if (active) setLoading(false);
      }
    };
    getProjects();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    setPageSize(isMobile ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE);
  }, [isMobile]);

  const projects = useMemo(() => {
    const field = searchField.trim().toLowerCase();
    const selectedLanguages = Object.keys(tags).filter((language) => tags[language]);

    return allProjects.filter((project) => {
      const matchesLanguage =
        selectedLanguages.length === 0 ||
        selectedLanguages.includes(project.language.toLowerCase());
      const matchesSearch =
        !field ||
        [
          project.title ?? "",
          project.description,
          project.language,
          ...project.topics,
        ].some((value) => value.toLowerCase().includes(field));

      return matchesLanguage && matchesSearch;
    });
  }, [allProjects, searchField, tags]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchField, tags, pageSize]);

  const pageCount = Math.ceil(projects.length / pageSize);
  useEffect(() => {
    setCurrentPage((page) => Math.min(page, Math.max(1, pageCount)));
  }, [pageCount]);

  const handleBadgeClick = (language: string) => {
    setTags((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

  const items: Project[] = paginate(projects, currentPage, pageSize);

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
    hover: { scale: 1.02 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-container section-panel p-4 rounded-4"
    >
      <header className="page-heading mb-4">
        <h1 className="h2 mb-2">Selected projects</h1>
        <p className="text-muted mb-0">
          Browse projects by name, technology, or topic.
        </p>
      </header>

      <SearchBox
        searchField={searchField}
        searchChange={(e) => setSearchField(e.target.value)}
        placeholder="Search projects..."
      />

      <motion.div className="mb-4">
        <Tags
          tags={Object.keys(tags)}
          status={Object.values(tags)}
          className="px-3 py-2"
          onClick={handleBadgeClick}
        />
      </motion.div>

      {error ? (
        <div className="empty-state text-center" role="alert">
          <FiAlertTriangle className="empty-icon mb-3" />
          <p className="text-muted mb-0">{error}</p>
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
              <h4 className="text-muted">No projects found</h4>
              <p className="text-muted">Try adjusting your search or filters</p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid-layout"
            >
              {items.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="grid-item"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}

          <MyPagination
            currentPage={currentPage}
            itemsCount={projects.length}
            onPageChange={setCurrentPage}
            pageSize={pageSize}
          />
        </>
      )}

    </motion.div>
  );
};

export default Projects;
