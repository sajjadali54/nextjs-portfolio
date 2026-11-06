import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Sajjad Ali on software development, published on DEV.",
  alternates: { canonical: "/blogs" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
