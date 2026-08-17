"use client";

import Link from "next/link";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

import { jobs } from "@/app/data/jobs";
import { personal } from "@/app/data/personal";

import { useMediaQuery } from "@/app/hooks";
import { formatExperience, getDiffMonths } from "@/app/utils";

function HeroSection() {
  const isMobile = useMediaQuery();
  const profileImageSrc = "/picofme.png";

  const totalMonths = jobs.reduce(
    (sum, job) =>
      sum + getDiffMonths(job.startDate, job.endDate!, job.companyName),
    0,
  );
  console.log(totalMonths);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return (
    <section className="hero-shell py-5 min-vh-100 d-flex align-items-center">
      <Row className="align-items-center g-5 w-100">
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
                width={isMobile ? 120 : 240}
                height={isMobile ? 120 : 240}
                fluid
              />
              <div className="profile-glow"></div>
            </div>
          </motion.div>
        </Col>

        <Col>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-gradient display-4 fw-bold mb-3">
              {personal.name}
            </h1>
            <h2 className="text-uppercase hero-title fs-4 mb-3">
              {personal.title}
            </h2>

            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="accent-line"></div>
              <Link
                href={personal.companyUrl}
                target="_blank"
                className="company-link text-decoration-none fw-medium"
              >
                {personal.company}
              </Link>
            </div>

            <p className="text-muted lead mb-3">{personal.description}</p>

            <p className="small mb-4">
              <span className="badge experience-pill px-3 py-2 rounded-pill">
                {formatExperience(years, months)} of experience
              </span>
            </p>

            <Nav className="d-flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/projects">
                  <Button
                    variant="primary"
                    size="lg"
                    className="cta-button shadow-sm px-4"
                  >
                    View Projects
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/contact">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="cta-outline shadow-sm px-4"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </Nav>
          </motion.div>
        </Col>
      </Row>

      <style jsx global>{`
        .hero-shell {
          background: transparent;
        }

        .hero-title {
          color: var(--foreground-soft);
          letter-spacing: 0.12em;
          font-weight: 700;
        }

        .accent-line {
          width: 52px;
          height: 2px;
          background: var(--gradient);
          border-radius: 999px;
        }

        .text-gradient {
          background: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .company-link {
          color: var(--foreground);
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .company-link:hover {
          color: var(--primary);
          text-decoration: underline;
        }

        .experience-pill {
          background: var(--primary-soft);
          color: var(--primary-strong);
          border: 1px solid rgba(14, 165, 233, 0.18);
        }

        .cta-button {
          background: var(--gradient);
          border: none;
          padding: 1rem 2rem;
          font-weight: 600;
          color: white;
          box-shadow: 0 12px 30px rgba(14, 165, 233, 0.22);
        }

        .cta-button:hover {
          filter: brightness(1.04);
        }

        .cta-outline {
          border: 2px solid var(--primary);
          color: var(--primary);
          background: transparent;
          padding: 1rem 2rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-outline:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .profile-image-wrapper {
          position: relative;
          display: inline-block;
          border-radius: 50%;
          padding: 12px;
          background: var(--gradient-soft);
          box-shadow: 0 20px 50px rgba(14, 165, 233, 0.2);
        }

        .profile-image {
          width: 280px;
          height: 280px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--surface-strong);
        }

        .profile-glow {
          position: absolute;
          inset: -12px;
          background: var(--gradient-soft);
          border-radius: 50%;
          filter: blur(22px);
          z-index: -1;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
