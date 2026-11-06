import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiCalendar, FiExternalLink } from "react-icons/fi";

import BackLink from "@components/BackLink";
import { education } from "@data/education";
import { personal } from "@data/personal";
import "@components/detail/detail.css";

type Props = { params: Promise<{ id: string }> };

const findRecord = (id: string) =>
  /^\d+$/.test(id) ? education[Number(id)] : undefined;

export const dynamicParams = false;

export function generateStaticParams() {
  return education.map((_, index) => ({ id: String(index) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const record = findRecord(id);
  if (!record) return { title: "Education record not found" };

  return {
    title: {
      absolute: `${record.degree}, ${record.institution} | ${personal.name}`,
    },
    description: record.description,
    alternates: { canonical: `/education/${id}` },
  };
}

export default async function EducationPage({ params }: Props) {
  const { id } = await params;
  const record = findRecord(id);
  if (!record) notFound();

  return (
    <article className="detail container py-4 py-lg-5">
      <BackLink link="/education" page="Education" />

      <header className="detail-header">
        <div className="detail-org">
          {record.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={record.image} alt="" className="detail-org-logo" />
          )}
          <div>
            <a
              href={record.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-org-name"
            >
              {record.institution}
            </a>
            <span className="detail-org-meta">
              <FiCalendar aria-hidden="true" /> {record.startDate} –{" "}
              {record.endDate}
            </span>
          </div>
        </div>

        <p className="about-eyebrow mb-2">Education</p>
        <h1 className="detail-title">{record.degree}</h1>
        <p className="detail-lead">{record.description}</p>

        {record.tags?.length > 0 && (
          <ul className="detail-tags" aria-label="Highlights">
            {record.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        <div className="detail-actions">
          <a
            href={record.institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            <FiExternalLink aria-hidden="true" /> Visit institution
          </a>
        </div>
      </header>

      {record.achievements?.length > 0 && (
        <div className="detail-body">
          <h2>Highlights</h2>
          <ul className="detail-list">
            {record.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      <footer className="detail-footer">
        <p className="mb-2 fw-semibold">See how this background shows up in my work</p>
        <Link href="/projects" className="btn btn-gradient">
          View projects
        </Link>
      </footer>
    </article>
  );
}
