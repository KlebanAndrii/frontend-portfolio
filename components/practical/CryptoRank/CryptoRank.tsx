import React, { useState } from "react";
import { motion } from "framer-motion";
import Table from "./Table";
import { fadeInUp } from "@/utils/animation";

const AVAILABLE_BALANCE = 17042.67;

const CryptoRank = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);

    if (value === "") {
      setError("Amount cannot be empty");
      return;
    }

    const numericValue = parseFloat(value);
    if (isNaN(numericValue) || numericValue < 0.01) {
      setError("Amount cannot be less than $0.01");
      return;
    }

    if (numericValue > AVAILABLE_BALANCE) {
      setError("Amount cannot exceed the available balance");
      return;
    }

    setError("");
  };

  return (
    <motion.section
      {...fadeInUp()}
      aria-labelledby="crypto-rank-exchange"
      className="mx-auto max-w-3xl rounded-2xl border border-gray-300 bg-white/50 p-3 md:p-6 shadow-xl backdrop-blur-md dark:border-gray-600 dark:bg-neutral-800/40"
    >
      <motion.header {...fadeInUp()} className="text-center mb-3 md:mb-6">
        <h2
          id="crypto-rank-exchange"
          className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2"
        >
          CryptoRank Exchange
        </h2>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
          Instantly convert USD to popular cryptocurrencies
        </p>
      </motion.header>

      <motion.div {...fadeInUp()} className="mb-3 md:mb-6">
        <label className="block text-gray-700 dark:text-gray-200 text-xs md:text-sm font-medium mb-2">
          I want to exchange $
          <input
            type="number"
            required
            placeholder="USD"
            value={amount}
            onChange={handleChange}
            className="mx-2 inline-block w-32 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 px-2 py-1 md:px-3 md:py-2 text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400"
          />
          of my ${AVAILABLE_BALANCE.toFixed(2)}:
        </label>
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </motion.div>

      <Table amount={amount} error={error} />
    </motion.section>
  );
}

export default CryptoRank;
