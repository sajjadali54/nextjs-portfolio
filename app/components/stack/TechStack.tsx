"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TechGroup } from "@data/tech-items";
import "./stack.css";

interface Props {
  techItems: TechGroup[];
  familiar?: string[];
}

const TechStack = ({ techItems, familiar = [] }: Props) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="tech-stack">
      <ul className="tech-grid" role="list">
        {techItems.map(({ category, summary, items, icon: Icon }, index) => (
          <motion.li
            key={category}
            className="tech-group"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.3 }}
          >
            <div className="tech-group-header">
              <span className="tech-group-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3 className="tech-group-title">{category}</h3>
            </div>
            <p className="tech-group-summary">{summary}</p>
            <ul className="tech-chips" aria-label={`${category} tools`}>
              {items.map((item) => (
                <li key={item} className="tech-chip">
                  {item}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>

      {familiar.length > 0 && (
        <p className="tech-familiar">
          <span className="tech-familiar-label">
            Also used in earlier roles and personal projects:
          </span>{" "}
          {familiar.join(", ")}
        </p>
      )}
    </div>
  );
};

export default TechStack;
