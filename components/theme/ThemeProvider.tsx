"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { useState, useEffect } from "react";
import { FiLoader } from "react-icons/fi";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Avoid Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black">
        <FiLoader className="animate-spin text-3xl text-gray-600 dark:text-gray-300" />
      </div>
    );
  }

  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
