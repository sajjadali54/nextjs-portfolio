import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Sajjad Ali, including IFRS 17 cashflow engines, gratuity valuation, insurance benchmarking, and full-stack web applications.",
  alternates: { canonical: "/projects" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
