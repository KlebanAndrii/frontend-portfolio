"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import SocialLinks from "../common/SocialIconLink";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/utils/animation";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-20 pb-10 md:py-24 lg:py-36"
    >
      <div className="relative z-10 container mx-auto px-2 md:px-6">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
          <motion.div {...fadeInLeft()} className="order-2 md:order-1">
            <div className="rounded-2xl border border-neutral-300 bg-white/30 p-4 shadow-xl backdrop-blur-md md:p-10 dark:border-neutral-700 dark:bg-neutral-800/30">
              <h1
                id="hero-heading"
                className="mb-3 text-4xl font-bold text-gray-800 md:mb-6 md:text-5xl lg:text-6xl dark:text-gray-50"
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                  Andrii Kleban
                </span>
              </h1>

              <p className="mb-4 text-lg text-gray-700 md:mb-8 md:text-xl dark:text-gray-100">
                Front-end developer who creates modern, responsive, and fast
                interfaces using React, Next.js, and Tailwind CSS.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#projects">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-gradient-to-r from-sky-500 to-sky-700 px-3 py-1.5 font-semibold text-white shadow-md transition-all hover:from-sky-300 hover:to-sky-500 hover:text-black md:px-6 md:py-3"
                  >
                    View Projects
                  </motion.button>
                </Link>

                <Link href="#contact">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 font-semibold text-gray-800 shadow-md transition-all hover:border-sky-500 md:px-6 md:py-3 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:border-sky-500"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>

              <SocialLinks gap="gap-4" position="mt-4 md:mt-8" />
            </div>
          </motion.div>

          <motion.div {...fadeInRight()} className="order-1 md:order-2">
            <div className="group relative h-80 w-full overflow-hidden rounded-2xl border border-neutral-300 shadow-xl md:h-96 dark:border-neutral-700">
              <div
                role="presentation"
                className="absolute inset-0 bg-[url('/images/my-photo-25.jpg')] bg-cover bg-center transition-all duration-500 group-hover:scale-105"
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t to-transparent dark:from-black/50"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        {...fadeInUp()}
        type="button"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform md:block"
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex cursor-pointer flex-col items-center"
        >
          <span className="mb-2 text-sm text-gray-600 dark:text-gray-300">
            Scroll Down
          </span>
          <div className="rounded-full border border-neutral-200 bg-white/40 p-2 shadow-md backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-800/40">
            <HiChevronDown className="text-2xl text-sky-500" />
          </div>
        </motion.div>
      </motion.button>

      <div className="absolute top-0 right-0 left-0 -z-10 blur-3xl">
        <div className="absolute top-0 -left-20 h-72 w-72 rounded-full bg-sky-300 opacity-30 mix-blend-multiply dark:bg-sky-700 dark:mix-blend-normal"></div>
        <div className="absolute top-20 right-0 h-60 w-60 rounded-full bg-yellow-300 opacity-20 mix-blend-multiply dark:bg-yellow-500 dark:mix-blend-normal"></div>
      </div>
    </section>
  );
};

export default Hero;
