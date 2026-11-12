import Link from "next/link";
import { FiArrowUp, FiMail } from "react-icons/fi";

import { personal } from "@data/personal";
import { routes } from "@data/routes";
import { socialLinks } from "@data/socials";
import "./footer.css";

const footerLinks = [
  { href: routes.projects, label: "Projects" },
  { href: routes.experience, label: "Experience" },
  { href: routes.about, label: "About" },
  { href: routes.education, label: "Education" },
  { href: routes.blogs, label: "Blogs" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div>
            <p className="site-footer-name">{personal.name}</p>
            <p className="site-footer-tagline">{personal.headline}</p>
            <p className="site-footer-meta">
              {personal.title} · {personal.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="site-footer-heading">Explore</p>
            <ul className="site-footer-links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="site-footer-heading">Connect</p>
            <ul className="site-footer-links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon aria-hidden="true" /> {label}
                  </a>
                </li>
              ))}
            </ul>
            <Link href={routes.contact} className="btn btn-gradient site-footer-cta">
              <FiMail aria-hidden="true" /> Send a message
            </Link>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p className="mb-0">
            © {new Date().getFullYear()} {personal.name}
          </p>
          <a href="#main-content" className="site-footer-top">
            Back to top <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
