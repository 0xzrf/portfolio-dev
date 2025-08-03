"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-serif md:px-10 ml-0 md:ml-[4.2rem]"
      ref={containerRef}
    >
      {/* Enhanced Header Section */}
      <div className="max-w-7xl mx-auto py-10 md:py-8 md:pb-0 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-3xl rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Experience</span>
            </div>
            
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Work{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            
            <p className="text-lg md:text-xl font-medium text-gray-300 max-w-2xl leading-relaxed">
              My journey through various roles and technologies, building innovative solutions and growing as a developer.
            </p>
          </div>
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            viewport={{ once: true }}
          >
            {/* Enhanced Timeline Node */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="relative">
                {/* Outer ring with gradient */}
                <div className="h-12 w-12 absolute left-2 md:left-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-0.5 animate-pulse">
                  <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 h-12 w-12 left-2 md:left-2 rounded-full bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 blur-lg animate-pulse"></div>
              </div>
              
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-gray-400 dark:text-gray-400 leading-tight">
                {item.title}
              </h3>
            </div>

            {/* Enhanced Content Section */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-400 dark:text-gray-400">
                {item.title}
              </h3>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.3, 
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Content glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 blur-xl rounded-2xl"></div>
                <div className="relative z-10">
                  {item.content}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
        
        {/* Enhanced Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-zinc-700 to-transparent rounded-full"
        >
          {/* Animated progress line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
          />
          
          {/* Glow effect on the line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-blue-500/50 via-purple-500/50 to-pink-500/50 rounded-full blur-sm"
          />
        </div>
      </div>
    </div>
  );
};
