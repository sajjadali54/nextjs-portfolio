import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import "./detail/detail.css";

// Shared back link for every detail page (projects, experience, education, blogs).
// Sits at the top left so it is visible immediately; no delayed animation.
function BackLink({ link, page }: { link: string; page: string }) {
  return (
    <Link href={link} className="detail-back">
      <FiArrowLeft aria-hidden="true" /> Back to {page}
    </Link>
  );
}

export default BackLink;
