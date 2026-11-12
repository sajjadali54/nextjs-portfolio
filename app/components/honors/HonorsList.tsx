import { FiAward } from "react-icons/fi";
import { Award } from "@data/awards";
import "./honors.css";

interface Props {
  items: Award[];
  /** Show each award's photo above its text (used on the About page). */
  showImages?: boolean;
}

// Shared list of honors and awards: the full list on Education, featured ones on About.
export default function HonorsList({ items, showImages = false }: Props) {
  if (items.length === 0) return null;

  return (
    <ul className={`honors-list${showImages ? " honors-list-photos" : ""}`}>
      {items.map((award) => {
        const photo = showImages ? award.image : undefined;
        return (
          <li
            key={award.title}
            className={`honors-item${photo ? " honors-item-photo" : ""}`}
          >
            {photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photo.src}
                alt={photo.alt}
                className="honors-photo"
                style={{ objectPosition: photo.position ?? "50% 50%" }}
                loading="lazy"
              />
            )}
            <div className="honors-body">
              {!photo && (
                <span className="honors-icon" aria-hidden="true">
                  <FiAward />
                </span>
              )}
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
            </div>
          </li>
        );
      })}
    </ul>
  );
}
