"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";
import Link from "next/link";

import { Project } from "@/app/types";

import "./projectCard.css";

const ProjectCard: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={className}
    >
      <Card className="glass-card portfolio-card project-card h-100 border-0 overflow-hidden">
        <div className="image-container position-relative">
          <Card.Img
            src={project.image || "/placeholder.png"}
            alt={project.title || "Project"}
            className="project-image"
            onError={(e) => {
              e.currentTarget.src = "/logo.png";
            }}
          />
        </div>

        <div className="portfolio-card-content">
          <Card.Body className="d-flex flex-column p-4">
            <h3 className="portfolio-card-title mb-2">
              {project.title || "Untitled project"}
            </h3>
            <Card.Text className="portfolio-card-description text-muted mb-3">
              {project.description}
            </Card.Text>

            {project.topics?.length > 0 && (
              <div className="mt-auto">
                <Tags tags={project.topics.slice(0, 5)} />
              </div>
            )}
          </Card.Body>

          <Card.Footer className="portfolio-card-footer bg-transparent border-0 px-4 pb-4">
            <div className="d-flex flex-wrap gap-2">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gradient d-flex align-items-center gap-2"
                >
                  <FiExternalLink aria-hidden="true" />
                  Live demo
                </Link>
              )}

              {project.clone_url && (
                <Link
                  href={project.clone_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary d-flex align-items-center gap-2"
                >
                  <FiGithub aria-hidden="true" />
                  Source code
                </Link>
              )}
            </div>
          </Card.Footer>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
