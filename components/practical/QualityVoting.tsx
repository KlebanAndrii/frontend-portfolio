import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { Vote } from "@/types/practical";
import { aspects } from "@/data/practical";

const QualityVoting = () => {
  const [votes, setVotes] = useState<Vote[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("votes");
      return stored
        ? JSON.parse(stored)
        : aspects.map(() => ({ upvotes: 0, downvotes: 0 }));
    }
    return aspects.map(() => ({ upvotes: 0, downvotes: 0 }));
  });

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (index: number, type: "upvotes" | "downvotes") => {
    setVotes((prevVotes: Vote[]) =>
      prevVotes.map((vote: Vote, i: number) =>
        i === index ? { ...vote, [type]: vote[type] + 1 } : vote
      )
    );
  };

  const handleClear = () => {
    setVotes(aspects.map(() => ({ upvotes: 0, downvotes: 0 })));
  };

  return (
    <motion.section
      {...fadeInUp()}
      aria-labelledby="quality-voting-title"
      className="mx-auto w-full rounded-2xl border border-neutral-300 bg-white/30 p-3 shadow-xl backdrop-blur-md lg:p-6 dark:border-neutral-600 dark:bg-neutral-800/30"
    >
      <h2
        id="quality-voting-title"
        className="mb-3 text-center text-xl lg:text-2xl font-bold text-gray-700 lg:mb-6 dark:text-gray-50"
      >
        📊 Code Quality Voting
      </h2>

      <ul className="space-y-4">
        {aspects.map((aspect, index) => (
          <motion.li
            key={aspect}
            {...fadeInUp(index * 0.1)}
            className="rounded-xl border border-neutral-200 bg-white/50 p-2 shadow-sm lg:p-4 dark:border-neutral-600 dark:bg-neutral-700/50"
          >
            <h3 className="mb-3 font-semibold text-gray-700 dark:text-gray-100">
              {aspect}
            </h3>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <motion.button
                type="button"
                aria-label="Upvote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleVote(index, "upvotes")}
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 px-2 py-1 text-sm text-white shadow-md transition-all hover:from-sky-400 hover:to-sky-500 lg:px-4 lg:py-2 lg:text-base"
              >
                <FaThumbsUp /> Upvote
              </motion.button>

              <motion.button
                type="button"
                aria-label="Downvote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleVote(index, "downvotes")}
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-2 py-1 text-sm text-white shadow-md transition-all hover:from-red-400 hover:to-red-500 lg:px-4 lg:py-2 lg:text-base"
              >
                <FaThumbsDown /> Downvote
              </motion.button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-6 text-lg font-medium">
                <div className="flex items-center gap-2 text-sm text-sky-600 lg:text-base dark:text-sky-400">
                  <FaThumbsUp />
                  <span aria-label="Upvotes">{votes[index].upvotes}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-red-600 lg:text-base dark:text-red-400">
                  <FaThumbsDown />
                  <span aria-label="Downvotes">{votes[index].downvotes}</span>
                </div>
              </div>

              <div className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 lg:text-sm dark:bg-neutral-600 dark:text-gray-200">
                Total: {votes[index].upvotes + votes[index].downvotes}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-3 flex justify-center lg:mt-6"
      >
        <button
          onClick={handleClear}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 px-3 py-1 font-medium text-white shadow-md transition-all hover:from-yellow-400 hover:to-yellow-500 lg:px-6 lg:py-2"
        >
          <FaTrash /> Reset All Votes
        </button>
      </motion.div>
    </motion.section>
  );
};

export default QualityVoting;
