import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiCheck } from "react-icons/fi";

import ItemList from "./ItemList";
import QualityVoting from "./QualityVoting";
import ArticlesList from "./ArticlesList";
import ContactForm from "./ContactForm";
import MedicalRecords from "./MedicalRecords/MedicalRecords";
import BlogPost from "./BlogPost/BlogPost";
import Slides from "./Slides";
import EmployeeValidationForm from "./EmployeeValidationForm";
import WordOmitter from "./WordOmitter";
import CryptoRank from "./CryptoRank/CryptoRank";

const tasks = [
  { title: "Item List", component: <ItemList /> },
  { title: "Quality Voting", component: <QualityVoting /> },
  { title: "Articles List", component: <ArticlesList /> },
  { title: "Contact Form", component: <ContactForm /> },
  { title: "Medical Records", component: <MedicalRecords /> },
  { title: "Blog Post", component: <BlogPost /> },
  { title: "Slides", component: <Slides /> },
  { title: "Employee Validation Form", component: <EmployeeValidationForm /> },
  { title: "Word Omitter", component: <WordOmitter /> },
  { title: "CryptoRank Exchange", component: <CryptoRank /> },
];

const PracticalGrid = () => {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("selectedTaskIndex");
    setSelectedTaskIndex(stored ? Number(stored) : 0);
  }, []);

  useEffect(() => {
    if (selectedTaskIndex !== null) {
      localStorage.setItem("selectedTaskIndex", selectedTaskIndex.toString());
    }
  }, [selectedTaskIndex]);

  if (selectedTaskIndex === null) return null;

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="mx-auto flex w-full flex-col">
      <div className="mb-6 w-full lg:hidden">
        <div className="relative">
          <motion.button
            type="button"
            onClick={toggleDropdown}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            className="flex w-full items-center justify-between rounded-xl border border-orange-400 bg-gradient-to-r from-orange-500 to-sky-700 px-4 py-2 text-base font-bold text-white shadow-md hover:brightness-110 transition-all"
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              <span className="text-sm font-normal opacity-80">Select:</span>
              <span>{tasks[selectedTaskIndex].title}</span>
            </span>
            <FiChevronDown className="h-5 w-5" />
          </motion.button>

          {isOpen && (
            <ul
              role="listbox"
              aria-activedescendant={`task-${selectedTaskIndex}`}
              className="absolute z-20 mt-1 w-full rounded-xl shadow-lg backdrop-blur-md border-orange-400 bg-gradient-to-r from-orange-500 to-sky-700"
            >
              {tasks.map((task, index) => (
                <li
                  key={task.title}
                  id={`task-${index}`}
                  role="option"
                  aria-selected={selectedTaskIndex === index}
                  className={`flex cursor-pointer items-center px-2 py-1 hover:bg-neutral-700/10 ${selectedTaskIndex === index ? "font-medium text-white" : "text-gray-200"}`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTaskIndex(index);
                      setIsOpen(false);
                    }}
                    className="flex w-full items-center"
                  >
                    {selectedTaskIndex === index && (
                      <FiCheck className="mr-2 h-4 w-4 text-white" />
                    )}
                    <span
                      className={selectedTaskIndex === index ? "ml-0" : "ml-6"}
                    >
                      {task.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        <ul className="hidden w-full space-y-3 lg:block lg:w-1/4">
          {tasks.map((task, index) => (
            <li key={task.title}>
              <motion.button
                type="button"
                onClick={() => setSelectedTaskIndex(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full rounded-xl border px-4 py-2 text-left font-medium shadow-sm backdrop-blur-md transition-all ${selectedTaskIndex === index ? "border-orange-400 bg-gradient-to-r from-orange-500 to-sky-700 text-white" : "border-neutral-300 bg-white/30 text-gray-700 hover:bg-white/50 dark:border-neutral-700 dark:bg-neutral-800/30 dark:text-gray-200 dark:hover:bg-neutral-700/50"}`}
              >
                {task.title}
              </motion.button>
            </li>
          ))}
        </ul>

        <div className="w-full lg:w-3/4">
          {tasks[selectedTaskIndex].component}
        </div>
      </div>
    </div>
  );
};

export default PracticalGrid;
