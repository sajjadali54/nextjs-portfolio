"use client";

import { GoPackage, GoStack } from "react-icons/go";
import { motion } from "framer-motion";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TechStack from "@components/stack/TechStack";
import ProjectCard from "./components/cards/ProjectCard";
import { techItems } from "@data/tech-items";
import projects from "./data/projects";

import { useMediaQuery } from "./hooks";

import "./globals.css";

import HeroSection from "./components/home/hero";

export default function Home() {
  const isMobile = useMediaQuery();
  const firstThreeProjects = projects.slice(0, 3);

  return (
    <div className="page-surface">
      <HeroSection />

      <section className="py-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="section-panel tech-stack-section text-center mb-4">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
              <GoStack className="tech-stack-icon" />
              <h2 className="text-gradient mb-0">Tech Stack</h2>
            </div>

            <Row className="g-4 align-items-center">
              <Col>
                <TechStack techItems={techItems} isMobile={isMobile} />
              </Col>
            </Row>
          </div>
        </motion.div>
      </section>

      <section className="py-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="section-panel projects-section text-center mb-4">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
              <GoPackage className="projects-icon" />
              <h2 className="text-gradient mb-0">Some of my projects</h2>
            </div>

            <p className="lead text-muted mb-4">
              Here are some of the projects {"I've"} worked on. You can find
              more on my GitHub page.
            </p>

            <Row className="g-4 justify-content-center">
              {firstThreeProjects.map((project, index) => (
                <Col key={index} className="mb-3">
                  <ProjectCard project={project} />
                </Col>
              ))}
            </Row>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
