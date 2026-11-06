export interface Certification {
  alt: string;
  provider: string;
  /** Month and year of completion, as printed on the certificate. */
  date?: string;
  src?: string;
  /** Public verification or credential page. Never link to files in private-resumes/. */
  url?: string;
}

// Ordered by relevance to full-stack actuarial and financial software work.
export const certifications: Certification[] = [
  {
    alt: "AWS Cloud Technical Essentials",
    provider: "AWS · Coursera",
    date: "Oct 2026",
    url: "https://coursera.org/verify/45Y5R89E7MRP",
  },
  {
    alt: "Containerization and Virtualization with Docker and Kubernetes",
    provider: "DataCamp",
    date: "Nov 2025",
  },
  {
    alt: "Become a RESTful API Developer (Learning Path)",
    provider: "LinkedIn Learning",
    date: "Apr 2025",
  },
  {
    src: "https://udemy-certificate.s3.amazonaws.com/image/UC-0d158787-f7c0-4336-8669-09fdf1089efd.jpg?v=1733915720000",
    alt: "Python API Programming with FastAPI and Flask",
    provider: "Udemy",
    date: "Dec 2024",
    url: "https://www.udemy.com/certificate/UC-0d158787-f7c0-4336-8669-09fdf1089efd/",
  },
  {
    src: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/8845a244-303b-5926-8962-3ab34bc41d33-sajjad-ali-8872d388-e2b1-49b8-bbc0-184bb1b8968e-certificate.pdf",
    alt: "MongoDB Node.js Developer Path",
    provider: "MongoDB University",
    url: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/8845a244-303b-5926-8962-3ab34bc41d33-sajjad-ali-8872d388-e2b1-49b8-bbc0-184bb1b8968e-certificate.pdf",
  },
  {
    src: "https://udemy-certificate.s3.amazonaws.com/image/UC-770cedc6-c203-406d-8cdf-987bb2e149ff.jpg?v=1733919221000",
    alt: "The Complete ReactJs Course - Basics to Advanced",
    provider: "Udemy",
    date: "Dec 2024",
    url: "https://www.udemy.com/certificate/UC-770cedc6-c203-406d-8cdf-987bb2e149ff/",
  },
  {
    alt: "Python for Machine Learning with NumPy, Pandas & Matplotlib",
    provider: "Udemy",
    date: "Jun 2025",
    url: "https://ude.my/UC-8f7f2de1-0f74-4d09-af5c-3a1e0ba01f82",
  },
  {
    alt: "TypeScript for Node.js Developers",
    provider: "LinkedIn Learning",
    date: "May 2025",
  },
  {
    alt: "GitHub Foundations",
    provider: "DataCamp",
    date: "Nov 2025",
  },
  {
    src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LCVB8RC6BSXT/CERTIFICATE_LANDING_PAGE~LCVB8RC6BSXT.jpeg",
    alt: "Version Control",
    provider: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/LCVB8RC6BSXT",
  },
  {
    src: "https://udemy-certificate.s3.amazonaws.com/image/UC-bdab8807-ef82-4596-8181-e2f561d03401.jpg?v=1675182714000",
    alt: "Machine Learning From Basics to Advanced",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-bdab8807-ef82-4596-8181-e2f561d03401/",
  },
  {
    alt: "Artificial Intelligence for Breast Cancer Detection",
    provider: "Coursera",
    src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JGN9D9RPWDSF/CERTIFICATE_LANDING_PAGE~JGN9D9RPWDSF.jpeg",
    url: "https://coursera.org/share/b2ca280a984700797825dae865a2c967",
  },
  {
    src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RKRSPKV7JWWA/CERTIFICATE_LANDING_PAGE~RKRSPKV7JWWA.jpeg",
    alt: "Bits and Bytes of Networking",
    provider: "Coursera",
    url: "https://coursera.org/share/af20088c8d40fb44da236d9c2b17daad",
  },
  {
    src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HV4UA858PJQ2/CERTIFICATE_LANDING_PAGE~HV4UA858PJQ2.jpeg",
    alt: "Mathematical Thinking in Computer Science",
    provider: "Coursera",
    url: "https://coursera.org/share/a3564f7dfbe93fe3b19b5cd5b42448ac",
  },
];
