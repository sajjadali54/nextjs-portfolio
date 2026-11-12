import { IconType } from "react-icons";
import {
  FiCloud,
  FiDatabase,
  FiLayout,
  FiMonitor,
  FiServer,
} from "react-icons/fi";

export interface TechGroup {
  category: string;
  summary: string;
  items: string[];
  icon: IconType;
}

// Core tools used in professional work (see app/data/jobs.ts).
export const techItems: TechGroup[] = [
  {
    category: "Backend and APIs",
    summary: "Services that run calculations and serve results.",
    items: ["Python", "FastAPI", "Flask", "Node.js", "NestJS"],
    icon: FiServer,
  },
  {
    category: "Frontend and dashboards",
    summary: "Interfaces for exploring inputs and outputs.",
    items: ["React", "Next.js", "TypeScript", "ApexCharts", "Plotly"],
    icon: FiLayout,
  },
  {
    category: "Data processing",
    summary: "Preparing and validating large financial datasets.",
    items: ["Pandas", "Polars", "NumPy", "Excel automation"],
    icon: FiDatabase,
  },
  {
    category: "Desktop delivery",
    summary: "Packaging web and Python tools for offline use.",
    items: ["PySide", "PyInstaller", "PyWebview", "Electron"],
    icon: FiMonitor,
  },
  {
    // From résumé and LinkedIn top skills.
    category: "Databases, cloud, and DevOps",
    summary: "Storing data and shipping applications reliably.",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "GitHub Actions", "AWS"],
    icon: FiCloud,
  },
];

// Tools used in earlier roles or personal projects, shown without claiming depth.
export const familiarTech = [
  "Django",
  "MySQL",
  "Flutter",
  "Kotlin (Android)",
  "Java Swing",
];
