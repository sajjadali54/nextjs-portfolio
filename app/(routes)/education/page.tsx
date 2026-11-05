"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { FiAward } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { Education } from "./Education";
import { Certifications } from "./Certifications";

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function EducationContainer() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container py-4"
    >
      <Tab.Container
        activeKey={activeTab}
        onSelect={(key) => {
          if (key) setActiveTab(key);
        }}
      >
        <Nav variant="tabs" className="mb-4 border-0 justify-content-center">
          <Nav.Item className="position-relative mx-2">
            <Nav.Link
              eventKey="education"
              className={`tab-button ${
                activeTab === "education" ? "active" : ""
              }`}
            >
              <div className="d-flex align-items-center gap-2">
                <FaGraduationCap className="tab-icon" />
                <span>Education</span>
              </div>
              {activeTab === "education" && (
                <motion.div className="active-indicator" layoutId="underline" />
              )}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="position-relative mx-2">
            <Nav.Link
              eventKey="certifications"
              className={`tab-button ${
                activeTab === "certifications" ? "active" : ""
              }`}
            >
              <div className="d-flex align-items-center gap-2">
                <FiAward className="tab-icon" />
                <span>Certifications</span>
              </div>
              {activeTab === "certifications" && (
                <motion.div className="active-indicator" layoutId="underline" />
              )}
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {activeTab === "education" ? <Education /> : <Certifications />}
            </motion.div>
          </AnimatePresence>
        </Tab.Content>
      </Tab.Container>

      <style jsx global>{`
        .tab-button {
          background: transparent !important;
          border: none !important;
          color: var(--muted) !important;
          font-weight: 500;
          padding: 1rem 2rem !important;
          position: relative;
          transition: all 0.3s ease;
          border-radius: 0.75rem;
        }

        .tab-button:hover {
          color: var(--primary) !important;
          background: var(--primary-soft) !important;
        }

        .tab-button.active {
          color: var(--primary) !important;
          background: var(--primary-soft) !important;
        }

        .active-indicator {
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient);
          border-radius: 2px;
        }

        .tab-icon {
          font-size: 1.2rem;
          margin-bottom: 2px;
        }
      `}</style>
    </motion.div>
  );
}

export default EducationContainer;
