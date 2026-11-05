"use client";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FiExternalLink, FiFileText } from "react-icons/fi";
import "./certificationCard.css";

interface Certification {
  src?: string;
  alt: string;
  provider: string;
  url?: string;
}

const CertificationCard: React.FC<{
  certification: Certification;
  className?: string;
}> = ({ certification, className = "" }) => {
  const isPdf = certification.url?.split("?")[0].endsWith(".pdf");

  return (
    <Card className={`certification-card h-100 ${className}`}>
      <div className="certification-preview">
        {isPdf ? (
          <div className="certification-pdf-preview" aria-label="PDF certificate">
            <FiFileText aria-hidden="true" />
            <span>PDF certificate</span>
          </div>
        ) : (
          <Image
            src={certification.src || "/placeholder.png"}
            alt={`Preview of ${certification.alt}`}
            className="certification-image"
            onError={(event) => {
              event.currentTarget.src = "/placeholder.png";
            }}
          />
        )}
      </div>

      <Card.Body className="d-flex flex-column align-items-start p-4">
        <span className="credential-provider">{certification.provider}</span>
        <h3 className="certification-title h5 fw-bold mt-3 mb-4">
          {certification.alt}
        </h3>
        {certification.url && (
          <a
            href={certification.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-auto"
          >
            View credential <FiExternalLink aria-hidden="true" />
          </a>
        )}
      </Card.Body>
    </Card>
  );
};

export default CertificationCard;
