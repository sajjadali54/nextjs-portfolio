"use client";

import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { IconType } from "react-icons";

import "./footer.css";

interface BadgeProps {
  href: string;
  icon: IconType;
  className: string;
  label: string;
}

const MyFooter = ({ badges }: { badges: BadgeProps[] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      className="glass-footer py-5"
    >
      <Container>
        <Row className="align-items-center text-center g-3">
          <Col>
            <motion.div variants={itemVariants}>
              <h2 className="h5 mb-4">Let&apos;s connect</h2>
              <div className="d-flex justify-content-center gap-3">
                {badges.map((badge) => (
                  <motion.a
                    key={badge.href}
                    href={badge.href}
                    target={
                      badge.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      badge.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="social-icon"
                    aria-label={badge.label}
                    title={badge.label}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    variants={itemVariants}
                  >
                    <badge.icon size={22} aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>

        <div className="text-center text-muted small mt-4">
          © {new Date().getFullYear()} Sajjad Ali
        </div>
      </Container>
    </motion.footer>
  );
};

export default MyFooter;
