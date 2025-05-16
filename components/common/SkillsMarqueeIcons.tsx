import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

const SkillsMarqueeIcons = () => {
  const skills = [
    {
      icon: <FaHtml5 size={50} className="text-orange-500" />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt size={50} className="text-blue-500" />,
      name: "CSS",
    },
    {
      icon: <FaJsSquare size={50} className="text-yellow-500" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript size={50} className="text-blue-600" />,
      name: "TypeScript",
    },
    {
      icon: <FaReact size={50} className="text-blue-400" />,
      name: "React",
    },
    {
      icon: <SiNextdotjs size={50} className="text-black" />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs size={50} className="text-green-500" />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss size={50} className="text-blue-400" />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiFigma size={50} className="text-purple-500" />,
      name: "Figma",
    },
  ];

  return (
    <div
      role="region"
      aria-label="Skills icons scrolling section"
      className="relative mx-auto w-full overflow-hidden rounded bg-gradient-to-b from-white via-neutral-100 to-white py-6 shadow-lg sm:py-8 md:w-[80%] dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      <div className="marquee-wrapper flex whitespace-nowrap">
        <ul className="animate-marquee flex shrink-0">
          {[...skills, ...skills].map((skill, index) => (
            <li
              key={index}
              className="mx-4 flex min-w-[64px] flex-col items-center sm:mx-8"
            >
              <div
                aria-hidden="true"
                className="text-2xl transition-transform duration-300 hover:scale-110 sm:text-4xl"
              >
                {skill.icon}
              </div>
              <p className="mt-1 text-center text-xs text-gray-600 sm:mt-2 sm:text-sm">
                {skill.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsMarqueeIcons;
