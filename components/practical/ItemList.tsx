import React, { useState, useEffect } from "react";
import { FaCheck, FaPlus, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { Item } from "@/types/practical";

const ItemList = () => {
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState<Item[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("items");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemList));
  }, [itemList]);

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItemList([...itemList, { text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index: number) => {
    const newList = [...itemList];
    newList[index].completed = !newList[index].completed;
    setItemList(newList);
  };

  const handleDelete = (index: number) => {
    const newList = itemList.filter((_, i) => i !== index);
    setItemList(newList);
  };

  return (
    <motion.section
      {...fadeInUp()}
      aria-labelledby="item-list-heading"
      className="mx-auto w-full rounded-2xl border border-neutral-300 bg-white/30 p-3 shadow-xl backdrop-blur-md lg:p-6 dark:border-neutral-600 dark:bg-neutral-800/30"
    >
      <h2
        id="item-list-heading"
        className="mb-3 text-center text-xl lg:text-2xl font-bold text-gray-700 lg:mb-6 dark:text-gray-50"
      >
        📋 Item List
      </h2>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="itemInput" className="sr-only">
          Add new item
        </label>
        <input
          id="itemInput"
          type="text"
          value={input}
          placeholder="Enter an item"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddItem()}
          className="flex-1 rounded-lg border border-neutral-300 bg-white/70 text-gray-700 transition-all focus:ring-2 focus:ring-sky-500 focus:outline-none px-2 py-1 lg:px-4 lg:py-2 dark:border-neutral-600 dark:bg-neutral-700/70 dark:text-gray-100"
        />

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddItem}
          className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-sky-700 px-2 py-1.5 font-semibold text-white shadow-md transition-all hover:from-sky-400 hover:to-sky-600 lg:px-4 lg:py-3"
        >
          <FaPlus /> Add
        </motion.button>
      </div>

      <AnimatePresence>
        {itemList.length > 0 ? (
          <ul className="space-y-3">
            {itemList.map((item, index) => (
              <motion.li
                key={index}
                {...fadeInUp(index * 0.1)}
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white/50 px-2 py-1.5 shadow-sm lg:px-4 lg:py-3 dark:border-neutral-600 dark:bg-neutral-700/50"
              >
                <motion.button
                  type="button"
                  onClick={() => toggleComplete(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-1 items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors"
                  aria-pressed={item.completed}
                  aria-label={`Mark "${item.text}" as ${item.completed ? "incomplete" : "complete"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex h-4 w-4 lg:h-6 lg:w-6 items-center justify-center rounded-md ${item.completed ? "bg-gradient-to-r from-green-500 to-green-600" : "border-2 border-neutral-400 dark:border-neutral-500"}`}
                  >
                    {item.completed && (
                      <FaCheck className="h-2 w-2 lg:h-3 lg:w-3 text-white" />
                    )}
                  </motion.div>
                  <span
                    className={`${item.completed ? "text-gray-400 line-through dark:text-gray-500" : "text-gray-700 dark:text-gray-100"} max-w-[120px] truncate font-medium sm:max-w-[250px]`}
                    title={item.text}
                  >
                    {item.text}
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDelete(index)}
                  aria-label={`Delete ${item.text}`}
                  className="ml-4 rounded-lg bg-gradient-to-r from-red-500 to-red-600 p-2 text-white shadow-md transition-all hover:from-red-400 hover:to-red-500"
                  title="Delete"
                >
                  <FaTrash className="h-3 w-3 lg:h-4 lg:w-4" />
                </motion.button>
              </motion.li>
            ))}
          </ul>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-6 text-center text-gray-500 italic dark:text-gray-400"
          >
            No items added yet. Add your first item above!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ItemList;
