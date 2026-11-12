import { personal } from "./personal";

// Canonical public URL. Set NEXT_PUBLIC_SITE_URL if the site moves to a custom domain.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://imsajjadali.vercel.app"
).replace(/\/$/, "");

export const siteTitle = `${personal.name} | Full-Stack Developer for Actuarial and Financial Software`;

export const siteDescription =
  "Sajjad Ali is a Senior Software Engineer in Karachi, Pakistan, building full-stack actuarial and financial software with Python, Node.js, React, and Next.js: IFRS 17, gratuity valuation, and insurance analytics tools.";

export const profiles = {
  github: "https://github.com/sajjadali54/",
  linkedin: "https://www.linkedin.com/in/sajjadali54/",
  dev: "https://dev.to/sajjadali",
};

export const knowsAbout = [
  "Full-stack development",
  "Actuarial software",
  "IFRS 17",
  "IAS 19",
  "Python",
  "FastAPI",
  "Flask",
  "Node.js",
  "React",
  "Next.js",
  "TypeScript",
  "Pandas",
  "Data processing",
];
