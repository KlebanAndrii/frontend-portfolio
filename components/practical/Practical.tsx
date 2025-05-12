"use client";

import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import PracticalGrid from "./PracticalGrid";
import AnimatedDivider from "../common/AnimatedDivider";
import { fadeInUp } from "@/utils/animation";

const Practical = () => {
  return (
    <section id="practical" className="py-10 md:py-20">
      <div className="container mx-auto px-2 md:px-6">
        <SectionTitle
          title="💡 Practical"
          description="Explore interactive React components demonstrating practical
            implementations of common UI patterns and functionality. Each task
            showcases different React concepts and techniques."
        />

        <AnimatedDivider />

        <motion.div {...fadeInUp()} className="py-10 md:py-20">
          <PracticalGrid />
        </motion.div>
        <AnimatedDivider />
      </div>
    </section>
  );
};

export default Practical;
