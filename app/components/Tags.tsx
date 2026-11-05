"use client";
import Badge from "react-bootstrap/Badge";
import { useMediaQuery } from "../hooks";
interface Props {
  tags?: string[];
  status?: boolean[];
  className?: string;
  onClick?: (tag: string) => void;
}

const Tags: React.FC<Props> = ({
  tags = [],
  status = [],
  onClick,
  className,
}) => {
  const isMobile = useMediaQuery();
  return (
    <div
      className={`tags-list d-flex flex-wrap ${isMobile ? "gap-1" : "gap-2"}`}
      aria-label="Topics"
    >
      {tags?.map((tag, index) => (
        onClick ? (
          <button
            key={tag}
            type="button"
            className={`tag-button glass-tag ${className || ""} ${
              status?.[index] ? "active" : ""
            }`}
            aria-pressed={status?.[index] ?? false}
            onClick={() => onClick(tag)}
          >
            {tag.toLowerCase()}
          </button>
        ) : (
          <Badge key={tag} className={`tag-label glass-tag ${className || ""}`}>
            {tag.toLowerCase()}
          </Badge>
        )
      ))}
    </div>
  );
};

export default Tags;
