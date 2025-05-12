"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import { projects } from "@/data/projects";
import { fadeInUp } from "@/utils/animation";
import { GITHUB_URL } from "@/constants/externalLinks";
import SectionTitle from "../common/SectionTitle";
import AnimatedDivider from "../common/AnimatedDivider";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleExpand = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section id="projects" className="overflow-hidden py-10 md:py-20">
      <div className="container mx-auto px-2 md:px-6">
        <SectionTitle
          title="📔 Projects"
          description="Explore my portfolio of web development projects showcasing my
            skills and passion for creating modern, responsive, and interactive web applications."
        />

        <AnimatedDivider />

        <div className="relative py-8 md:py-16">
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectCoverflow, Keyboard]}
            keyboard={{ enabled: true }}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : "auto"}
            centeredSlides={true}
            effect={isMobile ? undefined : "coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              enabled: !isMobile,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="projects-swiper"
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="py-8">
                <ProjectCard
                  project={project}
                  index={index}
                  expanded={expanded}
                  onToggleExpand={toggleExpand}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center pb-10 md:pb-20">
          <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <motion.button
              {...fadeInUp()}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-700 px-3 py-1.5 font-semibold text-white shadow-md transition-all duration-300 hover:from-sky-300 hover:to-sky-500 hover:text-black hover:shadow-lg md:px-6 md:py-3"
            >
              <FaGithub className="text-lg" />
              See More Projects
            </motion.button>
          </Link>
        </div>
        <AnimatedDivider />
      </div>
    </section>
  );
};

export default Projects;
