import React, { useState }  from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiSqlite ,
} from "react-icons/si";
import { RiRemixiconFill,
 } from "react-icons/ri";
 import { SiTailwindcss } from "react-icons/si";
 

const items = [
  {
    id: 1,
    name: "C++",
    Icon: CgCPlusPlus
  },
  {
    id: 2,
    name: "JavaScript",
    Icon: DiJavascript1
  },
  {
    id: 3,
    name: "Node.js",
    Icon: DiNodejs
  },
  {
    id: 4,
    name: "React",
    Icon: DiReact
  },
  {
    id: 5,
    name: "MongoDB",
    Icon: DiMongodb
  },
  {
    id: 6,
    name: "Next.js",
    Icon: SiNextdotjs
  },
  {
    id: 7,
    name: "Git",
    Icon: DiGit
  },
  {
    id: 8,
    name: "Python",
    Icon: DiPython
  },
  {
    id: 9,
    name: "Remix",
    Icon: RiRemixiconFill
  },
  {
    id: 10,
    name: "SQLite",
    Icon:  SiSqlite
  },
  {
    id: 11,
    name: "Tailwindcss",
    Icon: SiTailwindcss 
  },
];

const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((item) => (
        <div
          className="tooltip-container"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="tech-iconned" onMouseMove={handleMouseMove}>
            <item.Icon />
          </div>
          
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                }}
                className="tooltip"
              >
                <div className="tooltip-name">{item.name}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const Techstack = () => {
  return (
    <div className="about-sectiontooltip">
      <div className=" tooltip-section ">
        <AnimatedTooltip items={items} />
      </div>
    </div>
  );
};

export default Techstack;