import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import { medicalUsers } from "@/data/practical";
import { SearchProps, Patient } from "@/types/practical";

const Search = ({ setRecord, setId }: SearchProps) => {
  const [selectedOption, setSelectedOption] = useState("0");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const uniquePatients: Patient[] = [];
  const uniquePatientIds = new Set();

  medicalUsers.forEach((record) => {
    if (!uniquePatientIds.has(record.id)) {
      uniquePatientIds.add(record.id);
      if (record.data && record.data.length > 0) {
        uniquePatients.push({ id: record.id, name: record.data[0].userName });
      }
    }
  });

  const handleSelectChange = (id: string): void => {
    setSelectedOption(id);
    setIsDropdownOpen(false);
    setRecord(false);
  };

  const handleShowClick = () => {
    if (selectedOption === "0") {
      alert("Please select a patient name");
      return;
    }
    setId(selectedOption);
    setRecord(true);
  };

  // Find the selected patient name
  const selectedPatientName =
    uniquePatients.find((patient) => patient.id === selectedOption)?.name ||
    "Select Patient";

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="relative w-full md:w-64">
        <motion.button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 bg-white/70 dark:bg-neutral-700/70 backdrop-blur-sm rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-800 dark:text-gray-100"
          whileTap={{ scale: 0.98 }}
        >
          <span
            className={
              selectedOption === "0" ? "text-gray-500 dark:text-gray-400" : ""
            }
          >
            {selectedPatientName}
          </span>
          <FiChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`}
          />
        </motion.button>

        {isDropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 mt-2 w-full bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg shadow-lg max-h-60 overflow-auto"
          >
            {uniquePatients.map((patient) => (
              <li
                key={patient.id}
                onClick={() => handleSelectChange(patient.id)}
                className={`cursor-pointer px-4 py-2 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-neutral-600 flex justify-between items-center ${
                  selectedOption === patient.id
                    ? "bg-gray-100 dark:bg-neutral-600"
                    : ""
                }`}
              >
                {patient.name}
                {selectedOption === patient.id && (
                  <FiCheck className="w-4 h-4 text-emerald-500" />
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </div>

      <motion.button
        type="button"
        onClick={handleShowClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-lg bg-sky-600 px-2 py-1 md:px-4 md:py-1.5 text-sm md:text-base text-white shadow hover:bg-sky-500 transition w-full md:w-auto"
      >
        Show
      </motion.button>
    </div>
  );
};

export default Search;
