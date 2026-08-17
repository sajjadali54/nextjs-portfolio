"use client";

import { useParams } from "next/navigation";
import { Container, Row, Col, Image } from "react-bootstrap";
import { jobs } from "@/app/data/jobs";
import { FaCalendarAlt, FaMapMarkerAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import Tags from "@/app/components/Tags";
import BackLink from "@/app/components/BackLink";

function JobPage() {
  const params = useParams();
  const job = jobs[Number(params.id)];
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
                <FaMapMarkerAlt className="me-2 text-primary" />
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
                  {job.startDate} — {job.endDate || "Present"}
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
      </motion.div>
    </div>
  );
}

export default JobPage;
