import { fadeInDown } from "@/utils/animation";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  description?: string;
}

const SectionTitle = ({ title, description }: SectionTitleProps) => (
  <motion.div {...fadeInDown()} className="mb-6 text-center md:mb-12">
    <h2 className="mb-6 md:mb-12 text-center text-4xl font-bold text-gray-800 md:text-6xl dark:text-white">
      {title}
    </h2>
    {description && (
      <p className="mx-auto max-w-2xl text-base text-gray-700 md:text-lg dark:text-gray-100">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;
