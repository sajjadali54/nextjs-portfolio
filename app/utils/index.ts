import slice from "lodash/slice";


export const getDiffMonths = (startDate: string, endDate?: string) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  let months = (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
  months -= start.getUTCMonth();
  months += end.getUTCMonth();

  months += 1;
  return months;
};


export function formatExperience(years: number, months: number) {
  const yearStr = years === 1 ? "1 year" : `${years} years`;
  const monthStr = months === 1 ? "1 month" : `${months} months`;

  if (years && months) {
    return `${yearStr} and ${monthStr}`;
  } else if (years) {
    return yearStr;
  } else if (months) {
    return monthStr;
  } else {
    return "Less than a month";
  }
}

export function calculateExperience(startDate: string, endDate?: string) {
  const totalMonths = getDiffMonths(startDate, endDate);
  return formatExperience(
    Math.floor(totalMonths / 12),
    totalMonths % 12,
  );
}

/**
 * Paginates an array of items.
 * @param items - Array of items to paginate.
 * @param pageNumber - Current page number (1-based index).
 * @param pageSize - Number of items per page.
 * @returns A subset of the original array based on pagination.
 */
export function paginate<T>(
  items: T[],
  pageNumber: number,
  pageSize: number
): T[] {
  if (pageNumber < 1 || pageSize < 1) {
    console.error("Invalid page number or page size.");
    return [];
  }

  const startIndex = (pageNumber - 1) * pageSize;

  if (startIndex >= items.length) return [];

  return slice(items, startIndex, startIndex + pageSize);
}

/**
 * Extracts unique programming languages from a list of projects.
 * @param projects - Array of projects containing a 'language' field.
 * @returns An array of unique languages used in projects.
 */
export function getAllLanguages(projects: { language: string }[]): string[] {
  return Array.from(new Set(projects.map((project) => project.language)));
}
