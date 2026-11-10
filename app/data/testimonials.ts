// Quotes are taken verbatim from public LinkedIn recommendations, without surrounding
// quotation marks (the component adds them). If you shorten one, mark the cut with an
// ellipsis; never reword a recommendation or add one without its author's words.
export interface Testimonial {
  quote: string;
  name: string;
  relationship: string;
  currentRole?: string;
  date: string;
  sourceUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sajjad is a strong problem solver, skilled software developer, and excellent team player. … He is reliable, collaborative, and technically capable.",
    name: "Shankar Lal",
    relationship: "Former teammate at Badri Solutions",
    currentRole: "Werkstudent, AI, Workflows & Process Automation, Germany",
    date: "Aug 2026",
    sourceUrl: "https://www.linkedin.com/in/sajjadali54/details/recommendations/",
  },
];
