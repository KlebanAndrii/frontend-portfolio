import { useEffect, useState } from "react";
import { motion} from "framer-motion";
import { medicalUsers } from "@/data/practical";
import { fadeInUpExit } from "@/utils/animation";
import { RecordsProps, PatientData } from "@/types/practical";

const Records = ({ id, setId }: RecordsProps) => {
  const [currentPatient, setCurrentPatient] = useState<PatientData | null>(
    null
  );

  useEffect(() => {
    const foundPatient = medicalUsers.find((record) => record.id === id);
    if (foundPatient) {
      setCurrentPatient(foundPatient);
    }
  }, [id]);

  const handleNextClick = () => {
    const patientIds = medicalUsers.map((record) => record.id);
    const currentIndex = patientIds.indexOf(id);
    const nextIndex = (currentIndex + 1) % patientIds.length;
    setId(patientIds[nextIndex]);
  };

  if (
    !currentPatient ||
    !currentPatient.data ||
    currentPatient.data.length === 0
  ) {
    return null;
  }

  const patientInfo = currentPatient.data[0];

  return (
    <div className="space-y-3 md:space-y-6">
      <div className="flex flex-row justify-between items-start md:items-center gap-4 bg-white/40 dark:bg-neutral-800/40 p-2 md:p-4 rounded-xl backdrop-blur-sm">
        <div>
          <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-100">
            {patientInfo.userName}
          </h3>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
            DOB: {patientInfo.userDob}
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
            Height: {patientInfo.meta.height} cm
          </p>
        </div>
        <motion.button
          type="button"
          onClick={handleNextClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-600 font-semibold text-white text-sm md:text-base px-2 py-1 md:px-4 md:py-1.5 rounded-lg shadow hover:bg-emerald-500 transition"
        >
          Next
        </motion.button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse text-left text-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-100/80 dark:bg-neutral-700/80 backdrop-blur-sm">
            <tr className="border-b border-neutral-300 dark:border-neutral-600">
              <th
                scope="col"
                className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm text-left font-medium text-gray-700 dark:text-gray-200"
              >
                SL
              </th>
              <th
                scope="col"
                className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm text-left font-medium text-gray-700 dark:text-gray-200"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm text-left font-medium text-gray-700 dark:text-gray-200"
              >
                Diagnosis
              </th>
              <th
                scope="col"
                className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm text-left font-medium text-gray-700 dark:text-gray-200"
              >
                Weight
              </th>
              <th
                scope="col"
                className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm text-left font-medium text-gray-700 dark:text-gray-200"
              >
                Doctor
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPatient.data.map((record, index) => {
              const formattedDate = new Date(
                record.timestamp
              ).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              });

              return (
                <motion.tr
                  key={record.id}
                  {...fadeInUpExit(index * 0.02)}
                  className="border-b border-neutral-200 dark:border-neutral-600 bg-white/30 dark:bg-neutral-800/30 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-neutral-700/50 transition"
                >
                  <td className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm text-gray-800 dark:text-gray-100">
                    {index + 1}
                  </td>
                  <td className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    {formattedDate}
                  </td>
                  <td className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium text-gray-800 dark:text-gray-100">
                    {record.diagnosis.name}
                  </td>
                  <td className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    {record.meta.weight}
                  </td>
                  <td className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    {record.doctor.name}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Records;
