"use client";

import { education } from "@/app/data/education";
import { useParams } from "next/navigation";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaCalendarAlt, FaUniversity, FaRocket } from "react-icons/fa";
import { motion, useAnimate } from "framer-motion";
import Tags from "@/app/components/Tags";
import BackLink from "@/app/components/BackLink";

import React from "react";

export default EducationPage;

function EducationPage() {
  const params = useParams();
  const edu = education[Number(params.id)];
  const scope = useAnimate()[0];

  if (!edu) {
    return (
      <Container className="py-5 text-center">
        <h3 className="text-danger">Education record not found</h3>
        <BackLink link="/education" page="Education" />
      </Container>
    );
  }

  return (
    <div className="gradient-background">
      <Container className="py-5 position-relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Row className="mb-4 align-items-center">
            <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
              <div className="image-wrapper position-relative">
                <Image
                  src={edu.image || "/placeholder.png"}
                  roundedCircle
                  fluid
                  alt={edu.degree}
                  className="company-logo"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "3px solid var(--surface-strong)",
                    boxShadow: "0 4px 15px var(--shadow)",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.png";
                  }}
                />
                <div className="gradient-border"></div>
              </div>
            </Col>
            <Col>
              <h2 className="fw-bold mb-3 text-gradient">{edu.degree}</h2>
              <p className="text-muted mb-1">
                <FaUniversity className="me-2 text-primary" />
                <a
                  href={edu.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none company-link"
                >
                  {edu.institution}
                </a>
              </p>
              <p className="text-muted">
                <FaCalendarAlt className="me-2 text-primary" />
                <span className="date-text">
                  {edu.startDate} — {edu.endDate || "Present"}
                </span>
              </p>
            </Col>
          </Row>
        </motion.div>

        {/* Role Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="glass-card p-4 mb-4">
            <h5 className="fw-semibold mb-3 section-title">
              <FaRocket className="me-2 text-primary" />
              Overview
            </h5>
            <p className="text-secondary mb-0 role-description">
              {edu.description}
            </p>
          </div>
        </motion.div>

        {/* Key Contributions */}
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="glass-card p-4 mb-4">
            <h5 className="fw-semibold mb-3 section-title">
              Academic Highlights
            </h5>
            <ul className="contribution-list">
              {edu.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  className="mb-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                >
                  <div className="d-flex align-items-start">
                    <span className="bullet-icon me-3">
                      <div className="bullet-gradient"></div>
                    </span>
                    <span className="duty-text">{achievement}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Tech Stack */}
        {edu.tags?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="glass-card p-4 mb-4">
              <h5 className="fw-semibold mb-3 section-title">Areas of Study</h5>
              <Tags tags={edu.tags} />
            </div>
          </motion.div>
        )}

        {/* Back Button */}
        <BackLink link="/education" page="Education" />
      </Container>

      <style jsx global>{`
        .gradient-background {
          background: transparent;
        }

        .text-gradient {
          color: var(--primary);
        }

        .company-link {
          color: var(--primary) !important;
          font-weight: 500;
        }

        .company-link:hover {
          color: var(--primary-strong) !important;
          text-decoration: underline;
        }

        .section-title {
          color: var(--foreground);
          font-size: 1.25rem;
          letter-spacing: -0.02em;
        }

        .contribution-list .bullet-gradient {
          width: 24px;
          height: 24px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contribution-list .bullet-icon::after {
          content: "";
          position: absolute;
          width: 28px;
          height: 28px;
          background: var(--primary-soft);
          border-radius: 50%;
        }

        .duty-text {
          color: var(--foreground-soft);
          line-height: 1.6;
        }

        .image-wrapper {
          display: inline-block;
          position: relative;
        }

        .gradient-border {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background: var(--primary);
          border-radius: 50%;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
