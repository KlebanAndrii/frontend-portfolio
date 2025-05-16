"use client";

import { useTheme } from "next-themes";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 text-xl dark:text-yellow-500 dark:hover:bg-yellow-100 text-sky-500 hover:bg-neutral-700 duration-300"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
