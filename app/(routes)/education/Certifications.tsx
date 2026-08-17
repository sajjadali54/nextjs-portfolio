import { motion } from "framer-motion";
import CertificationCard from "@/app/components/cards/CertificationCard";
import { certifications } from "@data/certifications";
import { Row, Col } from "react-bootstrap";

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
    <motion.div
      className="certifications-container py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-5 text-center"
      >
        <h2 className="text-gradient display-5 fw-bold mb-2">
          Certifications & Credentials
        </h2>
        <p className="text-muted lead">
          Professional credentials and certifications that showcase my expertise
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <Row className="g-4 justify-content-center">
          {certifications.map((cert, index) => (
            <Col
              key={index}
              xl={3}
              lg={4}
              md={6}
              className="d-flex align-items-stretch"
            >
              <motion.div variants={itemVariants} className="w-100 h-100">
                <CertificationCard certification={cert} className="h-100" />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      <style jsx global>{`
        .certifications-container {
          padding: 0 1rem;
        }

        .text-gradient {
          background: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </motion.div>
  );
};
