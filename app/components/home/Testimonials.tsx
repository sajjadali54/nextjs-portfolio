import { FiExternalLink } from "react-icons/fi";
import { testimonials } from "@data/testimonials";
import "./testimonials.css";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section
      className="testimonials section-panel"
      aria-labelledby="testimonials-heading"
    >
      <p className="about-eyebrow mb-2">Recommendations</p>
      <h2 id="testimonials-heading" className="testimonials-title">
        What colleagues say
      </h2>

      <div className="testimonials-list">
        {testimonials.map((item) => (
          <figure key={item.name} className="testimonial">
            <blockquote className="testimonial-quote">
              <p>&ldquo;{item.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="testimonial-author">
              <span className="testimonial-name">{item.name}</span>
              <span className="testimonial-role">{item.relationship}</span>
              {item.currentRole && (
                <span className="testimonial-role">
                  Now: {item.currentRole}
                </span>
              )}
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-source"
              >
                Full recommendation on LinkedIn, {item.date}{" "}
                <FiExternalLink aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
