import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education and Certifications",
  description:
    "Education, certifications, and professional learning of Sajjad Ali, covering cloud, APIs, containers, Python, and full-stack development.",
  alternates: { canonical: "/education" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
