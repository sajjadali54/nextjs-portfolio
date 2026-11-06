import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Sajjad Ali, Senior Software Developer at Badri Solutions, building actuarial and financial software with Python and JavaScript.",
  alternates: { canonical: "/experience" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
