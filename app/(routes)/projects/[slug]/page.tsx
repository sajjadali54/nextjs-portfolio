import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiArrowLeft, FiExternalLink, FiGithub, FiLock } from "react-icons/fi";

import { personal } from "@data/personal";
import { projects } from "@data/projects";
import "./projectDetail.css";

type Props = { params: Promise<{ slug: string }> };

const findProject = (slug: string) => projects.find((p) => p.slug === slug);

// Case studies live in content/projects/<slug>.md and are read at build time.
async function readCaseStudy(slug: string) {
  try {
    const file = path.join(process.cwd(), "content", "projects", `${slug}.md`);
    return await readFile(file, "utf8");
  } catch {
    return null;
  }
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    // The /projects layout sets a plain title, so apply the site suffix explicitly.
    title: { absolute: `${project.title} | ${personal.name}` },
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const caseStudy = project.hasCaseStudy ? await readCaseStudy(slug) : null;
  const isClient = "isClientProject" in project && project.isClientProject;

  return (
    <article className="project-detail container py-4 py-lg-5">
      <Link href="/projects" className="project-detail-back">
        <FiArrowLeft aria-hidden="true" /> All projects
      </Link>

      <header className="project-detail-header">
        <p className="about-eyebrow mb-2">
          {"context" in project && project.context
            ? project.context
            : isClient
              ? "Client project · Badri Solutions"
              : "Personal project"}
        </p>
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-lead">{project.description}</p>

        <ul className="project-detail-tags" aria-label="Technologies">
          {project.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>

        <div className="project-detail-actions">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gradient"
            >
              <FiExternalLink aria-hidden="true" /> Live demo
            </a>
          )}
          {project.clone_url && (
            <a
              href={project.clone_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
            >
              <FiGithub aria-hidden="true" /> Source code
            </a>
          )}
          {isClient && (
            <span className="project-detail-note">
              <FiLock aria-hidden="true" /> Confidential client work: no public
              demo or source code
            </span>
          )}
        </div>
      </header>

      {caseStudy ? (
        <div className="project-detail-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{caseStudy}</ReactMarkdown>
        </div>
      ) : (
        <p className="project-detail-body text-muted">
          A detailed write-up for this project isn&apos;t available yet.
        </p>
      )}

      <footer className="project-detail-footer">
        <p className="mb-2 fw-semibold">Working on something similar?</p>
        <Link href="/contact" className="btn btn-gradient">
          Get in touch
        </Link>
      </footer>
    </article>
  );
}
