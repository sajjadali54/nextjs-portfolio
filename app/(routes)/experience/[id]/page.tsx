import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiCalendar, FiExternalLink } from "react-icons/fi";

import BackLink from "@components/BackLink";
import { jobs } from "@data/jobs";
import { personal } from "@data/personal";
import "@components/detail/detail.css";

type Props = { params: Promise<{ id: string }> };

const findJob = (id: string) =>
  /^\d+$/.test(id) ? jobs[Number(id)] : undefined;

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));

export const dynamicParams = false;

export function generateStaticParams() {
  return jobs.map((_, index) => ({ id: String(index) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = findJob(id);
  if (!job) return { title: "Role not found" };

  const title = `${job.title} at ${job.companyName}`;
  return {
    title: { absolute: `${title} | ${personal.name}` },
    description: job.subtitle,
    alternates: { canonical: `/experience/${id}` },
  };
}

export default async function JobPage({ params }: Props) {
  const { id } = await params;
  const job = findJob(id);
  if (!job) notFound();

  const period = `${formatDate(job.startDate)} – ${
    job.endDate ? formatDate(job.endDate) : "Present"
  }`;

  return (
    <article className="detail container py-4 py-lg-5">
      <BackLink link="/experience" page="Experience" />

      <header className="detail-header">
        <div className="detail-org">
          {job.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={job.image} alt="" className="detail-org-logo" />
          )}
          <div>
            {job.companyUrl ? (
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-org-name"
              >
                {job.companyName}
              </a>
            ) : (
              <span className="detail-org-name">{job.companyName}</span>
            )}
            <span className="detail-org-meta">
              <FiCalendar aria-hidden="true" /> {period}
            </span>
          </div>
        </div>

        <p className="about-eyebrow mb-2">Experience</p>
        <h1 className="detail-title">{job.title}</h1>
        {"previousRoles" in job &&
          job.previousRoles?.map((role) => (
            <p key={role.title} className="detail-note mb-3">
              Promoted from {role.title} ({formatDate(role.startDate)} –{" "}
              {formatDate(role.endDate)})
            </p>
          ))}
        <p className="detail-lead">{job.subtitle}</p>

        {job.tags?.length > 0 && (
          <ul className="detail-tags" aria-label="Technologies">
            {job.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        {job.companyUrl && (
          <div className="detail-actions">
            <a
              href={job.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
            >
              <FiExternalLink aria-hidden="true" /> Visit {job.companyName}
            </a>
          </div>
        )}
      </header>

      <div className="detail-body">
        <h2>Key contributions</h2>
        <ul className="detail-list">
          {job.duties.map((duty) => (
            <li key={duty}>{duty}</li>
          ))}
        </ul>
      </div>

      <footer className="detail-footer">
        <p className="mb-2 fw-semibold">See the work behind this role</p>
        <Link href="/projects" className="btn btn-gradient">
          View projects
        </Link>
      </footer>
    </article>
  );
}
