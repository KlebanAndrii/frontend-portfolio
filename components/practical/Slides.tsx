import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { fadeInRightExit, fadeInUp } from "@/utils/animation";
import { sampleSlides } from "@/data/practical";

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < sampleSlides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
  };

  return (
    <motion.section
      {...fadeInUp()}
      aria-labelledby="slides-title"
      className="mx-auto w-full rounded-2xl border border-neutral-300 bg-white/30 p-3 shadow-xl backdrop-blur-md lg:p-6 dark:border-neutral-600 dark:bg-neutral-800/30"
    >
      <motion.header {...fadeInUp(0.05)} className="text-center mb-4 lg:mb-8">
        <h2
          id="slides-title"
          className="mb-2 lg:mb-4 text-center text-xl lg:text-2xl font-bold text-gray-700 dark:text-gray-50"
        >
          Interactive Presentation
        </h2>
        <p className="font-medium text-sm lg:text-base text-gray-600 dark:text-gray-300">
          Navigate through slides with helpful content
        </p>
      </motion.header>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.article
            key={currentIndex}
            role="group"
            aria-labelledby={`slide-title-${currentIndex}`}
            {...fadeInRightExit()}
            className="mx-auto w-full rounded-2xl border border-neutral-300 bg-white/40 p-4 lg:p-8 shadow-lg backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-800/40 min-h-48"
          >
            <h3
              id={`slide-title-${currentIndex}`}
              className="text-lg lg:text-xl font-bold mb-4 pb-2 border-b border-neutral-300 dark:border-neutral-600 text-gray-700 dark:text-gray-50"
            >
              {sampleSlides[currentIndex].title}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-sm lg:text-base leading-relaxed">
              {sampleSlides[currentIndex].text}
            </p>
          </motion.article>
        </AnimatePresence>

        <div className="flex justify-between mt-1 lg:mt-2 text-xs text-gray-500 dark:text-gray-400">
          <span>
            Slide {currentIndex + 1} of {sampleSlides.length}
          </span>
          <span>
            {Math.round((currentIndex / (sampleSlides.length - 1)) * 100)}%
            complete
          </span>
        </div>

        <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 my-4">
          <motion.div
            className="bg-sky-600 h-1.5 rounded-full"
            initial={{
              width: `${(currentIndex / (sampleSlides.length - 1)) * 100}%`,
            }}
            animate={{
              width: `${(currentIndex / (sampleSlides.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-4 mt-4 lg:mt-6">
        <motion.button
          type="button"
          aria-label="Restart the slideshow"
          onClick={handleRestart}
          disabled={currentIndex === 0}
          whileHover={{ scale: currentIndex === 0 ? 1 : 1.05 }}
          whileTap={{ scale: currentIndex === 0 ? 1 : 0.95 }}
          className={`flex items-center justify-center gap-1 rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition ${
            currentIndex === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-neutral-800 dark:text-neutral-600"
              : "bg-amber-100 text-amber-600 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50"
          }`}
        >
          <RotateCcw className="w-4 h-4" />
          <span>Restart</span>
        </motion.button>

        <div className="flex gap-2">
          <motion.button
            type="button"
            aria-label="Go to previous slide"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            whileHover={{ scale: currentIndex === 0 ? 1 : 1.05 }}
            whileTap={{ scale: currentIndex === 0 ? 1 : 0.95 }}
            className={`flex-1 lg:flex-none flex items-center justify-center gap-1 rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition ${
              currentIndex === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-neutral-800 dark:text-neutral-600"
                : "bg-white text-gray-700 hover:bg-gray-50 dark:bg-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-600"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </motion.button>

          <motion.button
            type="button"
            aria-label="Go to next slide"
            onClick={handleNext}
            disabled={currentIndex === sampleSlides.length - 1}
            whileHover={{
              scale: currentIndex === sampleSlides.length - 1 ? 1 : 1.05,
            }}
            whileTap={{
              scale: currentIndex === sampleSlides.length - 1 ? 1 : 0.95,
            }}
            className={`flex-1 lg:flex-none flex items-center justify-center gap-1 rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition ${
              currentIndex === sampleSlides.length - 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-neutral-800 dark:text-neutral-600"
                : "bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-700 dark:hover:bg-sky-600"
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Slides;
