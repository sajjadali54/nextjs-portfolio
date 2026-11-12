export const certificationCategories = [
  {
    id: "fullstack",
    title: "Full-stack development",
    description: "APIs, backend services, and frontend frameworks.",
  },
  {
    id: "cloud",
    title: "Cloud, DevOps, and tooling",
    description: "Cloud infrastructure, containers, and version control.",
  },
  {
    id: "data",
    title: "Data and machine learning",
    description: "Data analysis, machine learning, and applied AI.",
  },
  {
    id: "management",
    title: "Project management",
    description: "Planning, scoping, and delivering projects with stakeholders.",
  },
  {
    id: "foundations",
    title: "Computer science foundations",
    description: "Networking and mathematical reasoning.",
  },
] as const;

export type CertificationCategory =
  (typeof certificationCategories)[number]["id"];

export interface Certification {
  alt: string;
  category: CertificationCategory;
  provider: string;
  /** Month and year of completion, as printed on the certificate. */
  date?: string;
  src?: string;
  /** Public verification or credential page. Never link to files in private-resumes/. */
  url?: string;
  /** Courses completed as part of a learning path, listed on the path's card. */
  includes?: string[];
}

// Ordered by relevance to full-stack actuarial and financial software work.
export const certifications: Certification[] = [
  {
    alt: "Architecting Solutions on AWS",
    category: "cloud",
    provider: "AWS · Coursera",
    date: "Nov 2026",
    url: "https://coursera.org/verify/YBW44CEOZREX",
  },
  {
    alt: "AWS Cloud Technical Essentials",
    category: "cloud",
    provider: "AWS · Coursera",
    date: "Oct 2026",
    url: "https://coursera.org/verify/45Y5R89E7MRP",
  },
  {
    alt: "Containerization and Virtualization with Docker and Kubernetes",
    category: "cloud",
    provider: "DataCamp",
    date: "Nov 2025",
  },
  {
    alt: "Become a RESTful API Developer (Learning Path)",
    category: "fullstack",
    provider: "LinkedIn Learning",
    date: "Apr 2025",
    includes: [
      "Learning REST APIs",
      "Designing RESTful APIs",
      "HTTP Essential Training",
      "API Testing and Validation",
      "Web Security: OAuth and OpenID Connect",
    ],
  },
  {
    src: "https://udemy-certificate.s3.amazonaws.com/image/UC-0d158787-f7c0-4336-8669-09fdf1089efd.jpg?v=1733915720000",
    alt: "Python API Programming with FastAPI and Flask",
    category: "fullstack",
    provider: "Udemy",
    date: "Dec 2024",
    url: "https://www.udemy.com/certificate/UC-0d158787-f7c0-4336-8669-09fdf1089efd/",
  },
  {
    src: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/8845a244-303b-5926-8962-3ab34bc41d33-sajjad-ali-8872d388-e2b1-49b8-bbc0-184bb1b8968e-certificate.pdf",
    alt: "MongoDB Node.js Developer Path",
    category: "fullstack",
    provider: "MongoDB University",
    url: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/8845a244-303b-5926-8962-3ab34bc41d33-sajjad-ali-8872d388-e2b1-49b8-bbc0-184bb1b8968e-certificate.pdf",
  },
  {
    src: "https://udemy-certificate.s3.amazonaws.com/image/UC-770cedc6-c203-406d-8cdf-987bb2e149ff.jpg?v=1733919221000",
    alt: "The Complete ReactJs Course - Basics to Advanced",
    category: "fullstack",
    provider: "Udemy",
    date: "Dec 2024",
    url: "https://www.udemy.com/certificate/UC-770cedc6-c203-406d-8cdf-987bb2e149ff/",
  },
  {
    alt: "Getting Started with AI and Machine Learning (Learning Path)",
    category: "data",
    provider: "LinkedIn Learning",
    date: "Apr 2025",
    includes: [
      "Artificial Intelligence Foundations: Thinking Machines",
      "Artificial Intelligence Foundations: Neural Networks",
      "Machine Learning Foundations: Linear Algebra",
      "Deep Learning: Getting Started",
      "Hands-On PyTorch Machine Learning",
      "Building Computer Vision Applications with Python",
      "Reinforcement Learning Foundations",
    ],
  },
  {
    alt: "Python for Machine Learning with NumPy, Pandas & Matplotlib",
    category: "data",
    provider: "Udemy",
    date: "Jun 2025",
    url: "https://ude.my/UC-8f7f2de1-0f74-4d09-af5c-3a1e0ba01f82",
  },
  {
    alt: "TypeScript for Node.js Developers",
    category: "fullstack",
    provider: "LinkedIn Learning",
    date: "May 2025",
  },
  {
    alt: "GitHub Foundations",
    category: "cloud",
    provider: "DataCamp",
    date: "Nov 2025",
  },
  {
    alt: "Spring Boot 3 Essential Training",
    category: "fullstack",
    provider: "LinkedIn Learning",
    date: "Jul 2025",
  },
  {
    src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LCVB8RC6BSXT/CERTIFICATE_LANDING_PAGE~LCVB8RC6BSXT.jpeg",
    alt: "Version Control",
    category: "cloud",
    provider: "Meta · Coursera",
    date: "Mar 2023",
    url: "https://coursera.org/verify/LCVB8RC6BSXT",
  },
  {
    src: "https://udemy-certificate.s3.amazonaws.com/image/UC-bdab8807-ef82-4596-8181-e2f561d03401.jpg?v=1675182714000",
    alt: "Machine Learning From Basics to Advanced",
    category: "data",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-bdab8807-ef82-4596-8181-e2f561d03401/",
  },
  {
    alt: "Artificial Intelligence for Breast Cancer Detection",
    category: "data",
    provider: "Johns Hopkins University · Coursera",
    date: "Mar 2023",
    src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JGN9D9RPWDSF/CERTIFICATE_LANDING_PAGE~JGN9D9RPWDSF.jpeg",
    url: "https://coursera.org/verify/JGN9D9RPWDSF",
  },
  {
    alt: "Foundations of Project Management",
    category: "management",
    provider: "Google · Coursera",
    date: "Apr 2026",
    url: "https://coursera.org/verify/3U0X3816XETC",
  },
  {
    alt: "Project Initiation: Starting a Successful Project",
    category: "management",
    provider: "Google · Coursera",
    date: "Apr 2026",
    url: "https://coursera.org/verify/V7ZORBNP1NRZ",
  },
  {
    alt: "Project Planning: Putting It All Together",
    category: "management",
    provider: "Google · Coursera",
    date: "Jun 2026",
    url: "https://coursera.org/verify/XSZJPRTXV8GU",
  },
  {
    src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RKRSPKV7JWWA/CERTIFICATE_LANDING_PAGE~RKRSPKV7JWWA.jpeg",
    alt: "Bits and Bytes of Networking",
    category: "foundations",
    provider: "Coursera",
    url: "https://coursera.org/share/af20088c8d40fb44da236d9c2b17daad",
  },
  {
    src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HV4UA858PJQ2/CERTIFICATE_LANDING_PAGE~HV4UA858PJQ2.jpeg",
    alt: "Mathematical Thinking in Computer Science",
    category: "foundations",
    provider: "Coursera",
    url: "https://coursera.org/share/a3564f7dfbe93fe3b19b5cd5b42448ac",
  },
];
