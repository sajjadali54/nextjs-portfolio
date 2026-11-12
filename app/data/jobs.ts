export const jobs = [
  {
    title: "Senior Software Engineer",
    image: "/badri.jpg",
    companyName: "Badri Solutions",
    companyUrl: "https://badriconsultancy.com/",
    startDate: "2026-07-01",
    // Earlier roles at the same company, shown as a promotion line.
    previousRoles: [
      {
        title: "Software Developer",
        startDate: "2024-11-04",
        endDate: "2026-06-30",
      },
    ],
    subtitle: "Building financial and actuarial software for clients.",
    duties: [
      "Design, develop, and enhance actuarial software tools for financial modelling, IFRS 17 reporting, and benchmarking analysis using modern Python and JavaScript frameworks.",
      "Build scalable data-processing and visualisation systems that automate actuarial workflows and enable interactive analysis through intuitive dashboards and desktop-ready interfaces.",
      "Create executable desktop versions of internal and client-facing web applications (R Shiny, Streamlit, Flask) using PyInstaller, PyWebview, and Electron for seamless offline distribution.",
      "Collaborate with international actuarial teams across Pakistan, Egypt, Qatar, India, and the UAE to troubleshoot issues in application workflows, Excel-based input files, and model execution processes.",
      "Mentor junior engineers and support reliable delivery through Docker, GitHub Actions, and CI/CD workflows.",
    ],

    tags: [
      "Python",
      "FastAPI",
      "Flask",
      "NodeJS",
      "NestJS",
      "ReactJS",
      "NextJS",
      "Apex Charts and PlotlyJS",
      "PySide",
      "PyInstaller",
      "PyWebview",
      "Electron",
    ],
  },
  {
    title: "MERN Stack Developer",
    companyName: "Solspro",
    companyUrl: "https://sols-pro.com/",
    startDate: "2024-04-01",
    endDate: "2024-10-15",
    subtitle:
      "Led the development of dynamic web and mobile applications with a focus on user engagement and scalability.",
    duties: [
      "Integrated web3 wallets (MetaMask and Solana Phantom) into Reactjs service app, increasing customer base by 30%.",
      "Implemented and secured REST APIS using JWT token authentication mechanism.",
      "Boosted shopping store traffic by 15% through deep links and QR codes using Flutter.",
      "Developed a mini PayPal system using Django and a SQLite database.",
    ],
    tags: ["MERN", "Flutter", "Web3", "REST APIs", "Django"],
    image: "/solspro.png",
  },
  // Source: Syzen Technologies internship letter (private-resumes/), 8 weeks from 14 Aug 2023.
  // The NTNU research exchange is listed under Education only, not as employment.
  {
    title: "AI/ML Intern",
    companyName: "Syzen Technologies",
    startDate: "2023-08-14",
    endDate: "2023-10-09",
    subtitle:
      "Eight-week internship in AI and machine learning, focused on computer vision and self-supervised learning.",
    duties: [
      "Worked on multiple computer vision projects under the guidance of a Computer Vision Engineer.",
      "Applied self-supervised learning techniques to computer vision problems.",
    ],
    tags: ["Computer Vision", "Self-Supervised Learning", "Machine Learning"],
  },
];

export type Job = (typeof jobs)[number];

export interface RoleSpan {
  title: string;
  startDate: string;
  endDate?: string;
}

/** Every role held at a company, most recent first (current title, then previousRoles). */
export function roleHistory(job: Job): RoleSpan[] {
  return [
    { title: job.title, startDate: job.startDate, endDate: job.endDate },
    ...(job.previousRoles ?? []),
  ];
}

/** When Sajjad joined the company: the start of the earliest role there. */
export function tenureStart(job: Job): string {
  const roles = roleHistory(job);
  return roles[roles.length - 1].startDate;
}
