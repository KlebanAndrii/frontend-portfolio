import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { InputProps } from "@/types/practical";

const Input = ({
  title,
  description,
  setTitle,
  setDescription,
  handleCreatePost,
}: InputProps) => {
  return (
    <motion.section
      {...fadeInUp()}
      aria-labelledby="create-posts"
      className="rounded-2xl border border-neutral-300 bg-white/30 p-2 md:p-4 shadow-xl backdrop-blur-md dark:border-neutral-600 dark:bg-neutral-800/30 mb-3 md:mb-6"
    >
      <h2
        id="create-posts"
        className="mb-4 text-center text-xl font-bold text-gray-700 dark:text-gray-50"
      >
        📝 Create a Post
      </h2>
      <label htmlFor="title" className="sr-only">
        Title
      </label>
      <input
        id="title"
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 border border-neutral-500 p-1 md:p-2 dark:bg-neutral-700 dark:text-white"
      />
      <label htmlFor="description" className="sr-only">
        Description
      </label>
      <textarea
        id="description"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 border border-neutral-500 p-1 md:p-2 dark:bg-neutral-700 dark:text-white"
      />

      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCreatePost}
        className="w-full rounded-xl bg-sky-600 py-1 md:py-2 font-semibold text-white hover:bg-sky-500"
      >
        Create Post
      </motion.button>
    </motion.section>
  );
};

export default Input;
