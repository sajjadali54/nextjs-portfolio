"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Tags from "@components/Tags";
import { FiArrowUpRight, FiLink } from "react-icons/fi";

import "./card.css";

interface MyCardProps {
  image?: string;
  url?: string;
  title?: string;
  subtitle?: string;
  companyUrl?: string;
  description?: string;
  tags?: string[];
  className?: string;
}

const MyCard: React.FC<MyCardProps> = ({
  image = "/logo.png",
  title,
  subtitle,
  url,
  companyUrl,
  description,
  tags = [],
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    className={className}
  >
    <Card className="journey-card h-100">
      <div className="journey-card-media">
        <Image
          src={image}
          alt=""
          className="journey-card-image"
          onError={(event) => {
            event.currentTarget.src = "/logo.png";
          }}
        />
      </div>

      <div className="journey-card-content">
        <Card.Body className="d-flex flex-column p-4">
          {subtitle && (
            <Card.Subtitle className="journey-card-subtitle mb-2">
              {companyUrl ? (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-link"
                >
                  <FiLink aria-hidden="true" />
                  {subtitle}
                </a>
              ) : (
                subtitle
              )}
            </Card.Subtitle>
          )}

          <Card.Title className="journey-card-title mb-2">
            {title}
          </Card.Title>

          {description && (
            <Card.Text className="journey-card-description text-muted mb-3">
              {description}
            </Card.Text>
          )}

          {tags.length > 0 && (
            <div className="mt-auto">
              <Tags tags={tags.slice(0, 5)} />
            </div>
          )}
        </Card.Body>

        {url && (
          <Card.Footer className="journey-card-footer">
            <Link href={url} className="btn btn-outline-secondary">
              View details <FiArrowUpRight aria-hidden="true" />
            </Link>
          </Card.Footer>
        )}
      </div>
    </Card>
  </motion.div>
);

export default MyCard;
