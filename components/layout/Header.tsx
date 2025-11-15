"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/data/navLinks";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { fadeInDown, fadeInLeft } from "@/utils/animation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let debounceId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(debounceId);
      debounceId = setTimeout(() => {
        const scrollY = window.scrollY;
        const isScrolled = scrollY > 50;
        setScrolled(isScrolled);

        if (scrollY === 0 || isOpen) {
          if (!isVisible) setIsVisible(true);
          clearTimeout(timeoutId);
          return;
        }

        if (!isVisible) setIsVisible(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (!isOpen) {
            setIsVisible(false);
          }
        }, 4000);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
      clearTimeout(debounceId);
    };
  }, [isOpen, isVisible]);

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }

      return () => {
        document.body.style.overflow = "";
      };
    }, [isOpen]);

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 z-50 w-full transform transition-all duration-500 ease-in-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          ${scrolled ? "bg-white/80 shadow-lg backdrop-blur-md dark:bg-neutral-900/80" : "bg-transparent"}
        `}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href={"/"} aria-label="Homepage">
            <span className="animate-gradient bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-clip-text text-2xl font-extrabold text-transparent lg:text-3xl">
              Andrii Kleban
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <ThemeToggle />
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                {...fadeInDown(index * 0.1)}
                className="transition-opacity duration-500"
              >
                <Link href={link.href} className="group relative">
                  <span className="font-semibold text-gray-700 transition hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400">
                    {link.name}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-sky-500 to-sky-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="lg:hidden flex gap-4">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full bg-gradient-to-r from-sky-500 to-sky-700 p-2 text-white shadow-md transition-all hover:from-sky-300 hover:to-sky-500 hover:text-black"
            >
              {isOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="container mx-auto flex flex-col items-center gap-6 rounded-2xl border border-neutral-300 bg-white/80 p-10 shadow-xl backdrop-blur-md transition-all duration-300 lg:hidden dark:border-neutral-700 dark:bg-neutral-900/80"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                {...fadeInLeft(index * 0.1)}
                className="w-full text-2xl"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-2 text-center font-medium text-sky-900 transition-all hover:bg-sky-100 hover:text-sky-700 dark:text-gray-200 dark:hover:bg-sky-900/30 dark:hover:text-sky-400"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;