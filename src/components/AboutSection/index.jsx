
import React from "react";
import GradientSphere from "../GradientSpheres";
import TrailContainer from "../helpers/TrailContainer";
import Svgs from "../helpers/Svgs";

const About = () => {
  
  return (
    <section
      id="about"
      className="relative md:pl-30  w-full min-h-screen bg-gradient-to-br from-[#002353] text-white"
    >
      <GradientSphere
        sphere1class="about-gradient-sphere about-sphere-1"
        sphere2class="about-gradient-sphere about-sphere-2"
      />

      <div className="flex w-full">
        {/* LEFT: Full height content, grows normally */}
        <div className="w-full md:w-[45%] p-5 md:px-16  mt-20">
          <Svgs />
        </div>

        {/* RIGHT: Stays visible while user scrolls */}
        <div className="hidden md:flex w-[55%] sticky top-0 h-screen items-center justify-center ">
          <svg
            width="420"
            height="500"
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
            className="relative"
          >
            <polygon
              points="56,0 400,0 400,420 344,500 0,500 0,70"
              fill="transparent"
              stroke="#0ea5e9"
              strokeWidth="2"
              opacity="0.3"
              transform="translate(-10, 15)"
            />
            <polygon
              points="56,0 400,0 400,420 344,500 0,500 0,70"
              fill="transparent"
              stroke="#38bdf8"
              strokeWidth="2"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1500; 700,1500; 0,1500"
                dur="6s"
                repeatCount="indefinite"
              />
            </polygon>
            <clipPath id="clip-shape">
              <polygon points="56,0 400,0 400,420 344,500 0,500 0,70" />
            </clipPath>
            <image
              href="/images/avatar.png"
              width="400"
              height="500"
              clipPath="url(#clip-shape)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>

      {/* Trail section below */}
      <TrailContainer />
    </section>
  );
};

export default About;

