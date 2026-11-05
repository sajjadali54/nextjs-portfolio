"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Tags from "@components/Tags";
import { education } from "@data/education";
import styles from "./Education.module.css";

export const Education = () => (
  <section aria-labelledby="education-heading">
    <div className="page-heading mb-4">
      <p className="about-eyebrow mb-2">Academic background</p>
      <h2 id="education-heading" className="h3 fw-bold mb-2">
        Education and research
      </h2>
      <p className="text-muted mb-0">
        Computer science foundations, complemented by a funded research
        exchange in Norway.
      </p>
    </div>

    <div className={styles.educationList}>
      {education.map((item, index) => (
        <motion.article
          key={`${item.institution}-${item.startDate}`}
          className={`section-panel ${styles.educationEntry}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <div className={styles.date}>
            {item.startDate} – {item.endDate || "Present"}
          </div>
          <div>
            <h3 className="h5 fw-bold mb-1">{item.degree}</h3>
            <a
              href={item.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.institution}
            >
              {item.institution}
            </a>
            <p className="text-muted mt-3 mb-3">{item.description}</p>
            <Tags tags={item.tags.slice(0, 4)} />
            <Link href={`/education/${index}`} className={styles.detailsLink}>
              Academic details <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
