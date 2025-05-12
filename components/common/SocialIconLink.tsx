import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/constants/externalLinks";

const defaultSocialLinks = [
  {
    icon: <FaGithub />,
    href: GITHUB_URL,
    label: "GitHub",
    iconClassName: "text-gray-800 dark:text-gray-200",
  },
  {
    icon: <FaLinkedin />,
    href: LINKEDIN_URL,
    label: "LinkedIn",
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <FaEnvelope />,
    href: EMAIL,
    label: "Email",
    iconClassName: "text-red-600 dark:text-red-400",
  },
];


const SocialLinks = ({
  links = defaultSocialLinks,
  iconSize = "text-xl",
  containerSize = "h-10 w-10",
  containerClassName = "bg-gray-100 shadow-md dark:bg-neutral-700",
  hoverClassName = "",
  gap = "gap-4",
  direction = "flex-row",
  position = "",
}) => {
  return (
    <nav
      aria-label="Social media links"
      className={`flex ${direction} ${gap} ${position}`}
    >
      {links.map((social) => (
        <motion.div
          key={social.label}
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ scale: 1.1, rotate: [0, 5, -5, 5, -5, 0] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className={`flex ${containerSize} items-center justify-center rounded-full ${containerClassName} shadow-lg transition-all ${hoverClassName}`}
          >
            {React.cloneElement(social.icon, {
              className: `${iconSize} ${social.iconClassName}`,
            })}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default SocialLinks;
