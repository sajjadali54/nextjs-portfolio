"use client";

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDev,
} from "react-icons/fa";

export const badges = [
  {
    href: "https://github.com/sajjadali54/",
    src: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
    icon: FaGithub,
    alt: "Github Badge",
    label: "GitHub",
    className: "text-dark text-decoration-none me-2",
  },
  {
    href: "https://www.linkedin.com/in/sajjadali54/",
    src: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
    icon: FaLinkedin,
    alt: "LinkedIn Badge",
    label: "LinkedIn",
    className: "text-primary text-decoration-none me-2",
  },
  {
    href: "https://www.youtube.com/channel/UCXfYIIBvk2e4H60BdKoznRA",
    src: "https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white",
    icon: FaYoutube,
    alt: "Youtube Badge",
    label: "YouTube",
    className: "text-danger text-decoration-none me-2",
  },
  {
    href: "https://dev.to/sajjadali54",
    src: "https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white",
    icon: FaDev,
    alt: "Sajjad Ali's DEV Profile",
    label: "DEV profile",
    className: "text-secondary text-decoration-none me-2",
  },
];
