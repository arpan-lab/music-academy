"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
  }[];
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = content.length;

  useEffect(() => {
    if (!containerRef.current) return;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.floor(latest * totalCards);
      setActiveCard(Math.min(index, totalCards - 1));
    });

    return () => unsubscribe();
  }, [scrollYProgress, totalCards]);

  const gradients = [
    "linear-gradient(135deg, #06b6d4, #10b981)", // cyan to emerald
    "linear-gradient(135deg, #ec4899, #6366f1)", // pink to indigo
    "linear-gradient(135deg, #f97316, #eab308)", // orange to yellow
    "linear-gradient(135deg, #8b5cf6, #ec4899)", // violet to pink
    "linear-gradient(135deg, #0ea5e9, #14b8a6)", // sky to teal
    "linear-gradient(135deg, #ef4444, #f59e0b)", // red to amber
  ];

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="relative flex flex-row max-w-6xl mx-auto h-[600px] overflow-y-scroll rounded-xl p-10 shadow-lg bg-black"
      >
        {/* Text Content */}
        <div className="w-full lg:w-2/3 pr-8">
          {content.map((item, index) => (
            <div key={index} className="my-28">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-base text-gray-300 mt-4 max-w-xl"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-[300px]" />
        </div>

        {/* Sticky Gradient Card */}
        <motion.div
          animate={{
            background: gradients[activeCard % gradients.length],
          }}
          className="hidden lg:block lg:w-1/3 h-72 rounded-xl sticky top-10 transition-all duration-500 shadow-xl"
        />
      </div>
    </div>
  );
};
