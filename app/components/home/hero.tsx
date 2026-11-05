"use client";

import Link from "next/link";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { motion } from "framer-motion";

import { personal } from "@/app/data/personal";

function HeroSection() {
  const profileImageSrc = "/picofme.png";

  return (
    <section className="hero-shell d-flex align-items-center">
      <Row className="hero-row align-items-center g-5">
        <Col lg={4} className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-image-wrapper position-relative">
              <Image
                src={profileImageSrc}
                alt={personal.name}
                className="profile-image rounded-circle shadow-lg"
                width={220}
                height={220}
                fluid
              />
              <div className="profile-glow"></div>
            </div>
          </motion.div>
        </Col>

        <Col lg={8}>
          <motion.div
            className="hero-copy"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-gradient display-3 fw-bold mb-3">
              {personal.name}
            </h1>
            <h2 className="text-uppercase hero-title fs-4 mb-3">
              {personal.title}
            </h2>
            <p className="text-muted mb-3">
              Data-intensive financial software <span aria-hidden="true">·</span>{" "}
              {personal.location}
            </p>

            <div className="hero-company d-flex align-items-center gap-3 mb-3">
              <span className="accent-line" aria-hidden="true"></span>
              <Link
                href={personal.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="company-link text-decoration-none fw-medium"
              >
                {personal.company}
              </Link>
            </div>

            <p className="hero-description text-muted mb-3">
              {personal.description}
            </p>

            <Nav className="hero-actions d-flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="btn btn-lg cta-button shadow-sm px-4"
              >
                View projects
              </Link>
              <Link
                href="/contact"
                className="btn btn-lg cta-outline shadow-sm px-4"
              >
                Get in touch
              </Link>
            </Nav>
          </motion.div>
        </Col>
      </Row>

      <style jsx global>{`
        @media (max-width: 767.98px) {
          .hero-copy {
            text-align: center;
          }

          .hero-company,
          .hero-actions {
            justify-content: center;
          }
        }

        .hero-row {
          width: 100%;
          margin-inline: 0;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
