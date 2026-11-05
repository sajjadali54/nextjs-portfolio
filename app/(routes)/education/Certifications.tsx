import { motion } from "framer-motion";
import CertificationCard from "@/app/components/cards/CertificationCard";
import { certifications } from "@data/certifications";
import { Row, Col } from "react-bootstrap";
import "./certifications.css";

export const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="certifications-container py-4"
      aria-labelledby="certifications-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="page-heading mb-4"
      >
        <p className="about-eyebrow mb-2">Professional learning</p>
        <h2 id="certifications-heading" className="h3 fw-bold mb-2">
          Certificates and credentials
        </h2>
        <p className="text-muted mb-0">
          Selected courses and verified credentials related to software
          engineering, data, and computer science.
        </p>
      </motion.header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <Row className="g-3 g-lg-4">
          {certifications.map((cert) => (
            <Col
              key={cert.url}
              xl={4}
              lg={4}
              md={6}
              className="d-flex align-items-stretch"
            >
              <motion.div variants={itemVariants} className="w-100">
                <CertificationCard certification={cert} className="h-100" />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </motion.section>
  );
};
