// Honors and awards, as listed on Sajjad's LinkedIn profile and résumé.
// Add a year or issuer only when it is confirmed.
export interface Award {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
  /** Also shown in the "Recognition" strip on the About page. */
  featured?: boolean;
}

export const awards: Award[] = [
  {
    title: "Motivation and Best Practices",
    featured: true,
    issuer: "Badri Solutions",
    year: "2025",
    description: "Workplace recognition.",
  },
  {
    title: "Silver Medal, BS Computer Science",
    featured: true,
    issuer: "Sukkur IBA University",
    year: "2023",
    description: "Ranked 2nd in the graduating batch, with a CGPA of 3.62.",
  },
  {
    title: "NORPART CONNECT Scholarship",
    featured: true,
    year: "2023",
    description:
      "Fully funded research exchange in machine learning at NTNU, Norway.",
  },
  {
    title: "Sindh Talent Hunt Program (STHP) Scholarship",
  },
  {
    title: "Ehsaas Undergraduate Scholarship",
  },
  {
    title: "Institutional Merit-Based Scholarship",
  },
];
