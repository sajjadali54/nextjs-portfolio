"use client";

import { FC } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./pagination.css";

interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

type PageToken = number | "gap-start" | "gap-end";

const SIBLINGS = 1;

// First, last, the current page and its neighbours; gaps collapse into an ellipsis.
function getPageTokens(current: number, total: number): PageToken[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const start = Math.max(2, current - SIBLINGS);
  const end = Math.min(total - 1, current + SIBLINGS);
  const tokens: PageToken[] = [1];

  if (start > 2) tokens.push("gap-start");
  for (let page = start; page <= end; page++) tokens.push(page);
  if (end < total - 1) tokens.push("gap-end");
  tokens.push(total);

  return tokens;
}

const Pagination: FC<PaginationProps> = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount <= 1) return null;

  const goTo = (page: number) => {
    if (page < 1 || page > pagesCount || page === currentPage) return;
    onPageChange(page);
    // Bring the new page of results into view instead of leaving the user at the bottom.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <nav className="pager" aria-label="Pagination">
      <button
        type="button"
        className="pager-step"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <FiChevronLeft aria-hidden="true" />
        <span className="pager-step-label">Previous</span>
      </button>

      <ul className="pager-pages">
        {getPageTokens(currentPage, pagesCount).map((token) =>
          typeof token === "number" ? (
            <li key={token}>
              <button
                type="button"
                className="pager-page"
                onClick={() => goTo(token)}
                aria-current={token === currentPage ? "page" : undefined}
                aria-label={`Page ${token}`}
              >
                {token}
              </button>
            </li>
          ) : (
            <li key={token} className="pager-gap" aria-hidden="true">
              …
            </li>
          ),
        )}
      </ul>

      <p className="pager-status" aria-live="polite">
        Page {currentPage} of {pagesCount}
      </p>

      <button
        type="button"
        className="pager-step"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === pagesCount}
        aria-label="Next page"
      >
        <span className="pager-step-label">Next</span>
        <FiChevronRight aria-hidden="true" />
      </button>
    </nav>
  );
};

export default Pagination;
