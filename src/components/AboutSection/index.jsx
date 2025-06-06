import React from "react";
import Svgs from "../helpers/svgs";
import GradientSphere from "../GradientSpheres";
import TrailContainer from "./TrailContainer";

const skills = [
  [{ name: "React" }, { level: 90 }],
  [{ name: "WebGL" }, { level: 80 }],
];

const About = () => {
  return (
    <section
      id="about"
      className="flex relative px-5 md:px-16  w-full h-full z-50 "
    >
      <GradientSphere
        sphere1class={"about-gradient-sphere about-sphere-1"}
        sphere2class={"about-gradient-sphere about-sphere-2 "}
      />
      <div className="flex flex-row  max-md:flex-col w-full ">
        <div className="md:w-[580px] md:max-w-[45%]   z-50 min-h-full  flex items-center justify-start  ">
          <Svgs />
        </div>

        <div className="flex-1 pl-30 z-50">
          {/* skills */}
          <svg viewBox="0 0 500 300" className="w-full flex items-center justify-center h-full z-50">
            <polyline
              points="250,35 200,35 200,10 190,0 10,0 0,10 0,245 10,255 197,255 215,273 215,290 250,290 400,290 410,280 490,280 500,270 500,55 490,45 310,45 300,35"
              fill="none"
              stroke="#00b7ff"
              opacity="0.2"
            />

            <polyline
              points="250,35 200,35 200,10 190,0 10,0 0,10 0,245 10,255 197,255 215,273 215,290 250,290"
              fill="none"
              stroke="#00b7ff"
              strokeWidth="2"
            />
            <polyline
              points="250,35 300,35 310,45 490,45 500,55 500,270 490,280 410,280 400,290 250,290"
              fill="none"
              stroke="#00b7ff"
              strokeWidth="2"
            />

            <rect
              x="0"
              y="0"
              width="500"
              height="47"
              fill="#00b7ff"
              opacity="0.15"
            />
            <text x="71" y="25" fill="white" fontSize="18" fontWeight="bold">
              SKILLS
            </text>

            <foreignObject
              x="0"
              y="60"
              width="500"
              height="230"
              margin="0 0 10px 0"
            >
              <div className="flex flex-col gap-3 p-4 bg-transparent text-blue-400 font-medium">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center  gap-4">
                    <span className="w-1/3 text-white">{skill.name}</span>
                    <div className="w-full h-2 bg-white bg-opacity-20 ">
                      <div
                        className="h-2 bg-blue-500 "
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>

      {/* trail section */}
      <TrailContainer />
    </section>
  );
};

export default About;
