"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SocialLinks from "../common/SocialIconLink";
import { navLinks } from "@/data/navLinks";
import { fadeInUp } from "@/utils/animation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-300 bg-white/30 py-5 backdrop-blur-md md:py-10 dark:border-neutral-500 dark:bg-neutral-800/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <motion.div
            {...fadeInUp()}
            className="flex flex-col items-center md:items-start"
          >
            <Link href="/">
              <h2 className="mb-4 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-clip-text text-2xl font-extrabold text-transparent">
                Andrii Kleban
              </h2>
            </Link>
            <p className="mb-4 text-center text-sm text-gray-700 md:text-left dark:text-gray-200">
              Front-end developer passionate about creating responsive,
              user-friendly web applications with modern technologies.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              &copy; {currentYear} Andrii Kleban. All rights reserved.
            </p>
          </motion.div>

          <motion.nav
            {...fadeInUp(0.2)}
            aria-label="Footer quick links"
            className="flex flex-col items-center"
          >
            <h3 className="mb-6 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-700 transition-colors hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400"></span>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>

          <motion.div {...fadeInUp(0.4)} className="flex flex-col items-center">
            <h3 className="mb-6 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Connect With Me
            </h3>
            <SocialLinks iconSize="text-xl" containerSize="p-2" gap="gap-3" />
            <p className="mt-6 text-center text-sm font-medium text-gray-700 md:text-left dark:text-gray-200">
              Let&apos;s collaborate on your next project!
            </p>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 dark:border-neutral-600">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs font-medium text-gray-600 dark:text-gray-300">
              Designed and built with modern web technologies
            </p>
            <div className="rounded-full border border-neutral-300 bg-white/50 px-4 py-1.5 shadow-md backdrop-blur-md dark:border-sky-800 dark:bg-sky-950/30">
              <p className="text-xs font-medium text-gray-700 dark:text-sky-300">
                React • Next.js • Tailwind CSS • Framer Motion
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
