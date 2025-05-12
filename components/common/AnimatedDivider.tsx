"use client";

import { motion } from "framer-motion";

const AnimatedDivider = () => {
  return (
    <motion.hr
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mx-auto h-0.5 rounded-full bg-gradient-to-r from-sky-600 via-sky-200 to-sky-600 shadow-md shadow-gray-400"
    />
  );
};

export default AnimatedDivider;
