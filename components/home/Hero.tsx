"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import SocialLinks from "../common/SocialIconLink";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/utils/animation";
import Image from "next/image";

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
      className="relative overflow-hidden pt-20 pb-10 lg:py-24 xl:py-36"
    >
      <div className="relative z-10 container mx-auto px-2 lg:px-6">
        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div {...fadeInLeft()} className="order-2 lg:order-1">
            <div className="h-full w-full rounded-2xl border border-neutral-300 bg-white/30 p-4 shadow-xl backdrop-blur-md 2xl:p-10  dark:border-neutral-700 dark:bg-neutral-800/30">
              <h1
                id="hero-heading"
                className="mb-4 text-4xl font-bold text-gray-800 2xl:mb-8 lg:text-5xl xl:text-6xl dark:text-gray-50"
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                  Andrii Kleban
                </span>
              </h1>

              <p className="mb-4 text-lg text-gray-700 lg:mb-8 lg:text-xl dark:text-gray-100">
                Front-end developer who creates modern, responsive, and fast
                interfaces using React, Next.js, and Tailwind CSS.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#projects">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-gradient-to-r from-sky-500 to-sky-700 px-3 py-1.5 font-semibold text-white shadow-md transition-all hover:from-sky-300 hover:to-sky-500 hover:text-black lg:px-6 lg:py-3"
                  >
                    View Projects
                  </motion.button>
                </Link>

                <Link href="#contact">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 font-semibold text-gray-800 shadow-md transition-all hover:border-sky-500 lg:px-6 lg:py-3 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:border-sky-500"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>

              <SocialLinks gap="gap-4" position="mt-4 lg:mt-8" />
            </div>
          </motion.div>

          <motion.div {...fadeInRight()} className="order-1 lg:order-2">
            <div className="h-72 lg:h-96 w-full group relative overflow-hidden rounded-2xl border border-neutral-300 shadow-xl  dark:border-neutral-700">
              <Image
                src="/images/my-photo.jpg"
                alt="Andrii Kleban"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_20%] transition-all duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        {...fadeInUp()}
        type="button"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform lg:block"
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
    </section>
  );
};

export default Hero;
