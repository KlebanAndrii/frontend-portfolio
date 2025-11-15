import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { articlesData } from "@/data/practical";

const ArticlesList = () => {
  const [sortedArticles, setSortedArticles] = useState(() =>
    [...articlesData].sort((a, b) => b.upvotes - a.upvotes)
  );

  const handleMostUpvoted = () => {
    const sorted = [...articlesData].sort((a, b) => b.upvotes - a.upvotes);
    setSortedArticles(sorted);
  };

  const handleMostRecent = () => {
    const sorted = [...articlesData].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setSortedArticles(sorted);
  };

  return (
    <motion.section
      {...fadeInUp()}
      aria-labelledby="articles-list"
      className="mx-auto w-full rounded-2xl border border-neutral-300 bg-white/30 p-3 shadow-xl backdrop-blur-md lg:p-6 dark:border-neutral-600 dark:bg-neutral-800/30"
    >
      <h2
        id="articles-list"
        className="mb-2 lg:mb-4 text-center text-xl lg:text-2xl font-bold text-gray-700 dark:text-gray-50"
      >
        📰 Articles
      </h2>

      <div className="mb-3 lg:mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Sort By:
        </label>
        <fieldset aria-label="Sort articles" className="flex gap-4 lg:gap-2">
          <legend className="sr-only">Sort By</legend>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMostUpvoted}
            className="rounded-lg bg-sky-600 px-2 py-1 lg:px-4 lg:py-2 text-sm lg:text-base text-white shadow hover:bg-sky-500"
          >
            Most Upvoted
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMostRecent}
            className="rounded-lg bg-sky-600 px-2 py-1 lg:px-4 lg:py-2 text-sm lg:text-base text-white shadow hover:bg-sky-500"
          >
            Most Recent
          </motion.button>
        </fieldset>
      </div>

      {sortedArticles.length > 0 ? (
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full table-auto border-collapse text-left"
        >
          <thead>
            <tr className="border-b border-neutral-300 dark:border-neutral-600 text-xs lg:text-base">
              <th
                scope="col"
                className="px-2 py-1 lg:px-4 lg:py-2 text-gray-700 dark:text-gray-200"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-2 py-1 lg:px-4 lg:py-2 text-gray-700 dark:text-gray-200"
              >
                Upvotes
              </th>
              <th
                scope="col"
                className="px-2 py-1 lg:px-4 lg:py-2 text-gray-700 dark:text-gray-200"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedArticles.map((article, index) => (
              <motion.tr
                key={index}
                {...fadeInUp(index * 0.1)}
                className="border-b border-neutral-200 dark:border-neutral-600 text-xs lg:text-base"
              >
                <td className="px-2 py-1 lg:px-4 lg:py-2 text-gray-800 dark:text-gray-100">
                  {article.title}
                </td>
                <td className="px-2 py-1 lg:px-4 lg:py-2  text-gray-600 dark:text-gray-300">
                  {article.upvotes}
                </td>
                <td className="px-2 py-1 lg:px-4 lg:py-2  text-gray-600 dark:text-gray-300">
                  {article.date}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      ) : (
        <motion.div
          animate={{ opacity: 1 }}
          className="py-6 text-center text-gray-500 italic dark:text-gray-400"
        >
          No articles to display.
        </motion.div>
      )}
    </motion.section>
  );
};

export default ArticlesList;
