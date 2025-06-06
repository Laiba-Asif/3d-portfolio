"use client";

import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Section>
      <div className="relative text-left  text-[#3a2d20] selection:bg-[#EED9C4] selection:text-[#EED9C4]">
        {/* top bar */}
        <div className="flex flex-col items-start justify-center mb-10">
          {/* First bar animation */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100px", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-1 bg-[#1a120b] relative "
          />

          {/* Second bar animation (trapezoid) */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "64px", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="h-[8px] bg-[#1a120b] "
            style={{
              clipPath:
                "polygon(0 0, 100% 0, calc(100% - 10px) 100%, 10px 100%)",
                marginTop:'-0.5px'
            }}
          />
        </div>

        {/* Headline Text */}
        <motion.svg
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          width="100%"
          height="210"
          className="mb-0"
        >
          <text
            className="font-bold text-4xl sm:text-5xl md:text-6xl"
            x="5"
            y="60"
            fill="currentColor"
          >
            Hi, my
          </text>
          <text
            className="font-bold text-4xl sm:text-5xl md:text-6xl"
            x="5"
            y="135"
            fill="currentColor"
          >
            name is Laiba.
          </text>
          <text
            className="text-base sm:text-lg md:text-xl font-medium"
            x="10"
            y="185"
            fill="currentColor"
          >
            MERN Stack Developer from Pakistan.
          </text>
        </motion.svg>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="no-underline"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="landing-cta-button"
            className="relative inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-[#1a120b] shadow-lg transition-colors duration-300 hover:bg-[#1a120b] overflow-hidden cursor-pointer"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
            }}
          >
            {/* Light overlay effect */}
           

            {/* Decorative corner */}
            <div
              className="absolute top-1 left-1 h-3 w-3 bg-[#EED9C4]"
              style={{
                clipPath:
                  "polygon(0px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%)",
                zIndex: 1,
              }}
            />

            {/* Button Text */}
            <span className="relative z-10">Get in touch</span>
          </motion.div>
        </motion.a>
      </div>
    </Section>
  );
};

export default Home;
