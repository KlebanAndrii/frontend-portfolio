import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { omittedWords } from "@/data/practical";

const WordOmitter = () => {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords((prev) => !prev);
  };

  const clearFields = () => {
    setInputText("");
  };

  const getProcessedText = () => {
    if (!inputText.trim()) return "";
    return omitWords
      ? inputText
          .split(" ")
          .filter((word) => !omittedWords.includes(word.toLowerCase()))
          .join(" ")
      : inputText;
  };

  return (
    <motion.section
      {...fadeInUp()}
      aria-labelledby="word-omitter-title"
      className="mx-auto w-full rounded-2xl border border-neutral-300 bg-white/30 p-3 shadow-xl backdrop-blur-md lg:p-6 dark:border-neutral-600 dark:bg-neutral-800/30"
    >
      <motion.header {...fadeInUp()} className="text-center mb-3 lg:mb-6">
        <h2
          id="word-omitter-title"
          className="text-xl lg:text-2xl font-bold text-gray-700 dark:text-gray-50 mb-2"
        >
          Word Omitter
        </h2>
        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">
          Type text below and choose whether to omit common words
        </p>
      </motion.header>

      <motion.form
        {...fadeInUp()}
        onSubmit={(e) => e.preventDefault()}
        className="space-y-3 lg:space-y-6"
        aria-labelledby="word-omitter-title"
      >
        <fieldset className="w-full" role="group" aria-label="Input text field">
          <label
            htmlFor="text-input"
            className="block text-sm lg:text-base font-medium text-gray-700 dark:text-gray-200 mb-1"
          >
            Input Text
          </label>
          <textarea
            id="text-input"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your text here..."
            rows={5}
            className="w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white/60 dark:bg-neutral-900 text-gray-800 dark:text-gray-100 px-2 py-1 lg:px-4 lg:py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 shadow-sm resize-none"
          />
        </fieldset>

        <fieldset
          role="group"
          aria-label="Action buttons"
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <motion.button
            type="button"
            onClick={toggleOmitWords}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-3 py-1.5 lg:px-6 lg:py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg shadow dark:bg-sky-700 dark:hover:bg-sky-600 transition"
          >
            {omitWords ? "Show All Words" : "Omit Common Words"}
          </motion.button>

          <motion.button
            type="button"
            onClick={clearFields}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-3 py-1.5 lg:px-6 lg:py-2 bg-red-500 hover:bg-red-400 text-white text-sm font-medium rounded-lg shadow dark:bg-red-600 dark:hover:bg-red-500 transition"
          >
            Clear
          </motion.button>
        </fieldset>

        <fieldset role="group" aria-label="Output result">
          <legend className="sr-only">Processed Output</legend>
          <h3 className="text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-100 mb-1">
            Output:
          </h3>
          <pre className="rounded-md p-1.5 lg:p-3 bg-white/50 dark:bg-neutral-900/60 text-gray-800 dark:text-gray-200 border border-neutral-300 dark:border-neutral-700 whitespace-pre-wrap">
            {getProcessedText() || (
              <span className="italic text-gray-400">Nothing to display</span>
            )}
          </pre>
        </fieldset>
      </motion.form>
    </motion.section>
  );
};

export default WordOmitter;
