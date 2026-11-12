import { IconType } from "react-icons";
import { FaDev, FaGithub, FaLinkedin } from "react-icons/fa";
import { profiles } from "./site";

// Public profiles shown in the footer. URLs come from site.ts so the footer,
// structured data, and llms.txt always agree.
export const socialLinks: { label: string; href: string; icon: IconType }[] = [
  { label: "LinkedIn", href: profiles.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: profiles.github, icon: FaGithub },
  { label: "DEV", href: profiles.dev, icon: FaDev },
];
