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

const ProjectCard = ({
  project,
  index,
  expanded,
  onToggleExpand,
  isMobile = false,
}: ProjectCardProps & { isMobile?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = expanded === index;

  const fadeInUp = isMobile
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      };

  return (
    <motion.article
      className="group h-full transition-all duration-500"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-400 dark:border-neutral-600 transition-all duration-500 shadow-lg/20 shadow-sky-600 hover:shadow-xl/30">
        <div className="relative h-62 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-all ${
              isMobile ? "duration-300" : "duration-700 ease-in-out"
            } ${isHovered ? "scale-105" : "scale-100"}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
            loading={index < 3 ? "eager" : "lazy"}
            quality={isMobile ? 75 : 90}
          />
        </div>

        <div className="flex flex-grow flex-col p-3 lg:p-4 bg-gray-100 dark:bg-neutral-800">
          <div className="mb-2 text-gray-700 lg:mb-4 dark:text-gray-200">
            <h3 className="mb-1 lg:mb-2 text-lg font-semibold  drop-shadow-md lg:text-xl">
              {project.title}
            </h3>
            <div
              className={`text-xs lg:text-base max-w-none transition-all duration-200 ${isExpanded ? "max-h-96 overflow-y-auto" : "line-clamp-3"}`}
            >
              <p>{project.description}</p>
            </div>

            {isExpanded && (
              <motion.div
                {...fadeInUp}
                className="mt-2 flex flex-wrap gap-2 lg:mt-4"
              >
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
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
              className="flex items-center gap-1 text-sky-600 transition-all duration-200 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
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

          <div className="flex justify-center gap-3 lg:justify-between">
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-sky-700 px-2 py-1 text-sm text-white shadow-md transition-all hover:from-sky-500 hover:to-sky-600 hover:shadow-lg lg:px-4 lg:py-2.5 lg:text-base"
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
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
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 px-2 py-1 text-sm text-white shadow-md transition-all hover:from-gray-600 hover:to-gray-700 hover:shadow-lg lg:px-4 lg:py-2.5 lg:text-base"
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
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
