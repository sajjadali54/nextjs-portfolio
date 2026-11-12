import { FiAward } from "react-icons/fi";
import { Award } from "@data/awards";
import "./honors.css";

// Shared list of honors and awards: the full list on Education, featured ones on About.
export default function HonorsList({ items }: { items: Award[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="honors-list">
      {items.map((award) => (
        <li key={award.title} className="honors-item">
          <span className="honors-icon" aria-hidden="true">
            <FiAward />
          </span>
          <div>
            <p className="honors-name">{award.title}</p>
            {(award.issuer || award.year) && (
              <p className="honors-meta">
                {[award.issuer, award.year].filter(Boolean).join(" · ")}
              </p>
            )}
            {award.description && (
              <p className="honors-description">{award.description}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
