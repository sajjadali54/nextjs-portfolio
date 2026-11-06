import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sajjad Ali: a full-stack developer who turns actuarial models and formulas into production software for financial and insurance teams.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
