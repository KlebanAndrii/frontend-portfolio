"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/data/navLinks";
import { fadeInDown, fadeInLeft } from "@/utils/animation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 50;
      setScrolled(isScrolled);

      if (scrollY === 0 || isOpen) {
        setIsVisible(true);
        clearTimeout(timeoutId);
        return;
      }

      setIsVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!isOpen) {
          setIsVisible(false);
        }
      }, 4000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  return (
    <header>
      <motion.nav
        aria-label="Main navigation"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/80 shadow-lg backdrop-blur-md dark:bg-neutral-900/80" : "bg-transparent"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href={"/"} aria-label="Homepage">
            <span className="animate-gradient bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-[200%_auto] bg-clip-text text-2xl font-extrabold text-transparent transition-all duration-1000 hover:bg-[100%_100%] md:text-3xl">
              Andrii Kleban
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <motion.div key={link.name} {...fadeInDown(index * 0.1)}>
                <Link href={link.href} className="group relative">
                  <span className="font-semibold text-gray-700 transition hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400">
                    {link.name}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-sky-500 to-sky-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-gradient-to-r from-sky-500 to-sky-700 p-2 text-white shadow-md transition-all hover:from-sky-300 hover:to-sky-500 hover:text-black md:hidden"
          >
            {isOpen ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mx-2 mb-4 flex flex-col items-center gap-6 rounded-2xl border border-neutral-300 bg-white/30 p-13 shadow-xl backdrop-blur-md md:hidden dark:border-neutral-700 dark:bg-neutral-800/30"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                {...fadeInLeft(index * 0.1)}
                className="w-full"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-2 text-center font-medium text-gray-700 transition-all hover:bg-sky-100 hover:text-sky-700 dark:text-gray-200 dark:hover:bg-sky-900/30 dark:hover:text-sky-400"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
};

export default Header;
