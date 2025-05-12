"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ProjectCardProps } from "@/types/project";
import { fadeInRight, fadeInUp } from "@/utils/animation";

const ProjectCard = ({
  project,
  index,
  expanded,
  onToggleExpand,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const isExpanded = expanded === index;

  return (
    <motion.article
      {...fadeInRight()}
      className="group h-full transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-400 bg-gray-100 shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-2xl dark:border-neutral-600 dark:bg-neutral-800">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-700 ease-in-out ${isHovered ? "scale-105" : "scale-100"}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        </div>

        <div className="flex flex-grow flex-col p-3 md:p-6">
          <div className="mb-2 text-gray-700 md:mb-4 dark:text-gray-200">
            <h3 className="mb-1 md:mb-2 text-lg font-semibold  drop-shadow-md md:text-xl">
              {project.title}
            </h3>
            <div
              className={`text-xs md:text-base max-w-none transition-all duration-300 ${isExpanded ? "max-h-96 overflow-y-auto" : "line-clamp-3"}`}
            >
              <p>{project.description}</p>
            </div>

            {isExpanded && (
              <motion.div
                {...fadeInUp()}
                className="mt-2 flex flex-wrap gap-2 md:mt-4"
              >
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-md text-xs md:text-sm px-1 py-0.5 md:px-2 md:py-1 border border-sky-300 dark:border-sky-800 shadow-sm bg-gradient-to-tr from-sky-100 via-white to-sky-50 text-sky-900 dark:from-sky-800 dark:via-sky-950 dark:to-sky-900 dark:text-sky-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            )}
          </div>

          <div className="mb-4 flex justify-center">
            <button
              onClick={() => onToggleExpand(index)}
              aria-expanded={isExpanded}
              className="flex items-center gap-1 text-sky-600 transition-all duration-300 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
            >
              <span className="text-sm font-medium">
                {isExpanded ? "Show Less" : "Show More"}
              </span>
              {isExpanded ? (
                <FaAngleUp className="text-lg" />
              ) : (
                <FaAngleDown className="text-lg" />
              )}
            </button>
          </div>

          <div className="flex justify-center gap-3 md:justify-between">
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 px-2 py-1 text-sm text-white shadow-md transition-all hover:from-sky-600 hover:to-sky-700 hover:shadow-lg md:px-4 md:py-2.5 md:text-base"
              >
                <FaExternalLinkAlt className="text-sm" />
                <span>Live Demo</span>
              </motion.button>
            </Link>
            <Link
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 px-2 py-1 text-sm text-white shadow-md transition-all hover:from-gray-800 hover:to-gray-900 hover:shadow-lg md:px-4 md:py-2.5 md:text-base"
              >
                <FaGithub className="text-sm" />
                <span>Code</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
