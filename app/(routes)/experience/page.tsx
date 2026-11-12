"use client";

import Link from "next/link";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Tags from "@components/Tags";
import { jobs, roleHistory, tenureStart } from "@data/jobs";
import styles from "./Experience.module.css";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));

export default function Experience() {
  return (
    <Container className="py-4 py-lg-5">
      <header className="page-heading mb-5">
        <p className="about-eyebrow mb-2">Experience</p>
        <h1 className="display-5 fw-bold mb-3">Work experience</h1>
        <p className="lead text-muted mb-0">
          The teams and products I have worked on, most recent first.
        </p>
      </header>

      <ol className={styles.experienceList}>
        {jobs.map((job, index) => (
          <motion.li
            key={`${job.companyName}-${job.startDate}`}
            className={styles.experienceItem}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <article className={`section-panel ${styles.experienceCard}`}>
              <header className={styles.cardHeader}>
                <div>
                  <h2 className="h4 fw-bold mb-1">{job.title}</h2>
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.company}
                    >
                      {job.companyName}
                    </a>
                  ) : (
                    <p className={`${styles.company} mb-0`}>
                      {job.companyName}
                    </p>
                  )}
                </div>
                <p className={styles.date}>
                  <time dateTime={tenureStart(job)}>
                    {formatDate(tenureStart(job))}
                  </time>
                  {" — "}
                  {job.endDate ? (
                    <time dateTime={job.endDate}>{formatDate(job.endDate)}</time>
                  ) : (
                    "Present"
                  )}
                </p>
              </header>

              {roleHistory(job).length > 1 && (
                <ol className={styles.roles} aria-label={`Roles at ${job.companyName}`}>
                  {roleHistory(job).map((role) => (
                    <li key={role.title} className={styles.role}>
                      <span className={styles.roleTitle}>{role.title}</span>
                      <span className={styles.roleDates}>
                        {formatDate(role.startDate)} –{" "}
                        {role.endDate ? formatDate(role.endDate) : "Present"}
                      </span>
                    </li>
                  ))}
                </ol>
              )}

              <p className="text-muted mt-3 mb-3">{job.subtitle}</p>
              <ul className={styles.contributions}>
                {job.duties.slice(0, 2).map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>

              {job.tags.length > 0 && (
                <Tags tags={job.tags.slice(0, 5)} className="mt-3" />
              )}
              <Link href={`/experience/${index}`} className={styles.detailsLink}>
                Role details <span aria-hidden="true">→</span>
              </Link>
            </article>
          </motion.li>
        ))}
      </ol>
    </Container>
  );
}
