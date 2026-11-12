"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FiArrowUpRight, FiCode, FiDatabase, FiTrendingUp } from "react-icons/fi";
import { personal } from "@data/personal";
import { awards } from "@data/awards";
import HonorsList from "@components/honors/HonorsList";
import ContactSection from "./ContactSection";
import "./aboutStyle.css";

const focusAreas = [
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    title: "Financial and actuarial software",
    description:
      "Applications for modelling, valuation, reporting, and other data-heavy business workflows.",
  },
  {
    icon: <FiDatabase aria-hidden="true" />,
    title: "Data processing and validation",
    description:
      "Python services and processing workflows that make complex inputs easier to validate and work with.",
  },
  {
    icon: <FiCode aria-hidden="true" />,
    title: "End-to-end product delivery",
    description:
      "Backend services, dashboards, and desktop-ready tools built around practical user needs.",
  },
];

export default function AboutPage() {
  return (
    <Container className="about-page py-4 py-lg-5">
      <Row className="align-items-center g-4 g-lg-5 mb-5">
        <Col lg={8} className="order-2 order-lg-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="about-eyebrow mb-3">
              {personal.title} <span aria-hidden="true">·</span>{" "}
              {personal.location}
            </p>
            <h1 className="about-title mb-4">
              I build software for complex data and business workflows.
            </h1>
            <p className="about-intro mb-4">{personal.description}</p>
            <p className="text-muted mb-4">
              At {personal.company}, actuaries define the models and formulas,
              and I build the software around them: backend services, data
              processing, React and Next.js interfaces, and desktop tools. I
              enjoy connecting technical implementation with the needs of the
              teams who rely on these tools.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-primary px-4 py-2">
                Explore projects <FiArrowUpRight aria-hidden="true" />
              </Link>
              <Link
                href="/experience"
                className="btn btn-outline-secondary px-4 py-2"
              >
                View experience
              </Link>
            </div>
          </motion.div>
        </Col>
        <Col
          lg={4}
          className="order-1 order-lg-2 d-flex justify-content-center"
        >
          <Image
            src="/picofme.png"
            width={1248}
            height={832}
            className="about-portrait"
            alt={personal.name}
          />
        </Col>
      </Row>

      <section className="mb-5" aria-labelledby="about-focus-heading">
        <div className="page-heading mb-4">
          <p className="about-eyebrow mb-2">Areas of focus</p>
          <h2 id="about-focus-heading" className="h3 fw-bold mb-2">
            The problems I like working on
          </h2>
          <p className="text-muted mb-0">
            From understanding a domain problem to delivering software people
            can use in their day-to-day work.
          </p>
        </div>
        <Row className="g-3">
          {focusAreas.map((area, index) => (
            <Col md={4} key={area.title}>
              <motion.article
                className="section-panel about-focus-card h-100"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="about-focus-icon">{area.icon}</div>
                <h3 className="h5 fw-bold mt-3">{area.title}</h3>
                <p className="text-muted mb-0">{area.description}</p>
              </motion.article>
            </Col>
          ))}
        </Row>
      </section>

      <Row className="g-4 mb-5">
        <Col lg={7}>
          <section className="section-panel h-100" aria-labelledby="research-heading">
            <p className="about-eyebrow mb-2">Machine learning background</p>
            <h2 id="research-heading" className="h4 fw-bold mb-3">
              A research perspective on applied machine learning
            </h2>
            <p className="text-muted mb-0">
              During a funded research exchange at the Norwegian University of
              Science and Technology, I worked on machine-learning and imaging
              research. In the same period, an eight-week AI/ML internship at
              Syzen Technologies gave me hands-on computer vision work. Both
              complement my software engineering with a practical understanding
              of experimentation and data-focused problems.
            </p>
            <Link href="/education" className="about-text-link mt-3">
              Education and research <FiArrowUpRight aria-hidden="true" />
            </Link>
          </section>
        </Col>
        <Col lg={5}>
          <section className="section-panel h-100" aria-labelledby="personal-heading">
            <p className="about-eyebrow mb-2">Beyond work</p>
            <h2 id="personal-heading" className="h4 fw-bold mb-3">
              A little about me
            </h2>
            <p className="text-muted mb-0">
              Away from software, I enjoy reading, cooking, writing in Urdu,
              and exploring new places. Travel is part of my story, but it is
              only one part of it.
            </p>
          </section>
        </Col>
      </Row>

      <section className="section-panel mb-5" aria-labelledby="recognition-heading">
        <p className="about-eyebrow mb-2">Recognition</p>
        <h2 id="recognition-heading" className="h4 fw-bold mb-3">
          Awards and scholarships
        </h2>
        <HonorsList
          items={awards.filter((award) => award.featured)}
          showImages
        />
        <Link href="/education#honors" className="about-text-link mt-3">
          All honors and awards <FiArrowUpRight aria-hidden="true" />
        </Link>
      </section>

      <section className="section-panel mb-5" aria-labelledby="languages-heading">
        <p className="about-eyebrow mb-2">Languages</p>
        <h2 id="languages-heading" className="h4 fw-bold mb-3">
          Languages I speak
        </h2>
        <ul className="about-languages">
          {personal.languages.map((language) => (
            <li key={language.name}>
              <span className="about-language-name">{language.name}</span>
              <span className="about-language-level">{language.level}</span>
            </li>
          ))}
        </ul>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.div>
    </Container>
  );
}
