"use client";

import { useState } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FiAward, FiExternalLink, FiFileText } from "react-icons/fi";
import { Certification } from "@data/certifications";
import "./certificationCard.css";

const CertificationCard: React.FC<{
  certification: Certification;
  className?: string;
}> = ({ certification, className = "" }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const isPdf = certification.src?.split("?")[0].endsWith(".pdf");
  const showImage = Boolean(certification.src) && !isPdf && !imageFailed;

  return (
    <Card className={`certification-card h-100 ${className}`}>
      <div className="certification-preview">
        {showImage ? (
          <Image
            src={certification.src}
            alt={`Preview of ${certification.alt}`}
            className="certification-image"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="certification-fallback-preview" aria-hidden="true">
            {isPdf ? <FiFileText /> : <FiAward />}
            <span>{certification.provider}</span>
          </div>
        )}
      </div>

      <Card.Body className="d-flex flex-column align-items-start p-4">
        <div className="d-flex flex-wrap align-items-center gap-2">
          <span className="credential-provider">{certification.provider}</span>
          {certification.date && (
            <span className="credential-date">{certification.date}</span>
          )}
        </div>
        <h3 className="certification-title h5 fw-bold mt-3 mb-4">
          {certification.alt}
        </h3>
        {certification.url ? (
          <a
            href={certification.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-auto"
          >
            View credential <FiExternalLink aria-hidden="true" />
          </a>
        ) : (
          <span className="credential-note mt-auto">
            Certificate available on request
          </span>
        )}
      </Card.Body>
    </Card>
  );
};

export default CertificationCard;
