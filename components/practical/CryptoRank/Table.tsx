import React from "react";
import { motion } from "framer-motion";
import { cryptocurrencyList } from "@/data/practical";
import { fadeInUp, fadeInUpExit } from "@/utils/animation";
import { TableProps } from "@/types/practical";

const Table = ({ amount, error }: TableProps) => {
  const parsedAmount = parseFloat(amount || "0");

  return (
    <motion.div {...fadeInUp()} className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-3 py-2 lg:px-4 lg:py-3 text-left text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-100"
            >
              Cryptocurrency
            </th>
            <th
              scope="col"
              className="px-3 py-2 lg:px-4 lg:py-3 text-left text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-100"
            >
              Exchange Rate
            </th>
            <th
              scope="col"
              className="px-3 py-2 lg:px-4 lg:py-3 text-left text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-100"
            >
              Number of Coins
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-neutral-900">
          {cryptocurrencyList.map(
            ({ code, name, rate, icon: Icon, description }, index) => {
              const coinAmount = error
                ? "n/a"
                : (parsedAmount * rate).toFixed(8);

              return (
                <motion.tr
                  key={code}
                  {...fadeInUpExit(index * 0.1)}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="p-2 lg:p-4 text-xs lg:text-sm text-gray-800 dark:text-gray-100">
                    <div className="flex items-start gap-4">
                      <Icon className="w-4 h-4 lg:w-10 lg:h-10 text-yellow-500 dark:text-yellow-400" />
                      <div>
                        <div className="font-semibold">
                          {name} ({code})
                        </div>
                        <p className="hidden lg:block text-xs text-gray-500 dark:text-gray-400">
                          {description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 lg:p-4 text-xs lg:text-sm text-gray-600 dark:text-gray-300">
                    1 USD = {rate} {code}
                  </td>
                  <td className="p-2 lg:p-4 text-xs lg:text-sm text-gray-900 dark:text-white font-mono">
                    {coinAmount}
                  </td>
                </motion.tr>
              );
            }
          )}
        </tbody>
      </table>
    </motion.div>
  );
}

export default Table;
