"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedDivider from "../common/AnimatedDivider";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import SkillsMarqueeIcons from "../common/SkillsMarqueeIcons";
import SectionTitle from "../common/SectionTitle";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/utils/animation";
import { certificates, skills } from "@/data/about";

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-14">
      <div className="container mx-auto px-2 lg:px-6">
        <SectionTitle
          title="👤 About Me"
          description="I'm a Front-End Developer from Lviv, Ukraine, passionate about building fast, responsive, and visually clean web apps using React, Next.js, and Tailwind CSS. I love crafting sleek user experiences while constantly learning and improving."
        />

        <AnimatedDivider />

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-3 py-10 lg:py-14 items-stretch">
          <motion.article
            {...fadeInUp()}
            aria-labelledby="work-experience-heading"
          >
            <div className="h-full w-full rounded-2xl border border-neutral-300 bg-white/30 shadow-xl backdrop-blur p-3 lg:p-6 dark:border-neutral-700 dark:bg-neutral-800/30">
              <h3
                id="work-experience-heading"
                className="mb-4 text-center text-2xl font-bold text-gray-700 lg:mb-8 lg:text-3xl dark:text-gray-50"
              >
                Work Experience
              </h3>
              <div className="mb-4">
                <h4 className="mb-2 text-xl font-semibold text-gray-600 lg:mb-4 lg:text-2xl dark:text-gray-200">
                  Consultant - Salesperson
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-200">
                  <span className="font-semibold">Foxtrot</span> | April 2007 -
                  January 2020
                </p>
              </div>
              <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-200">
                <li>
                  Working with clients, providing consultations and personalized
                  recommendations.
                </li>
                <li>
                  Sale of household appliances, achieving and exceeding sales
                  targets.
                </li>
              </ul>
            </div>
          </motion.article>

          <motion.article {...fadeInLeft()} aria-labelledby="education-heading">
            <div className="h-full w-full rounded-2xl border border-neutral-300 bg-white/30 shadow-xl backdrop-blur p-3 lg:p-6 dark:border-neutral-700 dark:bg-neutral-800/30">
              <h3
                id="education-heading"
                className="mb-4 text-center text-2xl font-bold text-gray-700 lg:mb-8 lg:text-3xl dark:text-gray-50"
              >
                Education
              </h3>
              <ul className="space-y-3 lg:space-y-5 text-gray-600 dark:text-gray-200">
                <li>
                  <span className="block text-base font-semibold lg:text-lg">
                    🎨 Higher Vocational School 48 Lviv
                  </span>
                  <span className="text-sm">
                    Performer of artistic design works (1998 - 2001)
                  </span>
                </li>
                <li>
                  <span className="block text-base font-semibold lg:text-lg">
                    💻 OKTEN School
                  </span>
                  <span className="text-sm">
                    Front-End Development Course (2021)
                  </span>
                </li>
                <li>
                  <span className="block text-base font-semibold lg:text-lg">
                    🌐 Coursera (Google)
                  </span>
                  <span className="text-sm">
                    Foundations of UX Design (2024)
                  </span>
                </li>
              </ul>
            </div>
          </motion.article>

          <motion.article {...fadeInRight()} aria-labelledby="skills-heading">
            <div className="h-full w-full rounded-2xl border border-neutral-300 bg-white/30 shadow-xl backdrop-blur p-3 lg:p-6 dark:border-neutral-700 dark:bg-neutral-800/30">
              <h3
                id="skills-heading"
                className="mb-4 text-center text-2xl font-bold text-gray-700 lg:mb-8 lg:text-3xl dark:text-gray-50"
              >
                Skills
              </h3>
              <ul
                aria-label="List of technical skills"
                className="flex flex-wrap gap-2 lg:gap-3 text-gray-700"
              >
                {skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-base lg:text-lg px-3 py-1 rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>

        <AnimatedDivider />

        <motion.article
          {...fadeInUp()}
          aria-labelledby="certificates-heading"
          className="py-10 lg:py-14"
        >
          <div className="rounded-2xl border border-neutral-300 bg-white/30 p-3 shadow-xl backdrop-blur lg:p-6 dark:border-neutral-700 dark:bg-neutral-800/30">
            <h3
              id="certificates-heading"
              className="mb-4 text-center text-2xl font-bold text-gray-700 lg:mb-8 lg:text-3xl dark:text-gray-50"
            >
              Certificates 🎓
            </h3>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {certificates.map((certificate, idx) => (
                <Link
                  key={idx}
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="link"
                  className="group w-full max-w-sm rounded-2xl border border-neutral-200 bg-white px-3 py-2 lg:px-6 lg:py-4 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
                >
                  <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
                    <FaCertificate className="text-yellow-500" />
                    {certificate.name}
                  </p>
                  <span className="flex items-center gap-1 text-xs text-blue-600 underline transition group-hover:text-blue-800 dark:text-blue-400 dark:group-hover:text-blue-300">
                    View certificate
                    <FaExternalLinkAlt className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.article>

        <AnimatedDivider />

        <motion.div
          aria-label="Tools and technologies icons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="my-10 lg:my-14"
        >
          <SkillsMarqueeIcons />
        </motion.div>
        <AnimatedDivider />
      </div>
    </section>
  );
};

export default About;
