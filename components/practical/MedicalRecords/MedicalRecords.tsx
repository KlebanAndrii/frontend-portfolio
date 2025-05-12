import { useState } from "react";
import { motion } from "framer-motion";
import Search from "./Search";
import Records from "./Records";
import { fadeInUp } from "@/utils/animation";

const MedicalRecords = () => {
  const [id, setId] = useState<string>("");
  const [record, setRecord] = useState(false);

  return (
    <motion.section
      {...fadeInUp()}
      aria-labelledby="medical-records"
      className="mx-auto w-full max-w-3xl rounded-2xl border border-neutral-300 bg-white/30 p-3 shadow-xl backdrop-blur-md md:p-6 dark:border-neutral-600 dark:bg-neutral-800/30"
    >
      <motion.header {...fadeInUp(0.05)} className="text-center mb-2 md:mb-4">
        <h2
          id="medical-records"
          className="mb-1 md:mb-2 text-center text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-50"
        >
          Patient Medical Records
        </h2>
        <p className="font-medium text-sm md:text-base text-gray-600 dark:text-gray-300">
          View patient history, diagnoses, and vital data.
        </p>
      </motion.header>

      <motion.article
        {...fadeInUp(0.1)}
        className="mx-auto w-full max-w-3xl rounded-2xl border border-neutral-300 bg-white/30 p-3 md:p-6 shadow-xl backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-800/30 mb-2 md:mb-4 relative z-10"
      >
        <h3 className="text-lg md:text-xl font-bold mb-4 pb-2 border-b border-neutral-300 dark:border-neutral-600 text-gray-700 dark:text-gray-50">
          Select Patient
        </h3>
        <Search setRecord={setRecord} setId={setId} id={id} />
      </motion.article>

        {record && (
          <motion.article
            {...fadeInUp()}
            className="mx-auto w-full max-w-3xl rounded-2xl border border-neutral-300 bg-white/30 p-3 md:p-6 shadow-xl backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-800/30 relative z-0"
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 pb-2 border-b border-neutral-300 dark:border-neutral-600 text-gray-700 dark:text-gray-50">
              Patient Details & History
            </h3>
            <Records id={id} setId={setId} />
          </motion.article>
        )}
    </motion.section>
  );
};

export default MedicalRecords;
