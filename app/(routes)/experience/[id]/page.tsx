"use client";

import { useParams } from "next/navigation";
import { Container, Row, Col, Image } from "react-bootstrap";
import { jobs } from "@/app/data/jobs";
import { FaCalendarAlt, FaRocket } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";
import React from "react";
import Tags from "@/app/components/Tags";
import BackLink from "@/app/components/BackLink";

function JobPage() {
  const params = useParams();
  const job = jobs[Number(params.id)];
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));
  // const scope = useAnimate()[0];

  if (!job) {
    return (
      <Container className="py-5 text-center">
        <h3 className="text-danger">Job not found</h3>
        <BackLink link="/experience" page="Experience" />
      </Container>
    );
  }

  return (
    <div className="page-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-4"
      >
        <Container>
          {/* Header Section */}
          <Row className="mb-5 align-items-center">
            <Col xs={12} md={3} className="text-center mb-4 mb-md-0">
              <div className="job-logo-wrapper position-relative">
                <Image
                  src={job.image || "/placeholder.png"}
                  roundedCircle
                  fluid
                  alt={job.title}
                  className="company-logo"
                  style={{
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                    border: "3px solid var(--surface-strong)",
                    boxShadow: "0 12px 40px var(--shadow)",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.png";
                  }}
                />
                <div className="logo-glow"></div>
              </div>
            </Col>
            <Col>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="fw-bold mb-3 text-gradient display-5">
                  {job.title}
                </h2>
                <p className="text-muted mb-2 lead">
                  <FiBriefcase className="me-2 text-primary" />
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none company-link"
                  >
                    {job.companyName}
                  </a>
                </p>
                <p className="text-muted">
                  <FaCalendarAlt className="me-2 text-primary" />
                  <span className="date-text">
                    {formatDate(job.startDate)} —{" "}
                    {job.endDate ? formatDate(job.endDate) : "Present"}
                  </span>
                </p>
              </motion.div>
            </Col>
          </Row>
          {/* Role Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="section-panel p-4 mb-4 rounded-4">
              <div className="d-flex align-items-center mb-3">
                <FaRocket className="me-3 text-primary" size={24} />
                <h5 className="fw-bold mb-0">Role Overview</h5>
              </div>
              <p className="mb-0 text-muted">{job.subtitle}</p>
            </div>
          </motion.div>

          {/* Key Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="section-panel p-4 mb-4 rounded-4">
              <h5 className="fw-bold mb-4">Key Contributions</h5>
              <ul className="contribution-list">
                {job.duties.map((duty, idx) => (
                  <motion.li
                    key={idx}
                    className="mb-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                  >
                    <div className="d-flex align-items-start">
                      <span className="bullet-icon me-3">→</span>
                      <span className="duty-text">{duty}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tech Stack */}
          {job.tags?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="section-panel p-4 mb-4 rounded-4">
                <h5 className="fw-bold mb-3">Tech Stack</h5>
                <Tags tags={job.tags} />
              </div>
            </motion.div>
          )}

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <BackLink link="/experience" page="Experience" />
          </motion.div>
        </Container>
      </motion.div>

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

        .job-logo-wrapper {
          position: relative;
          display: inline-block;
        }

        .company-logo {
          border: 3px solid var(--surface-strong) !important;
          position: relative;
          z-index: 1;
          box-shadow: 0 12px 40px var(--shadow);
        }

        .logo-glow {
          position: absolute;
          top: -12px;
          left: -12px;
          right: -12px;
          bottom: -12px;
          background: var(--gradient-soft);
          border-radius: 50%;
          filter: blur(26px);
          z-index: 0;
        }

        .company-link {
          color: var(--primary) !important;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .company-link:hover {
          color: var(--accent) !important;
          text-decoration: underline;
        }

        .section-title {
          color: var(--foreground);
          font-size: 1.25rem;
          letter-spacing: -0.02em;
        }

        .contribution-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contribution-list li {
          margin-bottom: 1rem;
        }

        .bullet-icon {
          color: var(--primary);
          font-weight: bold;
          font-size: 1.2rem;
          min-width: 2rem;
        }

        .duty-text {
          color: var(--foreground);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}

export default JobPage;
