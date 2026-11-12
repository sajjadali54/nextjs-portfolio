// Honors and awards, as listed on Sajjad's LinkedIn profile and résumé.
// Add a year or issuer only when it is confirmed.
export interface Award {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
  /** Also shown in the "Recognition" strip on the About page. */
  featured?: boolean;
  /** Photo in public/photos (processed by scripts/prepare-photos.mjs). */
  image?: { src: string; alt: string; position?: string };
}

export const awards: Award[] = [
  {
    title: "Motivation and Best Practices",
    featured: true,
    image: {
      src: "/photos/badri-recognition.jpg",
      alt: "Sajjad Ali receiving a recognition award at Badri Solutions",
      position: "50% 20%",
    },
    issuer: "Badri Solutions",
    year: "2025",
    description: "Workplace recognition.",
  },
  {
    title: "Silver Medal, BS Computer Science",
    featured: true,
    image: {
      src: "/photos/graduation-silver-medal.jpg",
      alt: "Sajjad Ali at graduation holding his silver medal and Sukkur IBA degree",
      position: "50% 25%",
    },
    issuer: "Sukkur IBA University",
    year: "2023",
    description: "Ranked 2nd in the graduating batch, with a CGPA of 3.62.",
  },
  {
    title: "NORPART CONNECT Scholarship",
    featured: true,
    image: {
      src: "/photos/ntnu-exchange.jpg",
      alt: "Sajjad Ali beside the NTNU sign in Norway",
      position: "50% 40%",
    },
    year: "2023",
    description:
      "Fully funded research exchange in machine learning at NTNU, Norway.",
  },
  {
    title: "Sindh Talent Hunt Program (STHP) Scholarship",
    year: "2019",
    description:
      "Fully funded the entire BS program, awarded for the highest CGPA (3.89) in the foundation semester.",
  },
  {
    title: "Ehsaas Undergraduate Scholarship",
    year: "2020",
    description:
      "Awarded alongside STHP for academic performance, adding a stipend that STHP did not cover.",
  },
  {
    title: "Institutional Merit-Based Scholarship",
    year: "2022",
    description:
      "Awarded for a perfect 4.0 in almost every course of the fifth semester.",
  },
];
