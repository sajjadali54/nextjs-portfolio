"use client";

import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.div
      className="section-panel py-5 my-4 text-center contact-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="contact-content">
        <motion.h2
          className="display-5 fw-bold mb-3 text-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get in touch
        </motion.h2>

        <motion.p
          className="lead mb-5 text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          For software roles, project discussions, or technical collaboration,
          send me a message or email.
        </motion.p>

        <Row className="g-4 justify-content-center mb-5">
          <Col xs={12} md={5}>
            <motion.div
              className="contact-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon-wrapper">
                <FaEnvelope size={32} />
              </div>
              <h4 className="mb-2">Email</h4>
              <a href="mailto:imsajjadali54@gmail.com" className="contact-link">
                imsajjadali54@gmail.com
              </a>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="btn btn-primary px-4 py-3 fw-semibold"
          >
            Send a message
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
