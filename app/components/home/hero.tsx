"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

import { personal } from "@/app/data/personal";
import "./hero.css";

function HeroSection() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay },
        };

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-grid">
        <motion.div className="hero-copy" {...fadeUp()}>
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-name">{personal.name}</span>
            <span aria-hidden="true" className="hero-eyebrow-rule" />
            {personal.title}
          </p>

          <h1 id="hero-heading" className="hero-heading">
            {personal.headline}
          </h1>

          <p className="hero-summary">{personal.summary}</p>

          <div className="hero-actions">
            <Link href="/projects" className="btn btn-lg cta-button">
              View projects <FiArrowRight aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn btn-lg cta-outline">
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.figure className="hero-portrait" {...fadeUp(0.15)}>
          <div className="hero-portrait-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/picofme.png"
              alt={`Portrait of ${personal.name}`}
              className="hero-portrait-image"
              width={1248}
              height={832}
            />
          </div>
          <figcaption className="hero-portrait-caption">
            <span className="hero-status-dot" aria-hidden="true" />
            <span>
              Currently at{" "}
              <Link
                href={personal.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {personal.company}
              </Link>
              <span className="hero-caption-location">
                <FiMapPin aria-hidden="true" /> {personal.location}
              </span>
            </span>
          </figcaption>
        </motion.figure>
      </div>

      <motion.dl className="hero-highlights" {...fadeUp(0.3)}>
        {personal.highlights.map((item) => (
          <div key={item.label} className="hero-highlight">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}

export default HeroSection;
