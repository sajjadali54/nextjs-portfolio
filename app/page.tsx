"use client";

import { GoPackage, GoStack } from "react-icons/go";
import { motion } from "framer-motion";

import TechStack from "@components/stack/TechStack";
import ProjectCard from "./components/cards/ProjectCard";
import { familiarTech, techItems } from "@data/tech-items";
import projects from "./data/projects";

import HeroSection from "./components/home/hero";
import HowIWork from "./components/home/HowIWork";

export default function Home() {
  const firstProjects = projects.slice(0, 4);

  return (
    <div className="page-surface">
      <HeroSection />

      <HowIWork />

      <section className="py-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="section-panel projects-section text-center mb-4">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
              <GoPackage className="projects-icon" />
              <h2 className="text-gradient mb-0">Selected projects</h2>
            </div>

            <p className="lead text-muted mb-4">
              A few projects that show how I approach product development and
              data-intensive workflows.
            </p>

            <div className="grid-layout text-start">
              {firstProjects.map((project, index) => (
                <ProjectCard key={project.id || index} project={project} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="section-panel tech-stack-section text-center mb-4">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
              <GoStack className="tech-stack-icon" />
              <h2 className="text-gradient mb-0">Tools I use</h2>
            </div>
            <p className="text-muted mb-4">
              What I reach for day to day when building actuarial and financial
              software.
            </p>

            <TechStack techItems={techItems} familiar={familiarTech} />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
