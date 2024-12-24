import React, { useState }  from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";
import { 
  FaGithub,
  FaWindows
 } from "react-icons/fa";
 import { FaBootstrap } from "react-icons/fa";



const items = [
  {
    id: 1,
    name: "Windows",
    Icon: FaWindows
  },
  {
    id: 2,
    name: "VS Code",
    Icon: SiVisualstudiocode 
  },
  {
    id: 3,
    name: "Postman",
    Icon: SiPostman
  },
  {
    id: 4,
    name: "Vercel",
    Icon: SiVercel
  },
  {
    id: 5,
    name: "Netlify",
    Icon: SiNetlify
  },
  {
    id: 6,
    name: "Render",
    Icon: SiRender
  },
  {
    id: 7,
    name: "Github",
    Icon: FaGithub 
  },
  {
    id: 8,
    name: "Bootstrap",
    Icon:  FaBootstrap
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
          className="tooltip-container ml-[0px] md:ml-[30px]"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="tech-iconned text-2xl md:text-6xl" onMouseMove={handleMouseMove}>
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

const Toolstack = () => {
  return (
    <div className="about-sectiontooltip">
      <div className=" tooltip-section ">
        <AnimatedTooltip items={items} />
      </div>
    </div>
  );
};

export default Toolstack;