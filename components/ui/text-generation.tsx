"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
        y: 0,
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="relative">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="inline-block text-white text-lg md:text-xl opacity-0 mr-2 mb-2"
              style={{
                filter: filter ? "blur(10px)" : "none",
                transform: "translateY(20px)",
              }}
              whileHover={{
                scale: 1.05,
                color: "#60a5fa",
                transition: { duration: 0.2 }
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold relative", className)}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 blur-xl rounded-lg"></div>
      
      <div className="relative z-10">
        <div className="dark:text-white text-black text-xl leading-relaxed">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
